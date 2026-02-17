---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:experience_reward"
description: "Describes the minecraft:experience_reward entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:experience_reward

.


## Entity Experience Reward Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| on_bred | {"expression":"","version":-1} | Molang | A Molang expression defining the amount of experience rewarded when this entity is successfully bred. | Breeze: `{"expression":"Math.Random(1,7)","version":12}`, Chicken: `"Math.Random(1,7)"` | 
| on_bred (Alternate 1) | *not set* | Key/item pairs of [Bred](#bred) items |  |  | 
| on_bred (Alternate 2) | *not set* | Decimal number |  |  | 
| on_death | {"expression":"","version":-1} | Molang | A Molang expression defining the amount of experience rewarded when this entity dies. | Blaze: `{"expression":"query.last_hit_by_player ? 10 : 0","version":12}`, Bogged: `{"expression":"query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0","version":13}`, Cave Spider: `{"expression":"query.last_hit_by_player ? 5 : 0","version":13}` | 
| on_death (Alternate 1) | *not set* | Key/item pairs of [Death](#death) items |  |  | 
| on_death (Alternate 2) | *not set* | Decimal number |  |  | 

## Bred

#### Bred Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Death

#### Death Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Samples

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:experience_reward": {
  "on_death": {
    "expression": "query.last_hit_by_player ? 10 : 0",
    "version": 12
  }
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:experience_reward": {
  "on_death": {
    "expression": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0",
    "version": 13
  }
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:experience_reward": {
  "on_bred": {
    "expression": "Math.Random(1,7)",
    "version": 12
  },
  "on_death": {
    "expression": "query.last_hit_by_player ? 10 : 0",
    "version": 12
  }
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:experience_reward": {
  "on_death": {
    "expression": "query.last_hit_by_player ? 5 : 0",
    "version": 13
  }
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:experience_reward": {
  "on_bred": "Math.Random(1,7)",
  "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```
