---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_shape_box"
description: "Describes the minecraft:emitter_shape_box particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_shape_box

Emits particles from random positions within a rectangular box volume. Define the box using half_dimensions (distance from center to each edge) and offset from the emitter. Particles can emit outward from spawn points, inward toward center, or in custom directions. Ideal for area effects like smoke filling a room, rain in a region, or magic barriers.


## Client Particles Emitter Shape Box Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. | 
| direction (as Molang array) | *not set* | Molang array |  | 
| half_dimensions | *not set* | Molang array | The half dimensions of the box, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| half_dimensions (Half Dimensions) | *not set* | Key/item pairs of [Half Dimensions (Half Dimensions)](#half-dimensions-half-dimensions) items |  | 
| half_dimensions (as Decimal number) | *not set* | Decimal number |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| offset (Offset) | *not set* | Key/item pairs of [Offset (Offset)](#offset-offset) items |  | 
| offset (as Decimal number) | *not set* | Decimal number |  | 
| surface_only | false | Boolean true/false |  | 

### Half Dimensions (Half Dimensions)

#### Half Dimensions Properties

**JSON path:** `half_dimensions`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Offset (Offset)

Same structure as [Half Dimensions (Half Dimensions)](#half-dimensions-half-dimensions).
