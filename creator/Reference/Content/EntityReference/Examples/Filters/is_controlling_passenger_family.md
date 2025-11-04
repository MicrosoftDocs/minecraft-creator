---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_controlling_passenger_family"
description: "Describes the minecraft:is_controlling_passenger_family entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_controlling_passenger_family

Returns true when the subject entity's controlling passenger is a member of the named family.


## Is Controlling Passenger Family Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Zombie Horse: `"self"` | 
| test | *not set* | String |  | Zombie Horse: `"is_controlling_passenger_family"` | 
| value | *not set* | String | (Required) The Family name to look for | Zombie Horse: `"zombie"` | 

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
{ "test": "is_controlling_passenger_family", "subject": "self", "operator": "equals", "value": "player" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_controlling_passenger_family", "value": "player" }
```

#### [Zombie Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie_horse.json)


```json
{
  "test": "is_controlling_passenger_family",
  "subject": "self",
  "value": "zombie"
}
```
