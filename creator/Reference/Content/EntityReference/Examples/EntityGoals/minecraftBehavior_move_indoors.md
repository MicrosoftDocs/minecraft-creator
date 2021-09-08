---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.move_indoors
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.move_indoors

`minecraft:behavior.move_indoors` allows an entity to seek shelter within a village by entering a building.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |
| timeout_cooldown| 8.0| Decimal| The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition |

## Example

```json
"minecraft:behavior.move_indoors":{
    "priority": 2,
    "speed_multiplier": 1.10,
    "timeout_cooldown": 10.0,
}
```

## Vanilla entities examples

### villager_v2

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager_v2.json" range="1551-1555":::

## Vanilla entities using `minecraft:behavior.move_indoors`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
