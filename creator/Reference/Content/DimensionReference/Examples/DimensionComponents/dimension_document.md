---
author: mammerla
ms.author: mikeam
title: "Dimensions Documentation - minecraft:dimension_document"
description: "Describes the minecraft:dimension_document dimension component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Dimensions Documentation - minecraft:dimension_document

A Minecraft Bedrock Edition dimension definition document. Dimensions define custom world spaces with configurable bounds and world generation settings. Custom dimensions can have their own terrain generation, height limits, and properties.


## Dimension Document Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version | The format version of this dimension file. Use '1.20.0' or later. |  | 
| minecraft:dimension_type | *not set* | [Dimension Type](#dimension-type) item | The dimension type definition containing description and components. |  | 

## Dimension Type

#### Dimension Type Definition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| components | *not set* | Object | Components that define the dimension's properties. |  | 
| description | *not set* | [Description](#description) item | Contains the dimension's unique identifier. |  | 

## Description

#### Dimension Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | Boolean true/false | The unique identifier for this dimension, e.g., 'custom:my_dimension'. |  | 