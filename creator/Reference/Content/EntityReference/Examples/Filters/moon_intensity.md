---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - moon_intensity
ms.prod: gaming
---

# Entity Documentation - moon_intensity

Compares the current moon intensity with a float value in the range of 0.0 and 1.0

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |Decimal |(Required) A floating point value. |

>[!Note]
> `moon_intensity` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "moon_intensity", "subject": "self", "operator": "equals", "value": "0.0" }
```

### Short (using Defaults)

```json
{ "test": "moon_intensity", "value": "0.0" }
```

## Vanilla entities examples

No entities currently use `moon_intensity`.

## Vanilla entities using `moon_intensity`

No entities currently use `moon_intensity`.
