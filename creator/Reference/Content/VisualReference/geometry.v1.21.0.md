---
author: mammerla
ms.author: mikeam
title: "Visuals Documentation - minecraft:geometry.v1.21.0"
description: "Describes the minecraft:geometry.v1.21.0 visual element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Visuals Documentation - minecraft:geometry.v1.21.0

Defines a geometry document (bones, cubes, and UV mappings) with format_version 1.21.0.


## Geometry (v1.21.0) Properties

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
| item_display_transforms | *not set* | [Item Display Transforms](#item-display-transforms) item | Components of the 3d matrix transform to be applied to this geometry when displayed in this item rendering context. Valid contexts: ["gui", "firstperson_righthand", "firstperson_lefthand", "thirdperson_righthand", "thirdperson_lefthand", "ground", "fixed", "head", "embedded"]. |  | 

## Bones

#### Bones Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| binding | *not set* | Molang | Useful for items. A molang expression specifying the bone name of the parent skeletal hierarchy that this bone should use as the root transform. Without this field it will look for a bone in the parent entity with the same name as this bone. If both are missing, it will assume a local skeletal hierarchy (via the "parent" field). If that is also missing, it will attach to the owning entity's root transform. |  | 
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
| uv_rotation | *not set* | Integer number | Rotates the uv rect clockwise the specified amount of degrees before applying it to the face. Valid values are 0, 90, 180 and 270. If not specified, no rotation will be applied. |  | 
| uv_size | *not set* | Array of strings |  |  | 

## East

#### East Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_instance | *not set* | String |  |  | 
| uv | *not set* | Array of strings |  |  | 
| uv_rotation | *not set* | Integer number | Rotates the uv rect clockwise the specified amount of degrees before applying it to the face. Valid values are 0, 90, 180 and 270. If not specified, no rotation will be applied. |  | 
| uv_size | *not set* | Array of strings |  |  | 

## North

#### North Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_instance | *not set* | String |  |  | 
| uv | *not set* | Array of strings |  |  | 
| uv_rotation | *not set* | Integer number | Rotates the uv rect clockwise the specified amount of degrees before applying it to the face. Valid values are 0, 90, 180 and 270. If not specified, no rotation will be applied. |  | 
| uv_size | *not set* | Array of strings |  |  | 

## South

#### South Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_instance | *not set* | String |  |  | 
| uv | *not set* | Array of strings |  |  | 
| uv_rotation | *not set* | Integer number | Rotates the uv rect clockwise the specified amount of degrees before applying it to the face. Valid values are 0, 90, 180 and 270. If not specified, no rotation will be applied. |  | 
| uv_size | *not set* | Array of strings |  |  | 

## Up

#### Up Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_instance | *not set* | String |  |  | 
| uv | *not set* | Array of strings |  |  | 
| uv_rotation | *not set* | Integer number | Rotates the uv rect clockwise the specified amount of degrees before applying it to the face. Valid values are 0, 90, 180 and 270. If not specified, no rotation will be applied. |  | 
| uv_size | *not set* | Array of strings |  |  | 

## West

#### West Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material_instance | *not set* | String |  |  | 
| uv | *not set* | Array of strings |  |  | 
| uv_rotation | *not set* | Integer number | Rotates the uv rect clockwise the specified amount of degrees before applying it to the face. Valid values are 0, 90, 180 and 270. If not specified, no rotation will be applied. |  | 
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

## Item Display Transforms

#### Item Display Transforms Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| embedded | *not set* | [Embedded](#embedded) item |  |  | 
| firstperson_lefthand | *not set* | [Firstperson Lefthand](#firstperson-lefthand) item |  |  | 
| firstperson_righthand | *not set* | [Firstperson Righthand](#firstperson-righthand) item |  |  | 
| fixed | *not set* | [Fixed](#fixed) item |  |  | 
| ground | *not set* | [Ground](#ground) item |  |  | 
| gui | *not set* | [Gui](#gui) item |  |  | 
| head | *not set* | [Head](#head) item |  |  | 
| thirdperson_lefthand | *not set* | [Thirdperson Lefthand](#thirdperson-lefthand) item |  |  | 
| thirdperson_righthand | *not set* | [Thirdperson Righthand](#thirdperson-righthand) item |  |  | 

## Embedded

#### Embedded Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rotation | *not set* | Array of strings |  |  | 
| rotation_pivot | *not set* | Array of strings |  |  | 
| scale | *not set* | Array of strings |  |  | 
| scale_pivot | *not set* | Array of strings |  |  | 
| translation | *not set* | Array of strings |  |  | 

## Firstperson Lefthand

#### Firstperson Lefthand Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rotation | *not set* | Array of strings |  |  | 
| rotation_pivot | *not set* | Array of strings |  |  | 
| scale | *not set* | Array of strings |  |  | 
| scale_pivot | *not set* | Array of strings |  |  | 
| translation | *not set* | Array of strings |  |  | 

## Firstperson Righthand

#### Firstperson Righthand Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rotation | *not set* | Array of strings |  |  | 
| rotation_pivot | *not set* | Array of strings |  |  | 
| scale | *not set* | Array of strings |  |  | 
| scale_pivot | *not set* | Array of strings |  |  | 
| translation | *not set* | Array of strings |  |  | 

## Fixed

#### Fixed Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rotation | *not set* | Array of strings |  |  | 
| rotation_pivot | *not set* | Array of strings |  |  | 
| scale | *not set* | Array of strings |  |  | 
| scale_pivot | *not set* | Array of strings |  |  | 
| translation | *not set* | Array of strings |  |  | 

## Ground

#### Ground Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rotation | *not set* | Array of strings |  |  | 
| rotation_pivot | *not set* | Array of strings |  |  | 
| scale | *not set* | Array of strings |  |  | 
| scale_pivot | *not set* | Array of strings |  |  | 
| translation | *not set* | Array of strings |  |  | 

## Gui

#### Gui Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| fit_to_frame | *not set* | Boolean true/false | If true, the geometry will be automatically scaled and translated to fit within the GUI frame. Default is 'true'. |  | 
| rotation | *not set* | Array of strings |  |  | 
| rotation_pivot | *not set* | Array of strings |  |  | 
| scale | *not set* | Array of strings |  |  | 
| scale_pivot | *not set* | Array of strings |  |  | 
| translation | *not set* | Array of strings |  |  | 

## Head

#### Head Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rotation | *not set* | Array of strings |  |  | 
| rotation_pivot | *not set* | Array of strings |  |  | 
| scale | *not set* | Array of strings |  |  | 
| scale_pivot | *not set* | Array of strings |  |  | 
| translation | *not set* | Array of strings |  |  | 

## Thirdperson Lefthand

#### Thirdperson Lefthand Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rotation | *not set* | Array of strings |  |  | 
| rotation_pivot | *not set* | Array of strings |  |  | 
| scale | *not set* | Array of strings |  |  | 
| scale_pivot | *not set* | Array of strings |  |  | 
| translation | *not set* | Array of strings |  |  | 

## Thirdperson Righthand

#### Thirdperson Righthand Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rotation | *not set* | Array of strings |  |  | 
| rotation_pivot | *not set* | Array of strings |  |  | 
| scale | *not set* | Array of strings |  |  | 
| scale_pivot | *not set* | Array of strings |  |  | 
| translation | *not set* | Array of strings |  |  | 