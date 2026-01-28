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
| bone_visibility | *not set* | Keyed collection of boolean values | An optional list of true/false values that define the visibility of individual bones in the geometry file. In order to set up 'bone_visibility', the geometry file name must be entered as an identifier. After the identifier has been specified, bone_visibility can be defined based on the names of the bones in the specified geometry file on a true/false basis. Note that all bones default to 'true,' so bones should only be defined if they are being set to 'false.' Including bones set to 'true' will work the same as the default. |  | 
| culling | *not set* | String | An optional identifer of a culling definition. The culling definition is used to determine which faces of the block should be culled when rendering. The culling definition can be used to optimize rendering performance by reducing the number of faces that need to be rendered. This identifier must match an existing culling definition in any of the currently loaded resource packs. |  | 
| culling_layer | minecraft:culling_layer.undefined | String | [Experimental] - A string that allows culling rule to group multiple blocks together when comparing them. When using the minecraft namespace, the only allowed culling layer identifiers are : "minecraft:culling_layer.undefined" or "minecraft:culling_layer.leaves". Additionally, the feature is currently only usable behind the "upcoming creator features" toggle. When using no namespaces or a custom one, the names must start and end with an alpha-numeric character. |  | 
| culling_shape | minecraft:empty | String | Currently only available with the VoxelShape experiment on. The voxel shape used for culling adjacent block faces. Voxel shapes work together with culling rules and will not function if there is no culling rule defined for the block. Only adjacent blocks with voxel shapes will occlude using this shape. Blocks using "minecraft:geometry.full_block" always use the unit cube shape and will ignore custom shapes if specified. When using the minecraft namespace, the only currently available culling shape identifiers are : "minecraft:empty" or "minecraft:unit_cube". When using no namespaces or a custom one, the names must start and end with an alpha-numeric character. |  | 
| identifier | *not set* | String | Specifies the geometry description identifier to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs. |  | 
| uv_lock | *not set* | String | A Boolean locking UV orientation of all bones in the geometry, or an array of strings locking UV orientation of specific bones in the geometry. For performance reasons it is recommended to use the Boolean. Note that for cubes using Box UVs, rather than Per-face UVs, 'uv_lock' is only supported if the cube faces are square. |  | 

## Samples
