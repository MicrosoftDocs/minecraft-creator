---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.raid_garden
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.raid_garden

`minecraft:behavior.raid_garden` allows an entity to eat crops that have been planted in a farm.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|blocks|*not set* | List|  Blocks that the mob is looking for to eat/raid. |
|eat_delay| 2| Integer|  Time in seconds between each time it eats/raids. |
| full_delay| 100| Integer| Amount of time in seconds before this mob wants to eat/raid again after eating its maximum. |
|goal_radius| 0.5| Decimal|  Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |
|initial_eat_delay| 0| Integer|  Time in seconds before starting to eat/raid once it arrives at it. |
|max_to_eat| 6| Integer| Maximum number of crops this entity wants to eat/raid. If set to zero or less then it doesn't have a maximum. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|search_height| 0 | Integer | Maximum distance to look for a block in y. |
|search_range| 0| Integer| Distance in blocks the mob will look for crops to eat. |
|speed_multiplier| 1.0| Decimal|  Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.raid_garden":{
    "priority": 2,
    "eat_delay": 2,
    "full_delay": 100,
    "goal_radius": 0.5,
    "initial_eat_delay": 100,
    "max_to_eat": 5,
    "search_range": 0,
    "speed_multiplier": 2.0
}
```

## Vanilla entities examples

### rabbit

```json
"minecraft:behavior.raid_garden": {
        "priority": 5,
        "blocks": [
          "minecraft:carrots"
        ],
        "search_range": 16,
        "goal_radius": 0.8
      },

```

## Vanilla entities using `minecraft:behavior.raid_garden`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
