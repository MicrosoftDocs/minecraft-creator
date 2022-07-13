---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:timer
ms.prod: gaming
---

# Entity Documentation - minecraft:timer

`minecraft:timer` adds a timer after which an event will fire.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| looping| True| Boolean| If true, the timer will restart every time after it fires. |
| randomInterval| True| Boolean| If true, the amount of time on the timer will be random between the min and max values specified in time. |
| random_time_choices| [ ]| List| This is a list of objects, representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time. |
| time| [0.0, 0.0]| Range [a, b]| Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (min and max). Incompatible with random_time_choices. |
| time_down_event| *not set*| JSON Object| Contains any events to fire when the time on the timer runs out. |

## Example

```json
"minecraft:timer":{
    "looping": true,
    "randomInterval":true,
    "time": [0.0, 0.0],
    "time_down_event": {
        "event":"minecraft:times_up"
    }
}
```

## Vanilla entities examples

### husk

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/husk.json" range="31-37":::

## Vanilla entities using `minecraft:timer`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [boat](../../../../Source/VanillaBehaviorPack_Snippets/entities/boat.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)