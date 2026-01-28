---
author: mammerla
ms.author: mikeam
title: "Visuals Documentation - minecraft:geometry.v1.8.0"
description: "Describes the minecraft:geometry.v1.8.0 visual element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Visuals Documentation - minecraft:geometry.v1.8.0

Legacy geometry format using box-mapped UVs. This format uses the 'geometry.<name>' pattern for model definitions. For newer projects, consider using format version 1.12.0 or later which supports per-face UV mapping.


## Geometry (v1.8.0) Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| debug | *not set* | Boolean true/false |  |  | 
| format_version | *not set* | Version |  |  | 
| geometry.[a-zA-Z0-9_.'-:]+ | *not set* | [+ Geometry](#+-geometry) item |  |  | 
| bones.inflate | *not set* | Decimal number | Deprecated - no longer in use. Expands or shrinks the bone's cubes. This property has been deprecated in newer geometry format versions. This property no longer works after format versions of at least 1.16.0. The inflate property on bones was available in geometry v1.8.0 through v1.14.0 but is no longer used in modern formats. Use cube-level inflate instead. |  | 
| bones.reset | *not set* | Boolean true/false | Deprecated - no longer in use. When true, resets the bone to its bind pose before applying animations. This property has been deprecated in newer geometry format versions. This property no longer works after format versions of at least 1.16.0. The reset property on bones was available in geometry v1.8.0 through v1.14.0 but is no longer used in modern formats. |  | 

## + Geometry

#### + Geometry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bones | *not set* | Array of [Bones](#bones) items |  |  | 
| bones (Alternate 1) | *not set* | Array of strings |  |  | 
| cape | *not set* | String |  |  | 
| debug | *not set* | Boolean true/false |  |  | 
| textureheight | *not set* | Integer number |  |  | 
| texturewidth | *not set* | Integer number |  |  | 
| visible_bounds_offset | *not set* | Array of strings |  |  | 

## Bones

#### Bones Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bind_pose_rotation | *not set* | Array of strings |  |  | 
| cubes | *not set* | Array of [Cubes](#cubes) items |  |  | 
| cubes (Alternate 1) | *not set* | Array of strings |  |  | 
| debug | *not set* | Boolean true/false |  |  | 
| locators | *not set* | Named set of objects |  |  | 
| locators (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| mirror | *not set* | Boolean true/false |  |  | 
| name | *not set* | String |  |  | 
| neverRender | *not set* | Boolean true/false |  |  | 
| parent | *not set* | String |  |  | 
| pivot | *not set* | Array of strings |  |  | 
| poly_mesh | *not set* | Key/item pairs of [Poly Mesh](#poly-mesh) items |  |  | 
| render_group_id | *not set* | Integer number |  |  | 
| reset | *not set* | Boolean true/false |  |  | 
| rotation | *not set* | Array of strings |  |  | 
| texture_meshes | *not set* | Array of [Texture Meshes](#texture-meshes) items |  |  | 
| texture_meshes (Alternate 1) | *not set* | Array of strings |  |  | 

## Cubes

#### Cubes Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| mirror | *not set* | Boolean true/false |  |  | 
| origin | *not set* | Array of strings |  |  | 
| size | *not set* | Array of strings |  |  | 
| uv | *not set* | Array of strings |  |  | 

## Poly Mesh

#### Poly Mesh Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| normalized_uvs | *not set* | Boolean true/false |  |  | 
| normals | *not set* | Array of strings |  |  | 
| polys | *not set* | Array of strings |  |  | 
| positions | *not set* | Array of strings |  |  | 
| uvs | *not set* | Array of strings |  |  | 

## Texture Meshes

#### Texture Meshes Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| local_pivot | *not set* | Array of strings |  |  | 
| position | *not set* | Array of strings |  |  | 
| rotation | *not set* | Array of strings |  |  | 
| scale | *not set* | Array of strings |  |  | 
| scale (Alternate 1) | *not set* | Array of strings |  |  | 
| texture | *not set* | String |  |  | 
| use_pixel_depth | *not set* | Boolean true/false |  |  | 