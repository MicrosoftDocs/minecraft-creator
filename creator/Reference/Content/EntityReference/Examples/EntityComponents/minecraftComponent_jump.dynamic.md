---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:jump.dynamic"
description: "Describes the minecraft:jump.dynamic entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:jump.dynamic

Defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob. Requires `minecraft:movement.skip` to be used.


## Dynamic Jump Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| fast_skip_data | *not set* | [Fast Skip Data](#fast-skip-data-choices) choices | Jump data used while traveling quickly with skip movement. Object with the same shape as `regular_skip_data`. This item requires a format version of at least 1.26.0. | 
| regular_skip_data | *not set* | [Regular Skip Data](#fast-skip-data-choices) choices | Jump data used during normal skip movement. | 

### regular_skip_data

Jump data used during normal skip movement. Object with optional `distance_scale` (horizontal velocity multiplier), `height` (vertical force), `jump_delay` (ticks between jumps), and `animation_duration` (jump animation length). This item requires a format version of at least 1.26.0.


### Fast Skip Data choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| animation_duration | Animation Duration | Duration of the jump animation.|
| distance_scale | Distance Scale | The multiplier applied to horizontal velocity when jumping.|
| height | Height | The force applied vertically when jumping.|
| jump_delay | Jump Delay | Amount of ticks between sequential jumps.|

## Samples
