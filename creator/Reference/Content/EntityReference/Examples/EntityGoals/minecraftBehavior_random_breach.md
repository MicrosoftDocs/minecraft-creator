---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.random_breach
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.random_breach

`minecraft:behavior.random_breach` allows an entity to breach the surface of the water at a random interval.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cooldown_time| 0.0| Decimal| Time in seconds the mob has to wait before using the goal again. |
|interval| 120| Integer| A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |
|xz_dist| 10| Integer| Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1. |
| y_dist| 7| Integer| Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1. |

## Example

```json
"minecraft:behavior.random_breach":{
    "priority": 2,
    "interval": 50,
    "cooldown_time": 2.0,
    "speed_multiplier": 1.0,
    "xz_dist": 6,
    "y_dist": 4

}
```

## Vanilla entities examples

### dolphin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/dolphin.json" range="244-249":::

## Vanilla entities using `minecraft:behavior.random_breach`

- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
