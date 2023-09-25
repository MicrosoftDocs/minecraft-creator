---
author: mammerla
ms.author: mikeam
title: Entity Documentation - is_snow_covered
description: "A reference document detailing the 'is_snow_covered' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - is_snow_covered

Tests whether the subject is in an area covered by snow.

## Parameters

> [!NOTE]
> `is_snow_covered` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
> `is_snow_covered` can also use `subject`, [operator](../Definitions/NestedTables/operator.md) and `value` parameters.

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
{ "test": "is_snow_covered", "subject": "self", "operator": "equals", "value": true}
```

### Short (using Defaults)

```json
{ "test": "is_snow_covered" }
```

## Vanilla entities examples

### rabbit

```json
{ "test": "is_snow_covered", "value": true }
```

## Vanilla entities using `is_snow_covered`

- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
