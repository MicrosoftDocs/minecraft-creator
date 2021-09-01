---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - clock_time
ms.prod: gaming
---

# Entity Documentation - clock_time

`clock_time` allows a creator to compare the current time with a float value in the range (0.0, 1.0).

|Value |Definition |
|:----|:----|
|0.0 |Noon |
|0.25 |Sunset |
|0.5 |Midnight |
|0.75 |Sunrise |

> [!IMPORTANT]
> [hourly_clock_time](hourly_clock_time.md) is an updated version of the `clock_time` filter that uses an Integer in a range of 0 to 24000 based on the in-game time.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |Decimal|(Required) A floating point value.|

> [!NOTE]
> `clock_time` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "clock_time", "subject": "self", "operator": "equals", "value": "0.00" }
```

### Short (using Defaults)

```json
{ "test": "clock_time", "value": "0.00" }
```

## Vanilla entity examples

No entities currently use `clock_time`

## Vanilla entities using `clock_time`

No entities currently use `clock_time`
