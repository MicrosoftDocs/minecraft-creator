---
author: thomaslgdskyboxlabs
ms.author: stsco
title: Block Entity
description: "Learn how to create a Mob Vault using Block Entities."
ms.service: minecraft-bedrock-edition
ms.date: 10/08/2026
---

# Block Entities: A Mob Vault

A block entity gives an individual placed block somewhere to save data. Two blocks with the same identifier can have different interaction counts, different settings, and different stored mobs. Unlike block states, this data does not define a block permutation.

In this tutorial, you will build a **Mob Vault** in four stages:

1. Count player interactions with dynamic properties.
2. Capture nearby mobs until the vault is full, then release them on later interactions.
3. Keep the vault's data when it drops as an item and is placed again.
4. Inspect and change that data while the vault is still an item stack.

## Before You Start

Start with a working behavior pack, resource pack, and JavaScript entry point. The [Advanced Custom Blocks](AdvancedCustomBlocks.md) guide covers the block and resource pack basics; [Introducing Custom Components](scripting/custom-components.md) explains block events and custom components. This tutorial uses the same JSON-plus-script approach, with its own examples.

**Version requirements:** The examples target block format `1.26.60` and a Minecraft build that exposes the block-entity APIs described here. Block dynamic properties are bound for `@minecraft/server` version `2.10.0`; entity storage and its item counterpart are beta APIs in the implementation used for this guide. Use the matching beta module version supported by your build and enable **Beta APIs** for the storage examples. Do not assume these examples work on earlier stable releases.

Your behavior pack must have a script module whose entry points to `scripts/main.js`, and a dependency on the appropriate `@minecraft/server` version. Keep your behavior pack's **header UUID** unchanged: dynamic properties and entity-storage access are scoped to that UUID. Another pack does not see your pack's values or stored-entity list.

The paths below are relative to the behavior pack (`BP`). Later stages replace or extend earlier examples; do not register the same custom component twice.

## 1. Count Player Interactions

### Enable Dynamic Properties

Create `BP/blocks/mob_vault.json`:

```json
{
    "format_version": "1.26.60",
    "minecraft:block": {
        "description": {
            "identifier": "guide:mob_vault",
            "menu_category": {
                "category": "construction"
            }
        },
        "components": {
            "minecraft:geometry": "minecraft:geometry.full_block",
            "minecraft:material_instances": {
                "*": {
                    "texture": "resin_bricks",
                    "render_method": "opaque"
                }
            },
            "minecraft:block_entity": {
                "dynamic_properties": true
            },
            "guide:mob_vault_interaction": {}
        }
    }
}
```

`minecraft:block_entity` enables per-instance storage. Its `dynamic_properties` flag makes the script component `minecraft:dynamic_properties` available on the placed block. The JSON flag and the script component identifier are different names serving different purposes.

### Save a Counter

Create `BP/scripts/main.js`:

```typescript
import { system } from "@minecraft/server";

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("guide:mob_vault_interaction", {
        onPlayerInteract({ block, player }) {
            if (!player) return;

            const properties = block.getComponent("minecraft:dynamic_properties");
            if (!properties) return;

            const previous = properties.get("interaction_count");
            const count = (typeof previous === "number" ? previous : 0) + 1;
            properties.set("interaction_count", count);

            player.sendMessage(`This vault has been used ${count} times.`);
        }
    });
});
```

The first interaction creates `interaction_count`; later interactions read and increment it. Each placed vault has its own counter, which is saved with that block entity across world saves and reloads.

Dynamic properties can hold numbers, strings, booleans, and vector values. Use `get(key)` to read a value, `set(key, value)` to create or replace one, and `set(key, undefined)` to remove it. An unset key returns `undefined`. `totalByteCount()` reports the bytes used by your pack's properties on this block.

At this stage, breaking the block does not yet preserve the counter in its dropped item. We will add that behavior with a loot function.

## 2. Capture and Release Mobs

### Enable Entity Storage

Replace the block's `minecraft:block_entity` component with:

```json
{
    "dynamic_properties": true,
    "entity_storage": true
}
```

The new flag exposes `minecraft:entity_storage` to scripts. Storing a mob serializes it and removes it from the world; releasing it restores a live entity and removes its entry from storage. Stored mobs are not live entities ticking inside the block.

The implementation allows **four entities per storage component**, across all packs' storage buckets. This is an engine limit, not a JSON setting. `size()` reports only your pack's entries; a store or transfer can still fail if another pack has occupied slots.

Only non-player mobs can be stored. Players, dropped items, and other non-mob entities are not supported. Mobs carrying passengers or riding another entity cannot be stored either.

### Switch Between Capture and Release

Replace `BP/scripts/main.js` with the following script. It retains the interaction counter and adds a boolean dynamic property named `capture`:

- `true`: each interaction stores the nearest mob within eight blocks.
- `false`: each interaction releases one stored mob.
- The fourth successful capture switches to release mode. The next interaction releases the first stored entry.
- Release mode continues until the vault is empty, then capture mode starts again on the next interaction.

```typescript
import { system, type Block, type Dimension, type Player, type Vector3 } from '@minecraft/server';

const MAX_STORED_ENTITIES = 4;
const CAPTURE_RADIUS = 8;

function findNearestMob(dimension: Dimension, location: Vector3) {
    return dimension.getEntities({
        location,
        maxDistance: CAPTURE_RADIUS,
        closest: 1,
        families: ["mob"],
        excludeTypes: ["minecraft:player"]
    })[0];
}

function interactWithVault(block: Block, player: Player) {
    const properties = block.getComponent("minecraft:dynamic_properties");
    const storage = block.getComponent("minecraft:entity_storage");
    if (!properties || !storage) {
        player.sendMessage("This block needs dynamic properties and entity storage.");
        return;
    }

    const previous = properties.get("interaction_count");
    const count = (typeof previous === "number" ? previous : 0) + 1;
    properties.set("interaction_count", count);

    const storedCount = storage.size();
    let capture = properties.get("capture");
    if (typeof capture !== "boolean") capture = true;
    if (storedCount >= MAX_STORED_ENTITIES) capture = false;
    else if (storedCount === 0) capture = true;
    properties.set("capture", capture);

    if (capture) {
        const center: Vector3 = {
            x: block.location.x + 0.5,
            y: block.location.y + 0.5,
            z: block.location.z + 0.5
        };
        const mob = findNearestMob(block.dimension, center);
        if (!mob) {
            player.sendMessage(`Interaction ${count}: no nearby mob to capture.`);
            return;
        }

        const definitionId = mob.typeId;
        const storedId = storage.store(mob);
        if (storage.size() >= MAX_STORED_ENTITIES) {
            properties.set("capture", false);
        }
        player.sendMessage(
            `Interaction ${count}: captured ${definitionId} (${storedId}). ` +
            `${storage.size()}/${MAX_STORED_ENTITIES} slots used.`
        );
        return;
    }

    const entry = storage.getEntities()[0];
    if (!entry) return;

    const released = storage.release(entry.uniqueId);
    if (storage.size() === 0) {
        properties.set("capture", true);
    }
    player.sendMessage(
        `Interaction ${count}: released ${released.typeId}. ` +
        `${storage.size()}/${MAX_STORED_ENTITIES} slots used.`
    );
}

system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("guide:mob_vault_interaction", {
        onPlayerInteract({ block, player }) {
            if (!player) return;
            try {
                interactWithVault(block, player);
            } catch (error) {
                player.sendMessage(`The vault could not complete this interaction: ${String(error)}`);
            }
        }
    });
});
```

The selector finds the nearest non-player entity with the `mob` family. Give custom mobs that family if you want them to participate. If the selected mob is mounted, has passengers, or cannot be serialized, `store()` throws and the error is reported; the example does not skip it to search for a different mob. Read any information you need from the mob **before** storing it, because its live handle is no longer usable after capture.

Do not recalculate `capture` as `storage.size() < 4` on every interaction: that would switch back to capturing immediately after releasing just one mob. Keeping the boolean false until the vault empties produces a complete capture-and-release cycle.

### Inspect or Transfer Stored Entries

The block storage API provides:

| Method | Purpose |
| --- | --- |
| `store(entity)` | Store a live mob and return its stored ID as a string. |
| `getEntities()` | List your pack's stored entries, each with `uniqueId` and `definitionId`. |
| `size()` | Count your pack's stored entries. |
| `release(entityId)` | Restore that entry as a live entity and return it. |
| `transfer(entityId, targetBlock)` | Move an entry into another storage-enabled block without spawning it. |

Pass an entry's `uniqueId` to `release()` or `transfer()` without converting it to a JavaScript number. Treat it as an opaque stored-entry ID; release may assign the restored mob a new live entity ID. `definitionId` identifies the mob type, such as `minecraft:cow`.

Block `release()` restores the mob at its saved position, not automatically beside the vault. The API has no location argument for block release. Moving a vault does not rewrite the mobs' saved positions, so keep those destinations suitable for spawning. The block and any transfer destination must be in loaded, ticking chunks and within world bounds; block-to-block transfers must stay in the same dimension.

## 3. Carry Data Through a Dropped Item

A block entity belongs to a placed block. To preserve its dynamic properties and stored mobs when the block drops as an item, use the `carry_over_block_entity_data` loot function.

Add this component to `BP/blocks/mob_vault.json`, alongside the existing components:

```json
{
    "minecraft:loot": "loot_tables/blocks/mob_vault.json"
}
```

Create `BP/loot_tables/blocks/mob_vault.json`:

```json
{
    "pools": [
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "item",
                    "name": "guide:mob_vault",
                    "weight": 1,
                    "functions": [
                        {
                            "function": "carry_over_block_entity_data",
                            "dynamic_properties": true,
                            "entity_storage": true
                        }
                    ]
                }
            ]
        }
    ]
}
```

Each flag opts that kind of data into the drop. Omitted flags default to `false`. With both enabled, the item carries `interaction_count`, `capture`, any other dynamic properties, and the serialized mobs. This function operates on custom data-driven block entities and needs a source block entity in the loot context; it is not a way to copy arbitrary vanilla block data.

The data now follows this path:

```text
Placed vault -> loot-generated vault item -> placed vault
```

When that item is placed as the same storage-enabled block, its saved block-entity data is restored. Do not unconditionally reset the counter or `capture` in `onPlace`: that would overwrite the carried values. The interaction script only defaults missing data and reconciles the mode when storage is full or empty.

Keep the loot table to **one vault item per broken block**. Applying carry-over to multiple drops can copy stored mobs into multiple items. Use the matching block item with both storage flags enabled so placement can restore the data correctly.

Test the round trip in **Survival**, where breaking the vault actually produces the loot drop. A fresh `/give guide:mob_vault` item has no previous vault's saved data. If the block is removed without producing a preserved drop, do not expect its stored mobs to be released automatically.

## 4. Work With the Item Stack Directly

The dropped vault is not just a sealed package. Its block-entity data can also be accessed through item components:

| Placed block component | Item stack counterpart |
| --- | --- |
| `minecraft:dynamic_properties` | `minecraft:block_actor_dynamic_properties` |
| `minecraft:entity_storage` | `minecraft:block_entity_storage` |

Get these components from an `ItemStack`, not from a placed `Block`. The dynamic-properties counterpart uses the same `get()`, `set()`, and `totalByteCount()` methods. It is distinct from an item stack's ordinary dynamic properties: these values are intended for the block entity that will exist after placement.

You do not need to break a filled vault first. These item APIs can also populate a fresh vault stack before its first placement. The helpers below deliberately check for `guide:mob_vault`; component availability on another item does not mean placing it will create a compatible block entity.

The entity-storage counterpart supports `store()`, `getEntities()`, `size()`, and `transfer()` with the same meanings as the block component. Its `release(entityId, location)` method additionally requires a dimension and coordinates because an item stack has no world position.

### Inspect, Add, Edit, and Remove Properties

The following helpers can be appended to `BP/scripts/main.js` and called from a writable script event with a player. They operate on the vault in that player's selected inventory slot.

```typescript
function getHeldVault(player: Player): { container: Container; slot: number; stack: ItemStack } {
    const inventory = player.getComponent("minecraft:inventory");
    const container = inventory?.container;
    const slot = player.selectedSlotIndex;
    const stack = container?.getItem(slot);
    if (!container || stack?.typeId !== "guide:mob_vault") {
        throw new Error("Hold a Mob Vault in your selected slot.");
    }
    return { container, slot, stack };
}

function inspectHeldVault(player: Player) {
    const { stack } = getHeldVault(player);
    const properties = stack.getComponent("minecraft:block_actor_dynamic_properties");
    const storage = stack.getComponent("minecraft:block_entity_storage");
    if (!properties || !storage) {
        throw new Error("This item does not expose the vault components.");
    }

    const interactionCount = properties.get("interaction_count");
    const capture = properties.get("capture");
    player.sendMessage(
        `Count: ${typeof interactionCount === "number" ? interactionCount : 0}; ` +
        `capture: ${String(typeof capture === "boolean" ? capture : true)}; ` +
        `property bytes: ${properties.totalByteCount()}; stored mobs: ${storage.size()}`
    );
    for (const entry of storage.getEntities()) {
        player.sendMessage(`${entry.uniqueId}: ${entry.definitionId}`);
    }
}

function editHeldVaultProperties(player: Player) {
    const { container, slot, stack } = getHeldVault(player);
    const properties = stack.getComponent("minecraft:block_actor_dynamic_properties");
    if (!properties) throw new Error("Block dynamic properties are unavailable.");

    properties.set("owner_label", player.name);
    properties.set("interaction_count", 100);
    properties.set("capture", false);
    properties.set("temporary_note", "Ready to move");
    properties.set("temporary_note", undefined);

    container.setItem(slot, stack);
}
```

You'll also need to add `type ItemStack` to the imports.

This adds an owner label, edits the counter and capture mode, and removes a temporary property. You can read known keys, but the APIs shown here do not provide a method to enumerate every dynamic-property key; keep track of your own key names.

**Write the modified stack back.** `container.getItem()` gives you an item stack copy. Updating its components does not replace the inventory slot until you call `container.setItem(slot, stack)`. Keep these operations together in the same event rather than retaining a copy while the player changes slots.

### Add, Release, or Transfer Stored Mobs

These helpers reuse `findNearestMob()`, `MAX_STORED_ENTITIES`, and `getHeldVault()` from the earlier examples:

```typescript
function captureIntoHeldVault(player: Player) {
    const { container, slot, stack } = getHeldVault(player);
    const storage = stack.getComponent("minecraft:block_entity_storage");
    const properties = stack.getComponent("minecraft:block_actor_dynamic_properties");
    if (!storage || !properties) throw new Error("Vault components are unavailable.");
    if (storage.size() >= MAX_STORED_ENTITIES) throw new Error("The vault is full.");

    const mob = findNearestMob(player.dimension, player.location);
    if (!mob) return;

    properties.set("capture", storage.size() + 1 < MAX_STORED_ENTITIES);
    const storedId = storage.store(mob);
    container.setItem(slot, stack);
    player.sendMessage(`Stored ${storedId} directly in the held vault.`);
}

function releaseFromHeldVault(player: Player) {
    const { container, slot, stack } = getHeldVault(player);
    const storage = stack.getComponent("minecraft:block_entity_storage");
    const properties = stack.getComponent("minecraft:block_actor_dynamic_properties");
    if (!storage || !properties) throw new Error("Vault components are unavailable.");

    const entry = storage.getEntities()[0];
    if (!entry) return;

    const destination: DimensionLocation = {
        dimension: player.dimension,
        x: player.location.x + 2,
        y: player.location.y,
        z: player.location.z
    };
    if (storage.size() === 1) properties.set("capture", true);
    const released = storage.release(entry.uniqueId, destination);
    container.setItem(slot, stack);
    player.sendMessage(`Released ${released.typeId} from the held vault.`);
}

function transferFromHeldVault(player: Player, targetBlock: Block) {
    const { container, slot, stack } = getHeldVault(player);
    const storage = stack.getComponent("minecraft:block_entity_storage");
    const properties = stack.getComponent("minecraft:block_actor_dynamic_properties");
    if (!storage || !properties) throw new Error("Vault components are unavailable.");

    const entry = storage.getEntities()[0];
    if (!entry) return;

    if (storage.size() === 1) properties.set("capture", true);
    storage.transfer(entry.uniqueId, targetBlock);
    container.setItem(slot, stack);
}
```

You'll also need to add `type DimensionLocation` to the imports.

Call these helpers inside a `try`/`catch`, as with the block interaction handler. Item storage enforces the same four-entity capacity and mob restrictions. Release coordinates must be finite, within world bounds, and in a loaded, ticking chunk. Choose an unobstructed destination suitable for the mob; the simple offset above is not a safe-spawn search. A transfer destination must expose block entity storage and have a free slot.

The helpers make their property changes on the item copy before storing, releasing, or transferring a mob. That way, a rejected property write does not interrupt saving the stack after a successful world-changing operation. If the storage operation throws, the edited copy is not written back.

You can review stored entries, add live mobs with `store()`, or remove entries by releasing or transferring them. There is no direct method here to edit the serialized mob data or silently delete an entry. To change a stored mob, release it, edit the live entity through its supported scripting APIs, then store it again and use the new stored ID. Writing the changed stack back ensures the updated contents are what placement restores.

Avoid creative duplication or copying a filled stack into multiple slots: the serialized contents travel with the stack's data. Item capture and release affect live world entities immediately, so always save the modified stack back after a successful operation.

### Try the Item Helpers In-Game

For a testing interface, append this subscriber after the helpers. Run the commands as a player with cheats enabled while holding a vault. This is a development convenience, not a permission system for a published multiplayer add-on.

```typescript
system.afterEvents.scriptEventReceive.subscribe(({ id, message, sourceEntity }) => {
    if (id !== "guide:vault" || sourceEntity?.typeId !== "minecraft:player") return;
    const player = sourceEntity;

    try {
        switch (message.trim()) {
            case "inspect":
                inspectHeldVault(player);
                break;
            case "edit":
                editHeldVaultProperties(player);
                player.sendMessage("Updated the held vault's properties.");
                break;
            case "capture":
                captureIntoHeldVault(player);
                break;
            case "release":
                releaseFromHeldVault(player);
                break;
            case "transfer": {
                const targetBlock = player.getBlockFromViewDirection({ maxDistance: 8 })?.block;
                if (!targetBlock) throw new Error("Look at a storage-enabled block within eight blocks.");
                transferFromHeldVault(player, targetBlock);
                break;
            }
            default:
                player.sendMessage("Unknown vault action.");
        }
    } catch (error) {
        player.sendMessage(`Could not update the held vault: ${error}`);
    }
});
```

```text
/scriptevent guide:vault inspect
/scriptevent guide:vault edit
/scriptevent guide:vault capture
/scriptevent guide:vault release
/scriptevent guide:vault transfer
```

For `transfer`, look at a placed vault with a free slot. The explicit item commands let you manage the contents independently of the block's capture/release interaction cycle.

## Try the Complete Cycle

1. Place two vaults and interact with each. Their counters should be independent.
2. Bring four unmounted mobs within eight blocks of one vault. Interact four times: storage reaches four and `capture` becomes `false`.
3. Interact four more times. Each interaction releases one mob, and only the last switches `capture` back to `true`.
4. Fill the vault again, then break it in Survival. Pick up its single drop, place it elsewhere, and check that the counter, release mode, and stored list survived.
5. Hold a filled drop and use the item test commands. Inspect its contents, edit a property, release or add a mob, then place it and verify the modified data.
6. Save and reload the world with both a placed vault and a filled vault item. Check persistence and confirm that missing mobs, full storage, and unsuitable release locations report errors without pretending an operation succeeded.

You now have one block whose per-instance data can survive as both a placed object and a portable item, with script access on either side of that transition.
