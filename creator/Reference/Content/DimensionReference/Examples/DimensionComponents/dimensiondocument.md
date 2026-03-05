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
| minecraft:dimension | *not set* | [Dimension](#dimension) item |  | 

### Dimension
Defines a custom dimension with its description and components.


#### Dimension Properties

**JSON path:** `minecraft:dimension`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| components | *not set* | [Components](#dimension-components) item |  | 
| description | *not set* | [Description](#dimension-description) item |  | 

#### Dimension Components
Specifies the components that define dimension properties such as bounds and generation.


##### Dimension Components Properties

**JSON path:** `minecraft:dimension > components`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| minecraft:dimension_bounds | {"max":0,"min":0} | [Dimension Bounds](#dimension-bounds) item |  | 
| minecraft:generation | *not set* | [Generation](#dimension-generation) item |  | 

##### Dimension Bounds
Defines the minimum and maximum vertical bounds for a dimension.


###### Dimension Bounds Properties

**JSON path:** `minecraft:dimension > components > minecraft:dimension_bounds`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | *not set* | Integer number |  | 
| min | *not set* | Integer number |  | 

##### Dimension Generation
Specifies the generator type used for world generation in the dimension.


###### Dimension Generation Properties

**JSON path:** `minecraft:dimension > components > minecraft:generation`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| generator_type | *not set* | String |  | 

#### Dimension Description
Declares the unique identifier for a custom dimension that players can travel to. The identifier must use namespace:name format (like 'mypack:custom_dimension') and is used by commands, portals, and scripts to reference this dimension. Every custom dimension requires a description with a valid identifier.


##### Dimension Description Properties

**JSON path:** `minecraft:dimension > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String |  | 