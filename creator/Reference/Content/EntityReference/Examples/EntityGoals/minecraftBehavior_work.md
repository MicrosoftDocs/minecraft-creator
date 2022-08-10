---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.work
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.work

`minecraft:behavior.work` allows the NPC to use their jobsite POI.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| active_time| 0| Integer| The amount of ticks the NPC will stay in their the work location. |
| can_work_in_rain| false| Boolean| If true, this entity can work when their jobsite POI is being rained on. |
| goal_cooldown| 0| Integer| The amount of ticks the goal will be on cooldown before it can be used again. |
| on_arrival| | Trigger| Event to run when the mob reaches their jobsite. |
| sound_delay_max| 0| Integer| The max interval in which a sound will play. |
| sound_delay_min| 0| Integer| The min interval in which a sound will play. |
| speed_multiplier| 0.50| Decimal| Movement speed multiplier of the mob when using this AI Goal. |
| work_in_rain_tolerance| -1| Integer| If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.work":{
    "priority": 7,
    "active_time": 0,
    "speed_multiplier": 0.5,
    "goal_cooldown": 0,
    "sound_delay_min": 0,
    "sound_delay_max": 0,
    "can_work_in_rain": false,
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
"minecraft:behavior.work": {
    "priority": 7,
    "active_time": 250,
    "speed_multiplier": 0.5,
    "goal_cooldown": 200,
    "sound_delay_min": 100,
    "sound_delay_max": 200,
    "can_work_in_rain": false,
    "work_in_rain_tolerance": 100,
    "on_arrival": {
        "event": "minecraft:resupply_trades",
        "target": "self"
    }
}
```

## Vanilla entities using `minecraft:behavior.work`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
