---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:drying_out_timer"
description: "Describes the minecraft:drying_out_timer entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:drying_out_timer

Adds a timer for drying out that will count down and fire 'dried_out_event' or will stop as soon as the entity will get under rain or water and fire 'stopped_drying_out_event'.


## Drying Out Timer Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| dried_out_event | *not set* | String | Event to fire when the drying out time runs out. | Axolotl: `{"event":"dried_out"}` | 
| recover_after_dried_out_event | *not set* | String | Event to fire when entity was already dried out but received increase in water supply. | Axolotl: `{"event":"recover_after_dried_out"}` | 
| stopped_drying_out_event | *not set* | String | Event to fire when entity stopped drying out, for example got into water or under rain. | Axolotl: `{"event":"stop_drying_out"}`, Dolphin: `{"event":"stop_dryingout"}` | 
| total_time | 0 | Decimal number | Amount of time in seconds to dry out fully. | Axolotl: `300`, Dolphin: `120` | 
| water_bottle_refill_time | 0 | Decimal number | Optional amount of additional time in seconds given by using splash water bottle on entity. | Axolotl: `90` | 

## Samples

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:drying_out_timer": {
  "total_time": 300,
  "water_bottle_refill_time": 90,
  "dried_out_event": {
    "event": "dried_out"
  },
  "stopped_drying_out_event": {
    "event": "stop_drying_out"
  },
  "recover_after_dried_out_event": {
    "event": "recover_after_dried_out"
  }
}
```

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
