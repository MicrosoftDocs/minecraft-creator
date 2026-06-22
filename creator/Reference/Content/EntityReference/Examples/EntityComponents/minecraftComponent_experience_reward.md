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
| on_bred |  | Molang | A Molang expression defining the amount of experience rewarded when this entity is successfully bred. | Breeze: `"Math.Random(1,7)"` | 
| on_bred (as Named set of objects) | *not set* | Key/item pairs of [Bred (Item Molang Expression)](#item-molang-expression) items |  |  | 
| on_bred (as Decimal number) | *not set* | Decimal number |  |  | 
| on_death |  | Molang | A Molang expression defining the amount of experience rewarded when this entity dies. | Blaze: `"query.last_hit_by_player ? 10 : 0"`, Bogged: `"query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"`, Cave Spider: `"query.last_hit_by_player ? 5 : 0"` | 
| on_death (as Named set of objects) | *not set* | Key/item pairs of [Death (Item Molang Expression)](#item-molang-expression) items |  |  | 
| on_death (as Decimal number) | *not set* | Decimal number |  |  | 

### Item Molang Expression

#### Item Molang Expression Properties

**JSON path:** `on_bred`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

## Samples

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

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:experience_reward": {
  "on_bred": "Math.Random(1,7)",
  "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}
```
