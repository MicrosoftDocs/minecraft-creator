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

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| fast_skip_data | *not set* | [Fast Skip Data](#fast-skip-data-choices) choices | The jump data used for the fast skip. |  | 
| regular_skip_data | *not set* | [Regular Skip Data](#regular-skip-data-choices) choices | The jump data used for the regular skip. |  | 

### Fast Skip Data choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| animation_duration | Animation Duration | Duration of the jump animation.|
| distance_scale | Distance Scale | The multiplier applied to horizontal velocity when jumping.|
| height | Height | The force applied vertically when jumping.|
| jump_delay | Jump Delay | Amount of ticks between sequential jumps.|

### Regular Skip Data choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| animation_duration | Animation Duration | Duration of the jump animation.|
| distance_scale | Distance Scale | The multiplier applied to horizontal velocity when jumping.|
| height | Height | The force applied vertically when jumping.|
| jump_delay | Jump Delay | Amount of ticks between sequential jumps.|

## Samples

#### [Rabbit](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/rabbit.json)


```json
"minecraft:jump.dynamic": {}
```
