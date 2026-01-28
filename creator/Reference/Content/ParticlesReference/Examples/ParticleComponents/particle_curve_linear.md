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

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| horizontal_range | 1 | Keyed set of strings |  |  | 
| horizontal_range (Alternate 1) | *not set* | Key/item pairs of [Horizontal Range](#horizontal-range) items |  |  | 
| horizontal_range (Alternate 2) | *not set* | Decimal number |  |  | 
| input | *not set* | Keyed set of strings |  |  | 
| input (Alternate 1) | *not set* | Key/item pairs of [Input](#input) items |  |  | 
| input (Alternate 2) | *not set* | Decimal number |  |  | 
| nodes | *not set* | Keyed set of strings |  |  | 
| nodes (Alternate 1) | *not set* | Key/item pairs of [Nodes](#nodes) items |  |  | 
| nodes (Alternate 2) | *not set* | Decimal number |  |  | 
| type | *not set* | Object |  |  | 

## Horizontal Range

#### Horizontal Range Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Input

#### Input Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Nodes

#### Nodes Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 