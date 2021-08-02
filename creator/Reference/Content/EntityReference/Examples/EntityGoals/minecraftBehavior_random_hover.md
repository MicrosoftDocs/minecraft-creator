---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.random_hover
ms.prod: gaming
---

# minecraft:behavior.random_hover

`minecraft:behavior.random_hover` allows an entity to hover around in random locations.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|hover_height| [0.0, 0.0]| Range [a, b]|Range of the distance that the entity will hover between. |
|interval| 120| Integer|  A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |
|xz_dist| 10| Integer|  Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 |
| y_dist| 7| Integer|Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 |
| y_offset| 0.0| Decimal| Height in blocks to add to the selected target position |

## Example

```json
"minecraft:behavior.random_hover":{
    "xz_dist": 10,
    "y_dist": 7,
    "y_offset": -2.0,
    "hover_height": [ 1, 3 ],
}
```

## Vanilla entities examples

### bee

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/bee.json" range="400-407":::

## Vanilla entities using `minecraft:behavior.random_hover`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
