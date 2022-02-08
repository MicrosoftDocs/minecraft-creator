---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.work
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.work

`minecraft:behavior.work` allows the NPC to use their jobsite POI.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| active_time | 0| Integer| The amount of ticks the NPC will stay in their the work location |
| can_work_in_rain| false| Boolean| If true, this entity can work when their jobsite POI is being rained on. |
| goal_cooldown| 0| Integer| The amount of ticks the goal will be on cooldown before it can be used again |
| on_arrival| | String| Event to run when the mob reaches their jobsite and finishes working. |
| sound_delay_max| 0| Integer| The max interval in which a sound will play |
| sound_delay_min| 0| Integer| The min interval in which a sound will play |
| speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |
| work_in_rain_tolerance| -1| Integer| If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal |
## Example

```json
"minecraft:behavior.work":{
    "priority": 1,
    "active_time": 0,
    "can_work_in_rain": true,
    "work_in_rain_tolerance": -1
}
```
