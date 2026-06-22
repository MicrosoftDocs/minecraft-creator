---
author: chipotle
ms.author: mikeam
title: World and Dimension APIs
description: "A look at APIs for querying and manipulating the world state in Minecraft: Bedrock Edition."
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 06/08/2026
---

# World and Dimension APIs

When your script needs to get information about the state of your Minecraft world or manipulate that state, from weather to entities, or manipulate that state, you'll need to use the [root `World` object](../../ScriptAPI/minecraft/server/World.md) and the [`Dimension` class](../../ScriptAPI/minecraft/server/Dimension.md).  A `Dimension` is the central entry point for queries about the world state and making changes to the world, including spawning entities, placing features, and more.

## Getting a dimension

Start by importing the world root and choosing a dimension:

```typescript
import { world } from '@minecraft/server';

const overworld = world.getDimension('overworld');
```

In this example, we're explicitly choosing the Overworld, but it could be chosen programmatically, based on where the player is (or is being sent to).

## Querying entities

`Dimension.getEntities()` is one of the most useful methods for world-state queries. By default, it returns all matching entities in the selected dimension, but the results can be narrowed with an `EntityQueryOptions` filter. In this example, we use [`EntityQueryOptions`](../../ScriptAPI/minecraft/server/EntityQueryOptions.md) to narrow the results to just skeleton entities (type `"minecraft:skeleton"`).

```typescript
import { EntityQueryOptions, world } from '@minecraft/server';

const overworld = world.getDimension('overworld');
const allEntities = overworld.getEntities();

const skeletons: EntityQueryOptions = {
  type: "minecraft:skeleton",
};

for (const entity of overworld.getEntities(skeletons)) {
  entity.kill();
}
```

The `EntityQueryOptions` interface provides multiple filter options, letting you choose entities by location, distance from a specified location, entity type, entity name, values of entity properties, and more.

To limit a query to just players in a dimension, instead of using `getEntities()`, you can use the `getPlayers()` method:

```typescript
const players = overworld.getPlayers();
for (const player of players) {
  player.runCommand('say Hello from script');
}
```

> [!TIP]
>
> You can pass `EntityQueryOptions` to the `getPlayers()` method, too!

## Block state

The `Dimension` class also contains a set of methods for reading and modifying blocks in your world. You can select blocks in scripts with methods like `getBlock()`, `getBlockAbove()`, `getBlockBelow()`, and `getTopmostBlock()`.

```typescript
import { world } from '@minecraft/server';

const overworld = world.getDimension('overworld');
const location = { x: 10, y: 64, z: 10 };
const block = overworld.getBlock(location);
const top = overworld.getTopmostBlock(location);
```

The `getBlocks()` command lets you use [`BlockVolumeBase`](../../ScriptAPI/minecraft/server/BlockVolumeBase.md) to get all the blocks in a volume area.

You can modify individual blocks with `setBlockType()` and `setBlockPermutation()`, and fill a `BlockVolumeBase` area with blocks using `fillBlocks()`.

```typescript
import { MinecraftBlockTypes, world } from '@minecraft/server';

const overworld = world.getDimension('overworld');
const target = { x: 15, y: 65, z: 15 };

overworld.setBlockType(target, MinecraftBlockTypes.diamondBlock);
```

## Biomes

The`getBiome()` method returns the biome at a block location, and `containsBiomes()` checks whether a volume contains specific biomes.

```typescript
const biome = overworld.getBiome(location);
```

## Practical patterns

- Get a dimension once and reuse it for several operations.
- Use `getEntities()` with query options to avoid scanning the entire dimension.
- Use `setBlockType()` for single-block modifications and `fillBlocks()` for large areas.
- Use `spawnEntity()` and `spawnItem()` only in loaded chunks.
- When interacting with players, filter with `getPlayers()` rather than `getEntities()`.
