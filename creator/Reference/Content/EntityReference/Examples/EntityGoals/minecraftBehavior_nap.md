---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.nap
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.nap

`minecraft:behavior.nap` allows an entity to nap in a location when distant from other entities.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cooldown_max| 0.0| Decimal|  Maximum time in seconds the mob has to wait before using the goal again |
|cooldown_min| 0.0| Decimal|  Minimum time in seconds the mob has to wait before using the goal again |
|mob_detect_dist| 6.0| Decimal|  The block distance in x and z that will be checked for mobs that this mob detects |
|mob_detect_height| 6.0| Decimal|  The block distance in y that will be checked for mobs that this mob detects |

## Example

```json
"minecraft:behavior.nap":{
    "priority": 7,
    "cooldown_min": 2.5,
    "cooldown_max": 5.0,
    "mob_detect_dist": 16.0,
    "mob_detect_height": 10.0
}
```

## Vanilla entities examples

### fox

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/fox.json" range="340-396":::

## Vanilla entities using `minecraft:behavior.nap`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
