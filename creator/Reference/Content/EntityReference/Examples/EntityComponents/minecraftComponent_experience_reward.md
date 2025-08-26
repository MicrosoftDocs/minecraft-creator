---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:experience_reward"
description: "Describes the minecraft:experience_reward entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:experience_reward

.


## Minecraft Experience Reward Entity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| on_bred | 0 | Molang | A Molang expression defining the amount of experience rewarded when this entity is successfully bred. | Armadillo: `"Math.Random(1,7)"` | 
| on_bred (Alternate 1) | *not set* | Key/item pairs of [Bred (Alternate 1)](#bred-alternate-1-item-type) items |  |  | 
| on_bred (Alternate 2) | *not set* | Decimal number |  |  | 
| on_bred_array | *not set* | Keyed set of strings |  |  | 
| on_bred_array (Alternate 1) | *not set* | Key/item pairs of [Bred Array (Alternate 1)](#bred-array-alternate-1-item-type) items |  |  | 
| on_bred_array (Alternate 2) | *not set* | Decimal number |  |  | 
| on_death | 0 | Molang | A Molang expression defining the amount of experience rewarded when this entity dies. | Armadillo: `"query.last_hit_by_player ? Math.Random(1,3) : 0"`, Blaze: `"query.last_hit_by_player ? 10 : 0"`, Bogged: `"query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"` | 
| on_death (Alternate 1) | *not set* | Key/item pairs of [Death (Alternate 1)](#death-alternate-1-item-type) items |  |  | 
| on_death (Alternate 2) | *not set* | Decimal number |  |  | 
| on_death_array | *not set* | Keyed set of strings |  |  | 
| on_death_array (Alternate 1) | *not set* | Key/item pairs of [Death Array (Alternate 1)](#death-array-alternate-1-item-type) items |  |  | 
| on_death_array (Alternate 2) | *not set* | Decimal number |  |  | 

## Bred (Alternate 1) item type

#### Bred Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Bred Array (Alternate 1) item type

#### Bred Array Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Death (Alternate 1) item type

#### Death Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Death Array (Alternate 1) item type

#### Death Array Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:experience_reward": {
  "on_bred": "Math.Random(1,7)",
  "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:experience_reward": {
  "on_death": "query.last_hit_by_player ? 10 : 0"
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:experience_reward": {
  "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:experience_reward": {
  "on_bred": "Math.Random(1,7)",
  "on_death": "query.last_hit_by_player ? 10 : 0"
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:experience_reward": {
  "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:experience_reward": {
  "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)

At /minecraft:entity/component_groups/minecraft:baby_drowned/minecraft:experience_reward/: 

```json
"minecraft:experience_reward": {
  "on_death": "query.last_hit_by_player ? 12 + (query.equipment_count * Math.Random(1,3)) : 0"
}
```

#### [Endermite](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/endermite.json)


```json
"minecraft:experience_reward": {
  "on_death": "query.last_hit_by_player ? 3 : 0"
}
```

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:experience_reward": {
  "on_death": "10"
}
```

#### [Glow Squid](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/glow_squid.json)


```json
"minecraft:experience_reward": {
  "on_death": "!query.is_baby && query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)


```json
"minecraft:experience_reward": {
  "on_bred": "Math.Random(1,7)",
  "on_death": "query.last_hit_by_player ? 5 : 0"
}
```

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:experience_reward": {
  "on_death": "query.last_hit_by_player ? query.variant : 0"
}
```
