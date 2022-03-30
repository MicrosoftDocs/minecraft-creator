---
author: JDHeaden
ms.author: v-mammerla
title: Entity Documentation - in_contact_with_water
ms.prod: gaming
---

# Entity Documentation - in_contact_with_water

Returns true when the subject entity is inside a specified Block type.

## Parameters

> [!Note]
> `in_contact_with_water` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
> `in_contact_with_water` can also use `subject`, [operator](../Definitions/NestedTables/operator.md) and `value` parameters.

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
{ "test": "in_contact_with_water", "subject": "self", "operator": "equals", "value": true }
```

### Short (using Defaults)

```json
{ "test": "in_contact_with_water" }
```

## Vanilla entities examples

### enderman

```json
{
  "filters": { "test": "in_contact_with_water", "operator": "==", "value": true },
  "cause": "drowning",
  "damage_per_tick": 1
}
```

## Vanilla entities using `in_contact_with_water`

- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
