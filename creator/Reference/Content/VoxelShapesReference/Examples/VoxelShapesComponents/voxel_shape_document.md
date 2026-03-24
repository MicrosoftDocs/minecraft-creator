---
author: mammerla
ms.author: mikeam
title: "Voxel Shapes Documentation - minecraft:voxel_shape_document"
description: "Describes the minecraft:voxel_shape_document voxel shape component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Voxel Shapes Documentation - minecraft:voxel_shape_document

A behavior pack voxel shape document for Minecraft Bedrock Edition. This describes the complete JSON file structure including format_version and the minecraft:voxel_shape wrapper.


## Voxel Shape Document Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | Version | The format version of this voxel shape file. Currently 1.21.110. | 
| minecraft:voxel_shape | *not set* | [Voxel Shape](#voxel-shapes-voxelshapefile) item | The voxel shape definition container with description and shape data. | 

### Voxel Shapes VoxelShapeFile
Defines a complete voxel shape file.


#### Voxel Shapes VoxelShapeFile Properties

**JSON path:** `minecraft:voxel_shape`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#voxel-shapes-description) item |  | 
| shape | *not set* | [Shape](#voxel-shapes-shape) item |  | 

#### Voxel Shapes Description
Defines voxel shape identifier.


##### Voxel Shapes Description Properties

**JSON path:** `minecraft:voxel_shape > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | Object |  | 

#### Voxel Shapes Shape
Defines a voxel shape with boxes.


##### Voxel Shapes Shape Properties

**JSON path:** `minecraft:voxel_shape > shape`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| boxes | *not set* | Array of [Boxes](#voxel-shapes-box) items |  | 

##### Voxel Shapes Box
Defines a bounding box with min and max coordinates.


###### Voxel Shapes Box Properties

**JSON path:** `minecraft:voxel_shape > shape > boxes`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | *not set* | Array of numbers |  | 
| max (Max) | *not set* | [Max (Max)](#max-max) item |  | 
| min | *not set* | Array of numbers |  | 
| min (Min) | *not set* | [Min (Min)](#min-min) item |  | 

###### Max (Max)

###### Max Properties

**JSON path:** `minecraft:voxel_shape > shape > boxes > max`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

###### Min (Min)

Same structure as [Max (Max)](#max-max).
