---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:attack"
description: "Describes the minecraft:attack entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:attack

Defines an entity's melee attack damage and any additional status effects applied on hit. Typical damage values range from 3 (zombie, creeper) to 7-21 (iron golem).


## Attack Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage | *not set* | Decimal number | Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it. Can be a number, an array [min, max], or an object with range_min and range_max properties. |  | 
| damage (Alternate 1) | *not set* | Array of [Damage](#damage) items |  |  | 
| damage (Alternate 2) | *not set* | [Damage](#damage) item |  |  | 
| effect_duration | 0 | Decimal number | Duration in seconds of the status ailment applied to the damaged entity. |  | 
| effect_name | *not set* | String | Identifier of the status ailment to apply to an entity attacked by this entity's melee attack. |  | 

## Damage

#### Damage Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| 0 | *not set* | Decimal number |  |  | 
| 1 | *not set* | Decimal number |  |  | 

## Samples
