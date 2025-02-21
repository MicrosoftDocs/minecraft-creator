---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_riding"
description: "Describes the minecraft:is_riding entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_riding

Returns true if the subject entity is riding on another entity.

> [!Note]
> Does not require any parameters to work properly. It can be used as a standalone filter.


## Is Riding Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| value | true | Boolean true/false | (Optional) true or false. |  | 

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
{ "test": "is_riding", "subject": "self", "operator": "equals", "value": "true" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_riding" }
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)

At /minecraft:entity/component_groups/minecraft:riding/minecraft:environment_sensor/triggers/filters/: 

```json
{"test":"is_riding","subject":"self","operator":"==","value":false}
```

At /minecraft:entity/component_groups/minecraft:not_riding/minecraft:environment_sensor/triggers/filters/: 

```json
{"test":"is_riding","subject":"self","operator":"==","value":true}
```

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)

At /minecraft:entity/component_groups/minecraft:parrot_not_riding_player/minecraft:entity_sensor/subsensors/0/event_filters/all_of/0/: 

```json
{"test":"is_riding","subject":"self","operator":"equals","value":true}
```

At /minecraft:entity/component_groups/minecraft:parrot_riding_player/minecraft:entity_sensor/subsensors/0/event_filters/all_of/0/: 

```json
{"test":"is_riding","subject":"self","operator":"equals","value":false}
```

At /minecraft:entity/components/minecraft:healable/filters/: 

```json
{"test":"is_riding","operator":"!=","value":true}
```
