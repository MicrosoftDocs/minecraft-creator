---
author: docsbryce
ms.author: v-bbortree
title: Block Documentation - Block Components List
ms.prod: gaming
---

# Block Documentation - Block Components

Below is a list of all the available Block Components within Minecraft: Bedrock Edition for use with Block JSON files.

## Block Components List

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[minecraft:block_light_filter](BlockComponents/minecraftBlock_block_light_filter.md)| 15| Integer|  An `integer` component that sets the amount that light will be dampened when it passes through the block, in a range (0-15). Higher value means the light will be dampened more. |
|[minecraft:breathability](BlockComponents/minecraftBlock_breathability.md)| solid| Enumerator|  Property describing the breathability of this block and whether it is treated as a solid or as air. |
|[minecraft:collision_box](BlockComponents/minecraftBlock_collision_box.md)| false| Boolean/JSON Object| Defines the area of the block that collides with entities. If set to true, default values are used. If set to false, the block's collision with entities is disabled. If this component is omitted, default values are used.|
|[minecraft:crafting_table](BlockComponents/minecraftBlock_creative_category.md) |*not set*| JSON Object | `minecraft:crafting_table` describes the component of a custom crafting table. This component supports only `recipe_shaped` and `recipe_shapeless` typed recipes and not others like `recipe_furnace` or `recipe_brewing_mix`. If there are two recipes for one item, the recipe book will pick the first that was parsed. If two input recipes are the same, crafting may assert and the resulting item may vary.|
|[minecraft:creative_category](BlockComponents/minecraftBlock_creative_category.md) |*not set*| JSON Object | Specifies the menu category and group for the block, which determine where this block is placed in the inventory and crafting table container screens.|
|[minecraft:destructible_by_explosion](BlockComponents/minecraftBlock_destructible_by_explosion.md)| true| Boolean/JSON Object| Describes the destructible by explosion properties for this block. If set to true, the block will have the default explosion resistance. If set to false, this block is indestructible by explosion. If the component is omitted, the block will have the default explosion resistance.|
|[minecraft:destructible_by_mining](BlockComponents/minecraftBlock_destructible_by_mining.md)| true| Boolean / JSON Object | Describes the destructible by mining properties for this block. If set to true, the block will have the default destroy time. If set to false, this block is indestructible by mining. If the component is omitted, the block will have the default destroy time.
|[minecraft:display_name](BlockComponents/minecraftBlock_display_name.md)|*not set* | Localization string|Specifies the language file key that maps to what text will be displayed when you hover over the block.|
|[minecraft:flammable](BlockComponents/minecraftBlock_flammable.md)|*not set* | JSON Object| Describes the flammable properties for this block.|
|[minecraft:friction](BlockComponents/minecraftBlock_friction.md)| 0.1| Decimal| Property describing the friction for this block. Friction effects an entities movements when it walks on the block.|
|[minecraft:geometry](BlockComponents/minecraftBlock_geometry.md)|*not set* | Identifier string| The geometry description identifier to use, this identifier must match an existing geometry identifier in any of the currently loaded resource packs. |
|[minecraft:loot](BlockComponents/minecraftBlock_loot.md) | *not set* | Path string| The path to the loot table, relative to the behavior pack.|
|[minecraft:map_color](BlockComponents/minecraftBlock_map_color.md)|*not set* | String|  A color represented as a hex value. This will be the color rendered to a map. |
|[minecraft:material_instances](BlockComponents/minecraftBlock_material_instances.md)|*not set* | JSON Object| Maps face or material_instance names in a geometry file to an actual material instance. Material instance can either be a full material instance or a name to another already defined instance. |
|[minecraft:part_visibility](BlockComponents/minecraftBlock_part_visibility.md) | true | Boolean |Maps bone names in a geometry file to a condition that turns their rendering on/off. The condition should be a Molang query that uses block properties to determine true/false. |
|[minecraft:placement_filter](BlockComponents/minecraftBlock_placement_filter.md)|*not set* | JSON Object|  Sets rules for under what conditions the block can be placed or survive.|
|[minecraft:queued_ticking](BlockComponents/minecraftBlock_queued_ticking.md)|*not set* |JSON Object| Triggers the specified event, either once, or at a regular interval equal to a number of ticks randomly chosen from the interval_range provided. |
|[minecraft:random_ticking](BlockComponents/minecraftBlock_random_ticking.md)|*not set* |JSON Object| Triggers the specified event randomly based on the random tick speed gamerule. The random tick speed determines how often blocks are updated. |
|[minecraft:rotation](BlockComponents/minecraftBlock_rotation.md)| rotation[0, 0, 0]| Vector [a, b, c]|  A `vector` component that sets the block's rotation around the center of the cube in degrees. The rotation order is x-y-z. Angles need to be in factors of 90. |
|[minecraft:selection_box](BlockComponents/minecraftBlock_selection_box.md)|  Boolean / JSON Object | true | Defines the area of the block that is selected by the player's cursor. If set to true, default values are used. If set to false, this block is not selectable by the player's cursor. If this component is omitted, default values are used.|
|[minecraft:unit_cube](BlockComponents/minecraftBlock_unit_cube.md)|*not set* | String| Specifies that a unit cube is to be used with tessellation. |
