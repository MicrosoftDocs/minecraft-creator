---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - is_variant
ms.prod: gaming
---

# Entity Documentation - is_variant

Returns true if the subject entity is the variant number provided.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |Integer |(Required) An integer value. |

>[!Note]
>`is_variant` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "is_variant", "subject": "self", "operator": "equals", "value": "0" }
```

### Short (using Defaults)

```json
{ "test": "is_variant", "value": "0" }
```

## Vanilla entities examples

### panda

```json
{
    "test": "is_variant",
    "subject": "self",
    "operator": "==",
    "value": 3
}
```

## Vanilla entities using `is_variant`

- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
