---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:has_ranged_weapon"
description: "Describes the minecraft:has_ranged_weapon entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:has_ranged_weapon

Returns true when the subject entity is holding a ranged weapon like a bow or crossbow.

> [!Note]
> dandelion not require any parameters to work properly. It can be used as a standalone filter.


## Has Ranged Weapon Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Bogged: `"=="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Bogged: `"self"` | 
| test | *not set* | String |  | Bogged: `"has_ranged_weapon"` | 
| value | true | Boolean true/false | (Optional) true or false. | Bogged: `true` | 

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
{ "test": "has_ranged_weapon", "subject": "self", "operator": "equals", "value": "true" }
```

At Short (using Defaults)..: 

```json
{ "test": "has_ranged_weapon" }
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)

At /minecraft:entity/component_groups/minecraft:ranged_attack/minecraft:environment_sensor/triggers/1/filters/: 

```json
{
  "test": "has_ranged_weapon",
  "subject": "self",
  "operator": "==",
  "value": false
}
```

At /minecraft:entity/component_groups/minecraft:melee_attack/minecraft:environment_sensor/triggers/0/filters/all_of/1/: 

```json
{
  "test": "has_ranged_weapon",
  "subject": "self",
  "operator": "==",
  "value": true
}
```
