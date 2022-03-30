---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - is_underground
ms.prod: gaming
---

# Entity Documentation - is_underground

Returns true when the subject entity is underground. An entity is considered underground if there are non-solid blocks above it.

## Parameters

> [!Note]
> `is_underground` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
>`is_underground` can also use `subject`, [operator](../Definitions/NestedTables/operator.md) and `value` parameters.

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
{ "test": "is_underground", "subject": "self", "operator": "equals", "value": "true"}
```

### Short (using Defaults)

```json
{ "test": "is_underground" }
```

## Vanilla entities examples

### spider

```json
{
    "test": "is_underwater",
    "subject": "self",
    "operator": "==",
    "value": true
}
```

## Vanilla entities using `is_underground`

- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
