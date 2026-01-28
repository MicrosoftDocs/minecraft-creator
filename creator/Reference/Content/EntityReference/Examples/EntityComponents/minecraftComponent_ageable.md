---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:ageable"
description: "Describes the minecraft:ageable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:ageable

Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feed_items.


## Ageable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| drop_items | *not set* | Array of strings | List of items that are dropped when an entity grows up |  | 
| duration | 1200 | Decimal number | Length of time before an entity grows up (-1 to always stay a baby) | Chicken: `1200` | 
| feed_items | *not set* | Array of strings | List of items that can be fed to the entity. Includes 'item' for the item name, 'growth' to define how much time it grows up by, and 'result_item' that defines what item the feed item will transform to upon successful interaction (Format: itemName:auxValue). | Chicken: `["wheat_seeds","beetroot_seeds","melon_seeds","pumpkin_seeds","pitcher_pod","torchflower_seeds"]`, Cow: `"wheat"`, Dolphin: `["fish","salmon"]` | 
| feedItems | *not set* | Array of strings | List of items that can be fed to an entity to age them up |  | 
| grow_up | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to fire when an entity grows up | Chicken: `{"event":"minecraft:ageable_grow_up","target":"self"}`, Dolphin: `{"event":"ageable_grow_up","target":"self"}` | 
| interact_filters | *not set* | Minecraft filter | List of conditions to meet so that the entity can be fed. |  | 

## Samples

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    "wheat_seeds",
    "beetroot_seeds",
    "melon_seeds",
    "pumpkin_seeds",
    "pitcher_pod",
    "torchflower_seeds"
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```

#### [Cow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "feed_items": "wheat",
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    "fish",
    "salmon"
  ],
  "grow_up": {
    "event": "ageable_grow_up",
    "target": "self"
  }
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    "sweet_berries",
    "glow_berries"
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```
