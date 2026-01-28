---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:movement"
description: "Describes the minecraft:movement entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:movement

Defines the base movement speed of an entity. Typical values: creeper (0.2), cow (0.25), zombie baby (0.35).


## Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Decimal number | Maximum movement speed this entity can have. |  | 
| value | *not set* | Decimal number | The base movement speed value. Higher values result in faster movement. Can be a single number or a range object with range_min and range_max properties. |  | 
| value (Alternate 1) | *not set* | [Value](#value) item |  |  | 

## Value

#### Value Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Decimal number | Maximum movement speed |  | 
| range_min | *not set* | Decimal number | Minimum movement speed |  | 

## Samples
