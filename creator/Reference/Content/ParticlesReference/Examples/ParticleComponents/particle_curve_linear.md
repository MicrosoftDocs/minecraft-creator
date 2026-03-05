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
| horizontal_range (Horizontal Range) | *not set* | Key/item pairs of [Horizontal Range (Horizontal Range)](#horizontal-range-horizontal-range) items |  | 
| horizontal_range (as Decimal number) | *not set* | Decimal number |  | 
| input | *not set* | Keyed set of strings |  | 
| input (Input) | *not set* | Key/item pairs of [Input (Input)](#input-input) items |  | 
| input (as Decimal number) | *not set* | Decimal number |  | 
| nodes | *not set* | Keyed set of strings |  | 
| nodes (Nodes) | *not set* | Key/item pairs of [Nodes (Nodes)](#nodes-nodes) items |  | 
| nodes (as Decimal number) | *not set* | Decimal number |  | 
| type | *not set* | Object |  | 

### Horizontal Range (Horizontal Range)

#### Horizontal Range Properties

**JSON path:** `horizontal_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Input (Input)

Same structure as [Horizontal Range (Horizontal Range)](#horizontal-range-horizontal-range).


### Nodes (Nodes)

Same structure as [Horizontal Range (Horizontal Range)](#horizontal-range-horizontal-range).
