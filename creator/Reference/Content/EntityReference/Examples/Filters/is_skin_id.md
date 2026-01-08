---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_skin_id"
description: "Describes the minecraft:is_skin_id entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_skin_id

Returns true if the subject entity is the skin id number provided.


## Is Skin Id Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Villager v2: `"other"` | 
| test | *not set* | String |  | Villager v2: `"is_skin_id"` | 
| value | *not set* | Integer number | (Required) An integer value. | Villager v2: `1`, `2`, `3`, `4`, `5` | 

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
{ "test": "is_skin_id", "subject": "self", "operator": "equals", "value": "0" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_skin_id", "value": "0" }
```

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/events/minecraft:entity_transformed/sequence/2/sequence/0/filters/: 

```json
{
  "test": "is_skin_id",
  "subject": "other",
  "value": 0
}
```

At /minecraft:entity/events/minecraft:entity_transformed/sequence/2/sequence/1/filters/: 

```json
{
  "test": "is_skin_id",
  "subject": "other",
  "value": 1
}
```

At /minecraft:entity/events/minecraft:entity_transformed/sequence/2/sequence/2/filters/: 

```json
{
  "test": "is_skin_id",
  "subject": "other",
  "value": 2
}
```

At /minecraft:entity/events/minecraft:entity_transformed/sequence/2/sequence/3/filters/: 

```json
{
  "test": "is_skin_id",
  "subject": "other",
  "value": 3
}
```

At /minecraft:entity/events/minecraft:entity_transformed/sequence/2/sequence/4/filters/: 

```json
{
  "test": "is_skin_id",
  "subject": "other",
  "value": 4
}
```

At /minecraft:entity/events/minecraft:entity_transformed/sequence/2/sequence/5/filters/: 

```json
{
  "test": "is_skin_id",
  "subject": "other",
  "value": 5
}
```
