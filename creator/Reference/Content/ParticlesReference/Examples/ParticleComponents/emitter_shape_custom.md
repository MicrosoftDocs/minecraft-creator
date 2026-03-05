---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_shape_custom"
description: "Describes the minecraft:emitter_shape_custom particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_shape_custom

Emits particles from positions calculated by custom Molang expressions. Unlike preset shapes, this gives complete control over spawn locations using math expressions that can create rings, spirals, waves, or any procedural pattern. Use the offset expressions to define X, Y, Z coordinates relative to the emitter for complex artistic effects.


## Client Particles Emitter Shape Custom Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | [0, 0, 0] | Molang array | The direction of particle emission, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| direction (Direction) | *not set* | Key/item pairs of [Direction (Direction)](#direction-direction) items |  | 
| direction (as Decimal number) | *not set* | Decimal number |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| offset (Offset) | *not set* | Key/item pairs of [Offset (Offset)](#offset-offset) items |  | 
| offset (as Decimal number) | *not set* | Decimal number |  | 

### Direction (Direction)

#### Direction Properties

**JSON path:** `direction`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Offset (Offset)

Same structure as [Direction (Direction)](#direction-direction).
