---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_swim"
description: "Describes the minecraft:behavior.random_swim ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_swim

Allows an entity to randomly move through water.


## Random Swim Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| avoid_surface | true | Boolean true/false | If true, the mob will avoid surface water blocks by swimming below them |  | 
| interval | 120 | Integer number | A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal | Guardian: `80`, Tadpole: `100` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Axolotl: `8`, Dolphin: `5`, Elder Guardian: `7` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Elder Guardian: `0.5`, Fish: `1` | 
| xz_dist | 10 | Integer number | Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 | Axolotl: `30`, Dolphin: `20`, Fish: `16` | 
| y_dist | 7 | Integer number | Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 | Axolotl: `15`, Fish: `4` | 

## Samples

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:behavior.random_swim": {
  "priority": 8,
  "interval": 0,
  "xz_dist": 30,
  "y_dist": 15
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:behavior.random_swim": {
  "priority": 5,
  "interval": 0,
  "xz_dist": 20
}
```

#### [Elder Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json)


```json
"minecraft:behavior.random_swim": {
  "priority": 7,
  "speed_multiplier": 0.5,
  "avoid_surface": false
}
```

#### [Fish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fish.json)


```json
"minecraft:behavior.random_swim": {
  "priority": 3,
  "speed_multiplier": 1,
  "xz_dist": 16,
  "y_dist": 4,
  "interval": 0
}
```

#### [Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/guardian.json)


```json
"minecraft:behavior.random_swim": {
  "priority": 7,
  "speed_multiplier": 1,
  "interval": 80,
  "avoid_surface": false
}
```

#### [Salmon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/salmon.json)


```json
"minecraft:behavior.random_swim": {
  "speed_multiplier": 1,
  "priority": 3,
  "xz_dist": 16,
  "y_dist": 4,
  "interval": 0
}
```

#### [Tadpole](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/tadpole.json)


```json
"minecraft:behavior.random_swim": {
  "priority": 2,
  "interval": 100
}
```

#### [Turtle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/turtle.json)


```json
"minecraft:behavior.random_swim": {
  "priority": 7,
  "interval": 0,
  "xz_dist": 30,
  "y_dist": 15
}
```
