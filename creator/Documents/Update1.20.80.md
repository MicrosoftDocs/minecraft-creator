---
author: kakinnun
ms.author: kakinnun
title: 1.20.80 Update Notes
description: Update summary of Creator changes in Bedrock 1.20.80
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.20.80 Update Notes for Creators

Minecraft Bedrock has been updated to 1.20.80 and there are a number of changes of note for Add-On creators. The following features do not require experimental toggles.

## Entities 
- minecraft:body_rotation_blocked component - prevents an entity from visually rotating their body to match their own facing direction.
- is_sitting filter - checks if the entity is sitting.
- has_damaged_equipment filter - checks if the entity has a certain damaged piece of equipment in the specified slot.

## Molang 
- [query.armor_damage_slot](../Reference/Content/MolangReference/Examples/MolangConcepts/QueryFunctions.md) - returns the damage value of the armor item in the specified slot.

## Camera
- Entity render distance improvements - Entities that a player is riding or attached to by a leash will now show on chunks that have been ticked.

## Commands
- [HUD Command](../Commands/commands/hud.md) - Allow hiding and showing of various HUD elements.
- **/titleraw** & **/tellraw** - improved support of input key glyphs.

## Recipes 
- [assume_symmetry](../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_Shaped.md) property for Shaped Recipes allows for symmetrical shaped recipes with different outputs.

## Creator API

Another set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support.

**APIs included in the @minecraft/server version 1.10.0 release:**

- **Block**
  - [BlockComponentTypes](../ScriptAPI/minecraft/server/BlockComponentTypes.md)
  - Block
    - [getItemStack](../ScriptAPI/minecraft/server/Block.md#getitemstack)
  - BlockPermutation
    - [getItemStack](../ScriptAPI/minecraft/server/BlockPermutation.md#getitemstack)
- **Entity**
  - [EntityProjectileComponent](../ScriptAPI/minecraft/server/EntityProjectileComponent.md)
  - [EntityComponentTypes](../ScriptAPI/minecraft/server/EntityComponentTypes.md)
  - EntityComponent 
    - [entity](../ScriptAPI/minecraft/server/EntityComponent.md#entity)
  - [EntityTypeFamilyComponent](../ScriptAPI/minecraft/server/EntityTypeFamilyComponent.md)
  - [EntityType](../ScriptAPI/minecraft/server/EntityType.md)
  - [EntityTypes](../ScriptAPI/minecraft/server/EntityTypes.md)
- **Item Components**
  - [ItemComponentTypes](../ScriptAPI/minecraft/server/ItemComponentTypes.md)
  - [ItemCooldownComponent](../ScriptAPI/minecraft/server/ItemCooldownComponent.md)
- **Music APIs**
  - Player
    - [playMusic](../ScriptAPI/minecraft/server/Player.md#playmusic)
    - [queueMusic](../ScriptAPI/minecraft/server/Player.md#queuemusic)
    - [stopMusic](../ScriptAPI/minecraft/server/Player.md#stopmusic)
- **World Initialize Events**
  - [WorldInitializeAfterEvent](../ScriptAPI/minecraft/server/WorldInitializeAfterEvent.md)
  - [WorldInitializeAfterEventSignal](../ScriptAPI/minecraft/server/WorldInitializeAfterEventSignal.md)
- **Structure APIs**
  - StructureManager
    - [createEmpty](../ScriptAPI/minecraft/server/StructureManager.md#createempty)
    - [delete](../ScriptAPI/minecraft/server/StructureManager.md#delete)
    - [get](../ScriptAPI/minecraft/server/StructureManager.md#get)
    - [place](../ScriptAPI/minecraft/server/StructureManager.md#place)
  - Structure
    - [id](../ScriptAPI/minecraft/server/Structure.md#id)
    - [size](../ScriptAPI/minecraft/server/Structure.md#size)
    - [getBlockPermutation](../ScriptAPI/minecraft/server/Structure.md#getblockpermutation)
    - [getIsWaterlogged](../ScriptAPI/minecraft/server/Structure.md#getiswaterlogged)
    - [isValid](../ScriptAPI/minecraft/server/Structure.md#isvalid)
  - [StructureSaveMode](../ScriptAPI/minecraft/server/StructureSaveMode.md)
  - [StructureRotation](../ScriptAPI/minecraft/server/StructureRotation.md)
  - [StructureAnimationMode](../ScriptAPI/minecraft/server/StructureAnimationMode.md)
  - [StructureMirrorAxis](../ScriptAPI/minecraft/server/StructureMirrorAxis.md)
  - [InvalidStructureError](../ScriptAPI/minecraft/server/InvalidStructureError.md)
  - [StructureCreateOptions](../ScriptAPI/minecraft/server/StructureCreateOptions.md)
  - [StructurePlaceOptions](../ScriptAPI/minecraft/server/StructurePlaceOptions.md)
    
    
Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.11.0-beta. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).

## What's Next

Looking ahead, here's what you can expect coming in future releases.

**Blocks**
- Transform pivot point: Adding an additional pivot point attribute to facilitate rotation and scale operations.
- Block item config: Allowing setting the visual component of blocks as an icon or in-hand representation.
- UV Rotations: This allows you to rotate the specified uv rect in 90 degree increments before applying it to a block face 
 
**Script API**
- Game Rule & Gamemode APIs
- Block TypeID
- Player Interact Events
- [Custom Components](../Documents/CustomComponents.md) - allows extending Blocks and Items with the power of scripting. This is currently in experimental and we expect this to be stable in a couple of releases. 

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/en-us/sections/360001185332).
