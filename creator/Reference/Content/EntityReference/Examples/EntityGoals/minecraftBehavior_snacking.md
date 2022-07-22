---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.snacking
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.snacking

`minecraft:behavior.snacking` allows an entity to stop and interact with select food items that are nearby.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|items|*not set* | List| Items that we are interested in snacking on. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|snacking_cooldown| 7.5| Decimal| The cooldown time in seconds before the mob is able to snack again. |
|snacking_cooldown_min| 0.5| Decimal| The minimum time in seconds before the mob is able to snack again. |
|snacking_stop_chance| 0.0017| Decimal| This is the chance that the mob will stop snacking, from 0 to 1. |

## Example

```json
"minecraft:behavior.snacking":{
    "priority": 5,
    "snacking_cooldown": 25.0,
    "snacking_cooldown_min": 15.0,
    "snacking_stop_chance": 0.001,
    "items":["cake"]
}
```

## Vanilla entities examples

### panda

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/panda.json" range="147-156":::

## Vanilla entities using `minecraft:behavior.snacking`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
