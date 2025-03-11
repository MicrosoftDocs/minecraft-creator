---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_daytime"
description: "Describes the minecraft:is_daytime entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_daytime

Returns true during the daylight hours.

> [!Note]
> Does not require any parameters to work properly. It can be used as a standalone filter.


## Is Daytime Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| test | *not set* | String |  | Fox: `"is_daytime"` | 
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
{ "test": "is_daytime", "subject": "self", "operator": "equals", "value": "true" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_daytime" }
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)

At /minecraft:entity/component_groups/minecraft:defending_fox/minecraft:environment_sensor/triggers/0/filters/all_of/0/: 

```json
{
  "test": "is_daytime",
  "value": true
}
```

At /minecraft:entity/component_groups/minecraft:defending_fox/minecraft:environment_sensor/triggers/1/filters/all_of/0/: 

```json
{
  "test": "is_daytime",
  "value": false
}
```
