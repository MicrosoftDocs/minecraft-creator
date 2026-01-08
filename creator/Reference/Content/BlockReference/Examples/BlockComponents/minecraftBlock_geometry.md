---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:geometry"
description: "Describes the minecraft:geometry block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:geometry

The description identifier of the geometry to use to render this block. This identifier must either match an existing geometry identifier in any of the loaded resource packs or be one of the currently supported Vanilla identifiers: "minecraft:geometry.full_block" or "minecraft:geometry.cross".

> [!Note]
> From 1.21.80 onward, when using a minecraft:geometry component or minecraft:material_instances component, you must include both.

## Alternate Simple Representations

This item can also be represented as a `String`.


## Geometry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bone_visibility | *not set* | Keyed collection of boolean values | An optional list of true/false values that define the visibility of individual bones in the geometry file. In order to set up 'bone_visibility', the geometry file name must be entered as an identifier. After the identifier has been specified, bone_visibility can be defined based on the names of the bones in the specified geometry file on a true/false basis. Note that all bones default to 'true,' so bones should only be defined if they are being set to 'false.' Including bones set to 'true' will work the same as the default. | Blue Bubble Fish: `{"bb_main":true,"fish":true}` | 
| culling | *not set* | String | An optional identifer of a culling definition. The culling definition is used to determine which faces of the block should be culled when rendering. The culling definition can be used to optimize rendering performance by reducing the number of faces that need to be rendered. This identifier must match an existing culling definition in any of the currently loaded resource packs. | Tuna Roll: `"test:sushi_cull"` | 
| culling_layer | minecraft:culling_layer.undefined | String | [Experimental] - A string that allows culling rule to group multiple blocks together when comparing them. When using the minecraft namespace, the only allowed culling layer identifiers are : "minecraft:culling_layer.undefined" or "minecraft:culling_layer.leaves". Additionally, the feature is currently only usable behind the "upcoming creator features" toggle. When using no namespaces or a custom one, the names must start and end with an alpha-numeric character. |  | 
| identifier | *not set* | String | Specifies the geometry description identifier to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs. | Tuna Roll: `"geometry.sushi"`, Blue Bubble Fish: `"geometry.bubble_fish"`, Simple Cube: `"minecraft:geometry.full_block"` | 
| uv_lock | *not set* | String | A Boolean locking UV orientation of all bones in the geometry, or an array of strings locking UV orientation of specific bones in the geometry. For performance reasons it is recommended to use the Boolean. Note that for cubes using Box UVs, rather than Per-face UVs, 'uv_lock' is only supported if the cube faces are square. |  | 

## Samples

#### [Block Fabricator](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/fabricator.block.json)


```json
"minecraft:geometry": "geometry.mikeamm_gwve_fabricator"
```

#### [Block Gray Ore](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/gray_ore.block.json)


```json
"minecraft:geometry": "geometry.mikeamm_gwve_gray_ore"
```

#### [Block Frond Top](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/blocks/frond_top.block.json)


```json
"minecraft:geometry": "geometry.frond_top"
```

#### [Block Palm Leave](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/blocks/palm_leave.block.json)


```json
"minecraft:geometry": "geometry.palm_leave"
```

#### [Block Palm Leave Corner](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/blocks/palm_leave_corner.block.json)


```json
"minecraft:geometry": "geometry.palm_leave_corner"
```

#### [Block Palm Leave Tip](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/blocks/palm_leave_tip.block.json)


```json
"minecraft:geometry": "geometry.palm_leave_tip"
```

#### [Block Palm Tree Top](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/blocks/palm_tree_top.block.json)


```json
"minecraft:geometry": "geometry.chill_oasis_top"
```

#### [Block Palm Trunk](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/blocks/palm_trunk.block.json)


```json
"minecraft:geometry": "geometry.palm_trunk"
```

#### [Block White Sand](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/blocks/white_sand.block.json)


```json
"minecraft:geometry": "geometry.white_sand"
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
