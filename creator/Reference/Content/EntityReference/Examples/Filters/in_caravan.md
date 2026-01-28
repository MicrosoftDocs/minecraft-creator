---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:in_caravan"
description: "Describes the minecraft:in_caravan entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:in_caravan

Returns true if the subject entity is in a caravan.

> [!Note]
> Does not require any parameters to work properly. It can be used as a standalone filter.


## In Caravan Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minecraft:damage_sensor | *not set* | [Damage Sensor](#damage-sensor) item |  | Llama: `{"triggers":{"cause":"all","deals_damage":"yes"}}` | 
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| test | *not set* | String |  | Llama: `"in_caravan"` | 
| value | true | Boolean true/false | (Optional) true or false. |  | 

## Damage Sensor

#### Minecraft:damage sensor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| triggers | *not set* | String |  | Llama: `{"cause":"all","deals_damage":"yes"}` | 

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
{ "test": "in_caravan", "subject": "self", "operator": "equals", "value": "true" }
```

At Short (using Defaults)..: 

```json
{ "test": "in_caravan" }
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)

At /minecraft:entity/component_groups/minecraft:in_caravan/: 

```json
{
  "minecraft:damage_sensor": {
    "triggers": {
      "cause": "all",
      "deals_damage": "yes"
    }
  }
}
```

At /minecraft:entity/components/minecraft:damage_sensor/triggers/on_damage/filters/: 

```json
{
  "test": "in_caravan",
  "value": false
}
```
