---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_stroll"
description: "Describes the minecraft:behavior.random_stroll ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_stroll

Allows a mob to randomly stroll around.


## Random Stroll Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| interval | 120 | Integer number | A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal | Axolotl: `100` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Armadillo: `6`, Axolotl: `9`, Blaze: `4` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Armadillo: `1`, Camel: `2`, Cat: `0.8` | 
| xz_dist | 10 | Integer number | Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 | Copper Golem: `3`, Iron Golem: `16`, Rabbit: `2` | 
| y_dist | 7 | Integer number | Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 | Rabbit: `1` | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 6,
  "speed_multiplier": 1
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 9,
  "interval": 100
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 4,
  "speed_multiplier": 1
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 6,
  "speed_multiplier": 2
}
```

#### [Camel Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel_husk.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 7,
  "speed_multiplier": 2
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 8,
  "speed_multiplier": 0.8
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 6,
  "speed_multiplier": 0.8
}
```

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 5,
  "xz_dist": 3
}
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 7,
  "speed_multiplier": 0.3
}
```

#### [Creeper](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creeper.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 5,
  "speed_multiplier": 1
}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 6,
  "speed_multiplier": 0.7
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:behavior.random_stroll": {
  "priority": 7,
  "speed_multiplier": 1
}
```
