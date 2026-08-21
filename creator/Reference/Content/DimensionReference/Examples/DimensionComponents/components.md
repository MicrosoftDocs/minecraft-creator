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

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| minecraft:default_biome | *not set* | [Default Biome](#dimension-defaultbiome) item |  | 
| minecraft:dimension_height | *not set* | [Dimension Height](#dimensionheight) item |  | 
| minecraft:generation | *not set* | [Generation](#dimension-generation) item |  | 

### Dimension DefaultBiome

#### Dimension DefaultBiome Properties

**JSON path:** `minecraft:default_biome`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| biome | *not set* | String |  | 

### DimensionHeight

#### DimensionHeight Properties

**JSON path:** `minecraft:dimension_height`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| height_range | *not set* | Integer number |  | 
| min_y | *not set* | Integer number |  | 

### Dimension Generation
Specifies the generator type used for world generation in the dimension.


#### Dimension Generation Properties

**JSON path:** `minecraft:generation`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| generator_type | *not set* | String |  | 