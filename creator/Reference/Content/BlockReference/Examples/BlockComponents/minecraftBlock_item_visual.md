---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:item_visual"
description: "Describes the minecraft:item_visual block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:item_visual

The description identifier of the geometry and material used to render the item of this block.

> [!Note]
> Fixed in 1.26.10: a client crash on world load caused by an out-of-bounds `minecraft:geometry` value inside `minecraft:item_visual` no longer occurs.

> [!Note]
> This item requires a format version of at least 1.21.60.


## Block Item Visual Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| geometry | *not set* | String | The "minecraft:geometry" component of the item. | 
| geometry (Geometry) | *not set* | [Geometry (Geometry)](#geometry-geometry) item |  | 
| material_instances | *not set* | Object | The "minecraft:material_instances" component of the item. Value must have at most 64 items. | 

### Geometry (Geometry)

#### Geometry Properties

**JSON path:** `geometry`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| bone_visibility | {} | Keyed set of strings | A JSON object that contains a list of key/value pairs that map from bone name in the specified geometry file (key) to a Molang expression that tells whether the bone should be visible or not (value). | 
| bone_visibility (as Named set of objects) | *not set* | Key/item pairs of [Bone Visibility (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| bone_visibility (as Decimal number) | *not set* | Decimal number |  | 
| culling |  | String | Which block_culling .json file to use when rendering this block. Value must have at most 256 items. | 
| culling_layer | *not set* | String | A string that allows culling rule to group multiple blocks together when comparing them. | 
| culling_shape |  | String | Currently only available with the VoxelShape experiment on. | 
| identifier | *not set* | String | The description identifier of the geometry to use to render this block. | 
| n_way_visual_rotation | *not set* | [n Way Visual Rotation](#block-nwayvisualrotation) item | Optional object that maps x/y/z axes to block state names that drive visual-only geometry rotation. | 
| uv_lock | false | Object | A field that is either a Boolean or an array of strings, max size 64 strings. | 

#### bone_visibility

A JSON object that contains a list of key/value pairs that map from bone name in the specified geometry file (key) to a Molang expression that tells whether the bone should be visible or not (value). The expression is limited to using the "query.block_state()" query. When using "bone_visibility" in geometry components in the "permutations" section, you must also have a default version of the geometry component with "bone_visibility" in the "components" section. Value must have at most 64 items.

#### culling_layer

A string that allows culling rule to group multiple blocks together when comparing them. When using the minecraft namespace, the only allowed culling layer identifiers are : "minecraft:culling_layer.undefined" or "minecraft:culling_layer.leaves". When using no namespaces or a custom one, the names must start and end with an alpha-numeric character. Value must have at least 1 items. Value must have at most 256 items. Value must match a regular expression pattern of "^(?:minecraft:culling_layer.undefined|minecraft:culling_layer.leaves|(?!minecraft:)[a-z0-9].*[a-z0-9])$".

#### culling_shape

Currently only available with the VoxelShape experiment on. The voxel shape used for culling adjacent block faces. Voxel shapes work together with culling rules and will not function if there is no culling rule defined for the block. Only adjacent blocks with voxel shapes will occlude using this shape. Blocks using \"minecraft:geometry.full_block\" always use the unit cube shape and will ignore custom shapes if specified. When using the minecraft namespace, the only currently available culling shape identifiers are : \"minecraft:empty\" or \"minecraft:unit_cube\". When using no namespaces or a custom one, the names must start and end with an alpha-numeric character. Value must have at most 256 items. Value must match a regular expression pattern of "^(?:minecraft:empty|minecraft:unit_cube|(?!minecraft:)[a-z0-9].*[a-z0-9])$".

#### identifier

The description identifier of the geometry to use to render this block. This identifier must either match an existing geometry identifier in any of the loaded resource packs or be one of the currently supported Vanilla identifiers: "minecraft:geometry.full_block" or "minecraft:geometry.cross". Value must have at most 256 items.

#### uv_lock

A field that is either a Boolean or an array of strings, max size 64 strings. This field locks UV orientation for all/some bones in the geometry, regardless of how the block is rotated using "minecraft:transformation" component. For performance reasons it's recommended to use the Boolean.


#### Legacy Molang Expression

##### Legacy Molang Expression Properties

**JSON path:** `geometry > bone_visibility`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

#### Block NWayVisualRotation

##### Block NWayVisualRotation Properties

**JSON path:** `geometry > n_way_visual_rotation`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x |  | String | Block state name that controls visual rotation around the x axis. Value must have at most 256 items. | 
| y |  | String | Block state name that controls visual rotation around the y axis. Value must have at most 256 items. | 
| z |  | String | Block state name that controls visual rotation around the z axis. Value must have at most 256 items. | 

## Samples


```json
"minecraft:item_visual": {
  "geometry": {
    "identifier": "minecraft:geometry.full_block"
  },
  "material_instances": {
    "*": {
      "texture": "dirt",
      "render_method": "opaque"
    }
  }
}
```

#### Block Fabricator


```json
"minecraft:item_visual": {
  "geometry": "geometry.mikeamm_gwve_fabricator_in_hand",
  "material_instances": {
    "*": {
      "texture": "mikeamm_gwve_fabricator_in_hand",
      "render_method": "alpha_test"
    }
  }
}
```

#### Die


```json
"minecraft:item_visual": {
  "geometry": "minecraft:geometry.full_block",
  "material_instances": {
    "*": {
      "texture": "die_red",
      "render_method": "opaque"
    }
  }
}
```
