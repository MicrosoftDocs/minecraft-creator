---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_appearance_tinting"
description: "Describes the minecraft:particle_appearance_tinting particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_appearance_tinting

Applies color tinting to particle textures, from simple solid colors to complex gradients. Use hex colors for static tints, RGBA arrays with Molang for dynamic colors, or gradient objects to blend between colors over particle lifetime. Essential for flames fading orange-to-gray, magical auras shifting colors, or any effect needing color variation.


## Client Particles Particle Appearance Tinting Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | Molang array | The color of the particle, can be a hex color string (like '#RRGGBB'), an array of [r, g, b, a] values (numbers or Molang), or an object with gradient and interpolant. Value must have at least 3 items. Value must have at most 4 items. |  | 
| color (Alternate 1) | *not set* | String | A hex color string like '#dfe5ed' or '#RRGGBBAA'. |  | 
| color (Alternate 2) | *not set* | [Color](#color) item |  |  | 

## Color

#### Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| gradient | *not set* | String | Color gradient - can be an array of color arrays (each being [r, g, b, a] molang/numbers), or an object mapping time points to hex color strings or color arrays. |  | 
| gradient (Alternate 1) | *not set* | Keyed set of strings | Object mapping time points to hex color strings. |  | 
| gradient (Alternate 2) | *not set* | Object | Object mapping time points to color arrays with Molang/numbers. |  | 
| interpolant | *not set* | Molang | A Molang expression that determines which gradient color to use. |  | 