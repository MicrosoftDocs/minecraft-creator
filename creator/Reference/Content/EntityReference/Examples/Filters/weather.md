---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - weather
ms.prod: gaming
---

# Entity Documentation - weather

Tests for the current weather state the entity is experiencing.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String |(Required) The Family name to look for. |

`Weather` can also use `subject` and `operator` parameters but they are optional.

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
{ "test": "weather", "subject": "self", "operator": "==", "value": "player" }
```

### Short (using Defaults)

```json
{ "test": "weather", "value": "player" }
```

## Vanilla Mob examples

### bee

```json
{
    "test": "weather",
    "operator": "==",
    "value": "precipitation"
}
```

## Vanilla Mobs using `weather`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
