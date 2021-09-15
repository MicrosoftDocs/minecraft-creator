---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - inactivity_timer
ms.prod: gaming
---

# Entity Documentation - inactivity_timer

Tests if the entity was inactive for specified duration.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |Integer |(Required) An integer value. |

>[!Note]
>`inactivity_timer` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "inactivity_timer", "subject": "self", "operator": "equals", "value": "0" }
```

### Short (using Defaults)

```json
{ "test": "inactivity_timer", "value": "0" }
```

## Vanilla entities examples

### piglin_brute

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/piglin_brute.json" range="250-254":::

## Vanilla entities using `inactivity_timer`

- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
