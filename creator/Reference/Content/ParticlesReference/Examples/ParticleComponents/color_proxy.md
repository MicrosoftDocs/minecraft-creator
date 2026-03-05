---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:color_proxy"
description: "Describes the minecraft:color_proxy particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:color_proxy

Defines color gradients with smooth interpolation for particle effects. Use this to create particles that change color over their lifetime—from bright flames fading to smoke, magical auras shifting hues, or explosion flashes dimming over time. The gradient maps time points to colors, while the interpolant expression controls which color to sample.


## Client Particles Color Proxy Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| gradient | *not set* | Keyed set of strings |  | 
| interpolant | *not set* | Keyed set of strings |  | 
| interpolant (Interpolant) | *not set* | Key/item pairs of [Interpolant (Interpolant)](#interpolant-interpolant) items |  | 
| interpolant (as Decimal number) | *not set* | Decimal number |  | 

### Interpolant (Interpolant)

#### Interpolant Properties

**JSON path:** `interpolant`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 