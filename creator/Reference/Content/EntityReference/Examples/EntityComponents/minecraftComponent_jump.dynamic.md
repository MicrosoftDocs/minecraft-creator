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

Defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob.Requires `minecraft:movement.skip` to be used.


## Entity Dynamic Jump Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| fast_skip_data | {"animation_duration":1,"distance_scale":1,"height":0.10000000149011612,"jump_delay":30} | [Fast Skip Data](#entity-jumpdatadefinition) item | Jump data used while traveling quickly with skip movement. Object with the same shape as `regular_skip_data`. This item requires a format version of at least 1.26.0. | 
| regular_skip_data | {"animation_duration":1,"distance_scale":1,"height":0.10000000149011612,"jump_delay":30} | [Regular Skip Data](#entity-jumpdatadefinition) item | Jump data used during normal skip movement. | 

### regular_skip_data

Jump data used during normal skip movement. Object with optional `distance_scale` (horizontal velocity multiplier), `height` (vertical force), `jump_delay` (ticks between jumps), and `animation_duration` (jump animation length). This item requires a format version of at least 1.26.0.


### Entity JumpDataDefinition

#### Entity JumpDataDefinition Properties

**JSON path:** `fast_skip_data`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| animation_duration | 1 | Integer number | Duration of the jump animation. | 
| distance_scale | 1 | Decimal number | The multiplier applied to horizontal velocity when jumping. | 
| height | 0.10000000149011612 | Decimal number | The force applied vertically when jumping. | 
| jump_delay | 30 | Integer number | Amount of ticks between sequential jumps. | 

## Samples
