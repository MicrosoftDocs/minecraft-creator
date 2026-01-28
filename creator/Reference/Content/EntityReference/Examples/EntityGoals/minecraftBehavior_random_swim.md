---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_swim"
description: "Describes the minecraft:behavior.random_swim ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_swim

Allows an entity to randomly move through water.


## Random Swim Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| avoid_surface | true | Boolean true/false | If true, the mob will avoid surface water blocks by swimming below them |  | 
| interval | 120 | Integer number | A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal | Guardian: `80` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Dolphin: `5`, Elder Guardian: `7` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Elder Guardian: `0.5`, Guardian: `1` | 
| xz_dist | 10 | Integer number | Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1 | Dolphin: `20`, Turtle: `30` | 
| y_dist | 7 | Integer number | Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1 | Turtle: `15` | 

## Samples

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

#### [Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/guardian.json)


```json
"minecraft:behavior.random_swim": {
  "priority": 7,
  "speed_multiplier": 1,
  "interval": 80,
  "avoid_surface": false
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
