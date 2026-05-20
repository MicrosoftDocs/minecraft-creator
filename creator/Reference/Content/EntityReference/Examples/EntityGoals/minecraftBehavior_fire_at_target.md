---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.fire_at_target"
description: "Describes the minecraft:behavior.fire_at_target ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.fire_at_target

Allows an entity to attack by firing a shot with a delay. Anchor and offset parameters of this component overrides the anchor and offset from projectile component.

> [!Note]
> This item requires a format version of at least 1.21.30.


## Entity Fire At Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_cooldown | 0.5 | Decimal number | The cooldown time in seconds before this goal can be used again. | Breeze: `0.5` | 
| attack_range | {"max":0,"min":0} | [Attack Range](#item-floatrange) item | Target needs to be within this range for the attack to happen. | Breeze: `[0,16]` | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions that need to be met for the behavior to start. | Breeze: `{"all_of":[{"test":"is_navigating","value":false}]}` | 
| filters (Alternate 1) | *not set* | Object |  |  | 
| max_head_rotation_x | 30 | Decimal number | Maximum head rotation (in degrees), on the X-axis, that this entity can apply while trying to look at the target. |  | 
| max_head_rotation_y | 30 | Decimal number | Maximum head rotation (in degrees), on the Y-axis, that this entity can apply while trying to look at the target. |  | 
| owner_anchor | 2 | Object | Entity anchor for the projectile spawn location. | Breeze: `2` | 
| owner_offset | [0, 0, 0] | Array of numbers | Offset vector from the owner_anchor. | Breeze: `[0,0.3,0]` | 
| owner_offset (Owner Offset) | *not set* | [Owner Offset (Owner Offset)](#owner-offset-owner-offset) item |  |  | 
| post_shoot_delay | 0.20000000298023224 | Decimal number | Time in seconds between firing the projectile and ending the goal. | Breeze: `0.2` | 
| pre_shoot_delay | 0.75 | Decimal number | Time in seconds before firing the projectile. | Breeze: `0.75` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Breeze: `2` | 
| projectile_def |  | String | Actor definition to use as projectile for the ranged attack. The actor must be a projectile. This field is required for the goal to be usable. | Breeze: `"minecraft:breeze_wind_charge_projectile"` | 
| ranged_fov | 90 | Decimal number | Field of view (in degrees) when using sensing to detect a target for attack. | Breeze: `90` | 
| target_anchor | 2 | Object | Entity anchor for projectile target. |  | 
| target_offset | [0, 0, 0] | Array of numbers | Offset vector from the target_anchor. | Breeze: `[0,0.5,0]` | 
| target_offset (Target Offset) | *not set* | [Target Offset (Target Offset)](#target-offset-target-offset) item |  |  | 

### Item FloatRange
Specifies a numeric range between minimum and maximum values for randomized item properties. Used for variable durability, damage ranges, or timing intervals. The game picks a random value within the range when the property is evaluated, adding natural variation to item behavior.


#### Item FloatRange Properties

**JSON path:** `attack_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

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

### Owner Offset (Owner Offset)

#### Owner Offset Properties

**JSON path:** `owner_offset`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

### Target Offset (Target Offset)

Same structure as [Owner Offset (Owner Offset)](#owner-offset-owner-offset).


## Samples

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:behavior.fire_at_target": {
  "post_shoot_delay": 0.2,
  "attack_cooldown": 0.5,
  "attack_range": [
    0,
    16
  ],
  "filters": {
    "all_of": [
      {
        "test": "is_navigating",
        "value": false
      }
    ]
  },
  "owner_anchor": 2,
  "owner_offset": [
    0,
    0.3,
    0
  ],
  "pre_shoot_delay": 0.75,
  "priority": 2,
  "projectile_def": "minecraft:breeze_wind_charge_projectile",
  "ranged_fov": 90,
  "target_anchor": 0,
  "target_offset": [
    0,
    0.5,
    0
  ]
}
```
