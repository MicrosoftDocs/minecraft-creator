---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:drying_out_timer
description: "A reference document detailing the 'drying_out_timer' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:drying_out_timer

`minecraft:drying_out_timer` sets a timer for drying out that will count down and initiate 'dried_out_event' or stops if the entity gets under rain or water, initializing `stopped_drying_out_event`.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| total_time| 0.0| Decimal| Amount of time, in seconds, to dry out completely. |
|dried_out_event|*not set* | JSON Object |  Event to initiate when the drying out time is complete. |
|recover_after_dried_out_event|*not set* | String|  Event to initiate when entity was already dried out but received an increase in water supply. |
|stopped_drying_out_event|*not set* | String|  Event to initiate when the entity stopped drying out, for example got into water or under rain. |
|water_bottle_refill_time| 0.0| Decimal|  Optional amount of additional time, in seconds, given by using splash water bottle on the entity. |

## Example

```json
"minecraft:drying_out_timer":{
    "total_time": 200,
    "dried_out_event": {
        "event": "towel_off"
    },
    "recover_drying_out_event": {
        "event": "recover_after_dried_out"
    },
    "stopped_drying_out_event": {
        "event": "fell_into_water"
    },
    "water_bottle_refill_time": 100
}
```

## Vanilla entities examples

### axolotl

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

## Vanilla entities using `minecraft:drying_out_timer`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
