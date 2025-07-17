---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - Block Components"
description: "A reference document describing all current Block Components"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation

| Block Components | Description |
|:-----|:----------|
| [minecraft:collision_box](Block Component/minecraftBlock_collision_box.md)| Defines the area of the block that collides with entities. |
| [minecraft:crafting_table](Block Component/minecraftBlock_crafting_table.md)| Makes your block into a custom crafting table which enables the crafting table UI and the ability to craft recipes. |
| [minecraft:custom_components](Block Component/minecraftBlock_custom_components.md)| Sets an ordered list of custom component names which are bound in script to be executed upon a block event. |
| [minecraft:destructible_by_explosion](Block Component/minecraftBlock_destructible_by_explosion.md)| Describes the destructible by explosion properties for this block. |
| [minecraft:destructible_by_mining](Block Component/minecraftBlock_destructible_by_mining.md)| Describes the destructible by mining properties for this block. |
| [minecraft:destruction_particles](Block Component/minecraftBlock_destruction_particles.md)| [Note: This component is currently experimental]. |
| [minecraft:display_name](Block Component/minecraftBlock_display_name.md)| Specifies the language file key that maps to what text will be displayed when you hover over the block in your inventory and hotbar. |
| [minecraft:entity_fall_on](Block Component/minecraftBlock_entity_fall_on.md)| Configures what distance an entity must fall onto this block to cause the `onEntityFallOn` block custom component event to be sent to script. |
| [minecraft:flammable](Block Component/minecraftBlock_flammable.md)| Describes the flammable properties for this block. |
| [minecraft:friction](Block Component/minecraftBlock_friction.md)| Describes the friction for this block in a range of (0.0-0.9). |
| [minecraft:geometry](Block Component/minecraftBlock_geometry.md)| The description identifier of the geometry to use to render this block. |
| [minecraft:item_visual](Block Component/minecraftBlock_item_visual.md)| The description identifier of the geometry and material used to render the item of this block. <br>Experimental toggles required: Upcoming Creator Features (in format versions before 1.21.50) |
| [minecraft:light_dampening](Block Component/minecraftBlock_light_dampening.md)| The amount that light will be dampened when it passes through the block, in a range (0-15). |
| [minecraft:light_emission](Block Component/minecraftBlock_light_emission.md)| The amount of light this block will emit in a range (0-15). |
| [minecraft:liquid_detection](Block Component/minecraftBlock_liquid_detection.md)| The definitions for how a block behaves when detecting liquid. |
| [minecraft:loot](Block Component/minecraftBlock_loot.md)| The path to the loot table, relative to the behavior pack. |
| [minecraft:map_color](Block Component/minecraftBlock_map_color.md)| Sets the color of the block when rendered to a map. |
| [minecraft:material_instances](Block Component/minecraftBlock_material_instances.md)| The material instances for a block. |
| [minecraft:movable](Block Component/minecraftBlock_movable.md)| The description identifier of the movable component <br>Experimental toggles required: Upcoming Creator Features (in format versions before 1.21.100) |
| [minecraft:placement_filter](Block Component/minecraftBlock_placement_filter.md)| Sets rules for under what conditions the block can be placed/survive |
| [minecraft:redstone_conductivity](Block Component/minecraftBlock_redstone_conductivity.md)| The basic redstone properties of a block; if the component is not provided the default values are used. |
| [minecraft:replaceable](Block Component/minecraftBlock_replaceable.md)| A block with this component can be replaced when another block is placed in the same block position. <br>Experimental toggles required: Upcoming Creator Features (in format versions before 1.21.60) |
| [minecraft:selection_box](Block Component/minecraftBlock_selection_box.md)| Defines the area of the block that is selected by the player's cursor. |
| [minecraft:tick](Block Component/minecraftBlock_tick.md)| Causes the block to tick based on a regular interval equal to a number of ticks randomly chosen from the internal_range parameter. |
| [minecraft:transformation](Block Component/minecraftBlock_transformation.md)| The block's translation, rotation and scale with respect to the center of its world position |

## Internal/Deprecated Components
These components are either deprecated or internal to Minecraft and not usable in custom content.

| Block Components | Description |
|:-----|:----------|
| [bone_visibility](Block Component/minecraftBlock_bone_visibility.md)| A JSON object that contains a list of key/value pairs that map from bone name in the specified geometry file (key) to a boolean that tells whether the bone should be visible or not (value). |
| [breathability](Block Component/minecraftBlock_breathability.md)| Determines whether the block is breathable by defining if the block is treated as a `solid` or as `air`. |
| [queued_ticking](Block Component/minecraftBlock_queued_ticking.md)| Triggers the specified event, either once, or at a regular interval equal to a number of ticks randomly chosen from the interval_range provided. |
| [random_ticking](Block Component/minecraftBlock_random_ticking.md)| Triggers the specified event randomly based on the random tick speed gamerule. |
| [unit_cube](Block Component/minecraftBlock_unit_cube.md)| Specifies that a unit cube is to be used with tessellation. |