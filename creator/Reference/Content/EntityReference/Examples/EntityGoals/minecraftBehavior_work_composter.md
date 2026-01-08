---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.work_composter"
description: "Describes the minecraft:behavior.work_composter ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.work_composter

Allows the NPC to use the composter POI to convert excess seeds into bone meal.


## Work Composter Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| active_time | 0 | Integer number | The amount of ticks the NPC will stay in their the work location | Villager v2: `250` | 
| block_interaction_max | 1 | Integer number | The maximum number of times the mob will interact with the composter. |  | 
| can_empty_composter | true | Boolean true/false | Determines whether the mob can empty a full composter. |  | 
| can_fill_composter | true | Boolean true/false | Determines whether the mob can add items to a composter given that it is not full. |  | 
| can_work_in_rain | false | Boolean true/false | If true, this entity can work when their jobsite POI is being rained on. |  | 
| goal_cooldown | 0 | Integer number | The amount of ticks the goal will be on cooldown before it can be used again | Villager v2: `200` | 
| items_per_use_max | 20 | Integer number | The maximum number of items which can be added to the composter per block interaction. |  | 
| min_item_count | 10 | Integer number | Limits the amount of each compostable item the mob can use. Any amount held over this number will be composted if possible |  | 
| on_arrival | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when the mob reaches their jobsite. | Villager v2: `{"event":"minecraft:resupply_trades","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager v2: `9` | 
| speed_multiplier | 0.5 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Villager v2: `0.5` | 
| use_block_max | 200 | Integer number | The maximum interval in which the mob will interact with the composter. |  | 
| use_block_min | 100 | Integer number | The minimum interval in which the mob will interact with the composter. |  | 
| work_in_rain_tolerance | -1 | Integer number | If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal | Villager v2: `100` | 

## Samples

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/job_specific_goals/minecraft:behavior.work_composter/: 

```json
"minecraft:behavior.work_composter": {}
```

At /minecraft:entity/component_groups/work_schedule_farmer/minecraft:behavior.work_composter/: 

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
