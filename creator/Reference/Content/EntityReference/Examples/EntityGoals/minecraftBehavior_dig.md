---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.dig"
description: "Describes the minecraft:behavior.dig ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.dig

Allows this entity to dig into the ground before despawning.


## Dig Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_dig_when_named | false | Boolean true/false | If true, this behavior can run when this entity is named. Otherwise not. |  | 
| digs_in_daylight | false | Boolean true/false | Indicates that the actor should start digging when it sees daylight |  | 
| duration | 0 | Decimal number | Goal duration in seconds | Warden: `5.5` | 
| idle_time | 0 | Decimal number | The minimum idle time in seconds between the last detected disturbance to the start of digging. | Warden: `60` | 
| on_start | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event(s) to run when the goal starts. | Warden: `{"event":"on_digging_event","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Warden: `1` | 
| suspicion_is_disturbance | false | Boolean true/false | If true, finding new suspicious locations count as disturbances that may delay the start of this goal. | Warden: `true` | 
| vibration_is_disturbance | false | Boolean true/false | If true, vibrations count as disturbances that may delay the start of this goal. | Warden: `true` | 

## Samples

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:behavior.dig": {
  "priority": 1,
  "duration": 5.5,
  "idle_time": 60,
  "vibration_is_disturbance": true,
  "suspicion_is_disturbance": true,
  "digs_in_daylight": false,
  "on_start": {
    "event": "on_digging_event",
    "target": "self"
  }
}
```
