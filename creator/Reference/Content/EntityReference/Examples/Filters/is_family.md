---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_family"
description: "Describes the minecraft:is_family entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_family

Returns true when the subject entity is a member of the named family.


## Is Family Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. | Bogged: `"!="` | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. | Arrow: `"other"`, Breeze: `1`, `"damager"` | 
| test | *not set* | String |  | Arrow: `"is_family"` | 
| value | *not set* | String | (Required) The Family name to look for | Arrow: `"player"`, `"pillager"`, Bogged: `"wolf"`, `"breeze"`, `"irongolem"`, `"baby_turtle"` | 

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
{ "test": "is_family", "subject": "self", "operator": "equals", "value": "player" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_family", "value": "player" }
```

#### [Arrow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/arrow.json)

At /minecraft:entity/events/minecraft:entity_spawned/sequence[1]/filters/: 

```json
{
  "subject": "other",
  "test": "is_family",
  "value": "player"
}
```

At /minecraft:entity/events/minecraft:entity_spawned/sequence[2]/filters/: 

```json
{
  "subject": "other",
  "test": "is_family",
  "value": "pillager"
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)

At /minecraft:entity/components/minecraft:behavior.avoid_mob_type/entity_types[0]/filters/: 

```json
{
  "test": "is_family",
  "subject": "other",
  "value": "wolf"
}
```

At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/: 

```json
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "breeze"
}
```

At /minecraft:entity/components/minecraft:behavior.nearest_attackable_target/entity_types[0]/filters/: 

```json
{
  "test": "is_family",
  "subject": "other",
  "value": "player"
}
```

At /minecraft:entity/components/minecraft:behavior.nearest_attackable_target/entity_types[1]/filters/: 

```json
{
  "test": "is_family",
  "subject": "other",
  "value": "irongolem"
}
```

At /minecraft:entity/components/minecraft:behavior.nearest_attackable_target/entity_types[2]/filters/all_of[0]/: 

```json
{
  "test": "is_family",
  "subject": "other",
  "value": "baby_turtle"
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)

At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[0]/: 

```json
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "skeleton"
}
```

At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[1]/: 

```json
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "stray"
}
```

At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[2]/: 

```json
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "zombie"
}
```

At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[3]/: 

```json
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "husk"
}
```

At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[4]/: 

```json
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "spider"
}
```

At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[5]/: 

```json
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "cavespider"
}
```

At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[6]/: 

```json
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "slime"
}
```

At /minecraft:entity/components/minecraft:behavior.nearest_attackable_target/entity_types[0]/filters/AND[0]/: 

```json
{
  "test": "is_family",
  "subject": 1,
  "operator": 0,
  "value": "player"
}
```

At /minecraft:entity/components/minecraft:behavior.nearest_attackable_target/entity_types[1]/filters/AND[0]/: 

```json
{
  "test": "is_family",
  "subject": 1,
  "operator": 0,
  "value": "irongolem"
}
```

At /minecraft:entity/components/minecraft:damage_sensor/triggers[1]/on_damage/filters/: 

```json
{
  "operator": "!=",
  "test": "is_family",
  "subject": "damager",
  "value": "wind_charge"
}
```
