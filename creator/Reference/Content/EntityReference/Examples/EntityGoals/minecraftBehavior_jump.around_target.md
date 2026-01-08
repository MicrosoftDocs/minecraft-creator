---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.jump_around_target"
description: "Describes the minecraft:behavior.jump_around_target ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.jump_around_target

Allows an entity to jump around a target.

> [!Note]
> This item requires a format version of at least 1.21.30.


## Jump Around Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| check_collision | false | Boolean true/false | Enables collision checks when calculating the jump. Setting check_collision to true may affect performance and should be used with care. |  | 
| entity_bounding_box_scale | 0.7 | Decimal number | Scaling temporarily applied to the entity's AABB bounds when jumping. A smaller bounding box reduces the risk of collisions during the jump. When check_collision is true it also increases the chance of being able to jump when close to obstacles. | Breeze: `0.7` | 
| filters | *not set* | Minecraft filter | Conditions that need to be met for the behavior to start. | Breeze: `{"all_of":[{"any_of":[{"test":"in_water","value":true},{"test":"on_ground","value":true}]},{"test":"is_riding","value":false},{"test":"in_lava","value":false}]}` | 
| jump_angles | [ 40.0, 55.0, 60.0, 75.0, 80.0 ] | Array of strings | The jump angles in float degrees that are allowed when performing the jump. The order in which the angles are chosen is randomized. | Breeze: `[40,55,60,75,80]` | 
| jump_cooldown_duration | 0.5 | Decimal number | The time in seconds to spend in cooldown before this goal can be used again. | Breeze: `0.5` | 
| jump_cooldown_when_hurt_duration | 0.1 | Decimal number | The time in seconds to spend in cooldown after being hurt before this goal can be used again. | Breeze: `0.1` | 
| landing_distance_from_target | *not set* | Range of integers | The range deciding how close to and how far away from the target the landing position can be when jumping. | Breeze: `[4,8]` | 
| landing_position_spread_degrees | 90 | Integer number | This angle (in degrees) is used for controlling the spread when picking a landing position behind the target. A zero spread angle means the landing position will be straight behind the target with no variance. A 90 degree spread angle means the landing position can be up to 45 degrees to the left and to the right of the position straight behind the target's view direction. | Breeze: `90` | 
| last_hurt_duration | 2 | Decimal number | If the entity was hurt within these last seconds, the jump_cooldown_when_hurt_duration will be used instead of jump_cooldown_duration. | Breeze: `2` | 
| line_of_sight_obstruction_height_ignore | 4 | Integer number | If the entity's line of sight towards its target is obstructed by an obstacle with a height below this number, the obstacle will be ignored, and the goal will try to find a valid landing position. | Breeze: `4` | 
| max_jump_velocity | 1.4 | Decimal number | Maximum velocity a jump can be performed at. | Breeze: `1.4` | 
| prepare_jump_duration | 0.5 | Decimal number | The time in seconds to spend preparing for the jump. | Breeze: `0.5` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Breeze: `5` | 
| required_vertical_space | 4 | Integer number | The number of blocks above the entity's head that has to be air for this goal to be usable. | Breeze: `4` | 
| snap_to_surface_block_range | 10 | Integer number | The number of blocks above and below from the jump target position that will be checked to find a surface to land on. | Breeze: `10` | 
| valid_distance_to_target | *not set* | Range of integers | Target needs to be within this range for the jump to happen. | Breeze: `[4,20]` | 

## Samples

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:behavior.jump_around_target": {
  "priority": 5,
  "filters": {
    "all_of": [
      {
        "any_of": [
          {
            "test": "in_water",
            "value": true
          },
          {
            "test": "on_ground",
            "value": true
          }
        ]
      },
      {
        "test": "is_riding",
        "value": false
      },
      {
        "test": "in_lava",
        "value": false
      }
    ]
  },
  "jump_cooldown_duration": 0.5,
  "jump_cooldown_when_hurt_duration": 0.1,
  "last_hurt_duration": 2,
  "prepare_jump_duration": 0.5,
  "max_jump_velocity": 1.4,
  "check_collision": false,
  "entity_bounding_box_scale": 0.7,
  "line_of_sight_obstruction_height_ignore": 4,
  "valid_distance_to_target": [
    4,
    20
  ],
  "landing_position_spread_degrees": 90,
  "landing_distance_from_target": [
    4,
    8
  ],
  "required_vertical_space": 4,
  "snap_to_surface_block_range": 10,
  "jump_angles": [
    40,
    55,
    60,
    75,
    80
  ]
}
```
