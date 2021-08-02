---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.explore_outskirts
ms.prod: gaming
---

# minecraft:behavior.explore_outskirts

`minecraft:behavior.explore_outskirts` allows an entity to travel beyond the bounds of a village and wander while looking for any points of interest.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|explore_dist| 5.0| Decimal| The distance in which the mob will proceed past the village bounds |
|speed_multiplier| 1.0| Decimal|  Movement speed multiplier of the mob when using this AI Goal |
|wait_time| 0| Integer| The time the mob will stand around 'searching' for POIs |

## Example

```json
"minecraft:behavior.explore_outskirts":{
    "priority": 2,
    "explore_dist": 5.0,
    "speed_multiplier": 1.0,
    "wait_time": 0
}
```

## Vanilla entities examples

### villager_v2

> [!NOTE]
> in the **villager_v2** example shown below,`minecraft:behavior.explore_outskirts` is being used in conjunction with `minecraft:scheduler` component in order to allow villagers to wander during a set time of day.

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager_v2.json" range="557-572":::

## Vanilla entities using `minecraft:behavior.explore_outskirts`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
