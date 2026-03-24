---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_around_target"
description: "Describes the minecraft:behavior.move_around_target ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_around_target

Allows an entity to move around a target.If the entity is too close(i.e.closer than destination range min and height difference limit) it will try to move away from its target.If the entity is too far away from its target it will try to move closer to a random position within the destination range.A randomized amount of those positions will be behind the target, and the spread can be tweaked with 'destination_pos_spread_degrees'.

> [!Note]
> This item requires a format version of at least 1.21.30.


## Entity Move Around Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| destination_pos_spread_degrees | 90 | Decimal number | This angle (in degrees) is used for controlling the spread when picking a destination position behind the target. | Breeze: `360` | 
| destination_position_range | {"max":8,"min":4} | [Destination Position Range](#item-components-floatrange) item | The range of distances from the target entity within which the goal should look for a position to move the owner entity to. | Breeze: `[4,8]` | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions that need to be met for the behavior to start. | Breeze: `{"all_of":[{"test":"on_ground","value":true},{"operator":"<=","test":"target_distance","subject":"self","value":24}]}` | 
| filters (Alternate 1) | *not set* | Object |  |  | 
| height_difference_limit | 10 | Decimal number | Distance in height (in blocks) between the owner entity and the target has to be less than this value when owner checks if it is too close and should move away from the target. |  | 
| horizontal_search_distance | 5 | Integer number | Horizontal search distance (in blocks) when searching for a position to move away from target. |  | 
| movement_speed | 0.6000000238418579 | Decimal number | The speed with which the entity should move to its target position. | Breeze: `1.2` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Breeze: `3` | 
| vertical_search_distance | 5 | Integer number | Vertical search distance (in blocks) when searching for a position to move away from target. |  | 

### destination_pos_spread_degrees

This angle (in degrees) is used for controlling the spread when picking a destination position behind the target. A zero spread angle means the destination position will be straight behind the target with no variance. A 90 degree spread angle means the destination position can be up to 45 degrees to the left and to the right of the position straight behind the target's view direction.

### height_difference_limit

Distance in height (in blocks) between the owner entity and the target has to be less than this value when owner checks if it is too close and should move away from the target. This value needs to be bigger than zero for the move away logic to trigger.


### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `destination_position_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

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

## Samples

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:behavior.move_around_target": {
  "destination_pos_spread_degrees": 360,
  "destination_position_range": [
    4,
    8
  ],
  "priority": 3,
  "filters": {
    "all_of": [
      {
        "test": "on_ground",
        "value": true
      },
      {
        "operator": "<=",
        "test": "target_distance",
        "subject": "self",
        "value": 24
      }
    ]
  },
  "movement_speed": 1.2
}
```
