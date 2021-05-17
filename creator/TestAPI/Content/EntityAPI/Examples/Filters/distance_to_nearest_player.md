---
author: v-josjones
ms.author: v-josjones
title: distance to nearest player
ms.prod: gaming
---

# distance_to_nearest_player

`distance_to_nearest_player` compares the distance to the nearest Player with a float value.

## Parameters
|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value | |Decimal|(Required) A floating point value.|

`distance_to_nearest_player` can also use `subject` and `operator` parameters but are optional.

### subject

| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |

### operator

| Options| Description |
|:-----------:|:-----------:|
| !=| Test for inequality. |
| <| Test for less-than the value. |
| <=| Test for less-than or equal to the value. |
| <>| Test for inequality. |
| =| Test for equality. |
| ==| Test for equality. |
| >| Test for greater-than the value. |
| >=| Test for greater-than or equal to the value. |
| equals| Test for equality. |
| not| Test for inequality. |

## Vanilla Mob examples

### Zoglin

:::code language="json" source="../../../../Source/VanilliaBehaviorPack/entities/zoglin.json" range="139-155":::

## Vanilla Mobs using behavior


- [fox](Source/VanilliaBehaviorPack_Snippets/entities/fox.json)
- [piglin brute](Source/VanilliaBehaviorPack_Snippets/entities/piglin_brute.json)
- [pufferfish](Source/VanilliaBehaviorPack_Snippets/entities/pufferfish.json)
- [wandering_trader](Source/VanilliaBehaviorPack_Snippets/entities/wandering_trader.json)
- [zoglin](Source/VanilliaBehaviorPack_Snippets/entities/zoglin.json)
