---
author: mammerla
ms.author: mikeam
title: "Dimensions Documentation - minecraft:components"
description: "Describes the minecraft:components dimension component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Dimensions Documentation - minecraft:components

Specifies the components that define dimension properties such as bounds and generation.


## Dimension Components Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minecraft:dimension_bounds | {"max":0,"min":0} | [Dimension Bounds](#dimension-bounds) item |  |  | 
| minecraft:generation | *not set* | [Generation](#dimension-generation) item |  |  | 

## Dimension Bounds
Defines the minimum and maximum vertical bounds for a dimension.


#### Dimension Bounds Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Integer number |  |  | 
| min | *not set* | Integer number |  |  | 

## Dimension Generation
Specifies the generator type used for world generation in the dimension.


#### Dimension Generation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| generator_type | *not set* | String |  |  | 