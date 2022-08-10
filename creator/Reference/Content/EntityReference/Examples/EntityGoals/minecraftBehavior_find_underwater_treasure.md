---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.find_underwater_treasure
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.find_underwater_treasure

`minecraft:behavior.find_underwater_treasure` allows an entity to locate and travel to the nearest point of interest labeled as `ruin` or `shipwreck`.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|search_range| 0| Integer| The range that the mob will search for a treasure chest within a ruin or shipwreck to move towards. |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |
|stop_distance| 2.0| Decimal| The distance the mob will move before stopping. |

## Example

```json
"minecraft:behavior.find_underwater_treasure":{
    "priority": 2,
    "search_range": 8,
    "cooldown_time":10,
    "speed_multiplier":3,
}
```

## Vanilla entities examples

### dolphin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/dolphin.json" range="278-283":::

## Vanilla entities using `minecraft:behavior.find_underwater_treasure`

- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
