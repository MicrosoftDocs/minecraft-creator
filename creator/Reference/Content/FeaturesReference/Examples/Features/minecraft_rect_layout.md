---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:rect_layout"
description: "Describes the minecraft:rect_layout feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:rect_layout

> [!IMPORTANT]
> This type is internal to vanilla Minecraft usage, and is not functional or supported within custom Minecraft content.

Arranges features in a rectangular grid pattern during world generation. Configure the grid dimensions, spacing, and which features to place at each position. Useful for orderly structures like crop fields, orchard trees, gravestones, or any repeating pattern that should fill a defined area.


## Rect Layout Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item |  |  | 
| feature_areas | *not set* | Array of [Feature Areas](#feature-areas) items |  |  | 
| feature_areas (Alternate 1) | *not set* | Array of strings |  |  | 
| format_version | *not set* | String |  |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Feature Areas

#### Feature Areas Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| [0..0] | *not set* | Integer number |  |  | 
| [1..1] | *not set* | Integer number |  |  | 
| area_dimensions | *not set* | Array of strings | Dimensions (size) of the associated Feature. |  | 