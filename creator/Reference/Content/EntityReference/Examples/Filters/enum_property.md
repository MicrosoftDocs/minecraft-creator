---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:enum_property"
description: "Describes the minecraft:enum_property entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:enum_property

Returns true when the actor property matches the value provided.


## Property Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| domain | *not set* | String | (Required) The property name to look for | Armadillo: `"minecraft:armadillo_state"`, Copper Golem: `"minecraft:oxidation_level"`, Creaking: `"minecraft:creaking_state"` | 
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Armadillo: `"not"` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Egg: `"other"` | 
| test | *not set* | String |  | Armadillo: `"enum_property"` | 
| value | *not set* | String | (Required) A string value. | Armadillo: `"unrolled"`, `"rolled_up"`, `"rolled_up_peeking"`, `"rolled_up_relaxing"`, `"rolled_up_unrolling"` | 

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
{ "test": "enum_property", "subject": "self", "domain": "minecraft:can_climb", "operator": "equals", "value": "" }
```

At Short (using Defaults)..: 

```json
{ "test": "enum_property", "domain": "minecraft:can_climb", "value": "" }
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)

At /minecraft:entity/component_groups/minecraft:baby/minecraft:ageable/interact_filters/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:armadillo_state",
  "value": "unrolled"
}
```

At /minecraft:entity/events/minecraft:no_threat_detected/sequence/0/filters/all_of/0/any_of/0/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:armadillo_state",
  "value": "rolled_up"
}
```

At /minecraft:entity/events/minecraft:no_threat_detected/sequence/0/filters/all_of/0/any_of/1/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:armadillo_state",
  "value": "rolled_up_peeking"
}
```

At /minecraft:entity/events/minecraft:threat_detected/sequence/1/filters/any_of/0/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:armadillo_state",
  "value": "rolled_up_relaxing"
}
```

At /minecraft:entity/events/minecraft:threat_detected/sequence/1/filters/any_of/1/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:armadillo_state",
  "value": "rolled_up_unrolling"
}
```

At /minecraft:entity/events/minecraft:unroll/sequence/0/filters/all_of/0/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:armadillo_state",
  "operator": "not",
  "value": "unrolled"
}
```

At /minecraft:entity/events/minecraft:roll_up/sequence/0/filters/all_of/0/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:armadillo_state",
  "operator": "not",
  "value": "rolled_up"
}
```

At /minecraft:entity/events/minecraft:roll_up/sequence/0/filters/all_of/1/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:armadillo_state",
  "operator": "not",
  "value": "rolled_up_peeking"
}
```

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)

At /minecraft:entity/components/minecraft:interact/interactions/1/on_interact/filters/all_of/1/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:oxidation_level",
  "operator": "not",
  "value": "unoxidized"
}
```

At /minecraft:entity/events/minecraft:wax_off/sequence/0/first_valid/0/filters/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:oxidation_level",
  "value": "oxidized"
}
```

At /minecraft:entity/events/minecraft:oxidize_copper/first_valid/0/filters/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:oxidation_level",
  "value": "unoxidized"
}
```

At /minecraft:entity/events/minecraft:oxidize_copper/first_valid/1/filters/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:oxidation_level",
  "value": "exposed"
}
```

At /minecraft:entity/events/minecraft:oxidize_copper/first_valid/2/filters/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:oxidation_level",
  "value": "weathered"
}
```
