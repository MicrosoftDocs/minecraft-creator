---
author: kakinnun
ms.author: kakinnun
title: 1.21.100 Update Notes
description: Update summary of Creator changes in Bedrock 1.21.100
ms.service: minecraft-bedrock-edition
ms.date: 08/02/2025 #Required; mm/dd/yyyy format.
---

# Minecraft Bedrock 1.21.100 Update Notes for Creators

Minecraft Bedrock has been updated to 1.21.100 and there are a number of changes of note for creators. The following features do not require experimental toggles.

## Editor

**Editor v1.0.4**
Editor has been updated with a number of quality-of-life features.

- Tool Tip GIFs
- Brush Rotation
- Pencil Tool
- Structure Drag and Drop

[Get started with Editor!](./BedrockEditor/EditorInstallation.md)

## Blocks
- Particle Intensity - When breaking a block, defines the quantity of particles that appear.
- Textures - UV Locking (minecraft:geometry uv_lock) - This will make it so there is no longer a need to define new geo every time a texture is rotated.
- [Moveable](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_movable.md) - Defines if block is immovable, pushable, or pullable by a piston.
- Random offset (minecraft:random_offset) - Defines a block to have a variable offset, allowing for the kind of randomization seen in dirt blocks.

## Entities
- [minecraft:behavior.take_block](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_take_block.md) AI goal allows an entity to take blocks from the world with various options.
- [minecraft:behavior.place_block](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_place_block.md) AI goal allows an entity to place blocks in the world with various options.
 
## Scripting
- Custom Commands - Similar to block and item custom components, this allows creation of custom slash commands via script.
- Lore APIs now support rawtext.
- Player inventory events
    - [PlayerHotbarSelectedSlotChangeAfterEvent](../ScriptAPI/minecraft/server/PlayerHotbarSelectedSlotChangeAfterEvent.md)
    - [PlayerHotbarSelectedSlotChangeAfterEventSignal](../ScriptAPI/minecraft/server/PlayerHotbarSelectedSlotChangeAfterEventSignal.md)
    - [PlayerInventoryItemChangeAfterEvent](../ScriptAPI/minecraft/server/PlayerInventoryItemChangeAfterEvent.md)
    - [PlayerInventoryItemChangeAfterEventSignal](../ScriptAPI/minecraft/server/PlayerInventoryItemChangeAfterEventSignal.md)
    - [HotbarEventOptions](../ScriptAPI/minecraft/server/HotbarEventOptions.md)
    - [InventoryItemEventOptions](../ScriptAPI/minecraft/server/InventoryItemEventOptions.md)
    - [PlayerInventoryType](../ScriptAPI/minecraft/server/PlayerInventoryType.md)
- Armor APIs
    - EntityEquippableComponent
        - [totalArmor](../ScriptAPI/minecraft/server/EntityEquippableComponent.md#totalarmor)
        - [totalToughness](../ScriptAPI/minecraft/server/EntityEquippableComponent.md#totaltoughness)
- Loc Key APIs - Access to localizationKey property for [Block](../ScriptAPI/minecraft/server/Block.md#localizationkey), [Entity](../ScriptAPI/minecraft/server/Entity.md#localizationkey), [Dimension](../ScriptAPI/minecraft/server/Dimension.md#localizationkey), and [ItemStack](../ScriptAPI/minecraft/server/ItemStack.md#localizationkey).
- Container.find APIs - An easier method to search the contents of a container.
    - container
        - [contains](../ScriptAPI/minecraft/server/Container.md#contains)
        - [firstEmptySlot](../ScriptAPI/minecraft/server/Container.md#firstemptyslot)
        - [firstItem](../ScriptAPI/minecraft/server/Container.md#firstitem)
        - [find](../ScriptAPI/minecraft/server/Container.md#find)
        - [findLast](../ScriptAPI/minecraft/server/Container.md#findlast)
- [DyeableItemComponent](../ScriptAPI/minecraft/server/ItemDyeableComponent.md)
- [MovementType](../ScriptAPI/minecraft/server/MovementType.md)
- [StickyType](../ScriptAPI/minecraft/server/StickyType.md)
- [BlockMovableComponent](../ScriptAPI/minecraft/server/BlockMovableComponent.md)

## What's Next

Looking ahead, here's what you can expect coming in future releases.

### What's Next for Camera
- FOV - This is a new parameter that will allow you to set a custom FOV for the custom camera presets as well as Vanilla cameras via commands and API.
- Aim assist, projectiles - The aim assist feature is expanded to support projectiles.

### What's Next for World Gen

- Jigsaw Block - All of the functionality currently available in experimental is coming to stable in an upcoming release.
- Improved Spawn rules - Allowing for customized mob spawning in biomes and structures.
- Biome replacement - All of the functionality currently available in experimental is coming to stable in an upcoming release.

## What's Next for Blocks
- Loot & destroy API - Allow reading loot tables through scripting. Apply different loot tables through scripting when destroying entity or block.

### What's Next for Script API, Molang and Commands
- Player apply impulse and clear velocity
- Book APIs

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/sections/360001185332).
