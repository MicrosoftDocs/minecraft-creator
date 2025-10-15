---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_underwater"
description: "Describes the minecraft:is_underwater entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_underwater

Returns true when the subject entity is under water. An entity is considered underwater if it is completely submerged in water blocks.

> [!Note]
> Does not require any parameters to work properly. It can be used as a standalone filter.


## Is Underwater Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Bogged: `"=="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Bogged: `"self"` | 
| test | *not set* | String |  | Bogged: `"is_underwater"` | 
| value | true | Boolean true/false | (Optional) true or false. | Bogged: `true` | 

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
{ "test": "is_underwater", "subject": "self", "operator": "equals", "value": "true" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_underwater" }
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)

At /minecraft:entity/component_groups/minecraft:ranged_attack/minecraft:environment_sensor/triggers/0/filters/: 

```json
{
  "test": "is_underwater",
  "subject": "self",
  "operator": "==",
  "value": true
}
```

#### [Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/husk.json)

At /minecraft:entity/component_groups/minecraft:look_to_start_zombie_transformation/minecraft:environment_sensor/triggers/filters/: 

```json
{
  "test": "is_underwater",
  "subject": "self"
}
```

At /minecraft:entity/component_groups/minecraft:start_zombie_transformation/minecraft:environment_sensor/triggers/filters/: 

```json
{
  "test": "is_underwater",
  "subject": "self",
  "value": false
}
```

At /minecraft:entity/components/minecraft:environment_sensor/triggers/0/filters/: 

```json
{
  "test": "is_underwater"
}
```

#### [Zombie](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie.json)

At /minecraft:entity/component_groups/minecraft:start_drowned_transformation/minecraft:environment_sensor/triggers/filters/: 

```json
{
  "test": "is_underwater",
  "value": false
}
```

#### [Gray Zombie Leader](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/gray_zombie_leader.behavior.json)

At /minecraft:entity/component_groups/minecraft:start_drowned_transformation/minecraft:environment_sensor/triggers/filters/: 

```json
{
  "test": "is_underwater",
  "subject": "self",
  "operator": "==",
  "value": false
}
```

At /minecraft:entity/components/minecraft:environment_sensor/triggers/filters/: 

```json
{
  "test": "is_underwater",
  "operator": "==",
  "value": true
}
```
