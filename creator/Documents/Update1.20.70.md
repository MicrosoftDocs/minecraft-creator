---
author: kakinnun
ms.author: kakinnun
title: 1.20.70 Update Notes
description: Update summary of Creator changes in Bedrock 1.20.70
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.20.70 Update Notes for Creators

Minecraft Bedrock has been updated to 1.20.70 and there are a number of changes of note for Add-On creators. The following features do not require experimental toggles.
 

## Entities

- Target Selectors for Entity Properties - The capability of [Entity Property](../Documents/IntroductionToEntityProperties.md) has been extended with the ability to use [Target Selectors](../Documents/TargetSelectors.md).

## Items 
- Custom Armor supports Armor Trims: Following the addition of Armor Trims in 1.20, we are shipping the ability for custom armor to work with armor trims.

## Molang

- **Scoreboard**
  - query.scoreboard - This query is releasing out of experimental. It will be limited to server-side queries only.

- **Ride/Rider Queries**
  - query.rider_body_x_rotation
  - query.rider_body_y_rotation
  - query.rider_head_x_rotation
  - query.rider_head_y_rotation
  - query.ride_body_x_rotation
  - query.ride_body_y_rotation
  - query.ride_head_x_rotation
  - query.ride_head_y_rotation
  - query.is_attached
  - query.has_player_rider

With the release of these queries, the Experimental Molang toggle has been removed. Thank you to everyone that provided feedback through this long experimental period.

## Creator API

Another set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support.

**APIs included in the @minecraft/server version 1.9.0 release:**

- **Block type and state Manipulation**
  - BlockPermutation
    - [matches](../ScriptAPI/minecraft/server/BlockPermutation.md#matches)
    - [getAllStates](../ScriptAPI/minecraft/server/BlockPermutation.md#getallstates)
- **Item Components**
  - [ItemFoodComponent](../ScriptAPI/minecraft/server/ItemFoodComponent.md)
  - [ItemDurabilityComponent](../ScriptAPI/minecraft/server/ItemDurabilityComponent.md)
- **ItemStack dynamic properties**
    - ItemStack
      - [clearDynamicProperties](../ScriptAPI/minecraft/server/ItemStack.md#cleardynamicproperties)
      - [getDynamicProperty](../ScriptAPI/minecraft/server/ItemStack.md#getdynamicproperty)
      - [getDynamicPropertyIds](../ScriptAPI/minecraft/server/ItemStack.md#getdynamicpropertyids)
      - [getDynamicPropertyTotalByteCount](../ScriptAPI/minecraft/server/ItemStack.md#getdynamicpropertytotalbytecount)
      - [setDynamicProperty](../ScriptAPI/minecraft/server/ItemStack.md#setdynamicproperty)
- **Sign APIs**
  - [BlockSignComponent](../ScriptAPI/minecraft/server/BlockSignComponent.md)
- **Blow Things Up!**
  - Dimension
    - [createExplosion](../ScriptAPI/minecraft/server/Dimension.md#createexplosion)
  - Entity
    - [setOnFire](../ScriptAPI/minecraft/server/Entity.md#setonfire)
- **Projectiles and Particles**
  - player
- **Effect Type Discovery**
  - [EffectType](../ScriptAPI/minecraft/server/EffectType.md)
  - [EffectTypes](../ScriptAPI/minecraft/server/EffectTypes.md)
    
Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.10.0-beta. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).

## What's Next

Looking ahead, here's what you can expect coming in future releases.

**Camera**
- Improvements to entity rendering. 

**Commands**
- [HUD Command](../Commands/commands/hud.md) - allows hiding of various HUD elements. This command is currently in experimental and will be stable in an upcoming release.
 
**Script API**
- Structure APIs
- Player Interact Events
- [Custom Components](../Documents/CustomComponents.md) - allows extending Blocks and Items with the power of scripting. This is currently in experimental with many more APIs to come. It will continue to iterate for a bit before moving to stable. 

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/en-us/sections/360001185332).