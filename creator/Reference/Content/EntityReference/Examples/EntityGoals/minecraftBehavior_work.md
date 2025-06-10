---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.work"
description: "Describes the minecraft:behavior.work ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.work

Allows the NPC to use the POI.


## Work Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| active_time | 0 | Integer number | The amount of ticks the NPC will stay in their the work location | Villager v2: `250` | 
| can_work_in_rain | false | Boolean true/false | If true, this entity can work when their jobsite POI is being rained on. |  | 
| goal_cooldown | 0 | Integer number | The amount of ticks the goal will be on cooldown before it can be used again | Villager v2: `200` | 
| on_arrival | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when the mob reaches their jobsite. | Villager v2: `{"event":"minecraft:resupply_trades","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager v2: `7` | 
| sound_delay_max | 0 | Integer number | The max interval in which a sound will play. | Villager v2: `200` | 
| sound_delay_min | 0 | Integer number | The min interval in which a sound will play. | Villager v2: `100` | 
| speed_multiplier | 0.5 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Villager v2: `0.5` | 
| work_in_rain_tolerance | -1 | Integer number | If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal | Villager v2: `100` | 

## Samples

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/job_specific_goals/minecraft:behavior.work/: 

```json
"minecraft:behavior.work": {}
```

At /minecraft:entity/component_groups/work_schedule_villager/minecraft:behavior.work/: 

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
