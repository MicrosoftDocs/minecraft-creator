---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:pushable_by_entity"
description: "Describes the minecraft:pushable_by_entity entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:pushable_by_entity

Allows an entity to be pushed by other entities.


## Entity Pushable By Entity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| presets | [] | Array of objects | Defines how this entity behaves when pushed by another entity. The first preset whose "filter" conditions are met will be applied; if none match, a default configuration is used instead. | Boat: `[{"push_mode":"legacy_boat","strength_multiplier":0.1,"min_distance":0.3,"push_scale_self":0.5,"push_scale_other":0.25}]` | 

## Samples

#### [Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json)


```json
"minecraft:pushable_by_entity": {
  "presets": [
    {
      "push_mode": "legacy_boat",
      "strength_multiplier": 0.1,
      "min_distance": 0.3,
      "push_scale_self": 0.5,
      "push_scale_other": 0.25
    }
  ]
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:pushable_by_entity": {}
```

#### [Chest Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chest_minecart.json)


```json
"minecraft:pushable_by_entity": {
  "presets": [
    {
      "push_mode": "legacy_minecart",
      "strength_multiplier": 0.1,
      "min_distance": 0.0001,
      "push_scale_self": 0.5,
      "push_scale_other": 0.25
    }
  ]
}
```
