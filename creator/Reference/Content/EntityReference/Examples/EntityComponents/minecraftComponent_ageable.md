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
| feed_items | *not set* | Array of strings | List of items that can be fed to an entity to age them up. Can be a single item string or an array of items. | Chicken: `["wheat_seeds","beetroot_seeds","melon_seeds","pumpkin_seeds","pitcher_pod","torchflower_seeds"]`, Cow: `"wheat"`, Dolphin: `["fish","salmon"]` | 
| feed_items (Alternate 1) | *not set* | String |  |  | 
| grow_up | *not set* | Object | Event to fire when an entity grows up. Can be an object with event and target properties, or a simple event string. | Chicken: `{"event":"minecraft:ageable_grow_up","target":"self"}`, Dolphin: `{"event":"ageable_grow_up","target":"self"}` | 
| grow_up (Alternate 1) | *not set* | String |  |  | 
| interact_filters | *not set* | Minecraft filter | List of conditions to meet so that the entity can be fed. |  | 
| pause_growth_items | *not set* | Array of strings | List of items that can be fed to the entity to pause growth for baby entities. | Chicken: `["golden_dandelion"]` | 
| reset_growth_items | *not set* | Array of strings | List of items that can be used to reset growth for baby entities. | Chicken: `["golden_dandelion"]` | 

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
  "pause_growth_items": [
    "golden_dandelion"
  ],
  "reset_growth_items": [
    "golden_dandelion"
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
  "pause_growth_items": [
    "golden_dandelion"
  ],
  "reset_growth_items": [
    "golden_dandelion"
  ],
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
  "pause_growth_items": [
    "golden_dandelion"
  ],
  "reset_growth_items": [
    "golden_dandelion"
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
  "pause_growth_items": [
    "golden_dandelion"
  ],
  "reset_growth_items": [
    "golden_dandelion"
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```

#### [Glow Squid](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/glow_squid.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "pause_growth_items": [
    "golden_dandelion"
  ],
  "reset_growth_items": [
    "golden_dandelion"
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```
