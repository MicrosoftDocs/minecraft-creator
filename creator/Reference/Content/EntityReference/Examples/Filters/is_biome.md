---
author: mammerla
ms.author: mikeam
title: "Entity Filters Documentation - minecraft:is_biome"
description: "Describes the minecraft:is_biome entity filter element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filters Documentation - minecraft:is_biome

Tests whether the Subject is currently in the named biome.


## Is Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | equals | [Operator](#operator-choices) choices | (Optional) The comparison to apply with 'value'. |  | 
| subject | self | [Subject](#subject-choices) choices | (Optional) The subject of this filter test. |  | 
| test | *not set* | String |  | Cave Spider: `"is_biome"` | 
| value | *not set* | [Value](#value-choices) choices | (Required) The Biome type to test | Cave Spider: `"the_nether"`, Fishing Hook: `"jungle"`, Rabbit: `"desert"` | 

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

### Value choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| beach | Beach | |
| desert | Desert | |
| extreme_hills | Extreme Hills | |
| flat | Flat | |
| forest | Forest | |
| ice | Ice | |
| jungle | Jungle | |
| mesa | Mesa | |
| mushroom_island | Mushroom Island | |
| ocean | Ocean | |
| plain | Plain | |
| river | River | |
| savanna | Savanna | |
| stone_beach | Stone Beach | |
| swamp | Swamp | |
| taiga | Taiga | |
| the_end | The End | |
| the_nether | The Nether | |

## Samples

At Full..: 

```json
{ "test": "is_biome", "subject": "self", "operator": "equals", "value": "beach" }
```

At Short (using Defaults)..: 

```json
{ "test": "is_biome", "value": "beach" }
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
{
  "test": "is_biome",
  "value": "the_nether"
}
```

#### [Fishing Hook](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fishing_hook.json)


```json
{
  "test": "is_biome",
  "value": "jungle"
}
```

#### [Rabbit](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/rabbit.json)

At /minecraft:entity/events/minecraft:entity_spawned/sequence/2/filters/: 

```json
{
  "test": "is_biome",
  "value": "desert"
}
```
