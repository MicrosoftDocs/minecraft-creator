---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - has_target
ms.prod: gaming
---

# Entity Documentation - has_target

Returns true if the subject entity has a valid target.

## Parameters

> [!Note]
> `has_target` does **not** require any parameters to work properly. It can be used as a standalone filter.
>
> `has_target` can also use `subject`, [operator](../Definitions/NestedTables/operator.md) and `value` parameters.

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
{ "test": "has_target", "subject": "self", "operator": "equals", "value": true }
```

### Short (using Defaults)

```json
{ "test": "has_target" }
```

## Vanilla entities examples

### hoglin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/hoglin.json" range="305-318":::

## Vanilla entities using `has_target`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
