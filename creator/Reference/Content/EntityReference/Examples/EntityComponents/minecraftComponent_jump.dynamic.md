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
| fast_skip_data | *not set* | [Fast Skip Data](#fast-skip-data-choices) choices | The jump data used for the fast skip. | Rabbit: `{"distance_scale":1.75,"height":0.25,"jump_delay":7,"animation_duration":15}` | 
| regular_skip_data | *not set* | [Regular Skip Data](#regular-skip-data-choices) choices | The jump data used for the regular skip. | Rabbit: `{"distance_scale":0.8,"height":0.25,"jump_delay":15,"animation_duration":18}` | 

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
"minecraft:jump.dynamic": {
  "regular_skip_data": {
    "distance_scale": 0.8,
    "height": 0.25,
    "jump_delay": 15,
    "animation_duration": 18
  },
  "fast_skip_data": {
    "distance_scale": 1.75,
    "height": 0.25,
    "jump_delay": 7,
    "animation_duration": 15
  }
}
```
