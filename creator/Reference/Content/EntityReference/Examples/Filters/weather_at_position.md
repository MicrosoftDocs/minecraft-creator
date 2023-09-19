---
author: mammerla
ms.author: mikeam
title: Entity Documentation - weather_at_position
description: "A reference document detailing the 'weather_at_position' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - weather_at_position

Tests the current weather, at the actor's position, against a provided weather value.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|value |*not set* |String |(Required) The weather type to test against. |

## values

clear - no precipitation
rain - precipitation, or snow in cold biomes
thunder - lightning and sky noises, or blizzard in cold biomes

>[!Note]
> `weather_at_position` can also use `subject` and [operator](../Definitions/NestedTables/operator.md) parameters but they are optional.

### subject

| Options| Description |
|:-----------|:-----------|
| block| The block involved with the interaction. |
| damager| The damaging entity involved with the interaction. |
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
{ "test": "weather_at_position", "subject": "self", "operator": "equals", "value": "rain" }
```

### Short (using Defaults)

```json
{ "test": "weather_at_position", "value": "rain" }
```

## Vanilla entities examples

### fox

```json
{ "test": "weather_at_position", "operator": "!=", "value": "thunderstorm" } 
```

## Vanilla entities using `weather_at_position`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
