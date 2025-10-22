---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:ageable"
description: "Describes the minecraft:ageable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:ageable

Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feed_items.


## Ageable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| drop_items | *not set* | Array of strings | List of items that are dropped when an entity grows up | Turtle: `["turtle_shell_piece"]` | 
| duration | 1200 | Decimal number | Length of time before an entity grows up (-1 to always stay a baby) | Armadillo: `1200`, Sniffer: `2400` | 
| feed_items | *not set* | Array of strings | List of items that can be fed to the entity. Includes 'item' for the item name, 'growth' to define how much time it grows up by, and 'result_item' that defines what item the feed item will transform to upon successful interaction (Format: itemName:auxValue). | Armadillo: `"spider_eye"`, Axolotl: `[{"item":"tropical_fish_bucket","result_item":"water_bucket:0"}]`, Bee: `["minecraft:poppy","minecraft:blue_orchid","minecraft:allium","minecraft:azure_bluet","minecraft:red_tulip","minecraft:orange_tulip","minecraft:white_tulip","minecraft:pink_tulip","minecraft:oxeye_daisy","minecraft:cornflower","minecraft:lily_of_the_valley","minecraft:dandelion","minecraft:wither_rose","minecraft:sunflower","minecraft:lilac","minecraft:rose_bush","minecraft:peony","minecraft:flowering_azalea","minecraft:azalea_leaves_flowered","minecraft:mangrove_propagule","minecraft:pitcher_plant","minecraft:torchflower","minecraft:cherry_leaves","minecraft:pink_petals","minecraft:wildflowers","minecraft:cactus_flower"]` | 
| feedItems | *not set* | Array of strings | List of items that can be fed to an entity to age them up |  | 
| grow_up | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to fire when an entity grows up | Armadillo: `{"event":"minecraft:ageable_grow_up","target":"self"}`, Dolphin: `{"event":"ageable_grow_up","target":"self"}`, Rabbit: `{"event":"grow_up","target":"self"}` | 
| interact_filters | *not set* | Minecraft filter | List of conditions to meet so that the entity can be fed. | Armadillo: `{"test":"enum_property","domain":"minecraft:armadillo_state","value":"unrolled"}` | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "interact_filters": {
    "test": "enum_property",
    "domain": "minecraft:armadillo_state",
    "value": "unrolled"
  },
  "feed_items": "spider_eye",
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    {
      "item": "tropical_fish_bucket",
      "result_item": "water_bucket:0"
    }
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    "minecraft:poppy",
    "minecraft:blue_orchid",
    "minecraft:allium",
    "minecraft:azure_bluet",
    "minecraft:red_tulip",
    "minecraft:orange_tulip",
    "minecraft:white_tulip",
    "minecraft:pink_tulip",
    "minecraft:oxeye_daisy",
    "minecraft:cornflower",
    "minecraft:lily_of_the_valley",
    "minecraft:dandelion",
    "minecraft:wither_rose",
    "minecraft:sunflower",
    "minecraft:lilac",
    "minecraft:rose_bush",
    "minecraft:peony",
    "minecraft:flowering_azalea",
    "minecraft:azalea_leaves_flowered",
    "minecraft:mangrove_propagule",
    "minecraft:pitcher_plant",
    "minecraft:torchflower",
    "minecraft:cherry_leaves",
    "minecraft:pink_petals",
    "minecraft:wildflowers",
    "minecraft:cactus_flower"
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "feed_items": "cactus",
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    "fish",
    "salmon"
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```

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

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    {
      "item": "wheat",
      "growth": 0.016667
    },
    {
      "item": "sugar",
      "growth": 0.025
    },
    {
      "item": "hay_block",
      "growth": 0.15
    },
    {
      "item": "apple",
      "growth": 0.05
    },
    {
      "item": "carrot",
      "growth": 0.05
    },
    {
      "item": "golden_carrot",
      "growth": 0.05
    },
    {
      "item": "golden_apple",
      "growth": 0.2
    },
    {
      "item": "appleEnchanted",
      "growth": 0.2
    }
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
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

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    "minecraft:snowball"
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)


```json
"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    "crimson_fungus"
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}
```
