---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - is_temperature_value
ms.prod: gaming
---

# Entity Documentation - is_temperature_value

Tests the current temperature against a provided value in the range (0.0, 1.0) where 0.0 is the coldest temp and 1.0 is the hottest.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |Decimal |(Required) The Biome temperature value to compare with. |

>[!Note]
>`is_temperature_value` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "is_temperature_value", "subject": "self", "operator": "equals", "value": "0.50" }
```

### Short (using Defaults)

```json
{ "test": "is_temperature_value", "value": "0.50" }
```

## Vanilla entities examples

### snow_golem

```json
{ "test": "is_temperature_value", "operator": ">", "value": 1.0 }
```

## Vanilla entities using `is_temperature_value`

- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
