---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.timer_flag_2"
description: "Describes the minecraft:behavior.timer_flag_2 ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.timer_flag_2

Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer_flag_2 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise.


## Timer Flag 2 Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | *not set* | Array of strings |  | Sniffer: `["move"]` | 
| cooldown_range | *not set* | Range of integers | Goal cooldown range in seconds. If specified, the cooldown will have to elapse even before the goal can be selected for the first time. |  | 
| duration_range | *not set* | Range of integers | Goal duration range in seconds. | Sniffer: `[2,5]` | 
| on_end | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event(s) to run when the goal end. | Sniffer: `{"event":"on_rising_end","target":"self"}` | 
| on_start | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event(s) to run when the goal starts. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Sniffer: `2` | 

## Samples

#### [Sniffer](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json)


```json
"minecraft:behavior.timer_flag_2": {
  "priority": 2,
  "control_flags": [
    "move"
  ],
  "cooldown_range": 0,
  "duration_range": [
    2,
    5
  ],
  "on_end": {
    "event": "on_rising_end",
    "target": "self"
  }
}
```
