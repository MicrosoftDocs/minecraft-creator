---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - is_persistent
ms.prod: gaming
---

# Entity Documentation - is_persistent

Tests if the subject's persistence matches the bool value passed in.

## Parameters

> [!Note]
> `is_persistent` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
> `is_persistent` can also use `subject`, [operator](../Definitions/NestedTables/operator.md) and `value` parameters.

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

### value

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |true |Boolean |(Optional) true or false. |

## Example

### Full

```json
{ "test": "is_persistent", "subject": "self", "operator": "equals", "value": true}
```

### Short (using Defaults)

```json
{ "test": "is_persistent" }
```

## Vanilla entities examples

### zoglin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/zoglin.json" range="141-181":::

## Vanilla entities using `is_persistent`

- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
