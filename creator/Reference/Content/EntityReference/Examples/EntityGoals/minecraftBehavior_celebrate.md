---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.celebrate"
description: "Describes the minecraft:behavior.celebrate ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.celebrate

Allows this entity to celebrate surviving a raid by making celebration sounds and jumping.


## Celebrate Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| celebration_sound | *not set* | String | The sound event to trigger during the celebration. |  | 
| duration | 30 | Decimal number | The duration in seconds that the celebration lasts for. |  | 
| jump_interval | *not set* | Range of integers | Minimum and maximum time between jumping (positive, in seconds). |  | 
| on_celebration_end_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to trigger when the goal's duration expires. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| sound_interval | *not set* | Range of integers | Minimum and maximum time between sound events (positive, in seconds). |  | 

## Samples
