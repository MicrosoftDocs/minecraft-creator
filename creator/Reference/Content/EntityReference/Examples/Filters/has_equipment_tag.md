---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:has_equipment_tag"
description: "Describes the minecraft:has_equipment_tag entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:has_equipment_tag

Tests for the presence of an item with the named tag in the designated slot of the subject entity.


## Has Equipment Tag Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| domain | any | [Domain](#domain-choices) choices | (Optional) The equipment location to test |  | 
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| value | *not set* | String | (Required) The item name to look for |  | 

### Domain choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| any | Any | |
| armor | Armor | |
| body | Body | |
| feet | Feet | |
| hand | Hand | |
| head | Head | |
| inventory | Inventory | |
| leg | Leg | |
| torso | Torso | |

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
{ "test": "has_equipment_tag", "subject": "self", "domain": "any", "operator": "equals", "value": "dirt" }
```

At Short (using Defaults)..: 

```json
{ "test": "has_equipment_tag", "value": "dirt" }
```
