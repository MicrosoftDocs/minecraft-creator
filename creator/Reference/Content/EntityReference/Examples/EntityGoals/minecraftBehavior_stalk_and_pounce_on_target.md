---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.stalk_and_pounce_on_target
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.stalk_and_pounce_on_target

`minecraft:behavior.stalk_and_pounce_on_target` allows an entity to stalk a specific target. Once within range of the target, the entity will then leap at the target and deal damage based upon its attack attribute.

> [!IMPORTANT]
> `minecraft:behavior.stalk_and_pounce_on_target` requires a target in order to work properly. Target can be determined by using one of the following behaviors:
>
>- [minecraft:behavior.nearest_attackable_target](minecraftBehavior_nearest_attackable_target.md)
>- [minecraft:behavior.hurt_by_target](minecraftBehavior_hurt_by_target.md)

> [!IMPORTANT]
> `minecraft:behavior.stalk_and_pounce_on_target` requires an attack attribute in order to work properly.
>
> `minecraft:attack`

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|interest_time| 2.0| Decimal|  The amount of time the mob will be interested before pouncing. This happens when the mob is within range of pouncing. |
|leap_distance| 0.8| Decimal| The distance in blocks the mob jumps in the direction of its target. |
|leap_height| 0.9| Decimal|  The height in blocks the mob jumps when leaping at its target. |
|max_stalk_dist| 10.0| Decimal|  The maximum distance away a target can be before the mob gives up on stalking. |
|pounce_max_dist| 5.0| Decimal|  The maximum distance away from the target in blocks to begin pouncing at the target. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|set_persistent| false| Boolean|  Allows the actor to be set to persist upon targeting a player. |
|stalk_speed| 1.2| Decimal| The movement speed in which you stalk your target. |
|strike_dist| 2.0| Decimal|  The max distance away from the target when landing from the pounce that will still result in damaging the target. |
|stuck_time| 2.0| Decimal|  The amount of time the mob will be stuck if they fail and land on a block they can be stuck on. |

## Example

```json
"minecraft:behavior.stalk_and_pounce_on_target":{
    "priority": 2,
    "stalk_speed": 0.8,
    "max_stalk_dist": 12.0,
    "leap_height": 0.7,
    "leap_dist": 0.65,
    "pounce_max_dist": 5.0,
    "interest_time": 4.0,
    "stuck_time": 2.0,
    "strike_dist": 2.0,
}
```

## Vanilla entities examples

### fox

```json
"minecraft:behavior.stalk_and_pounce_on_target": {
        "priority": 7,
        "stalk_speed": 1.2,
        "max_stalk_dist": 12.0,
        "leap_height": 0.9,
        "leap_dist": 0.8,
        "pounce_max_dist": 5.0,
        "interest_time": 2.0,
        "stuck_time": 2.0,
        "strike_dist": 2.0,
        "stuck_blocks": { "test": "is_block", "subject": "block", "operator": "==", "value": "snow_layer" }
      },

```

## Vanilla entities using `minecraft:behavior.stalk_and_pounce_on_target`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
