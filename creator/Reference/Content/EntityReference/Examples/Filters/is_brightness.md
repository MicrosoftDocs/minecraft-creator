---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - is_brightness
ms.prod: gaming
---

# Entity Documentation - is_brightness

Tests the current brightness against a provided value in the range (0.0, 1.0).

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |Decimal |(Required) The brightness value to compare with. |

>[!Note]
> `is_brightness` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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

## Example

### Full

```json
{ "test": "is_brightness", "subject": "self", "operator": "equals", "value": "0.50" }
```

### Short (using Defaults)

```json
{ "test": "is_brightness", "value": "0.50" }
```

## Vanilla entities examples

### spider

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/spider.json" range="58-72":::

## Vanilla entities using `is_brightness`

- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
