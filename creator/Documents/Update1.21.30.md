---
author: kakinnun
ms.author: kakinnun
title: 1.21.30 Update Notes
description: Update summary of Creator changes in Bedrock 1.21.30
ms.service: minecraft-bedrock-edition
ms.date: 07/17/2025
---
# Minecraft Bedrock 1.21.30 Update Notes for Creators

Minecraft Bedrock has been updated to 1.21.30 and there are a number of changes of note for creators. The following features do not require experimental toggles.

## Blocks
 - [Item Display Transforms](../Reference/Content/BlockReference/Examples/ItemDisplayTransforms.md) - Allows customization of the block rendering in "item" scenarios (such as: in-hand, floating item, and in the inventory/GUI).

## Entities

- Breeze entity goals are now available for creators to use.
  - [minecraft:behavior.move_around_target](./../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_move_around_target.md)
  - [minecraft:behavior.fire_at_target](./../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_fire_at_target.md)
  - [minecraft:behavior.jump_around_target](./../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_jump_around_target.md)

## Items

- dyeable - [Dyeable Item Component](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_dyeable.md)
- rarity - [Rarity Item Component](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_rarity.md)

## Loot Tables
- [set_potion](./LootAndTradeTableFunctions.md) - This function for loot tables can set the potion type of compatible items with a potion id.

## Commands

- [/reload all](../Commands/commands/reload.md) command causes players to quit the world and rejoin and also reloads all behavior and resource packs.
  
## Creator API

Another set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support.

**APIs included in the @minecraft/server version 1.14.0 release:**

- **Player Emote Event**
  - [PlayerEmoteAfterEvent](../ScriptAPI/minecraft/server/PlayerEmoteAfterEvent.md)
- **EntityStrength APIs**
  - [EntityStrengthComponent](../ScriptAPI/minecraft/server/EntityStrengthComponent.md)
- **BlockRecordPlayer APIs**
  - [BlockRecordPlayerComponent](../ScriptAPI/minecraft/server/BlockRecordPlayerComponent.md)
- **TargetSelector for Entity Properties APIs**
  - [EntityQueryPropertyOptions](../ScriptAPI/minecraft/server/EntityQueryPropertyOptions.md)
- **Inventory APIs**
  - [PlayerCursorInventoryComponent](../ScriptAPI/minecraft/server/PlayerCursorInventoryComponent.md)

**APIs included in the @minecraft/server-ui version 1.3.0 release:**

- **Close All Server-UI Forms**
  - UIManager
    - [closeAllForms](../ScriptAPI/minecraft/server-ui/UIManager.md#closeallforms)

Beta APIs will continue to be developed behind the Beta API experimental flag. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).

## What's Next

Looking ahead, here's what you can expect coming in future releases.

### What's Next for Camera

- 3rd Person Preset - currently in experimental, this will add another camera preset type for use with the camera command and APIs.
- Focus Target - A new parameter allowing the Free Cam to track an entity.
- Aim Assist - A feature that allows for Aim Assist to improve usability in Custom Camera scenarios.

### What's Next for Blocks

- Destructible_by_mining - This will allow creators to set the tool tiers for vanilla and custom blocks.
- Redstone properties and components - This will allow for access to customize Redstone connectivity.

## What's Next for Entities

- Improved spawn rules

## What's Next for Items

- Bundle components - Several components are coming to allow some creator customization of bundles:
  - minecraft:storage_item
  - minecraft:bundle_interaction

### What's Next for Script API

- Player Interact Events
- Block Volume APIs
- Block Liquid APIs
- Redstone (getRedstonePower) API

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/sections/360001185332).
