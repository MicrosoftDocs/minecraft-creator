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


## Fire At Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_cooldown | 0.5 | Decimal number | The cooldown time in seconds before this goal can be used again. | Breeze: `0.5` | 
| attack_range | *not set* | Range of integers | Target needs to be within this range for the attack to happen. | Breeze: `[0,16]` | 
| filters | *not set* | Minecraft filter | Conditions that need to be met for the behavior to start. | Breeze: `{"all_of":[{"test":"is_navigating","value":false}]}` | 
| max_head_rotation_x | 30 | Decimal number | Maximum head rotation (in degrees), on the X-axis, that this entity can apply while trying to look at the target. |  | 
| max_head_rotation_y | 30 | Decimal number | Maximum head rotation (in degrees), on the Y-axis, that this entity can apply while trying to look at the target. |  | 
| owner_anchor | 2 | Integer number | Entity anchor for the projectile spawn location. | Breeze: `2` | 
| owner_offset | [0, 0, 0] | x, y, z coordinate array | Offset vector from the owner_anchor. | Breeze: `[0,0.3,0]` | 
| post_shoot_delay | 0.2 | Decimal number | Time in seconds between firing the projectile and ending the goal. | Breeze: `0.2` | 
| pre_shoot_delay | 0.75 | Decimal number | Time in seconds before firing the projectile. | Breeze: `0.75` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Breeze: `2` | 
| projectile_def | *not set* | String | Actor definition to use as projectile for the ranged attack. The actor must be a projectile. This field is required for the goal to be usable. | Breeze: `"minecraft:breeze_wind_charge_projectile"` | 
| ranged_fov | 90 | Decimal number | Field of view (in degrees) when using sensing to detect a target for attack. | Breeze: `90` | 
| target_anchor | 2 | Integer number | Entity anchor for projectile target. |  | 
| target_offset | [0, 0, 0] | x, y, z coordinate array | Offset vector from the target_anchor. | Breeze: `[0,0.5,0]` | 

## Samples

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:behavior.fire_at_target": {
  "projectile_def": "minecraft:breeze_wind_charge_projectile",
  "priority": 2,
  "filters": {
    "all_of": [
      {
        "test": "is_navigating",
        "value": false
      }
    ]
  },
  "attack_range": [
    0,
    16
  ],
  "attack_cooldown": 0.5,
  "pre_shoot_delay": 0.75,
  "post_shoot_delay": 0.2,
  "ranged_fov": 90,
  "owner_anchor": 2,
  "owner_offset": [
    0,
    0.3,
    0
  ],
  "target_anchor": 0,
  "target_offset": [
    0,
    0.5,
    0
  ]
}
```
