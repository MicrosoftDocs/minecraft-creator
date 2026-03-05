---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:drying_out_timer"
description: "Describes the minecraft:drying_out_timer entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:drying_out_timer

Adds a timer for drying out that will count down and fire 'dried_out_event' or will stop as soon as the entity will get under rain or water and fire 'stopped_drying_out_event'.


## Drying Out Timer Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| dried_out_event | *not set* | Object | Event to fire when the drying out time runs out. Can be an object with event and target properties, or a simple event string. | Dolphin: `{"event":"dried_out"}` | 
| dried_out_event (as String) | *not set* | String |  |  | 
| recover_after_dried_out_event | *not set* | Object | Event to fire when entity was already dried out but received increase in water supply. Can be an object with event and target properties, or a simple event string. | Dolphin: `{"event":"recover_after_dried_out"}` | 
| recover_after_dried_out_event (as String) | *not set* | String |  |  | 
| stopped_drying_out_event | *not set* | Object | Event to fire when entity stopped drying out. Can be an object with event and target properties, or a simple event string. | Dolphin: `{"event":"stop_dryingout"}` | 
| stopped_drying_out_event (as String) | *not set* | String |  |  | 
| total_time | 0 | Decimal number | Amount of time in seconds to dry out fully. | Dolphin: `120` | 
| water_bottle_refill_time | 0 | Decimal number | Optional amount of additional time in seconds given by using splash water bottle on entity. |  | 

## Samples

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:drying_out_timer": {
  "total_time": 120,
  "water_bottle_refill_time": 0,
  "dried_out_event": {
    "event": "dried_out"
  },
  "stopped_drying_out_event": {
    "event": "stop_dryingout"
  },
  "recover_after_dried_out_event": {
    "event": "recover_after_dried_out"
  }
}
```
