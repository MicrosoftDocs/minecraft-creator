---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:in_water"
description: "Describes the minecraft:in_water entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:in_water

Returns true when the subject entity is in water.

> [!Note]
> Does not require any parameters to work properly. It can be used as a standalone filter.


## In Water Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Dolphin: `"!="`, `"=="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| test | *not set* | String |  | Dolphin: `"in_water"` | 
| value | true | Boolean true/false | (Optional) true or false. | Dolphin: `true` | 

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
{ "test": "in_water", "subject": "self", "operator": "equals", "value": "true" }
```

At Short (using Defaults)..: 

```json
{ "test": "in_water" }
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)

At /minecraft:entity/component_groups/dolphin_swimming_navigation/minecraft:environment_sensor/triggers[0]/filters/all_of[1]/: 

```json
{
  "test": "in_water",
  "operator": "!=",
  "value": true
}
```

At /minecraft:entity/component_groups/dolphin_on_land_in_rain/minecraft:environment_sensor/triggers[0]/filters/: 

```json
{
  "test": "in_water",
  "operator": "==",
  "value": true
}
```
