---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:has_biome_tag"
description: "Describes the minecraft:has_biome_tag entity filter element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:has_biome_tag

Tests whether the biome the subject is in has the specified tag.


## Has Biome Tag Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| test | *not set* | String |  | Cave Spider: `"has_biome_tag"` | 
| value | *not set* | String | (Required) The tag to look for | Cave Spider: `"swamp"`, `"mangrove_swamp"`, `"desert"`, `"nether"` | 

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
{ "test": "has_biome_tag", "subject": "self", "operator": "equals", "value": " " }
```

At Short (using Defaults)..: 

```json
{ "test": "has_biome_tag", "value": " " }
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)

At /minecraft:entity/events/minecraft:entity_spawned_with_biome_specific_jockey/first_valid[1]/filters/all_of[2]/any_of[0]/: 

```json
{
  "test": "has_biome_tag",
  "value": "swamp"
}
```

At /minecraft:entity/events/minecraft:entity_spawned_with_biome_specific_jockey/first_valid[1]/filters/all_of[2]/any_of[1]/: 

```json
{
  "test": "has_biome_tag",
  "value": "mangrove_swamp"
}
```

At /minecraft:entity/events/minecraft:entity_spawned_with_biome_specific_jockey/first_valid[2]/filters/all_of[2]/: 

```json
{
  "test": "has_biome_tag",
  "value": "desert"
}
```

At /minecraft:entity/events/minecraft:entity_spawned_with_biome_specific_jockey/first_valid[3]/filters/: 

```json
{
  "test": "has_biome_tag",
  "value": "nether"
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)

At /minecraft:entity/events/minecraft:entity_spawned/sequence[1]/first_valid[0]/filters/: 

```json
{
  "test": "has_biome_tag",
  "value": "spawns_warm_variant_farm_animals"
}
```

At /minecraft:entity/events/minecraft:entity_spawned/sequence[1]/first_valid[1]/filters/: 

```json
{
  "test": "has_biome_tag",
  "value": "spawns_cold_variant_farm_animals"
}
```
