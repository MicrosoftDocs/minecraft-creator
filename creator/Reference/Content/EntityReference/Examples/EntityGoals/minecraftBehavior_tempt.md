---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.tempt"
description: "Describes the minecraft:behavior.tempt ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.tempt

Allows a mob to be tempted by a player holding a specific item. Uses pathfinding for movement.


## Tempt Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_get_scared | false | Boolean true/false | If true, the mob can stop being tempted if the player moves too fast while close to this mob. | Cat: `true` | 
| can_tempt_vertically | false | Boolean true/false | If true, vertical distance to the player will be considered when tempting. | Armadillo: `true` | 
| can_tempt_while_ridden | false | Boolean true/false | If true, the mob can be tempted even if it has a passenger (i.e. if being ridden). | Strider: `true` | 
| items | [] | Array of strings | List of items that can tempt the mob. | Armadillo: `["spider_eye"]`, Axolotl: `["tropical_fish_bucket"]`, Bee: `["minecraft:poppy","minecraft:blue_orchid","minecraft:allium","minecraft:azure_bluet","minecraft:red_tulip","minecraft:orange_tulip","minecraft:white_tulip","minecraft:pink_tulip","minecraft:oxeye_daisy","minecraft:cornflower","minecraft:lily_of_the_valley","minecraft:dandelion","minecraft:wither_rose","minecraft:sunflower","minecraft:lilac","minecraft:rose_bush","minecraft:peony","minecraft:flowering_azalea","minecraft:azalea_leaves_flowered","minecraft:mangrove_propagule","minecraft:pitcher_plant","minecraft:torchflower","minecraft:cherry_leaves","minecraft:pink_petals","minecraft:open_eyeblossom","minecraft:wildflowers","minecraft:cactus_flower"]` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Armadillo: `3`, Axolotl: `2`, Bee: `5` | 
| sound_interval | *not set* | Range of integers | Range of random ticks to wait between tempt sounds. | Cat: `[0,100]`, Strider: `{"range_min":2,"range_max":5}` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Armadillo: `1.25`, Axolotl: `1.1`, Camel: `2.5` | 
| stop_distance | 1.5 | Decimal number | The distance at which the mob will stop following the player. |  | 
| tempt_sound | *not set* | String | Sound to play while the mob is being tempted. | Cat: `"tempt"` | 
| within_radius | 0 | Decimal number | Distance in blocks this mob can get tempted by a player holding an item they like. | Bee: `8`, Cat: `16`, Robot: `7` | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:behavior.tempt": {
  "priority": 3,
  "speed_multiplier": 1.25,
  "can_tempt_vertically": true,
  "items": [
    "spider_eye"
  ]
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:behavior.tempt": {
  "priority": 2,
  "speed_multiplier": 1.1,
  "can_tempt_vertically": true,
  "items": [
    "tropical_fish_bucket"
  ]
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:behavior.tempt": {
  "priority": 5,
  "speed_multiplier": 1.25,
  "within_radius": 8,
  "can_tempt_vertically": true,
  "items": [
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
    "minecraft:open_eyeblossom",
    "minecraft:wildflowers",
    "minecraft:cactus_flower"
  ]
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:behavior.tempt": {
  "priority": 3,
  "speed_multiplier": 2.5,
  "can_tempt_vertically": true,
  "items": [
    "cactus"
  ]
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)

At /minecraft:entity/component_groups/minecraft:cat_wild/minecraft:behavior.tempt/: 

```json
"minecraft:behavior.tempt": {
  "priority": 5,
  "speed_multiplier": 0.5,
  "within_radius": 16,
  "can_get_scared": true,
  "tempt_sound": "tempt",
  "sound_interval": [
    0,
    100
  ],
  "items": [
    "fish",
    "salmon"
  ]
}
```

At /minecraft:entity/component_groups/minecraft:cat_tame/minecraft:behavior.tempt/: 

```json
"minecraft:behavior.tempt": {
  "priority": 5,
  "speed_multiplier": 0.5,
  "within_radius": 16,
  "items": [
    "fish",
    "salmon"
  ]
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:behavior.tempt": {
  "priority": 4,
  "speed_multiplier": 1,
  "items": [
    "wheat_seeds",
    "beetroot_seeds",
    "melon_seeds",
    "pumpkin_seeds",
    "pitcher_pod",
    "torchflower_seeds"
  ]
}
```

#### [Cow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json)


```json
"minecraft:behavior.tempt": {
  "priority": 4,
  "speed_multiplier": 1.25,
  "items": [
    "wheat"
  ]
}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:behavior.tempt": {
  "priority": 5,
  "speed_multiplier": 1.2,
  "items": [
    "golden_apple",
    "appleEnchanted",
    "golden_carrot"
  ]
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:behavior.tempt": {
  "priority": 3,
  "speed_multiplier": 0.5,
  "within_radius": 16,
  "can_get_scared": true,
  "items": [
    "sweet_berries",
    "glow_berries"
  ]
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.tempt": {
  "priority": 5,
  "speed_multiplier": 1.25,
  "can_tempt_vertically": true,
  "items": [
    "slime_ball"
  ]
}
```

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)


```json
"minecraft:behavior.tempt": {
  "priority": 4,
  "speed_multiplier": 0.75,
  "items": [
    "wheat"
  ]
}
```
