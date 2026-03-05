---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_shape_disc"
description: "Describes the minecraft:emitter_shape_disc particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_shape_disc

Emits particles from random positions on a flat circular disc. Configure the radius and plane normal to control disc size and orientation. Surface_only restricts spawns to the disc edge for ring effects. Perfect for ground-based effects like summoning circles, shockwaves, splash impacts, and aura rings around entities.


## Client Particles Emitter Shape Disc Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. | 
| direction (as Molang array) | *not set* | Molang array |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| offset (Offset) | *not set* | Key/item pairs of [Offset (Offset)](#offset-offset) items |  | 
| offset (as Decimal number) | *not set* | Decimal number |  | 
| plane_normal | [0, 1, 0] | String | The normal vector of the disc plane. Can be 'x', 'y', 'z', or an array of [x, y, z] values. | 
| plane_normal (as Molang array) | *not set* | Molang array |  | 
| radius | 1 | Molang | The radius of the disc. Can be a number or Molang expression. | 
| radius (Radius) | *not set* | Key/item pairs of [Radius (Radius)](#radius-radius) items |  | 
| radius (as Decimal number) | *not set* | Decimal number |  | 
| surface_only | false | Boolean true/false |  | 

### Offset (Offset)

#### Offset Properties

**JSON path:** `offset`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Radius (Radius)

Same structure as [Offset (Offset)](#offset-offset).
