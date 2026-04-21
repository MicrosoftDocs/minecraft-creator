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


## Pushable By Entity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| presets | *not set* | Array of [Presets](#presets) items |  | Boat: `[{"push_mode":"legacy_boat","strength_multiplier":0.1,"min_distance":0.3,"push_scale_self":0.5,"push_scale_other":0.25}]` | 

### Presets

#### Presets Properties

**JSON path:** `presets`

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| min_distance | *not set* | Decimal number |  | Boat: `0.3` | 
| push_mode | *not set* | String |  | Boat: `"legacy_boat"` | 
| push_scale_other | *not set* | Decimal number |  | Boat: `0.25` | 
| push_scale_self | *not set* | Decimal number |  | Boat: `0.5` | 
| strength_multiplier | *not set* | Decimal number |  | Boat: `0.1` | 

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
