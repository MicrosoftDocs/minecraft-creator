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

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#voxel-shapes-description) item |  |  | 
| shape | *not set* | [Shape](#voxel-shapes-shape) item |  |  | 

## Voxel Shapes Description
Defines voxel shape identifier.


#### Voxel Shapes Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | Object |  |  | 

## Voxel Shapes Shape
Defines a voxel shape with boxes.


#### Voxel Shapes Shape Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| boxes | *not set* | [Boxes](#voxel-shapes-box) item |  |  | 

## Voxel Shapes Box
Defines a bounding box with min and max coordinates.


#### Voxel Shapes Box Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Array of numbers |  |  | 
| max (Alternate 1) | *not set* | [Max](#max) item |  |  | 
| min | *not set* | Array of numbers |  |  | 
| min (Alternate 1) | *not set* | [Min](#min) item |  |  | 

## Max

#### Max Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | 0 | Decimal number |  |  | 
| y | 0 | Decimal number |  |  | 
| z | 0 | Decimal number |  |  | 

## Min

#### Min Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | 0 | Decimal number |  |  | 
| y | 0 | Decimal number |  |  | 
| z | 0 | Decimal number |  |  | 