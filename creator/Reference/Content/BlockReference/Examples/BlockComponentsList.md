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
|[minecraft:crafting_table](BlockComponents/minecraftBlock_crafting_table.md) |*not set*| JSON Object | `minecraft:crafting_table` makes your block into a custom crafting table which enables the crafting table UI and the ability to craft recipes. |
|[minecraft:destructible_by_explosion](BlockComponents/minecraftBlock_destructible_by_explosion.md)| true| Boolean/JSON Object| Describes the destructible by mining properties for this block. If set to true, the block will take the default number of seconds to destroy. If set to false, this block is indestructible by mining. If the component is omitted, the block will take the default number of seconds to destroy.|
|[minecraft:destructible_by_mining](BlockComponents/minecraftBlock_destructible_by_mining.md)| true| Boolean / JSON Object | Describes the destructible by mining properties for this block. If set to true, the block will have the default destroy time. If set to false, this block is indestructible by mining. If the component is omitted, the block will have the default destroy time.
|[minecraft:display_name](BlockComponents/minecraftBlock_display_name.md)|*not set* | Localization string|Specifies the language file key that maps to what text will be displayed when you hover over the block in your inventory and hotbar. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this component is omitted, the name of the block will be used as the display name.|
|[minecraft:flammable](BlockComponents/minecraftBlock_flammable.md)|*not set* | JSON Object| Describes the flammable properties for this block. If set to true, default values are used. If set to false, or if this component is omitted, the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.|
|[minecraft:friction](BlockComponents/minecraftBlock_friction.md)| 0.1| Decimal| Property describing the friction for this block. Friction effects an entities movements when it walks on the block.|
|[minecraft:geometry](BlockComponents/minecraftBlock_geometry.md)|*not set* | Identifier string| The description identifier of the geometry file to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.|
|[minecraft:loot](BlockComponents/minecraftBlock_loot.md) | *not set* | Path string| The path to the loot table, relative to the behavior pack.|
|[minecraft:map_color](BlockComponents/minecraftBlock_map_color.md)|*not set* | String|  A color represented as a hex value. This will be the color rendered to a map. |
|[minecraft:material_instances](BlockComponents/minecraftBlock_material_instances.md)|*not set* | JSON Object| The material instances for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: "up", "down", "north", "south", "east", "west", or "*". You can also give an instance the name of your choosing such as "my_instance", and then assign it to a face by doing "north":"my_instance". |
|[minecraft:part_visibility](BlockComponents/minecraftBlock_part_visibility.md) | true | Boolean |Maps bone names in a geometry file to a condition that turns their rendering on/off. The condition should be a Molang query that uses block properties to determine true/false. |
|[minecraft:placement_filter](BlockComponents/minecraftBlock_placement_filter.md)|*not set* | JSON Object|  Sets rules for under what conditions the block can be placed or survive.|
|[minecraft:queued_ticking](BlockComponents/minecraftBlock_queued_ticking.md)|*not set* |JSON Object| Triggers the specified event, either once, or at a regular interval equal to a number of ticks randomly chosen from the interval_range provided. |
|[minecraft:random_ticking](BlockComponents/minecraftBlock_random_ticking.md)|*not set* |JSON Object| Triggers the specified event randomly based on the random tick speed gamerule. The random tick speed determines how often blocks are updated. |
|[minecraft:rotation](BlockComponents/minecraftBlock_rotation.md)| rotation[0, 0, 0]| Vector [a, b, c]|  A `vector` component that sets the block's rotation around the center of the cube in degrees. The rotation order is [x, y, z]. Angles need to be in factors of 90. |
|[minecraft:selection_box](BlockComponents/minecraftBlock_selection_box.md)|  Boolean / JSON Object | true |  Defines the area of the block that is selected by the player's cursor. If set to true, default values are used. If set to false, this block is not selectable by the player's cursor. If this component is omitted, default values are used.|
|[minecraft:unit_cube](BlockComponents/minecraftBlock_unit_cube.md)|*not set* | String| Specifies that a unit cube is to be used with tessellation. |
| [minecraft:unwalkable](BlockComponents/minecraftBlock_unwalkable.md)| false| Boolean |Sets the block as unwalkable. Mobs would not attempt to path over top of it when the value is set to true. |
