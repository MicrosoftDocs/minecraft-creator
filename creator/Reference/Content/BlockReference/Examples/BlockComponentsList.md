---
author: v-josjones
ms.author: v-josjones
title: Block Components List
ms.prod: gaming
---

# Block Components

Below is a list of all the available Block Components within Minecraft:Bedrock Edition for use with Block JSON files.

## Block Components

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[minecraft:block_light_absorption](BlockComponents/minecraftBlock_block_light_absorption.md)| 0| Integer|  The amount of light this block will absorb. |
|[minecraft:breathability](BlockComponents/minecraftBlock_breathability.md)| solid| Enumerator|  Property describing the breathability of this block and whether it is treated as a solid or as air. |
|[minecraft:destroy_time](BlockComponents/minecraftBlock_destroy_time.md)| 0.0| Decimal| Sets the destroy time property for the block. Greater numbers result in greater mining times. |
|[minecraft:display_name](BlockComponents/minecraftBlock_display_name.md)|*not set* | String|  Specifies the display name id for the block.|
|[minecraft:entity_collision](../BlockComponents/minecratBlocks_entity_collision.md)| false| Boolean|  Can only be set to false, it disables the collision of the block with entities.|
|minecraft:explosion_resistance| 0.0| Decimal|  Sets the explosion resistance for this block. |
|[minecraft:flammable](../BlockComponents/minecraftBlocks_flammable.md)|*not set* | JSON Object| Describes the flammable properties for this block.|
|minecraft:friction| 0.1| Decimal| Property describing the friction for this block. Friction effects an entities movements when it walks on the block.|
|minecraft:geometry|*not set* | String| The geometry definition name to use. |
| minecraft:immovable|*not set* | Boolean| An Immovable block cannot be pushed by pistons |
|minecraft:map_color|*not set* | String|  A color represented as a hex value. This will be the color rendered to a map. |
|minecraft:material_instances|*not set* | JSON Object|  Maps face or material_instance names in a geometry file to an actual material instance. Material instance can either be a full material instance or a name to another already defined instance |
|minecraft:onlypistonpush|*not set* | Boolean| Blocks with those components won't stick to stickyPistons |
|[minecraft:pick_collision](../BlockComponents/minecraftBlocks_pick_collision.md)| false| Boolean|  Can only be set to false, it disables the collision of the block with entities|
|[minecraft:placement_filter](../BlockComponents/minecraftBlock_placement_filter.md)|*not set* | JSON Object|  Sets rules for under what conditions the block can be placed/survive|
| minecraft:preventsjumping|*not set* | Boolean| this component makes it so actors can't jump when walking on this block |
|[minecraft:random_ticking](../BlockComponents/minecraftBlock_random_ticking.md)|*not set* |JSON Object| Describes the component that will trigger an even at a irregular interval between two values|
|minecraft:rotation| rotation[0, 0, 0]| Vector [a, b, c]| This is the block's rotation around the center of the cube in degrees. The rotation order is x-y-z. |
|minecraft:ticking|*not set* |JSON Object|  Describes the component that will trigger an even at a regular interval between two values|
|minecraft:unit_cube|*not set* | String| Specifies that a unit cube is to be used with tessellation. |
|minecraft:unwalkable|*not set* | Boolean|  this component sets a block as unwalkable. Most mobs will not try to jump over it if the value is set to true |
