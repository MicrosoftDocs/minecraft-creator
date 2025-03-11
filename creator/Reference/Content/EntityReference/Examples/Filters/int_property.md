---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:int_property"
description: "Describes the minecraft:int_property entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:int_property

Returns true when the int actor property matches the value provided.


## Int Property Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| domain | *not set* | String | (Required) The property name to look for | Creaking: `"minecraft:creaking_swaying_ticks"` | 
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Creaking: `">"`, `"<="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| test | *not set* | String |  | Creaking: `"int_property"` | 
| value | *not set* | Integer number | (Required) An integer value. | Creaking: `5` | 

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
{ "test": "int_property", "subject": "self", "domain": "minecraft:can_climb", "operator": "equals", "value": "0" }
```

At Short (using Defaults)..: 

```json
{ "test": "int_property", "domain": "minecraft:can_climb", "value": "0" }
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)

At /minecraft:entity/component_groups/minecraft:spawned_by_creaking_heart/minecraft:environment_sensor/triggers/3/filters/all_of/0/: 

```json
{
  "test": "int_property",
  "domain": "minecraft:creaking_swaying_ticks",
  "operator": ">",
  "value": 0
}
```

At /minecraft:entity/component_groups/minecraft:spawned_by_creaking_heart/minecraft:environment_sensor/triggers/3/filters/all_of/1/: 

```json
{
  "test": "int_property",
  "domain": "minecraft:creaking_swaying_ticks",
  "operator": "<=",
  "value": 5
}
```

At /minecraft:entity/component_groups/minecraft:spawned_by_creaking_heart/minecraft:environment_sensor/triggers/4/filters/: 

```json
{
  "test": "int_property",
  "domain": "minecraft:creaking_swaying_ticks",
  "operator": ">",
  "value": 5
}
```
