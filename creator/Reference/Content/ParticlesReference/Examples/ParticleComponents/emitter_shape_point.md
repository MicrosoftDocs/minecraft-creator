---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_shape_point"
description: "Describes the minecraft:emitter_shape_point particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_shape_point

Emits all particles from a single point in space, offset from the emitter origin. This is the simplest and most common emission shape—all particles spawn at the same location and spread outward based on their initial velocity. Used for torches, candles, sparks, magic projectile cores, and any effect with a focused emission source.


## Client Particles Emitter Shape Point Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | Molang array | The direction of particle emission, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. |  | 
| direction (Alternate 1) | *not set* | Key/item pairs of [Direction](#direction) items |  |  | 
| direction (Alternate 2) | *not set* | Decimal number |  |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. |  | 
| offset (Alternate 1) | *not set* | Key/item pairs of [Offset](#offset) items |  |  | 
| offset (Alternate 2) | *not set* | Decimal number |  |  | 

## Direction

#### Direction Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Offset

#### Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 