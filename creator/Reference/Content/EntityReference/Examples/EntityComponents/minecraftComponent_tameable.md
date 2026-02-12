---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:tameable"
description: "Describes the minecraft:tameable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:tameable

This entity can be tamed.


## Tameable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| probability | 1 | Decimal number | The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100% | Parrot: `0.33` | 
| tame_event | *not set* | Object | Event to fire when the entity is tamed. Can be an object with event and target properties, or a simple event string. | Parrot: `{"event":"minecraft:on_tame","target":"self"}` | 
| tame_event (Alternate 1) | *not set* | String |  |  | 
| tame_items | *not set* | Array of strings | The list of items that can be used to tame this entity | Parrot: `["wheat_seeds","pumpkin_seeds","melon_seeds","beetroot_seeds","pitcher_pod","torchflower_seeds"]` | 
| tameItems | *not set* | String |  |  | 

## Samples

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:tameable": {
  "probability": 0.33,
  "tame_items": [
    "wheat_seeds",
    "pumpkin_seeds",
    "melon_seeds",
    "beetroot_seeds",
    "pitcher_pod",
    "torchflower_seeds"
  ],
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}
```
