---
author: kakinnun
ms.author: kakinnun
title: 1.21.80 Update Notes
description: Update summary of Creator changes in Bedrock 1.21.80
ms.service: minecraft-bedrock-edition
ms.date: 03/25/2025 #Required; mm/dd/yyyy format.
---

# Minecraft Bedrock 1.21.80 Update Notes for Creators

> [!VIDEO https://www.youtube.com/embed/EbW3TLSum7U]
*Video version of this article from the Minecraft Creator Channel*

Minecraft Bedrock has been updated to 1.21.80 and there are a number of changes of note for creators. The following features do not require experimental toggles.

## Editor

**Editor v0.9.5**

- New user onboarding
- Updated selection
- Additional selection modes (trim and magic select)
- Error states

[Get started with Editor!](./BedrockEditor/EditorInstallation.md)

## Blocks
- Data-Driven biome tinting - Supports block textures per biome.
  - [minecraft:map_color](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_map_color.md)
    - tint_method
  - [minecraft:destruction_particles](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_destruction_particles.md)
    - tint_method
  - [minecraft:material_instances](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_material_instances.md)
    - tint_method
- Isotropic textures - Allows for random rotation of textures (e.g. vanilla dirt).
  - [minecraft:material_instances](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_material_instances.md)
    - isotropic
- [Destruction particle](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_destruction_particles.md) - Set a texture that appears when block is broken.
- Distance-Based Render Method Swap - Allows blocks to become visually opaque in the distance, instead of disappearing when their render method is not opaque (leaves). transparent block makes it to far layer switch texture to opaque.
  - [minecraft:material_instances](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_material_instances.md)
    - "render_method": "blend_to_opaque"
    - "render_method": "alpha_test_to_opaque"
    - "render_method": "alpha_test_single_sided_to_opaque"

## Entities
Improvements have been made to rideables.
- The [minecraft:rideable](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_rideable.md) component now has three new additional fields:
  - "dismount_mode" defines where riders are placed when dismounting the entity:
    - "default", riders are placed on a valid ground position around the entity, or at the center of the entity's collision box if none is found
    - "on_top_center", riders are placed at the center of the top of the entity's collision box
  - "on_rider_enter_event", defines the event to execute on the owner entity when an entity starts riding it
  - "on_rider_exit_event", defines the event to execute on the owner entity when an entity stops riding it
- The "minecraft:rideable" component's Seat definition now has two additional fields:
  - "third_person_camera_radius" can be used to set a different camera radius when in third person or third person front camera. 
  - "camera_relax_distance_smoothing" adds springiness to the camera movement when the camera moves back to its radius after being pushed closer to the player by and obstacle.

Improvements have been made to leashes.
- The [minecraft:leashable](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_leashable.md) component now support multiple presets.
- [query.leashed_entity_count](../Reference/Content/MolangReference/Examples/MolangConcepts/QueryFunctions/query_leashed_entity_count.md) - allows querying how many entities have the given entity as their leash holder.
- [query.has_any_leashed_entity_of_type](../Reference/Content/MolangReference/Examples/MolangConcepts/QueryFunctions/query_has_any_leashed_entity_of_type.md) - checks if the entity has any of the listed entities leashed.

- [has_equipment_tag](../Reference/Content/EntityReference/Examples/Filters/has_equipment_tag.md) - works like "has_equipment" but takes an item tag instead of an item name.
- Various tweaks have been made to navigation behaviors:
  - [minecraft:behavior.float_wander](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_float_wander.md)
  - [minecraft:behavior.follow_mob](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_follow_mob.md)
  - [minecraft:behavior.tempt](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_tempt.md)
  - [minecraft:behavior.float_tempt](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_float_tempt.md)

## World Generation
- Pools, dimension padding, start height with vertical anchors - These parameters are added to the Jigsaw tech currently in experimental. 
- /place feature - This allows for a feature to be placed at world gen via command or API. 

## Platform
Graphics Mode Molang Queries
- [query.graphics_mode_is_any](../Reference/Content/MolangReference/Examples/MolangConcepts/QueryFunctions/query_graphics_mode_is_any.md)

## Scripting API
- Block Bounding Box APIs
  - [BlockBoundingBox](../ScriptAPI/minecraft/server/BlockBoundingBox.md)
  - [BLockBoundingUtils](../ScriptAPI/minecraft/server/BlockBoundingBoxUtils.md)
- Place Feature APIs
  - Dimension
    - [placeFeature](../ScriptAPI/minecraft/server/Dimension.md#placefeature)
    - [placeFeatureRule](../ScriptAPI/minecraft/server/Dimension.md#placefeaturerule)
- Player Property APIs
  - Player
    - [setPropertyOverrideForEntity](../ScriptAPI/minecraft/server/Player.md#setpropertyoverrideforentity)
    - [removePropertyOverrideForEntity](../ScriptAPI/minecraft/server/Player.md#removepropertyoverrideforentity)
    - [clearPropertyOverridesForEntity](../ScriptAPI/minecraft/server/Player.md#clearpropertyoverridesforentity)
- Game Difficulty APIs
  - World
    - [getDifficulty](../ScriptAPI/minecraft/server/World.md#getdifficulty)
    - [setDifficulty](../ScriptAPI/minecraft/server/World.md#setdifficulty)
- Jigsaw Structure APIs
  - StructureManager
    - [placeJigsaw](../ScriptAPI/minecraft/server/StructureManager.md#placejigsaw)
    - [placeJigsawStructure](../ScriptAPI/minecraft/server/StructureManager.md#placejigsawstructure)
  - [JigsawPlaceOptions](../ScriptAPI/minecraft/server/JigsawPlaceOptions.md)
  - [JigsawStructionPlaceOptions](../ScriptAPI/minecraft/server/JigsawStructurePlaceOptions.md)
  - [PlaceJigsawError](../ScriptAPI/minecraft/server/PlaceJigsawError.md)

## What's Next

Looking ahead, here's what you can expect coming in future releases.

### What's Next for World Gen

- Jigsaw Block - All of the functionality currently available in experimental is coming to stable in an upcoming releases.
- Improved Spawn rules - Allowing for customized mob spawning in biomes and structures.

### What's Next for Camera

- Over-the-shoulder style orbit preset
- Camera-relative player control schemes

## What's Next for Blocks
- particle intensity - When breaking a block, defines the quantity of particles that appear.
- Textures – UV locking - This will make it so there is no longer a need to define new geo every time a texture is rotated.
- Loot & destroy API - Allow reading loot tables through scripting. Apply different loot tables through scripting when destroying entity or block.
- Culling rules - A subset of culling rules will be delivered to support behaviors such as how leaves appear when configured in a tree with neighbor rules.

### What's Next for Script API, Molang and Commands

- server-ui - Improvements to sever-ui forms allowing for more formatting options.
- Scripting 2.0 changes - See [Scripting 2.0 Overview](../Documents/ScriptingV2.0.0Overview.md) for more information.
- Custom Commands - Similar to block and item custom components, this will allow creation of custom slash commands via script.
- Custom Components V2 - Allowing block and item custom components to pass parameters specifying properties via script.

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/sections/360001185332).
