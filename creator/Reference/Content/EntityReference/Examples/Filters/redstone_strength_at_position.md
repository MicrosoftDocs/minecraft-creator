---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:redstone_strength_at_position"
description: "Describes the minecraft:redstone_strength_at_position entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:redstone_strength_at_position

Tests the redstone strength at the subject's position.

> [!Note]
> Introduced in 1.26.30. Tests the redstone signal strength at the subject's position. Reads the same composed level as redstone components (e.g. comparator, observer) and returns 0 when the position is unloaded.

> [!Note]
> This item requires a format version of at least 1.26.30.


## Redstone Strength At Position Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | 
| value | *not set* | Integer number | (Required) An integer value. | 

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
{ "test": "redstone_strength_at_position", "subject": "self", "operator": "equals", "value": "0" }
```

At Short (using Defaults)..: 

```json
{ "test": "redstone_strength_at_position", "value": "0" }
```
