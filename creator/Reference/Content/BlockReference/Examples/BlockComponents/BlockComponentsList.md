---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - Block Components List
description: "A reference document listing all currently available block components"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - Block Components

Below is a list of all the available Block Components within Minecraft: Bedrock Edition for use with Block JSON files.

## Block Components List

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[minecraft:breathability](minecraftBlock_breathability.md)| solid | String| Specifies whether the block is breathable by defining if the block is treated as a `solid` or as `air`. The default is `solid` if this component is omitted.|
|[minecraft:collision_box](minecraftBlock_collision_box.md)| true| Boolean/JSON Object| Defines the area of the block that collides with entities. If set to true, default values are used. If set to false, the block's collision with entities is disabled. If this component is omitted, default values are used.|
|[minecraft:crafting_table](minecraftBlock_crafting_table.md) |*not set*| JSON Object | Makes your block into a custom crafting table which enables the crafting table UI and the ability to craft recipes.|
|[minecraft:custom_components](../../../../../Documents/CustomComponents.md)| *not set* | Array | Sets an ordered list of custom component names bound in script to be executed on a block event. Experimental toggles required: Beta APIs.|
|[minecraft:destructible_by_explosion](minecraftBlock_destructible_by_explosion.md)| true| Boolean/JSON Object| Describes the destructible by explosion properties for this block. If set to true, the block will have the default explosion resistance. If set to false, this block is indestructible by explosion. If the component is omitted, the block will have the default explosion resistance.|
|[minecraft:destructible_by_mining](minecraftBlock_destructible_by_mining.md)| true| Boolean / JSON Object | Describes the destructible by mining properties for this block. If set to true, the block will take the default number of seconds to destroy. If set to false, this block is indestructible by mining. If the component is omitted, the block will take the default number of seconds to destroy.|
|[minecraft:display_name](minecraftBlock_display_name.md)|*not set* | Localization string|Specifies the language file key that maps to what text will be displayed when you hover over the block in your inventory and hotbar. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this component is omitted, the name of the block will be used as the display name.|
|[minecraft:flammable](minecraftBlock_flammable.md)|false | Boolean/JSON Object| Describes the flammable properties for this block. If set to true, default values are used. If set to false, or if this component is omitted, the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.|
|[minecraft:friction](minecraftBlock_friction.md)| 0.4| Decimal| Describes the friction for this block in a range of (0.0-0.9). Friction affects an entity's movement speed when it travels on the block. Greater value results in more friction.|
|[minecraft:geometry](minecraftBlock_geometry.md)|*not set* | Identifier string| The description identifier of the geometry to use to render this block. This identifier must match an existing geometry identifier in any of the loaded resource packs or be one of the currently supported Vanilla identifiers: `minecraft:geometry.full_block` or `minecraft:geometry.cross`.|
|[minecraft:item_visual](minecraftBlock_item_visual.md)| *not set*| JSON object| Specifies the block's item representation. The object contains `geometry` and `material_instances` parameters which map to the existing `minecraft:geometry` and `minecraft:material_instances` block components respectively. |
|[minecraft:light_dampening](minecraftBlock_light_dampening.md)| 15| Integer| The amount that light will be dampened when it passes through the block, in a range (0-15). Higher value means the light will be dampened more. |
|[minecraft:light_emission](minecraftBlock_light_emission.md)| 0| Integer|  The amount of light this block will emit in a range (0-15). Higher value means more light will be emitted. |
|[minecraft:loot](minecraftBlock_loot.md) | *not set* | Path string| The path to the loot table, relative to the behavior pack.|
|[minecraft:map_color](minecraftBlock_map_color.md)|*not set* | String| Sets the color of the block when rendered to a map. The color is represented as a hex value in the format "#RRGGBB". May also be expressed as an array of [R, G, B] from 0 to 255. If this component is omitted, the block will not show up on the map. |
|[minecraft:material_instances](minecraftBlock_material_instances.md)| *not set* | JSON Object| The material instances for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: "up", "down", "north", "south", "east", "west", or "*". You can also give an instance the name of your choosing such as "my_instance", and then assign it to a face by doing "north":"my_instance".|
|[minecraft:placement_filter](minecraftBlock_placement_filter.md)| *not set* | JSON Object|  Sets rules for under what conditions the block can be placed or survive.|
|[minecraft:redstone_conductivity](minecraftBlock_redstone_conductivity.md)| True | Boolean | `minecraft:redstone_conductivity` specifies whether a block has redstone properties. |
|[minecraft:selection_box](minecraftBlock_selection_box.md)|  Boolean / JSON Object | true |  Defines the area of the block that is selected by the player's cursor. If set to true, default values are used. If set to false, this block is not selectable by the player's cursor. If this component is omitted, default values are used.|
|[tag](minecraftBlock_tag.md)| *not set* | JSON Object | `tag:` is an empty JSON Object that defines a tag to be added to a block. The component has no body or parameters. It is simply a flag, and when the block is parsed it will be added to the block's tag list.|
|[minecraft:transformation](minecraftBlock_transformation.md)| rotation[0, 0, 0]| Vector [a, b, c]| The block's translation around the center of the cube in degrees. The rotation order is [x, y, z]. Angles need to be in multiples of 90.|

## Unsupported features

> [!WARNING]
> These features were previously applicable but are no longer available.

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| minecraft:unit_cube|*not set* | JSON Object| Specified that a unit cube was to be used with tessellation. The render capabilities were succeeded by the minecraft:geometry.full_block description identifier. |
