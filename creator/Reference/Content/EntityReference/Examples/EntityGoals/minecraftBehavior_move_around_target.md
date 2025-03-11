---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_around_target"
description: "Describes the minecraft:behavior.move_around_target ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_around_target

Allows an entity to move around a target. If the entity is too close (i.e. closer than destination range min and height difference limit) it will try to move away from its target. If the entity is too far away from its target it will try to move closer to a random position within the destination range. A randomized amount of those positions will be behind the target, and the spread can be tweaked with 'destination_pos_spread_degrees'.


## Move Around Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| destination_pos_spread_degrees | 90 | Decimal number | This angle (in degrees) is used for controlling the spread when picking a destination position behind the target. A zero spread angle means the destination position will be straight behind the target with no variance. A 90 degree spread angle means the destination position can be up to 45 degrees to the left and to the right of the position straight behind the target's view direction.. | Breeze: `360` | 
| destination_position_range | *not set* | Range of integers | The range of distances from the target entity within which the goal should look for a position to move the owner entity to. | Breeze: `[4,8]` | 
| filters | *not set* | Minecraft filter | Conditions that need to be met for the behavior to start. | Breeze: `{"all_of":[{"test":"on_ground","value":true},{"test":"target_distance","subject":"self","value":24,"operator":"<="}]}` | 
| height_difference_limit | 10 | Decimal number | Distance in height (in blocks) between the owner entity and the target has to be less than this value when owner checks if it is too close and should move away from the target. This value needs to be bigger than zero for the move away logic to trigger. |  | 
| horizontal_search_distance | 5 | Integer number | Horizontal search distance (in blocks) when searching for a position to move away from target. |  | 
| movement_speed | 0.6 | Decimal number | The speed with which the entity should move to its target position. | Breeze: `1.2` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Breeze: `3` | 
| vertical_search_distance | 5 | Integer number | Vertical search distance (in blocks) when searching for a position to move away from target. |  | 

## Samples

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:behavior.move_around_target": {
  "priority": 3,
  "destination_position_range": [
    4,
    8
  ],
  "movement_speed": 1.2,
  "destination_pos_spread_degrees": 360,
  "filters": {
    "all_of": [
      {
        "test": "on_ground",
        "value": true
      },
      {
        "test": "target_distance",
        "subject": "self",
        "value": 24,
        "operator": "<="
      }
    ]
  }
}
```
