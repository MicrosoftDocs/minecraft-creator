---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:rider_count"
description: "Describes the minecraft:rider_count entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:rider_count

Returns the number of riders on this entity.


## Rider Count Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Happy Ghast: `"equals"`, Nautilus: `">"`, Dream Turkey: `"=="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Happy Ghast: `"self"` | 
| test | *not set* | String |  | Happy Ghast: `"rider_count"` | 
| value | *not set* | Integer number | (Required) An integer value. | Happy Ghast: `1` | 

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
{ "test": "rider_count", "subject": "self", "operator": "equals", "value": "0" }
```

At Short (using Defaults)..: 

```json
{ "test": "rider_count", "value": "0" }
```

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)

At /minecraft:entity/component_groups/minecraft:adult_harnessed/minecraft:interact/interactions/0/on_interact/filters/all_of/2/: 

```json
{
  "test": "rider_count",
  "subject": "self",
  "operator": "equals",
  "value": 0
}
```

At /minecraft:entity/events/minecraft:on_passenger_mount/sequence/0/filters/: 

```json
{
  "test": "rider_count",
  "subject": "self",
  "operator": "equals",
  "value": 1
}
```

#### [Nautilus](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/nautilus.json)

At /minecraft:entity/events/minecraft:on_unsaddled/sequence/0/filters/: 

```json
{
  "test": "rider_count",
  "subject": "self",
  "operator": ">",
  "value": 0
}
```

#### [Dream Turkey](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/chill_dreams/1_dream_turkey/behavior_packs/mamm_cds/entities/dream_turkey.json)


```json
{
  "test": "rider_count",
  "subject": "self",
  "operator": "==",
  "value": 0
}
```
