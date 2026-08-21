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

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| input | *not set* | Keyed set of strings |  | 
| input (as Named set of objects) | *not set* | Key/item pairs of [Input (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| input (as Decimal number) | *not set* | Decimal number |  | 
| nodes | *not set* | Object |  | 
| type | *not set* | String |  | 

### Legacy Molang Expression

#### Legacy Molang Expression Properties

**JSON path:** `input`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 