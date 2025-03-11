---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:weather_at_position"
description: "Describes the minecraft:weather_at_position entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:weather_at_position

Tests the current weather, at the actor's position, against a provided weather value.


## Weather At Position Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Fox: `"!="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Fox: `"self"` | 
| test | *not set* | String |  | Fox: `"weather_at_position"` | 
| value | *not set* | String | (Required) The Family name to look for | Fox: `"thunderstorm"` | 

### Operator choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| != | != | Test for inequality.|
| < | < | Test for less-than the value.|
| <= | <= | Test for less-than or equal to the value.|
| <> | <> | Test for inequality.|
| = | = | Test for equality.|
| == | == | Test for equality.|
| > | > | Test for greater-than the value.|
| >= | >= | Test for greater-than or equal to the value.|
| equals | Equals | Test for equality.|
| not | Not | Test for inequality.|

### Subject choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| block | Block | The block involved with the interaction.|
| damager | Damager | The damaging actor involved with the interaction.|
| other | Other | The other member of an interaction, not the caller.|
| parent | Parent | The caller's current parent.|
| player | Player | The player involved with the interaction.|
| self | Self | The entity or object calling the test|
| target | Target | The caller's current target.|

## Samples

At Full..: 

```json
{ "test": "weather_at_position", "subject": "self", "operator": "equals", "value": "player" }
```

At Short (using Defaults)..: 

```json
{ "test": "weather_at_position", "value": "player" }
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)

At /minecraft:entity/component_groups/minecraft:fox_thunderstorm/minecraft:environment_sensor/triggers/0/filters/all_of/0/: 

```json
{
  "test": "weather_at_position",
  "operator": "!=",
  "value": "thunderstorm"
}
```

At /minecraft:entity/component_groups/minecraft:fox_day/minecraft:environment_sensor/triggers/0/filters/: 

```json
{
  "test": "weather_at_position",
  "value": "thunderstorm"
}
```

At /minecraft:entity/component_groups/minecraft:fox_day/minecraft:behavior.nap/can_nap_filters/all_of/3/: 

```json
{
  "test": "weather_at_position",
  "subject": "self",
  "operator": "!=",
  "value": "thunderstorm"
}
```
