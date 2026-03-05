---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_shape_sphere"
description: "Describes the minecraft:emitter_shape_sphere particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_shape_sphere

Emits particles from random positions within a spherical volume. Configure the radius to set sphere size and surface_only to restrict spawns to the outer shell. Direction can be inward, outward, or custom. Ideal for explosions, magical orbs, bubble columns, mob spawn effects, and any effect needing uniform 3D distribution.


## Client Particles Emitter Shape Sphere Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. | 
| direction (as Molang array) | *not set* | Molang array |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| offset (Offset) | *not set* | Key/item pairs of [Offset (Offset)](#offset-offset) items |  | 
| offset (as Decimal number) | *not set* | Decimal number |  | 
| radius | 1 | Molang | The radius of the sphere. Can be a number or Molang expression. | 
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
