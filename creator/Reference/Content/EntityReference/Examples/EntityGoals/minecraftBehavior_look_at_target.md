---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.look_at_target"
description: "Describes the minecraft:behavior.look_at_target ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.look_at_target

Compels an entity to look at the target by rotating the head bone pose within a set limit.

> [!Note]
> Requires a target in order to work properly. Entities can generate targets via one of the following behaviors:
> 
> * [minecraft:behavior.nearest_attackable_target](../EntityGoals/minecraftBehavior_nearest_attackable_target.md)
> * [minecraft:behavior.hurt_by_target](../EntityGoals/minecraftBehavior_hurt_by_target.md)

## Entity Look At Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| angle_of_view_horizontal | 360 | Integer number | The angle in degrees that the mob can see rotated on the Y-axis (left-right). Value must be <= 360. |  | 
| angle_of_view_vertical | 360 | Integer number | The angle in degrees that the mob can see rotated on the X-axis (up-down). Value must be <= 360. |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| look_distance | 8 | Decimal number | The distance in blocks from which the entity will look at the nearest entity. | Axe Turret: `12`, Bow Turret: `19`, Crossbow Turret: `15` | 
| look_time | {"max":4,"min":2} | [Look Time](#item-components-floatrange) item | Time range to look at the nearest entity. | Axe Turret: `[1,5]` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Wither: `5`, Axe Turret: `2`, Bow Turret: `1` | 
| probability | 0.019999999552965164 | Decimal number | The probability of looking at the target. A value of 1.00 is 100%. Value must be <= 1. | Axe Turret: `1` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `look_time`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

## Samples

#### [Wither](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither.json)


```json
"minecraft:behavior.look_at_target": {
  "priority": 5
}
```

#### [Axe Turret](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/axe_turret.behavior.json)


```json
"minecraft:behavior.look_at_target": {
  "priority": 2,
  "look_distance": 12,
  "probability": 1,
  "look_time": [
    1,
    5
  ]
}
```

#### [Bow Turret](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/bow_turret.behavior.json)


```json
"minecraft:behavior.look_at_target": {
  "priority": 1,
  "look_distance": 19,
  "probability": 1,
  "look_time": [
    1,
    5
  ]
}
```

#### [Crossbow Turret](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/crossbow_turret.behavior.json)


```json
"minecraft:behavior.look_at_target": {
  "priority": 1,
  "look_distance": 15,
  "probability": 1,
  "look_time": [
    1,
    5
  ]
}
```

#### [Shbullet Turret](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/shbullet_turret.behavior.json)


```json
"minecraft:behavior.look_at_target": {
  "priority": 1,
  "look_distance": 12,
  "probability": 1,
  "look_time": [
    1,
    5
  ]
}
```
