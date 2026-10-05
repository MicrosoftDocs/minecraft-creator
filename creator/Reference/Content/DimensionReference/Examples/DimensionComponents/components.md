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
| minecraft:clouds | *not set* | [Clouds](#dimension-clouds) item | Defines the cloud height in the custom dimension. | 
| minecraft:default_biome | *not set* | [Default Biome](#dimension-defaultbiome) item | Defines the biome used throughout the custom dimension. | 
| minecraft:dimension_height | *not set* | [Dimension Height](#dimensionheight) item | Defines the vertical bounds of the custom dimension. | 
| minecraft:generation | *not set* | [Generation](#dimension-generation) item | Defines how terrain is generated in the custom dimension. Only allows void generator. | 

### Dimension Clouds

#### Dimension Clouds Properties

**JSON path:** `minecraft:clouds`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| height | *not set* | Integer number | The Y coordinate at which clouds are rendered in the custom dimension. Defaults to 128 if this component is omitted. Value must be >= -512. Value must be <= 512. | 

### Dimension DefaultBiome

#### Dimension DefaultBiome Properties

**JSON path:** `minecraft:default_biome`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| biome | *not set* | String | The namespaced identifier of the biome used throughout the custom dimension. Defaults to minecraft:ocean if this component is omitted. | 

### DimensionHeight

#### DimensionHeight Properties

**JSON path:** `minecraft:dimension_height`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| height_range | *not set* | Integer number | The total vertical height of the custom dimension. Defaults to 384 if this component is omitted. Value must be >= 16. Value must be <= 1024. | 
| min_y | *not set* | Integer number | The minimum Y coordinate of the custom dimension. Defaults to -64 if this component is omitted. Value must be >= -512. Value must be <= 512. | 

### Dimension Generation
Specifies the generator type used for world generation in the dimension.


#### Dimension Generation Properties

**JSON path:** `minecraft:generation`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| generator_type | *not set* | String | The world generator type used by the custom dimension. | 