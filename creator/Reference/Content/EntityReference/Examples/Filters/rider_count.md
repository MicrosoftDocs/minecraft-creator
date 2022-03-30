---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - rider_count
ms.prod: gaming
---

# Entity Documentation - rider_count

Returns the number of riders on this entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |Integer |(Required) An integer value. |

>[!Note]
> `rider_count` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "rider_count", "subject": "self", "operator": "equals", "value": "0" }
```

### Short (using Defaults)

```json
{ "test": "rider_count", "value": "0" }
```

## Vanilla entities examples

### chicken

```json
{ "test": "rider_count", "subject": "self", "operator": "==", "value": 0 } 
```

## Vanilla entities using `rider_count`

- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
