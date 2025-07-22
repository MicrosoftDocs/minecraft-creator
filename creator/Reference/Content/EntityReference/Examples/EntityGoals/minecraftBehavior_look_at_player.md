---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.look_at_player"
description: "Describes the minecraft:behavior.look_at_player ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.look_at_player

Compels an entity to look at the player by rotating the `head` bone pose within a set limit.


## Look At Player Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| angle_of_view_horizontal | 360 | Integer number | The angle in degrees that the mob can see in the Y-axis (up-down). | Ravager: `45` | 
| angle_of_view_vertical | 360 | Integer number | The angle in degrees that the mob can see in the X-axis (left-right). |  | 
| look_distance | 8 | Decimal number | The distance in blocks from which the entity will look at the nearest player. | Bogged: `8`, Breeze: `16`, Cave Spider: `6` | 
| look_time | *not set* | Range of integers | Time range to look at the nearest player. | Campghost: `[0,100]` | 
| max_look_time | *not set* | Decimal number |  | Armadillo: `80` | 
| min_look_time | *not set* | Decimal number |  | Armadillo: `40` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `8`, Armadillo: `7`, Axolotl: `10` | 
| probability | 0.02 | Decimal number | The probability of looking at the target. A value of 1.00 is 100%. | Allay: `0.02`, Elder Guardian: `0.01`, Enderman: `8` | 
| target_distance | *not set* | Decimal number |  | Allay: `6` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 8,
  "target_distance": 6,
  "probability": 0.02
}
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 7,
  "target_distance": 6,
  "probability": 0.02,
  "min_look_time": 40,
  "max_look_time": 80
}
```

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 10,
  "target_distance": 6,
  "probability": 0.02
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 7,
  "look_distance": 8
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 7,
  "look_distance": 16
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 7,
  "target_distance": 6,
  "probability": 0.02
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 9
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 7,
  "look_distance": 6,
  "probability": 0.02
}
```

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 5,
  "look_distance": 6,
  "probability": 0.02
}
```

#### [Creeper](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creeper.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 6,
  "look_distance": 8
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 8,
  "look_distance": 6
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:behavior.look_at_player": {
  "priority": 8,
  "look_distance": 6,
  "probability": 0.02
}
```
