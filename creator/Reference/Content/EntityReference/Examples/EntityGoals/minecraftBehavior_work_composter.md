---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.work_composter
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.work_composter

`minecraft:behavior.work_composter` allows the NPC to use the composter POI to convert excess seeds into bone meal.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| active_time| 0| Integer| The amount of ticks the NPC will stay in their the work location. |
| block_interaction_max| 1| Integer| The maximum number of times the mob will interact with the composter. |
| can_empty_composter| true| Boolean| Determines whether the mob can empty a full composter. |
| can_fill_composter| true| Boolean| Determines whether the mob can add items to a composter given that it is not full. |
| can_work_in_rain| false| Boolean| If true, this entity can work when their jobsite POI is being rained on. |
| goal_cooldown| 0| Integer| The amount of ticks the goal will be on cooldown before it can be used again. |
| items_per_use_max| 20| Integer| The maximum number of items which can be added to the composter per block interaction. |
| min_item_count| 10| Integer| Limits the amount of each compostable item the mob can use. Any amount held over this number will be composted if possible. |
| on_arrival| | Trigger| Event to run when the mob reaches their jobsite. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| sound_delay_max| N/A| Integer| Unused. |
| sound_delay_min| N/A| Integer| Unused. |
| speed_multiplier| 0.50| Decimal| Movement speed multiplier of the mob when using this AI Goal |
| use_block_max| 200| Integer| The maximum interval in which the mob will interact with the composter. |
| use_block_min| 100| Integer| The minimum interval in which the mob will interact with the composter. |
| work_in_rain_tolerance| -1| Integer| If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal. |

## Example

```json
"minecraft:behavior.work":{
    "priority": 7,
    "active_time": 0,
    "block_interaction_max": 1,
    "can_empty_composter": true,
    "can_fill_composter": true,
    "can_work_in_rain": false,
    "items_per_use_max": 20,
    "min_item_count": 10,
    "goal_cooldown": 0,
    "sound_delay_min": 0,
    "sound_delay_max": 0,
    "speed_multiplier": 0.5,
    "work_in_rain_tolerance": -1,
    "on_arrival": {
        "event": "minecraft:resupply_trades",
        "target": "self"
    }
}
```

## Vanilla entities examples

### villager_v2

```json
"minecraft:behavior.work_composter": {
    "priority": 9,
    "active_time": 250,
    "speed_multiplier": 0.5,
    "goal_cooldown": 200,
    "can_work_in_rain": false,
    "work_in_rain_tolerance": 100,
    "on_arrival": {
        "event": "minecraft:resupply_trades",
        "target": "self"
    }
}
```

## Vanilla entities using `minecraft:behavior.work_composter`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
