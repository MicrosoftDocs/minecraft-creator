---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.mingle
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.mingle

`minecraft:behavior.mingle` allows an entity to navigate to the village bell point of interest and interact with other entities that have been assigned.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cooldown_time| 0.0| Decimal| Time in seconds the mob has to wait before using the goal again. |
|duration| 1.0| Decimal|  Amount of time in seconds that the entity will chat with another entity. |
|mingle_distance| 2.0| Decimal|  The distance from its partner that this entity will mingle. If the entity type is not the same as the entity, this value needs to be identical on both entities. |
|mingle_partner_type|*not set*| List|  The entity type that this entity is allowed to mingle with. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.mingle":{
    "priority": 5,
    "speed_multiplier": 0.8,
    "cooldown_time":10.0,
    "duration": 30.0,
    "mingle_dist": 1.5,
    "mingle_partner_type": "minecraft:villager_v2"
}
```

## Vanilla entities examples

### villager_v2

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager_v2.json" range="530-537":::

## Vanilla entities using `minecraft:behavior.mingle`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
