---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.celebrate_survive"
description: "Describes the minecraft:behavior.celebrate_survive ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.celebrate_survive

Allows this entity to celebrate surviving a raid by shooting fireworks.


## Celebrate Survive Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| duration | 30 | Decimal number | The duration in seconds that the celebration lasts for. | Villager v2: `30` | 
| fireworks_interval | *not set* | Range of integers | Minimum and maximum time between firework (positive, in seconds). | Villager v2: `{"range_min":2,"range_max":7}` | 
| on_celebration_end_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to trigger when the goal's duration expires. | Villager v2: `{"event":"minecraft:stop_celebrating","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager v2: `5` | 

## Samples

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:behavior.celebrate_survive": {
  "priority": 5,
  "fireworks_interval": {
    "range_min": 2,
    "range_max": 7
  },
  "duration": 30,
  "on_celebration_end_event": {
    "event": "minecraft:stop_celebrating",
    "target": "self"
  }
}
```
