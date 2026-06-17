---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_curve_linear"
description: "Describes the minecraft:particle_curve_linear particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_curve_linear

Creates animation curves using linear interpolation between keyframe values. Define input range and corresponding output values; the curve linearly blends between adjacent keyframes. Simpler than bezier curves but effective for straightforward animations like size growing, alpha fading, or color shifting over particle lifetime.


## Client Particles Particle Curve Linear Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| horizontal_range | 1 | Keyed set of strings |  | 
| horizontal_range (as Named set of objects) | *not set* | Key/item pairs of [Horizontal Range (Item Molang Expression)](#item-molang-expression) items |  | 
| horizontal_range (as Decimal number) | *not set* | Decimal number |  | 
| input | *not set* | Keyed set of strings |  | 
| input (as Named set of objects) | *not set* | Key/item pairs of [Input (Item Molang Expression)](#item-molang-expression) items |  | 
| input (as Decimal number) | *not set* | Decimal number |  | 
| nodes | *not set* | Keyed set of strings |  | 
| nodes (as Named set of objects) | *not set* | Key/item pairs of [Nodes (Item Molang Expression)](#item-molang-expression) items |  | 
| nodes (as Decimal number) | *not set* | Decimal number |  | 
| type | *not set* | Object |  | 

### Item Molang Expression

#### Item Molang Expression Properties

**JSON path:** `horizontal_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 