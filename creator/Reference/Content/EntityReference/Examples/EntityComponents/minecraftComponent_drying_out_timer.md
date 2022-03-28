---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:drying_out_timer
ms.prod: gaming
---

# Entity Documentation - minecraft:drying_out_timer

`minecraft:drying_out_timer` sets a timer for drying out that will count down and fire 'dried_out_event' or will stop as soon as the entity will get under rain or water and fire `stopped_drying_out_event`.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| total_time| 0.0| Decimal| Amount of time in seconds to dry out fully. |
|dried_out_event|*not set* | JSON Object |  Event to fire when the drying out time runs out. |
|recover_after_dried_out_event|*not set* | String|  Event to fire when entity was already dried out but received increase in water supply. |
|stopped_drying_out_event|*not set* | String|  Event to fire when entity stopped drying out, for example got into water or under rain. |
|water_bottle_refill_time| 0.0| Decimal|  Optional amount of additional time in seconds given by using splash water bottle on entity. |

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

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/axolotl.json" range="101-113":::

## Vanilla entities using `minecraft:drying_out_timer`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
