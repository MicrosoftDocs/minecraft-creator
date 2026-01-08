---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_difficulty"
description: "Describes the minecraft:is_difficulty entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_difficulty

Tests the current difficulty level of the game.


## Is Difficulty Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Villager v2: `"!="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| test | *not set* | String |  | Arrow: `"is_difficulty"` | 
| value | *not set* | [Value](#value-choices) choices | (Required) The game's difficulty level to test | Arrow: `"hard"`, Bee: `"easy"`, `"normal"` | 

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
| easy | Easy | |
| hard | Hard | |
| normal | Normal | |
| peaceful | Peaceful | |

## Samples

At Full..: 

```json
{ "test": "is_difficulty", "subject": "self", "operator": "equals", "value": "normal" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_difficulty", "value": "normal" }
```

#### [Arrow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/arrow.json)


```json
{
  "test": "is_difficulty",
  "value": "hard"
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)

At /minecraft:entity/events/attacked/sequence/1/filters/: 

```json
{
  "test": "is_difficulty",
  "value": "easy"
}
```

At /minecraft:entity/events/attacked/sequence/2/filters/: 

```json
{
  "test": "is_difficulty",
  "value": "normal"
}
```

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/components/minecraft:damage_sensor/triggers/0/on_damage/filters/1/: 

```json
{
  "test": "is_difficulty",
  "operator": "!=",
  "value": "peaceful"
}
```
