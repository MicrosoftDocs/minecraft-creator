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

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version | The format version of this voxel shape file. Currently 1.21.110. |  | 
| minecraft:voxel_shape | *not set* | [Voxel Shape](#voxel-shapes-voxelshapefile) item | The voxel shape definition container with description and shape data. |  | 

## Voxel Shapes VoxelShapeFile
Defines a complete voxel shape file.


#### Voxel Shapes VoxelShapeFile Properties

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