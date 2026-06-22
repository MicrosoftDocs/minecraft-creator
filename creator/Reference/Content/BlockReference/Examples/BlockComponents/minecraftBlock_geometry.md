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

> [!Note]
> In format_version 1.26.0 and higher, the `minecraft:geometry.full_block` identifier renders its DOWN face rotated 180° to match non-data-driven full blocks and Java Edition. The new `minecraft:geometry.full_block_v1` identifier preserves the original orientation. Blocks using `full_block` with format_version older than 1.26.0 continue to render unchanged.

> [!Note]
> Fixed in 1.26.10: rotation for blocks displayed in item frames using `minecraft:geometry.full_block` is now correct for `format_version` >= 1.26.0.

> [!Note]
> This item requires a format version of at least 1.19.40.

## Alternate Simple Representations

This item can also be represented as a `String`.


## Geometry Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| bone_visibility | *not set* | Keyed collection of boolean values | An optional list of true/false values that define the visibility of individual bones in the geometry file. | 
| culling | *not set* | String | An optional identifer of a culling definition. | 
| culling_layer | minecraft:culling_layer.undefined | String | [Experimental] - A string that allows culling rule to group multiple blocks together when comparing them. | 
| culling_shape | minecraft:empty | String | The voxel shape used for culling adjacent block faces. | 
| identifier | *not set* | String | Specifies the geometry description identifier to use to render this block. | 
| n_way_visual_rotation | *not set* | String | The name of a block state that drives visual-only rotation of this block. | 
| uv_lock | *not set* | String | A Boolean locking UV orientation of all bones in the geometry, or an array of strings locking UV orientation of specific bones in the geometry. | 

### bone_visibility

An optional list of true/false values that define the visibility of individual bones in the geometry file.  In order to set up 'bone_visibility', the geometry file name must be entered as an identifier. After the identifier has been specified, bone_visibility can be defined based on the names of the bones in the specified geometry file on a true/false basis. Note that all bones default to 'true,' so bones should only be defined if they are being set to 'false.' Including bones set to 'true' will work the same as the default. This item requires a format version of at least 1.19.80. Added to the geometry component in 1.19.80 as a replacement for the previous part_visibility component. As of 1.20.10, bone visibility values support Molang expressions, restoring functionality closer to the original experimental part_visibility component.

### culling

An optional identifer of a culling definition. The culling definition is used to determine which faces of the block should be culled when rendering. The culling definition can be used to optimize rendering performance by reducing the number of faces that need to be rendered.  This identifier must match an existing culling definition in any of the currently loaded resource packs. This item requires a format version of at least 1.20.60. Data-driven culling rules are referenced by this identifier and were added in 1.20.60.

### culling_layer

[Experimental] - A string that allows culling rule to group multiple blocks together when comparing them. When using the minecraft namespace, the only allowed culling layer identifiers are : "minecraft:culling_layer.undefined" or "minecraft:culling_layer.leaves". Additionally, the feature is currently only usable behind the "upcoming creator features" toggle.  When using no namespaces or a custom one, the names must start and end with an alpha-numeric character.

### culling_shape

The voxel shape used for culling adjacent block faces. Voxel shapes work together with culling rules and will not function if there is no culling rule defined for the block. Only adjacent blocks with voxel shapes will occlude using this shape. Blocks using "minecraft:geometry.full_block" always use the unit cube shape and will ignore custom shapes if specified. This item requires a format version of at least 1.26.30. Available for custom blocks in format version 1.26.30. Applying non-unit-cube culling shapes to Vanilla blocks (fences, bells, slabs, etc.) still requires the Voxel Shapes experimental toggle. When using the minecraft namespace, only `minecraft:empty` and `minecraft:unit_cube` are available; custom namespaces must start and end with an alpha-numeric character.

### identifier

Specifies the geometry description identifier to use to render this block.  This identifier must match an existing geometry identifier in any of the currently loaded resource packs. The reserved identifier `minecraft:geometry.full_cube` was added in 1.20.60 to provide the most efficient rendering path for 1x1x1 blocks.

### n_way_visual_rotation

The name of a block state that drives visual-only rotation of this block. The renderer reads the current value of the named state at runtime and rotates the geometry accordingly without changing collision or interaction. Supported states are `minecraft:cardinal_direction`, `minecraft:sixteen_way_rotation`, and any custom integer state. This item requires a format version of at least 1.26.30.

### uv_lock

A Boolean locking UV orientation of all bones in the geometry, or an array of strings locking UV orientation of specific bones in the geometry. For performance reasons it is recommended to use the Boolean. Note that for cubes using Box UVs, rather than Per-face UVs, uv_lock is only supported if the cube faces are square. This item requires a format version of at least 1.21.100. With UV locking, a single geometry can be reused for multiple texture rotations without authoring a new geometry per rotation.


## Samples

#### Block Fabricator


```json
"minecraft:geometry": "geometry.mikeamm_gwve_fabricator"
```

#### Block Gray Ore


```json
"minecraft:geometry": "geometry.mikeamm_gwve_gray_ore"
```

#### Block Frond Top


```json
"minecraft:geometry": "geometry.frond_top"
```

#### Block Palm Leave


```json
"minecraft:geometry": "geometry.palm_leave"
```

#### Block White Sand


```json
"minecraft:geometry": "geometry.white_sand"
```

#### Tuna Roll


```json
"minecraft:geometry": {
  "identifier": "geometry.sushi",
  "culling": "test:sushi_cull"
}
```

#### Blue Bubble Fish


```json
"minecraft:geometry": {
  "identifier": "geometry.bubble_fish",
  "bone_visibility": {
    "bb_main": true,
    "fish": true
  }
}
```

#### California Roll


```json
"minecraft:geometry": "geometry.sushi"
```
