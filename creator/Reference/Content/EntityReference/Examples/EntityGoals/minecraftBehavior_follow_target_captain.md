---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.follow_target_captain
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.follow_target_captain

`minecraft:behavior.follow_target_captain` allows an entity to follow a targeted captain.

>[!IMPORTANT]
> `minecraft:behavior.follow_target_captain` requires a entity to be labled as a captain in a group. An example of this is the `minecraft:is_illager_captain` component used in the `pillager.json` entity definition.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|follow_distance| 0.0| Decimal| Defines the distance in blocks the mob will stay from its target while following. |
|within_radius| 0.0| Decimal| Defines the maximum distance in blocks a mob can get from its target captain before giving up trying to follow it. |

## Example

```json
"minecraft:behavior.follow_target_captain":{
    "priority": 2,
    "within_radius": 5.0,
    "follow_distance": 10.0,
}
```

## Vanilla entities examples

### pillager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pillager.json" range="207-213":::

## Vanilla entities using `minecraft:behavior.follow_target_captain`

- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
