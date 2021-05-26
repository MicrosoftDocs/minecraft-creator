---
author: <Employee Name>
ms.author: <Employee Name>
title: inactivity_timer
ms.prod: gaming
---

# inactivity_timer

Tests if the specified duration in seconds of inactivity for despawning has been reached.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |Integer |(Required) An integer value. |

`inactivity_timer` can also use `subject` and `operator` parameters but they are optional.

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
{ "test": "inactivity_timer", "subject": "self", "operator": "equals", "value": "0" }
```

### Short (using Defaults)

```json
{ "test": "inactivity_timer", "value": "0" }
```

## Vanilla Mob examples

### piglin_brute

:::code language="json" source="../../../../Source/VanilliaBehaviorPack/entities/piglin_brute.json" range="248-252":::

## Vanilla Mobs using `inactivity_timer`

- [piglin brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
