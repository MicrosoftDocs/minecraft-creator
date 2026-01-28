---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_curve_bezier_chain"
description: "Describes the minecraft:particle_curve_bezier_chain particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_curve_bezier_chain

Creates smooth, organic animation curves using chained bezier segments. Unlike linear curves, bezier chains produce natural-feeling motion with acceleration and deceleration. Define control nodes that the curve passes through, with automatic smooth interpolation between them. Used for lifelike particle behaviors like gentle floating, heartbeat pulses, or wind gusts.


## Client Particles Particle Curve Bezier Chain Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| input | *not set* | Keyed set of strings |  |  | 
| input (Alternate 1) | *not set* | Key/item pairs of [Input](#input) items |  |  | 
| input (Alternate 2) | *not set* | Decimal number |  |  | 
| nodes | *not set* | Object |  |  | 
| type | *not set* | String |  |  | 

## Input

#### Input Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 