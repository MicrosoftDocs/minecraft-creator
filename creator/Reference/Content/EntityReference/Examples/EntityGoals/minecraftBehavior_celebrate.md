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
| celebration_sound | *not set* | String | The sound event to trigger during the celebration. | Evocation Illager: `"celebrate"` | 
| duration | 30 | Decimal number | The duration in seconds that the celebration lasts for. | Evocation Illager: `30` | 
| jump_interval | *not set* | Range of integers | Minimum and maximum time between jumping (positive, in seconds). | Evocation Illager: `{"range_min":1,"range_max":3.5}` | 
| on_celebration_end_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to trigger when the goal's duration expires. | Evocation Illager: `{"event":"minecraft:stop_celebrating","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Evocation Illager: `5` | 
| sound_interval | *not set* | Range of integers | Minimum and maximum time between sound events (positive, in seconds). | Evocation Illager: `{"range_min":2,"range_max":7}` | 

## Samples

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:behavior.celebrate": {
  "priority": 5,
  "celebration_sound": "celebrate",
  "sound_interval": {
    "range_min": 2,
    "range_max": 7
  },
  "jump_interval": {
    "range_min": 1,
    "range_max": 3.5
  },
  "duration": 30,
  "on_celebration_end_event": {
    "event": "minecraft:stop_celebrating",
    "target": "self"
  }
}
```
