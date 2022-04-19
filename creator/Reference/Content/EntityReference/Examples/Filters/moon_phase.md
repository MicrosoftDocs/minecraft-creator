---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - moon_phase
ms.prod: gaming
---

# Entity Documentation - moon_phase

Compares the current moon intensity with an Integer value in the range of 0 to 7.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |Integer |(Required) A integer value. |

### List of moon phases

Below is a list of moon phases that can be used for the `value` string.

|value |moon phase |
|------|-----------|
|0 | |
|1 | |
|2 | |
|3 | |
|4 | |
|5 | |
|6 | |
|7 | |

>[!Note]
>`moon_phase` can also use `subject` and [operator](../Definitions/NestedTables/operator.md)parameters but they are optional.

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
{ "test": "moon_phase", "subject": "self", "operator": "equals", "value": "0" }
```

### Short (using Defaults)

```json
{ "test": "moon_phase", "value": "0" }
```

## Vanilla entities examples

No entities currently use `moon_phase`.

## Vanilla entities using `moon_phase`

No entities currently use `moon_phase`.
