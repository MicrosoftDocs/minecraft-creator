---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:health"
description: "Describes the minecraft:health entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:health

Defines the health pool for an entity, measured in health points (1 point = half a heart). Typical values: cow (10), zombie (20), iron golem (100), wither (600).


## Health Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | 20 | Integer number | Maximum health this entity can have. Can be higher than the starting value to allow healing beyond initial health. |  | 
| value | 20 | Integer number | Starting health for this entity in health points (1 point = half a heart). |  | 
| value (Alternate 1) | *not set* | [Value](#value) item |  |  | 

## Value

#### Value Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Integer number |  |  | 
| range_min | *not set* | Integer number |  |  | 