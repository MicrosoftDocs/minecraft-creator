---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:in_nether"
description: "Describes the minecraft:in_nether entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:in_nether

Returns true when the subject entity is in Nether.

> [!Note]
> Does not require any parameters to work properly. It can be used as a standalone filter.


## In Nether Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Hoglin: `"=="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Hoglin: `"self"` | 
| test | *not set* | String |  | Hoglin: `"in_nether"` | 
| value | true | Boolean true/false | (Optional) true or false. | Hoglin: `true` | 

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
{ "test": "in_nether", "subject": "self", "operator": "equals", "value": "true" }
```

At Short (using Defaults)..: 

```json
{ "test": "in_nether" }
```

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)

At /minecraft:entity/component_groups/zombification_sensor/minecraft:environment_sensor/triggers/filters/: 

```json
{
  "test": "in_nether",
  "subject": "self",
  "operator": "==",
  "value": false
}
```

At /minecraft:entity/component_groups/start_zombification/minecraft:environment_sensor/triggers/filters/: 

```json
{
  "test": "in_nether",
  "subject": "self",
  "operator": "==",
  "value": true
}
```
