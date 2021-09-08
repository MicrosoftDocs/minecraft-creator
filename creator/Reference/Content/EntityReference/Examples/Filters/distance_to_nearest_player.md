---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - distance_to_nearest_player
ms.prod: gaming
---

# Entity Documentation - distance_to_nearest_player

`distance_to_nearest_player` compares the distance to the nearest Player with a float value.

## Parameters
|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value | |Decimal|(Required) A floating point value.|

> [!NOTE]
> `distance_to_nearest_player` can also use `subject` and [operators](../Definitions/NestedTables/operator.md) parameters but they are optional.

### subject

| Options| Description |
|:-----------|:-----------|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |

### operator

| Options| Description |
|:-----------|:-----------|
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

## Examples

### Full

```json
{ "test": "distance_to_nearest_player", "subject": "self", "operator": "equals", "value": "0.00" }
```

### Short (using Defaults)

```json
{ "test": "distance_to_nearest_player", "value": "0.00" }
```

## Vanilla entities examples

### zoglin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/zoglin.json" range="141-181":::

## Vanilla entities using `distance_to_nearest_player`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
