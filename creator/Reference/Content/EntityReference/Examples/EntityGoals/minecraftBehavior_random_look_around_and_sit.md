---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.random_look_around_and_sit
description: "A reference document detailing the 'behavior.random_look_around_and_sit' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.random_look_around_and_sit

`minecraft:behavior.random_look_around_and_sit` compels an entity to sit in place and look around in different directions. The entity must have a sitting animation configured in order to use this goal.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|continue_if_leashed| false| Boolean|  Determines if the goal should continue to be used if the entity is leashed. |
|continue_sitting_on_reload| false| Boolean| When set to 'true' the entity will stay sitting on reload.|
|max_angle_of_view_horizontal| 30.0| Decimal| The rightmost angle the entity can look at on the horizontal plane with respect to its initial facing direction.|
|max_look_count| 2| Integer|  The max amount of unique looks an entity will have while looking around. |
|max_look_time| 40| Integer|  The max amount of time (in ticks) an entity will stay looking at a direction while looking around. |
|min_angle_of_view_horizontal| -30.0| Decimal| The leftmost angle the entity can look at on the horizontal plane with respect to its initial facing direction.|
|min_look_count| 1| Integer| The min amount of unique looks an entity will have while looking around. |
|min_look_time| 20| Integer|  The min amount of time (in ticks) an entity will stay looking at a direction while looking around. |
| probability| 0.02| Decimal| The probability of randomly looking around/sitting. |
| random_look_around_cooldown| 0| Integer| The cooldown in seconds before the goal can be used again. |

## Example

```json
"minecraft:behavior.random_look_around_and_sit":{
    "priority": 2,
    "max_look_count": 4,
    "min_look_count": 1,
    "max_look_time": 60,
    "min_look_time": 5,
    "probability": 0.35
}
```

## Vanilla entities examples

### fox

```json
"minecraft:behavior.random_look_around_and_sit": {
        "priority": 12,
        "min_look_count": 2,
        "max_look_count": 5,
        "min_look_time": 80,
        "max_look_time": 100,
        "probability": 0.001
      }
```

## Vanilla entities using `minecraft:behavior.random_look_around_and_sit`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
