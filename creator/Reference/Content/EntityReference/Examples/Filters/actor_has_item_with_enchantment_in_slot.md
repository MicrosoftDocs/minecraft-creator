---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:actor_has_item_with_enchantment_in_slot"
description: "Describes the minecraft:actor_has_item_with_enchantment_in_slot entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:actor_has_item_with_enchantment_in_slot

Tests that an actor has an item equipped with a given enchantment.


## Actor Has Item With Enchantment In Slot Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | any | [Domain](#domain-choices) choices | (Optional) The equipment location to test | 
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | 
| value | *not set* | String | (Required) A string value. | 

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
| main_hand | Main Hand | |
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
{ "test": "actor_has_item_with_enchantment_in_slot", "subject": "self", "domain": "any", "operator": "equals", "value": "" }
```

At Short (using Defaults)..: 

```json
{ "test": "actor_has_item_with_enchantment_in_slot", "value": "" }
```
