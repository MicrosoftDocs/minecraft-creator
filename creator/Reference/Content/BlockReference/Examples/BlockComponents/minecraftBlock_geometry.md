---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:geometry"
description: "Describes the minecraft:geometry block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:geometry

The description identifier of the geometry to use to render this block. This identifier must either match an existing geometry identifier in any of the loaded resource packs or be one of the currently supported Vanilla identifiers: "minecraft:geometry.full_block" or "minecraft:geometry.cross".

## Alternate Simple Representations

This item can also be represented as a `String`.


## Geometry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bone_visibility | *not set* | Keyed collection of boolean values |  | Blue Bubble Fish: `{"bb_main":true,"fish":true}` | 
| culling | *not set* | String |  | Tuna Roll: `"test:sushi_cull"` | 
| identifier | *not set* | String |  | Tuna Roll: `"geometry.sushi"`, Blue Bubble Fish: `"geometry.bubble_fish"`, Die: `"minecraft:geometry.full_block"` | 

## Samples

#### [Block Fabricator](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/fabricator.block.json)


```json
"minecraft:geometry": "geometry.mikeamm_gwve_fabricator"
```

#### [Block Gray Ore](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/gray_ore.block.json)


```json
"minecraft:geometry": "geometry.mikeamm_gwve_gray_ore"
```

#### [Tuna Roll](https://github.com/microsoft/minecraft-samples/tree/main/culled_block_sample/culled_block_behavior_pack/blocks/tuna_roll.json)


```json
"minecraft:geometry": {
  "identifier": "geometry.sushi",
  "culling": "test:sushi_cull"
}
```

#### [Blue Bubble Fish](https://github.com/microsoft/minecraft-samples/tree/main/custom_blocks/behavior_packs/custom_blocks/blocks/blue_bubble_fish.json)


```json
"minecraft:geometry": {
  "identifier": "geometry.bubble_fish",
  "bone_visibility": {
    "bb_main": true,
    "fish": true
  }
}
```

#### [California Roll](https://github.com/microsoft/minecraft-samples/tree/main/custom_blocks/behavior_packs/custom_blocks/blocks/california_roll.json)


```json
"minecraft:geometry": "geometry.sushi"
```

#### [Die](https://github.com/microsoft/minecraft-samples/tree/main/custom_blocks/behavior_packs/custom_blocks/blocks/die.json)


```json
"minecraft:geometry": {
  "identifier": "minecraft:geometry.full_block"
}
```

#### [Block Orange Ore](https://github.com/microsoft/minecraft-samples/tree/main/custom_features/basic_orange_ore/behavior_packs/basic_orange_ore/blocks/orange_ore.block.json)


```json
"minecraft:geometry": "geometry.orange_ore"
```

#### [Apple Block](https://github.com/microsoft/minecraft-samples/tree/main/custom_features/example_feature_set/behavior_packs/example_feature_set/blocks/apple_block.json)


```json
"minecraft:geometry": "geometry.apple_block"
```

#### [Block Frond Top](https://github.com/microsoft/minecraft-samples/tree/main/palm_tree_blocks_and_features/palm_tree_blocks/behavior_packs/palm_tree/blocks/frond_top.block.json)


```json
"minecraft:geometry": "geometry.frond_top"
```

#### [Block Palm Leave Corner](https://github.com/microsoft/minecraft-samples/tree/main/palm_tree_blocks_and_features/palm_tree_blocks/behavior_packs/palm_tree/blocks/palm_leave_corner.block.json)


```json
"minecraft:geometry": "geometry.palm_leave_corner"
```

#### [Block Palm Leave Tip](https://github.com/microsoft/minecraft-samples/tree/main/palm_tree_blocks_and_features/palm_tree_blocks/behavior_packs/palm_tree/blocks/palm_leave_tip.block.json)


```json
"minecraft:geometry": "geometry.palm_leave_tip"
```

#### [Block Palm Leave](https://github.com/microsoft/minecraft-samples/tree/main/palm_tree_blocks_and_features/palm_tree_blocks/behavior_packs/palm_tree/blocks/palm_leave.block.json)


```json
"minecraft:geometry": "geometry.palm_leave"
```
