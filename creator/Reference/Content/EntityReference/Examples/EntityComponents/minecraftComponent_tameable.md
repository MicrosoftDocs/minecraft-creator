---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:tameable"
description: "Describes the minecraft:tameable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:tameable

This entity can be tamed.


## Tameable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| probability | 1 | Decimal number | The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100% | Cat: `0.33` | 
| tame_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when this entity becomes tamed | Cat: `{"event":"minecraft:on_tame","target":"self"}` | 
| tame_items | *not set* | Array of strings | The list of items that can be used to tame this entity | Cat: `["fish","salmon"]`, Nautilus: `["pufferfish","pufferfish_bucket"]`, Parrot: `["wheat_seeds","pumpkin_seeds","melon_seeds","beetroot_seeds","pitcher_pod","torchflower_seeds"]` | 
| tameItems | *not set* | String |  |  | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:tameable": {
  "probability": 0.33,
  "tame_items": [
    "fish",
    "salmon"
  ],
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}
```

#### [Nautilus](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/nautilus.json)


```json
"minecraft:tameable": {
  "probability": 0.33,
  "tame_items": [
    "pufferfish",
    "pufferfish_bucket"
  ],
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}
```

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

#### [Wolf](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wolf.json)


```json
"minecraft:tameable": {
  "probability": 0.33,
  "tame_items": "bone",
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}
```
