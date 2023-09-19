---
author: mammerla
ms.author: mikeam
title: Entity Documentation - in_water_or_rain
description: "A reference document detailing the 'in_water_or_rain' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - in_water_or_rain

Returns true when the subject entity is in water or rain.

## Parameters

> [!NOTE]
> `in_water_or_rain` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
> `in_water_or_rain` can also use `subject`, [operator](../Definitions/NestedTables/operator.md) and `value` parameters.

### subject

| Options| Description |
|:-----------|:-----------|
| block| The block involved with the interaction. |
| damager| The damaging entity involved with the interaction. |
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
{ "test": "in_water_or_rain", "subject": "self", "operator": "equals", "value": true }
```

### Short (using Defaults)

```json
{ "test": "in_water_or_rain" }
```

## Vanilla entities examples

### axolotl

```json
{ "test": "in_water_or_rain", "operator": "!=", "value": true }
```

## Vanilla entities using `in_water_or_rain`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
