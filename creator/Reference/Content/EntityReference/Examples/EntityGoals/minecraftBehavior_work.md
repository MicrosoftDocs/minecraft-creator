---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.work"
description: "Describes the minecraft:behavior.work ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.work

Allows the NPC to use the POI.


## Work Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| active_time | 0 | Integer number | The amount of ticks the NPC will stay in their the work location |  | 
| can_work_in_rain | false | Boolean true/false | If true, this entity can work when their jobsite POI is being rained on. |  | 
| goal_cooldown | 0 | Integer number | The amount of ticks the goal will be on cooldown before it can be used again |  | 
| on_arrival | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when the mob reaches their jobsite. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| sound_delay_max | 0 | Integer number | The max interval in which a sound will play. |  | 
| sound_delay_min | 0 | Integer number | The min interval in which a sound will play. |  | 
| speed_multiplier | 0.5 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 
| work_in_rain_tolerance | -1 | Integer number | If "can_work_in_rain" is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal |  | 

## Samples
