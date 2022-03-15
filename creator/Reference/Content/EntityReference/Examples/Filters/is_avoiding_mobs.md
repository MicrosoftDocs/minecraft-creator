---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - is_avoiding_mobs
ms.prod: gaming
---

# Entity Documentation - is_avoiding_mobs

Returns true if the subject entity is fleeing from other mobs.

## Parameters

> [!Note]
> `is_avoiding_mobs` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
> `is_avoiding_mobs` can also use `subject`, `operator` and `value` parameters.

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
{ "test": "is_avoiding_mobs", "subject": "self", "operator": "equals", "value": true }
```

### Short (using Defaults)

```json
{ "test": "is_avoiding_mobs" }
```

## Vanilla entity examples

### wandering_trader

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wandering_trader.json" range="173-199":::

## Vanilla entities using `is_avoiding_mobs`

- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
