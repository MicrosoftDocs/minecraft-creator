---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.flee_sun
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.flee_sun

`minecraft:behavior.flee_sun` will make the entity actively avoid the sunlight.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.flee_sun":{
    "priority": 2,
    "speed_multiplier":1.50,
}
```

## Vanilla entities examples

### skeleton

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/skeleton.json" range="540-543":::

## Vanilla entities using `minecraft:behavior.flee_sun`

- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
