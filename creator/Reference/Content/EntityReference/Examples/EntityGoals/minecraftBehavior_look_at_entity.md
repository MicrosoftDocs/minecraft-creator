---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.look_at_entity"
description: "Describes the minecraft:behavior.look_at_entity ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.look_at_entity

Compels an entity to look at a specific entity by rotating the `head` bone pose within a set limit.


## Entity Look At Entity Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| angle_of_view_horizontal | 360 | Integer number | The angle in degrees that the mob can see rotated on the Y-axis (left-right). Value must be <= 360. | Ravager: `45` | 
| angle_of_view_vertical | 360 | Integer number | The angle in degrees that the mob can see rotated on the X-axis (up-down). Value must be <= 360. |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Filter to determine the conditions for this mob to look at the entity | Evocation Illager: `{"test":"is_family","subject":"other","value":"mob"}` | 
| filters (Alternate 1) | *not set* | Object |  |  | 
| look_distance | 8 | Decimal number | The distance in blocks from which the entity will look at the nearest entity. | Evocation Illager: `8`, Vex: `6` | 
| look_time | {"max":4,"min":2} | [Look Time](#item-components-floatrange) item | Time range to look at the nearest entity. |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Evocation Illager: `10`, Vex: `9` | 
| probability | 0.019999999552965164 | Decimal number | The probability of looking at the target. A value of 1.00 is 100%. Value must be <= 1. | Vex: `0.02` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Filters

#### Filters Properties

**JSON path:** `filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `look_time`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

## Samples

#### [Vex](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/vex.json)


```json
"minecraft:behavior.look_at_entity": {
  "priority": 9,
  "look_distance": 6,
  "probability": 0.02,
  "filters": {
    "test": "is_family",
    "subject": "other",
    "value": "mob"
  }
}
```

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:behavior.look_at_entity": {
  "priority": 10,
  "look_distance": 8,
  "filters": {
    "test": "is_family",
    "subject": "other",
    "value": "mob"
  }
}
```

#### [Ravager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ravager.json)


```json
"minecraft:behavior.look_at_entity": {
  "priority": 10,
  "look_distance": 8,
  "angle_of_view_horizontal": 45,
  "filters": {
    "test": "is_family",
    "subject": "other",
    "value": "mob"
  }
}
```
