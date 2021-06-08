---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.hide
ms.prod: gaming
---

# minecraft:behavior.hide

`minecraft:behavior.hide` allows an entity to navigate to a specific point of interest that is tied to the entity.

>[!IMPORTANT]
> `minecraft:behavior.hide` requires a point of interest to be set in order to work properly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|duration| 1.0| Decimal| Amount of time in seconds that the mob reacts. |
|poi_type|*not set* | String| Defines what POI type to hide at. |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |
|timeout_cooldown| 8.0| Decimal| The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition. |

## Example

```json
"minecraft:behavior.hide":{
    "priority": 2,
    "speed_multiplier": 1.2,
    "poi_type": "bed",
    "duration": 60.0,
    "timeout_cooldown": 8.0
}
```

## Vanilla entities examples

### villager_v2

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager_v2.json" range="1512-1517":::

## Vanilla entities using `minecraft:behavior.hide`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
