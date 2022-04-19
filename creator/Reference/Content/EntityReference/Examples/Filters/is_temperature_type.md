---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - is_temperature_type
ms.prod: gaming
---

# Entity Documentation - is_temperature_type

Tests whether the current temperature is a given type.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String |(Required) The Biome temperature category to test. |

### List of temperature types

Below is a list of temperature types that can be used for the `value` string.

Options|
|:-----------|
| cold|
| mild|
| ocean|
| warm|

>[!Note]
>`is_temperature_type` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "is_temperature_type", "subject": "self", "operator": "equals", "value": "cold" }
```

### Short (using Defaults)

```json
{ "test": "is_temperature_type", "value": "cold" }
```

## Vanilla entities examples

No entities currently use `is_temperature_type`.

## Vanilla entities using `is_temperature_type`

No entities currently use `is_temperature_type`.
