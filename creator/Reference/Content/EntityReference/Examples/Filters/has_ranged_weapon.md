---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - has_ranged_weapon
ms.prod: gaming
---

# Entity Documentation - has_ranged_weapon

Returns true when the subject entity is holding a ranged weapon like a bow or crossbow.

## Parameters

> [!Note]
> `has_ranged_weapon` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
>`has_ranged_weapon` can also use `subject`, [operator](../Definitions/NestedTables/operator.md) and `value` parameters.

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
{ "test": "has_ranged_weapon", "subject": "self", "operator": "equals", "value": true }
```

### Short (using Defaults)

```json
{ "test": "has_ranged_weapon" }
```

## Vanilla entities examples

### skeleton

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/skeleton.json" range="116-121":::

## Vanilla entities using Filter `has_ranged_weapon`

- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
