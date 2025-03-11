---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_game_rule"
description: "Describes the minecraft:is_game_rule entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_game_rule

Tests whether a named game rule is active.


## Is Game Rule Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| domain | *not set* | String | (Required) The Game Rule to test. | Ender Pearl: `"domobspawning"` | 
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| test | *not set* | String |  | Ender Pearl: `"is_game_rule"` | 
| value | true | Boolean true/false | (Optional) true or false. |  | 

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
{ "test": "is_game_rule", "subject": "self", "domain": "domobspawning", "operator": "equals", "value": "true" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_game_rule", "domain": "domobspawning" }
```

#### [Ender Pearl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_pearl.json)


```json
{
  "test": "is_game_rule",
  "domain": "domobspawning",
  "value": false
}
```
