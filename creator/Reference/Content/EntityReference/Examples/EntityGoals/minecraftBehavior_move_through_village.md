---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.move_through_village
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.move_through_village

`minecraft:behavior.move_through_village` allows an entity to navigate around a village by creating a path to patrol.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|only_at_night| false| Boolean| If true, the mob will only move through the village during night time. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.move_through_village":{
    "priority": 1,
    "only_at_night":true,
    "speed_multiplier": 1.25
}
```

## Vanilla entities examples

### iron_golem

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/iron_golem.json" range="223-227":::

## Vanilla entities using `minecraft:behavior.move_through_village`

- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
