---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:map_color"
description: "Describes the minecraft:map_color block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:map_color

Sets the color of the block when rendered to a map. If this component is omitted, the block will not show up on the map.


## Map Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | String | The color is represented as a hex value in the format "#RRGGBB". May also be expressed as an array of [R, G, B] from 0 to 255. |  | 
| tint_method | *not set* | String | Optional, tint multiplied to the color. Tint method logic varies, but often refers to the "rain" and "temperature" of the biome the block is placed in to compute the tint. Supported tint methods are "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage", "grass" and "water" |  | 

## Samples

#### [Block Fabricator](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/fabricator.block.json)


```json
"minecraft:map_color": "#5f4a2b"
```

#### [Block Gray Ore](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/gray_ore.block.json)


```json
"minecraft:map_color": "#ffcd17"
```

#### [Block Orange Ore](https://github.com/microsoft/minecraft-samples/tree/main/custom_features/basic_orange_ore/behavior_packs/basic_orange_ore/blocks/orange_ore.block.json)


```json
"minecraft:map_color": "#a69787"
```

#### [Apple Block](https://github.com/microsoft/minecraft-samples/tree/main/custom_features/example_feature_set/behavior_packs/example_feature_set/blocks/apple_block.json)


```json
"minecraft:map_color": "#f30000"
```

#### [Block Palm Leave Corner](https://github.com/microsoft/minecraft-samples/tree/main/palm_tree_blocks_and_features/palm_tree_blocks/behavior_packs/palm_tree/blocks/palm_leave_corner.block.json)


```json
"minecraft:map_color": "#495f2b"
```

#### [Block Palm Leave](https://github.com/microsoft/minecraft-samples/tree/main/palm_tree_blocks_and_features/palm_tree_blocks/behavior_packs/palm_tree/blocks/palm_leave.block.json)


```json
"minecraft:map_color": "#639f28"
```

#### [Block Palm Trunk](https://github.com/microsoft/minecraft-samples/tree/main/palm_tree_blocks_and_features/palm_tree_blocks/behavior_packs/palm_tree/blocks/palm_trunk.block.json)


```json
"minecraft:map_color": "#b9ae9d"
```
