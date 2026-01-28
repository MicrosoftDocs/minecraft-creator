---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:has_component"
description: "Describes the minecraft:has_component entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:has_component

Returns true when the subject entity contains the named component.


## Has Component Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Rabbit: `"!="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Sheep: `"self"`, Zoglin: `"other"` | 
| test | *not set* | String |  | Rabbit: `"has_component"` | 
| value | *not set* | String | (Required) The component name to look for | Rabbit: `"minecraft:variant"`, Sheep: `"minecraft:is_baby"`, `"minecraft:is_dyeable"` | 

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
{ "test": "has_component", "subject": "self", "operator": "equals", "value": "minecraft:explode" }
```

At Short (using Defaults)..: 

```json
{ "test": "has_component", "value": "minecraft:explode" }
```

#### [Rabbit](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/rabbit.json)

At /minecraft:entity/events/minecraft:entity_spawned/sequence[1]/filters/: 

```json
{
  "test": "has_component",
  "operator": "!=",
  "value": "minecraft:variant"
}
```

#### [Sheep](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sheep.json)

At /minecraft:entity/components/minecraft:interact/interactions[0]/on_interact/filters/all_of[2]/: 

```json
{
  "test": "has_component",
  "operator": "!=",
  "value": "minecraft:is_baby"
}
```

At /minecraft:entity/components/minecraft:interact/interactions[0]/on_interact/filters/all_of[3]/: 

```json
{
  "test": "has_component",
  "value": "minecraft:is_dyeable"
}
```

At /minecraft:entity/events/minecraft:on_eat_block/sequence[1]/filters/: 

```json
{
  "subject": "self",
  "test": "has_component",
  "operator": "!=",
  "value": "minecraft:is_baby"
}
```

#### [Sniffer](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json)


```json
{
  "test": "has_component",
  "subject": "self",
  "operator": "!=",
  "value": "minecraft:is_baby"
}
```

#### [Zoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zoglin.json)

At /minecraft:entity/events/minecraft:entity_transformed/sequence[0]/filters/: 

```json
{
  "test": "has_component",
  "subject": "other",
  "value": "minecraft:is_baby"
}
```

At /minecraft:entity/events/minecraft:entity_transformed/sequence[1]/filters/: 

```json
{
  "test": "has_component",
  "subject": "other",
  "operator": "!=",
  "value": "minecraft:is_baby"
}
```
