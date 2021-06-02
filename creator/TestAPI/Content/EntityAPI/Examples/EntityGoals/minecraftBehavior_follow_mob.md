---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.follow_mob
ms.prod: gaming
---

# minecraft:behavior.follow_mob

`minecraft:behavior.follow_mob` allows an entity to follow and gather around all types of mobs, both hostile and neutral mobs.

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|search_range| 0| Integer| The distance in blocks it will look for a mob to follow |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |
|stop_distance| 2.0|Decimal| The distance in blocks this mob stops from the mob it is following |

## Example

```json
"minecraft:behavior.follow_mob":{
    "priority": 2,
    "search_range": 5,
    "speed_multiplier": 0.50,
    "stop_distance": 3.0
}
```

## Vanilla entities examples

### parrot

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/parrot.json" range="63-68":::

## Vanilla entities using `minecraft:behavior.follow_mob`

- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)