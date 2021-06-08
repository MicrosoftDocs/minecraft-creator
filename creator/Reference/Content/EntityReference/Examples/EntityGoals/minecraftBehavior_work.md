---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.work
ms.prod: gaming
---

# minecraft:behavior.work

`minecraft:behavior.work` allows an entity to navigate and interact with a point of interest that has been assigned as their worksite.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|active_time| 0| Integer| The amount of ticks the NPC will stay in their the work location |
|can_work_in_rain| false| Boolean| If true, this entity can work when their worksite POI is being rained on. |
|goal_cooldown| 0| Integer| The amount of ticks the goal will be on cooldown before it can be used again |
|on_arrival|*not set* | String|  Event to run when the mob reaches their worksite and finishes working. |
|sound_delay_max| 0| Integer| The max interval in which a sound will play |
|sound_delay_min| 0| Integer| The min interval in which a sound will play |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |
|work_in_rain_tolerance| -1| Integer| If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal |

## Example

```json
"minecraft:behavior.work":{
    "priority": 3,
    "active_time": 250,
    "speed_multiplier": 0.5,
    "goal_cooldown": 400,
    "sound_delay_min": 50,
    "sound_delay_max": 150,
    "can_work_in_rain": false,
    "work_in_rain_tolerance": 100,
    "on_arrival": {
        "event": "minecraft:resupply_trades",
        "target": "self"
    }
}
```

## Vanilla entities examples

### villager_v2

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager_v2.json" range="393-406":::

## Vanilla entities using `minecraft:behavior.work`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
