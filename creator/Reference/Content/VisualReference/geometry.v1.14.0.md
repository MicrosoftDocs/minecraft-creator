---
author: mammerla
ms.author: mikeam
title: "Visuals Documentation - minecraft:geometry.v1.14.0"
description: "Describes the minecraft:geometry.v1.14.0 visual element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Visuals Documentation - minecraft:geometry.v1.14.0


## Geometry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| debug | *not set* | Boolean true/false |  |  | 
| format_version | *not set* | Version |  |  | 
| minecraft:geometry | *not set* | Array of [Geometry](#geometry) items |  |  | 
| minecraft:geometry (Alternate 1) | *not set* | Array of strings |  |  | 

## Geometry

#### Geometry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bones | *not set* | Array of [Bones](#bones) items |  |  | 
| bones (Alternate 1) | *not set* | Array of strings | Bones define the 'skeleton' of the mob: the parts that can be animated, and to which geometry and other bones are attached. |  | 
| cape | *not set* | String |  |  | 
| description | *not set* | [Description](#description) item |  |  | 

## Bones

#### Bones Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cubes | *not set* | Array of [Cubes](#cubes) items |  |  | 
| cubes (Alternate 1) | *not set* | Array of strings | This is the list of cubes associated with this bone. |  | 
| debug | *not set* | Boolean true/false |  |  | 
| locators | *not set* | Key/item pairs of [Locators](#locators) items |  |  | 
| locators (Alternate 1) | *not set* | Keyed set of strings | This is a list of locators associated with this bone. A locator is a point in model space that tracks a particular bone as the bone animates (by maintaining it's relationship to the bone through the animation). |  | 
| mirror | *not set* | Boolean true/false | Mirrors the UV's of the unrotated cubes along the x axis, also causes the east/west faces to get flipped. |  | 
| name | *not set* | String | Animation files refer to this bone via this identifier. |  | 
| parent | *not set* | String | Bone that this bone is relative to. If the parent bone moves, this bone will move along with it. |  | 
| pivot | *not set* | Array of strings |  |  | 
| poly_mesh | *not set* | Key/item pairs of [Poly Mesh](#poly-mesh) items | [Deprecated] A triangle or quad mesh object. Can be used in conjunction with cubes and texture geometry. This feature is deprecated, and using it in new content will result in content errors. |  | 
| render_group_id | *not set* | Integer number |  |  | 
| rotation | *not set* | Array of strings |  |  | 
| texture_meshes | *not set* | Array of [Texture Meshes](#texture-meshes) items |  |  | 
| texture_meshes (Alternate 1) | *not set* | Array of strings | Adds a mesh to the bone's geometry by converting texels in a texture into voxels. |  | 

## Cubes

#### Cubes Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| mirror | *not set* | Boolean true/false | Mirrors this cube about the unrotated x axis (effectively flipping the east / west faces), overriding the bone's 'mirror' setting for this cube. |  | 
| origin | *not set* | Array of strings |  |  | 
| pivot | *not set* | Array of strings |  |  | 
| rotation | *not set* | Array of strings |  |  | 
| size | *not set* | Array of strings |  |  | 
| uv | *not set* | [Uv](#uv) item | This is an alternate per-face uv mapping which specifies each face of the cube. Omitting a face will cause that face to not get drawn. |  | 
| uv (Alternate 1) | *not set* | Array of strings |  |  | 

## Uv

#### Uv Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| down | *not set* | [Down](#down) item | Specifies the UV's for the face that stretches along the x and z axes, and faces the -y axis |  | 
| east | *not set* | [East](#east) item | Specifies the UV's for the face that stretches along the z and y axes, and faces the x axis |  | 
| north | *not set* | [North](#north) item | Specifies the UV's for the face that stretches along the x and y axes, and faces the -z axis. |  | 
| south | *not set* | [South](#south) item | Specifies the UV's for the face that stretches along the x and y axes, and faces the z axis |  | 
| up | *not set* | [Up](#up) item | Specifies the UV's for the face that stretches along the x and z axes, and faces the y axis |  | 
| west | *not set* | [West](#west) item | Specifies the UV's for the face that stretches along the z and y axes, and faces the -x axis |  | 

## Down

#### Down Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_instance | *not set* | String |  |  | 
| uv | *not set* | Array of strings |  |  | 
| uv_size | *not set* | Array of strings |  |  | 

## East

#### East Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_instance | *not set* | String |  |  | 
| uv | *not set* | Array of strings |  |  | 
| uv_size | *not set* | Array of strings |  |  | 

## North

#### North Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_instance | *not set* | String |  |  | 
| uv | *not set* | Array of strings |  |  | 
| uv_size | *not set* | Array of strings |  |  | 

## South

#### South Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_instance | *not set* | String |  |  | 
| uv | *not set* | Array of strings |  |  | 
| uv_size | *not set* | Array of strings |  |  | 

## Up

#### Up Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_instance | *not set* | String |  |  | 
| uv | *not set* | Array of strings |  |  | 
| uv_size | *not set* | Array of strings |  |  | 

## West

#### West Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_instance | *not set* | String |  |  | 
| uv | *not set* | Array of strings |  |  | 
| uv_size | *not set* | Array of strings |  |  | 

## Locators

#### Locators Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ignore_inherited_scale | *not set* | Boolean true/false | Discard scale inherited from parent bone. |  | 
| offset | *not set* | Array of strings |  |  | 
| rotation | *not set* | Array of strings |  |  | 

## Poly Mesh

#### Poly Mesh Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| normalized_uvs | *not set* | Boolean true/false | If true, UVs are assumed to be [0-1]. If false, UVs are assumed to be [0-texture_width] and [0-texture_height] respectively. |  | 
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
| texture | *not set* | String | The friendly-named texture to use. |  | 
| use_pixel_depth | *not set* | Boolean true/false | If set to "true", the geometry will have a depth of one pixel (in entity space, not texture space). This causes geometries with a texture resolution different from 16x16 to appear stretched. If set to "false", the geometry will be built from perfectly cubic voxels, no matter the texture's aspect ratio. The default value is "true". |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | Entity definition and Client Block definition files refer to this geometry via this identifier. |  | 
| texture_height | *not set* | Integer number | Assumed height in texels of the texture that will be bound to this geometry. |  | 
| texture_width | *not set* | Integer number | Assumed width in texels of the texture that will be bound to this geometry. |  | 
| visible_bounds_offset | *not set* | Array of strings |  |  | 