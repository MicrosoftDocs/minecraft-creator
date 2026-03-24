---
author: mammerla
ms.author: mikeam
title: "Voxel Shapes Documentation - minecraft:shape"
description: "Describes the minecraft:shape voxel shape component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Voxel Shapes Documentation - minecraft:shape

Defines a voxel shape with boxes.


## Voxel Shapes Shape Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| boxes | *not set* | Array of [Boxes](#voxel-shapes-box) items |  | 

### Voxel Shapes Box
Defines a bounding box with min and max coordinates.


#### Voxel Shapes Box Properties

**JSON path:** `boxes`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | *not set* | Array of numbers |  | 
| max (Max) | *not set* | [Max (Max)](#max-max) item |  | 
| min | *not set* | Array of numbers |  | 
| min (Min) | *not set* | [Min (Min)](#min-min) item |  | 

#### Max (Max)

##### Max Properties

**JSON path:** `boxes > max`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

#### Min (Min)

Same structure as [Max (Max)](#max-max).
