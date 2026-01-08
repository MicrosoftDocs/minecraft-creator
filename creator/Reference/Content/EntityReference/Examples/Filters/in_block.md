---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:in_block"
description: "Describes the minecraft:in_block entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:in_block

Returns true when the subject entity is inside a specified Block type.

> [!Note]
> Does not require any parameters to work properly. It can be used as a standalone filter.


## In Block Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Skeleton: `"not"` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Skeleton: `"self"` | 
| test | *not set* | String |  | Skeleton: `"in_block"` | 
| value | *not set* | String | (Optional) A string value. | Skeleton: `"minecraft:powder_snow"` | 

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
{ "test": "in_block", "subject": "self", "operator": "equals", "value": "" }
```

At Short (using Defaults)..: 

```json
{ "test": "in_block" }
```

#### [Skeleton](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/skeleton.json)

At /minecraft:entity/component_groups/in_powder_snow/minecraft:environment_sensor/triggers/0/filters/: 

```json
{
  "test": "in_block",
  "subject": "self",
  "operator": "not",
  "value": "minecraft:powder_snow"
}
```

At /minecraft:entity/component_groups/minecraft:ranged_attack/minecraft:environment_sensor/triggers/2/filters/: 

```json
{
  "test": "in_block",
  "subject": "self",
  "value": "minecraft:powder_snow"
}
```

At /minecraft:entity/component_groups/minecraft:melee_attack/minecraft:environment_sensor/triggers/1/filters/: 

```json
{
  "test": "in_block",
  "value": "minecraft:powder_snow"
}
```
