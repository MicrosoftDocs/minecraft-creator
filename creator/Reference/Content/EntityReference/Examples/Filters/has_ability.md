---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:has_ability"
description: "Describes the minecraft:has_ability entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:has_ability

Returns true when the subject entity has the named ability.


## Has Ability Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| value | *not set* | [Value](#value-choices) choices | (Required) The Ability type to test |  | 

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

### Value choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| flySpeed | FlySpeed | |
| flying | Flying | |
| instabuild | Instabuild | |
| invulnerable | Invulnerable | |
| lightning | Lightning | |
| mayfly | Mayfly | |
| mute | Mute | |
| noclip | Noclip | |
| verticalFlySpeed | VerticalFlySpeed | |
| walkSpeed | WalkSpeed | |
| worldbuilder | Worldbuilder | |

## Samples

At Full..: 

```json
{ "test": "has_ability", "subject": "self", "operator": "equals", "value": "instabuild" }
```

At Short (using Defaults)..: 

```json
{ "test": "has_ability", "value": "instabuild" }
```
