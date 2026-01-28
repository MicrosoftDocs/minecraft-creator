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
| domain | *not set* | String | (Required) The property name to look for | Egg: `"minecraft:climate_variant"` | 
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Egg: `"other"` | 
| test | *not set* | String |  | Egg: `"enum_property"` | 
| value | *not set* | String | (Required) A string value. | Egg: `"warm"`, `"cold"` | 

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

#### [Egg](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/egg.json)

At /minecraft:entity/components/minecraft:projectile/on_hit/spawn_chance/on_spawn[0]/filters/: 

```json
{
  "test": "enum_property",
  "subject": "other",
  "domain": "minecraft:climate_variant",
  "value": "warm"
}
```

At /minecraft:entity/components/minecraft:projectile/on_hit/spawn_chance/on_spawn[1]/filters/: 

```json
{
  "test": "enum_property",
  "subject": "other",
  "domain": "minecraft:climate_variant",
  "value": "cold"
}
```

At /minecraft:entity/components/minecraft:projectile/on_hit/particle_on_hit/particle_item_name/brown_egg/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:climate_variant",
  "value": "warm"
}
```

At /minecraft:entity/components/minecraft:projectile/on_hit/particle_on_hit/particle_item_name/blue_egg/: 

```json
{
  "test": "enum_property",
  "domain": "minecraft:climate_variant",
  "value": "cold"
}
```
