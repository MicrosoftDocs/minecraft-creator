---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:enum_property"
description: "Describes the minecraft:enum_property entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:enum_property

Returns true when the enum actor property matches the value provided.


## Enum Property Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| domain | *not set* | String | (Required) The property name to look for |  | 
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| value | *not set* | String | (Required) A string value. |  | 

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
{"test":"enum_property","domain":"minecraft:armadillo_state","value":"unrolled"}
```

At /minecraft:entity/events/minecraft:no_threat_detected/sequence/0/filters/all_of/0/any_of/0/: 

```json
{"test":"enum_property","domain":"minecraft:armadillo_state","value":"rolled_up"}
```

At /minecraft:entity/events/minecraft:no_threat_detected/sequence/0/filters/all_of/0/any_of/1/: 

```json
{"test":"enum_property","domain":"minecraft:armadillo_state","value":"rolled_up_peeking"}
```

At /minecraft:entity/events/minecraft:threat_detected/sequence/1/filters/any_of/0/: 

```json
{"test":"enum_property","domain":"minecraft:armadillo_state","value":"rolled_up_relaxing"}
```

At /minecraft:entity/events/minecraft:threat_detected/sequence/1/filters/any_of/1/: 

```json
{"test":"enum_property","domain":"minecraft:armadillo_state","value":"rolled_up_unrolling"}
```

At /minecraft:entity/events/minecraft:unroll/sequence/0/filters/all_of/0/: 

```json
{"test":"enum_property","domain":"minecraft:armadillo_state","operator":"not","value":"unrolled"}
```

At /minecraft:entity/events/minecraft:roll_up/sequence/0/filters/all_of/0/: 

```json
{"test":"enum_property","domain":"minecraft:armadillo_state","operator":"not","value":"rolled_up"}
```

At /minecraft:entity/events/minecraft:roll_up/sequence/0/filters/all_of/1/: 

```json
{"test":"enum_property","domain":"minecraft:armadillo_state","operator":"not","value":"rolled_up_peeking"}
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)

At /minecraft:entity/component_groups/minecraft:spawned_by_player/minecraft:environment_sensor/triggers/0/filters/all_of/0/any_of/0/: 

```json
{"test":"enum_property","domain":"minecraft:creaking_state","value":"hostile_observed"}
```

At /minecraft:entity/component_groups/minecraft:spawned_by_player/minecraft:environment_sensor/triggers/0/filters/all_of/0/any_of/1/: 

```json
{"test":"enum_property","domain":"minecraft:creaking_state","value":"hostile_unobserved"}
```

At /minecraft:entity/component_groups/minecraft:spawned_by_creaking_heart/minecraft:environment_sensor/triggers/1/filters/all_of/0/none_of/0/: 

```json
{"test":"enum_property","domain":"minecraft:creaking_state","value":"twitching"}
```

At /minecraft:entity/component_groups/minecraft:spawned_by_creaking_heart/minecraft:environment_sensor/triggers/2/filters/all_of/0/: 

```json
{"test":"enum_property","domain":"minecraft:creaking_state","operator":"not","value":"twitching"}
```

At /minecraft:entity/events/minecraft:become_hostile/filters/: 

```json
{"test":"enum_property","domain":"minecraft:creaking_state","value":"neutral"}
```

At /minecraft:entity/events/minecraft:become_neutral/filters/: 

```json
{"test":"enum_property","domain":"minecraft:creaking_state","operator":"not","value":"neutral"}
```

At /minecraft:entity/events/minecraft:crumble/filters/: 

```json
{"test":"enum_property","domain":"minecraft:creaking_state","operator":"not","value":"crumbling"}
```
