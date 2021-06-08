---
author: v-josjones
ms.author: v-josjones
title: minecraft:damage_over_time
ms.prod: gaming
---

# minecraft:damage_over_time

`minecraft:damage_over_time` applies a defined amount of damage to the entity at specified intervals.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| damage_per_hurt| 1| Integer| Amount of damage caused each hurt. |
|time_between_hurt| 0.0| Decimal| Time in seconds between damage. |

## Example

```json
"minecraft:damage_over_time":{
    "damage_per_hurt": 1,
    "time_between_hurt": 0.0
}
```

## Vanilla entities examples

### axolotl

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/axolotl.json" range="95-98":::

## Vanilla entities using `minecraft:damage_over_time`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
