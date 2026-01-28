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

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. |  | 
| direction (Alternate 1) | *not set* | Molang array |  |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. |  | 
| offset (Alternate 1) | *not set* | Key/item pairs of [Offset](#offset) items |  |  | 
| offset (Alternate 2) | *not set* | Decimal number |  |  | 
| radius | 1 | Molang | The radius of the sphere. Can be a number or Molang expression. |  | 
| radius (Alternate 1) | *not set* | Key/item pairs of [Radius](#radius) items |  |  | 
| radius (Alternate 2) | *not set* | Decimal number |  |  | 
| surface_only | false | Boolean true/false |  |  | 

## Offset

#### Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Radius

#### Radius Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 