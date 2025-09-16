---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:timer"
description: "Describes the minecraft:timer entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:timer

Adds a timer after which an event will fire.


## Timer Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| looping | true | Boolean true/false | If true, the timer will restart every time after it fires. |  | 
| random_time_choices | [ ] | Array of strings | This is a list of objects, representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time. |  | 
| randomInterval | true | Boolean true/false | If true, the amount of time on the timer will be random between the min and max values specified in time. |  | 
| time | *not set* | Range of integers | Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (min and max). Incompatible with random_time_choices. | Gray Zombie Leader: `30` | 
| time_down_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to fire when the time on the timer runs out. | Gray Zombie Leader: `{"event":"minecraft:convert_to_drowned"}` | 

## Samples

#### [Gray Zombie Leader](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/gray_zombie_leader.behavior.json)


```json
"minecraft:timer": {
  "looping": false,
  "time": 30,
  "time_down_event": {
    "event": "minecraft:convert_to_drowned"
  }
}
```
