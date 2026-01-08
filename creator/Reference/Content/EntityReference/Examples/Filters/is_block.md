---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_block"
description: "Describes the minecraft:is_block entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_block

Returns true when the block has the given name.


## Is Block Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Bee: `"!="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Bee: `"block"` | 
| test | *not set* | String |  | Bee: `"is_block"` | 
| value | *not set* | String | (Required) The Family name to look for | Bee: `"minecraft:bee_nest"`, `"minecraft:beehive"`, `"minecraft:sweet_berry_bush"` | 

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
{ "test": "is_block", "subject": "self", "operator": "equals", "value": "player" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_block", "value": "player" }
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)

At /minecraft:entity/component_groups/return_to_home/minecraft:behavior.go_home/on_home/0/filters/any_of/0/: 

```json
{
  "test": "is_block",
  "subject": "block",
  "value": "minecraft:bee_nest"
}
```

At /minecraft:entity/component_groups/return_to_home/minecraft:behavior.go_home/on_home/0/filters/any_of/1/: 

```json
{
  "test": "is_block",
  "subject": "block",
  "value": "minecraft:beehive"
}
```

At /minecraft:entity/component_groups/return_to_home/minecraft:behavior.go_home/on_home/1/filters/all_of/0/: 

```json
{
  "test": "is_block",
  "subject": "block",
  "operator": "!=",
  "value": "minecraft:bee_nest"
}
```

At /minecraft:entity/component_groups/return_to_home/minecraft:behavior.go_home/on_home/1/filters/all_of/1/: 

```json
{
  "test": "is_block",
  "subject": "block",
  "operator": "!=",
  "value": "minecraft:beehive"
}
```

At /minecraft:entity/components/minecraft:damage_sensor/triggers/1/on_damage/filters/: 

```json
{
  "test": "is_block",
  "subject": "block",
  "value": "minecraft:sweet_berry_bush"
}
```
