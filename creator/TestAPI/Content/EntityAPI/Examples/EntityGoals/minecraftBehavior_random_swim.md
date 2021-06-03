---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.random_swim
ms.prod: gaming
---

# minecraft:behavior.random_swim

`minecraft:behavior.random_swim` allows an entity to swim in a random point in water.

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|avoid_surface| true| Boolean|  If true, the mob will avoid surface water blocks by swimming below them |
|interval| 120| Integer|  A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal |
|speed_multiplier| 1.0|Decimal|  Movement speed multiplier of the mob when using this AI Goal |
|xz_dist| 10| Integer| Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 |
|y_dist| 7| Integer| Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 |

## Example

```json
"minecraft:behavior.random_swim":{
    "priority": 8,
    "avoid_surface":true,
    "interval":42,
    "speed_multiplier": 1.0,
    "xy_dist": 10,
    "y_dist": 7
}
```

## Vanilla entities examples

### guardian

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/guardian.json" range="155_160":::

## Vanilla entities using `minecraft:behavior.random_swim`

- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
