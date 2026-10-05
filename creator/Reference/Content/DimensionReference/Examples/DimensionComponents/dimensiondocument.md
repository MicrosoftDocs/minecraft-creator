---
author: mammerla
ms.author: mikeam
title: "Dimensions Documentation - minecraft:dimensiondocument"
description: "Describes the minecraft:dimensiondocument dimension component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Dimensions Documentation - minecraft:dimensiondocument

Represents the root document for a custom dimension definition.


## DimensionDocument Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | String | Version of the JSON schema for this file. | 
| minecraft:dimension | *not set* | [Dimension](#dimension) item | Defines a custom dimension. | 

### Dimension
Defines a custom dimension with its description and components.


#### Dimension Properties

**JSON path:** `minecraft:dimension`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| components | *not set* | [Components](#dimension-components) item | Contains the components that configure the custom dimension. | 
| description | *not set* | [Description](#dimension-description) item | Contains identifying information for the custom dimension. | 

#### Dimension Components
Specifies the components that define dimension properties such as bounds and generation.


##### Dimension Components Properties

**JSON path:** `minecraft:dimension > components`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| minecraft:clouds | *not set* | [Clouds](#dimension-clouds) item | Defines the cloud height in the custom dimension. | 
| minecraft:default_biome | *not set* | [Default Biome](#dimension-defaultbiome) item | Defines the biome used throughout the custom dimension. | 
| minecraft:dimension_height | *not set* | [Dimension Height](#dimensionheight) item | Defines the vertical bounds of the custom dimension. | 
| minecraft:generation | *not set* | [Generation](#dimension-generation) item | Defines how terrain is generated in the custom dimension. Only allows void generator. | 

##### Dimension Clouds

###### Dimension Clouds Properties

**JSON path:** `minecraft:dimension > components > minecraft:clouds`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| height | *not set* | Integer number | The Y coordinate at which clouds are rendered in the custom dimension. Defaults to 128 if this component is omitted. Value must be >= -512. Value must be <= 512. | 

##### Dimension DefaultBiome

###### Dimension DefaultBiome Properties

**JSON path:** `minecraft:dimension > components > minecraft:default_biome`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| biome | *not set* | String | The namespaced identifier of the biome used throughout the custom dimension. Defaults to minecraft:ocean if this component is omitted. | 

##### DimensionHeight

###### DimensionHeight Properties

**JSON path:** `minecraft:dimension > components > minecraft:dimension_height`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| height_range | *not set* | Integer number | The total vertical height of the custom dimension. Defaults to 384 if this component is omitted. Value must be >= 16. Value must be <= 1024. | 
| min_y | *not set* | Integer number | The minimum Y coordinate of the custom dimension. Defaults to -64 if this component is omitted. Value must be >= -512. Value must be <= 512. | 

##### Dimension Generation
Specifies the generator type used for world generation in the dimension.


###### Dimension Generation Properties

**JSON path:** `minecraft:dimension > components > minecraft:generation`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| generator_type | *not set* | String | The world generator type used by the custom dimension. | 

#### Dimension Description
Declares the unique identifier for a custom dimension that players can travel to. The identifier must use namespace:name format (like 'mypack:custom_dimension') and is used by commands, portals, and scripts to reference this dimension. Every custom dimension requires a description with a valid identifier.


##### Dimension Description Properties

**JSON path:** `minecraft:dimension > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | The namespaced identifier for the custom dimension. | 