---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:actor_health"
description: "Describes the minecraft:actor_health entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:actor_health

Tests the health of the subject.


## Actor Health Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Creaking: `">"` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Creaking: `"target"`, `"other"` | 
| test | *not set* | String |  | Creaking: `"actor_health"` | 
| value | *not set* | Integer number | (Required) An integer value. |  | 

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
{ "test": "actor_health", "subject": "self", "operator": "equals", "value": "0" }
```

At Short (using Defaults)..: 

```json
{ "test": "actor_health", "value": "0" }
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)

At /minecraft:entity/component_groups/minecraft:spawned_by_player/minecraft:environment_sensor/triggers/0/filters/all_of/1/any_of/1/: 

```json
{
  "test": "actor_health",
  "subject": "target",
  "value": 0
}
```

At /minecraft:entity/component_groups/minecraft:neutral/minecraft:looked_at/filters/: 

```json
{
  "test": "actor_health",
  "subject": "other",
  "operator": ">",
  "value": 0
}
```
