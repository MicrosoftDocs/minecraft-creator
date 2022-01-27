---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - is_immobile
ms.prod: gaming
---

# Entity Documentation - is_immobile

Returns true if the subject entity is immobile. An entity is immobile if it lacks AI goals, has just changed dimensions or if it is a mob and has no health.

## Parameters

> [!Note]
> `is_immobile` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
> `is_immobile` can also use `subject`, [operator](../Definitions/NestedTables/operator.md) and `value` parameters.

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
{ "test": "is_immobile", "subject": "self", "operator": "equals", "value": true }
```

### Short (using Defaults)

```json
{ "test": "is_immobile" }
```

## Vanilla entities examples

No entities currently use `is_immobile`.

## Vanilla entities using `is_immobile`

No entities currently use `is_immobile`.
