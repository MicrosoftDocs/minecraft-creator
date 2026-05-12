---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_look_around"
description: "Describes the minecraft:behavior.random_look_around ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_look_around

Allows the mob to randomly look around.


## Entity Random Look Around Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| look_time | {"max":40,"min":20} | [Look Time](#item-components-intrange) item | The range of time in seconds the mob will stay looking in a random direction before looking elsewhere |  | 
| max_angle_of_view_horizontal | 180 | Decimal number | The rightmost angle a mob can look at on the horizontal plane with respect to its initial facing direction. |  | 
| min_angle_of_view_horizontal | -180 | Decimal number | The leftmost angle a mob can look at on the horizontal plane with respect to its initial facing direction. |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `8`, Blaze: `5`, Cave Spider: `7` | 
| probability | 0.019999999552965164 | Decimal number | The probability of randomly looking around. |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Item Components IntRange
Has minimum and maximum integer values.


#### Item Components IntRange Properties

**JSON path:** `look_time`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Integer number |  | 
| min | 0 | Integer number |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 8
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 5
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 7
}
```
