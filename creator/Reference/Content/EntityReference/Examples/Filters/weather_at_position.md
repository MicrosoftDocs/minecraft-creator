---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - weather_at_position
ms.prod: gaming
---

# Entity Documentation - weather_at_position

Tests the current weather, at the actor's position, against a provided weather value.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String |(Required) The Family name to look for. |

>[!Note]
> `weather_at_position` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

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
{ "test": "weather_at_position", "subject": "self", "operator": "equals", "value": "player" }
```

### Short (using Defaults)

```json
{ "test": "weather_at_position", "value": "player" }
```

## Vanilla entities examples

### fox

```json
{ "test": "weather_at_position", "operator": "!=", "value": "thunderstorm" } 
```

## Vanilla entities using `weather_at_position`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
