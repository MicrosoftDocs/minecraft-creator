---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:bool_property"
description: "Describes the minecraft:bool_property entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:bool_property

Returns true when the bool actor property matches the value provided.


## Bool Property Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| domain | *not set* | String | (Required) The property name to look for | Bee: `"minecraft:has_nectar"`, Copper Golem: `"minecraft:has_flower"`, `"minecraft:is_waxed"`, `"minecraft:is_becoming_statue"` | 
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Bee: `"!="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| test | *not set* | String |  | Bee: `"bool_property"` | 
| value | true | Boolean true/false | (Optional) true or false. | Copper Golem: `true` | 

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
{ "test": "bool_property", "subject": "self", "domain": "minecraft:can_climb", "operator": "equals", "value": "true" }
```

At Short (using Defaults)..: 

```json
{ "test": "bool_property", "domain": "minecraft:can_climb" }
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)

At /minecraft:entity/component_groups/shelter_detection/minecraft:environment_sensor/triggers/0/filters/all_of/1/: 

```json
{
  "test": "bool_property",
  "domain": "minecraft:has_nectar",
  "operator": "!="
}
```

At /minecraft:entity/events/find_hive_timeout/sequence/0/filters/: 

```json
{
  "test": "bool_property",
  "operator": "!=",
  "domain": "minecraft:has_nectar"
}
```

At /minecraft:entity/events/find_hive_timeout/sequence/1/filters/: 

```json
{
  "test": "bool_property",
  "domain": "minecraft:has_nectar"
}
```

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)

At /minecraft:entity/components/minecraft:behavior.take_flower/filters/all_of/1/: 

```json
{
  "test": "bool_property",
  "domain": "minecraft:has_flower",
  "value": false
}
```

At /minecraft:entity/components/minecraft:interact/interactions/0/on_interact/filters/all_of/0/: 

```json
{
  "test": "bool_property",
  "domain": "minecraft:is_waxed",
  "value": false
}
```

At /minecraft:entity/components/minecraft:interact/interactions/2/on_interact/filters/all_of/0/: 

```json
{
  "test": "bool_property",
  "domain": "minecraft:is_waxed",
  "value": true
}
```

At /minecraft:entity/components/minecraft:interact/interactions/4/on_interact/filters/all_of/0/: 

```json
{
  "test": "bool_property",
  "domain": "minecraft:has_flower",
  "value": true
}
```

At /minecraft:entity/component_groups/minecraft:becoming_statue/minecraft:behavior.place_block/can_place/: 

```json
{
  "test": "bool_property",
  "domain": "minecraft:is_becoming_statue",
  "value": false
}
```

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)

At /minecraft:entity/events/minecraft:become_immobile/filters/: 

```json
{
  "test": "bool_property",
  "domain": "minecraft:can_move",
  "value": true
}
```

At /minecraft:entity/events/minecraft:become_mobile/filters/: 

```json
{
  "test": "bool_property",
  "domain": "minecraft:can_move",
  "value": false
}
```
