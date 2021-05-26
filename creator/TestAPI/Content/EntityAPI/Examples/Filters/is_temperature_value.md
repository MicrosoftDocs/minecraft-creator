---
author: v-josjones
ms.author: v-josjones
title: is_temperature_value
ms.prod: gaming
---

# is_temperature_value

Tests the current temperature against a provided value in the range (0.0, 1.0) where 0.0f is the coldest temp and 1.0f is the hottest.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |Decimal |(Required) The Biome temperature value to compare with. |

`is_temperature_value` can also use `subject` and `operator` parameters but they are optional.

### subject

| Options| Description |
|:-----------:|:-----------:|
| block| The block involved with the interaction. |
| damager| The damaging actor involved with the interaction. |
| other| The other member of an interaction, not the caller. |
| parent| The caller's current parent. |
| player| The player involved with the interaction. |
| self| The entity or object calling the test |
| target| The caller's current target. |

### operator

| Options| Description |
|:-----------:|:-----------:|
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

## Vanilla Mob examples

### snow golem

:::code language="json" source="../../../../Source/VanilliaBehaviorPack/entities/snow_golem.json" range="60-78":::

## Vanilla Mobs using `is_temperature_value`

- [snow golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
