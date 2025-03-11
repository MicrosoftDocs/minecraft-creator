---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_snow_covered"
description: "Describes the minecraft:is_snow_covered entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_snow_covered

Tests whether the Subject is in an area with snow cover.

> [!Note]
> Does not require any parameters to work properly. It can be used as a standalone filter.


## Is Snow Covered Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| test | *not set* | String |  | Fox: `"is_snow_covered"` | 
| value | true | Boolean true/false | (Optional) true or false. | Fox: `true` | 

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
{ "test": "is_snow_covered", "subject": "self", "operator": "equals", "value": "true" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_snow_covered" }
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)

At /minecraft:entity/events/minecraft:entity_spawned/sequence/1/filters/: 

```json
{
  "test": "is_snow_covered",
  "value": true
}
```

At /minecraft:entity/events/minecraft:entity_spawned/sequence/2/filters/: 

```json
{
  "test": "is_snow_covered",
  "value": false
}
```
