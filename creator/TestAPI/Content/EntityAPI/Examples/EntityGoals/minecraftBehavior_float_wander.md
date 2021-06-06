---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.float_wander
ms.prod: gaming
---

# minecraft:behavior.float_wander

`minecraft:behavior.float_wander` allows an entity to


> [!NOTE]
> This behavior is a requirement for the following behaviors:

>[!IMPORTANT]
> `minecraft:behavior.float_wander` requires 

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|float_duration| [0.0, 0.0]| Range [a, b]|Range of time in seconds the mob will float around before landing and choosing to do something else |
|must_reach| false| Boolean|  If true, the point has to be reachable to be a valid target |
|random_reselect| false| Boolean|  If true, the mob will randomly pick a new point while moving to the previously selected one |
|xz_dist| 10| Integer|  Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 |
| y_dist| 7| Integer|Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 |
| y_offset| 0.0| Decimal| Height in blocks to add to the selected target position |

## Example

```json
"minecraft:behavior.float_wander":{
    "xz_dist": 10,
    "y_dist": 7,
    "y_offset": -2.0,
    "random_reselect": true,
    "float_duration": [ 0.1, 0.35 ],
}
```

## Vanilla entities examples

### ghast

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ghast.json" range="37-40":::

## Vanilla entities using `minecraft:behavior.float_wander`

- [bat](../../../../Source/VanillaBehaviorPack_Snippets/entities/bat.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/entities/ghast.md)
