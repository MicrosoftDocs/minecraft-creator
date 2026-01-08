---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_variant"
description: "Describes the minecraft:is_variant entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_variant

Returns true if the subject entity is the variant number provided.


## Is Variant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Boat: `"!="`, `"=="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Chest Boat: `"self"` | 
| test | *not set* | String |  | Boat: `"is_variant"` | 
| value | *not set* | Integer number | (Required) An integer value. | Boat: `7`, Panda: `3`, `6` | 

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
{ "test": "is_variant", "subject": "self", "operator": "equals", "value": "0" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_variant", "value": "0" }
```

#### [Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json)

At /minecraft:entity/events/minecraft:add_can_ride/sequence/0/filters/: 

```json
{
  "test": "is_variant",
  "operator": "!=",
  "value": 7
}
```

At /minecraft:entity/events/minecraft:add_can_ride/sequence/1/filters/: 

```json
{
  "test": "is_variant",
  "operator": "==",
  "value": 7
}
```

#### [Chest Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chest_boat.json)

At /minecraft:entity/events/minecraft:add_can_ride/sequence/0/filters/: 

```json
{
  "test": "is_variant",
  "subject": "self",
  "operator": "!=",
  "value": 7
}
```

At /minecraft:entity/events/minecraft:add_can_ride/sequence/1/filters/: 

```json
{
  "test": "is_variant",
  "subject": "self",
  "operator": "==",
  "value": 7
}
```

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)

At /minecraft:entity/events/minecraft:ageable_grow_up/sequence/2/filters/: 

```json
{
  "test": "is_variant",
  "subject": "self",
  "operator": "==",
  "value": 3
}
```

At /minecraft:entity/events/minecraft:ageable_grow_up/sequence/3/filters/: 

```json
{
  "test": "is_variant",
  "subject": "self",
  "operator": "==",
  "value": 6
}
```
