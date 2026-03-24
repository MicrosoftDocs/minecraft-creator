---
author: mammerla
ms.author: mikeam
title: "Voxel Shapes Documentation - minecraft:voxelshapefile"
description: "Describes the minecraft:voxelshapefile voxel shape component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Voxel Shapes Documentation - minecraft:voxelshapefile

Defines a complete voxel shape file.


## Voxel Shapes VoxelShapeFile Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#voxel-shapes-description) item |  | 
| shape | *not set* | [Shape](#voxel-shapes-shape) item |  | 

### Voxel Shapes Description
Defines voxel shape identifier.


#### Voxel Shapes Description Properties

**JSON path:** `description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | Object |  | 

### Voxel Shapes Shape
Defines a voxel shape with boxes.


#### Voxel Shapes Shape Properties

**JSON path:** `shape`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| boxes | *not set* | Array of [Boxes](#voxel-shapes-box) items |  | 

#### Voxel Shapes Box
Defines a bounding box with min and max coordinates.


##### Voxel Shapes Box Properties

**JSON path:** `shape > boxes`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | *not set* | Array of numbers |  | 
| max (Max) | *not set* | [Max (Max)](#max-max) item |  | 
| min | *not set* | Array of numbers |  | 
| min (Min) | *not set* | [Min (Min)](#min-min) item |  | 

##### Max (Max)

###### Max Properties

**JSON path:** `shape > boxes > max`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

##### Min (Min)

Same structure as [Max (Max)](#max-max).
