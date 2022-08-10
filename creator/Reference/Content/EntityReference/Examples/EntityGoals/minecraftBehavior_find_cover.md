---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.find_cover
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.find_cover

`minecraft:behavior.find_cover` allows an entity to locate shade in the world.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cooldown_time| 0.0| Decimal| Time in seconds the mob has to wait before using the goal again. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.find_cover":{
    "priority": 2,
    "cooldown_time":10,
    "speed_multiplier":3,
}
```

## Vanilla entities examples

### fox

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/fox.json" range="320-324":::

## Vanilla entities using `minecraft:behavior.find_cover`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
