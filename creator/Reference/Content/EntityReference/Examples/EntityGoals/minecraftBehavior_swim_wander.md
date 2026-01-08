---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.swim_wander"
description: "Describes the minecraft:behavior.swim_wander ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.swim_wander

Allows the entity to wander around while swimming, when not path-finding.


## Swim Wander Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| interval | 0.00833 | Decimal number | Percent chance to start wandering, when not path-finding. 1 = 100% | Fish: `0.1`, Nautilus: `10`, Pufferfish: `1` | 
| look_ahead | 5 | Decimal number | Distance to look ahead for obstacle avoidance, while wandering. | Fish: `2`, Salmon: `5` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Fish: `4`, Nautilus: `7`, Pufferfish: `5` | 
| speed_multiplier | 1 | Decimal number | This multiplier modifies the entity's speed when wandering. | Fish: `1`, Nautilus: `1.5`, Salmon: `0.014` | 
| wander_time | 5 | Decimal number | Amount of time (in seconds) to wander after wandering behavior was successfully started. | Fish: `5` | 

## Samples

#### [Fish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fish.json)


```json
"minecraft:behavior.swim_wander": {
  "priority": 4,
  "interval": 0.1,
  "look_ahead": 2,
  "speed_multiplier": 1,
  "wander_time": 5
}
```

#### [Nautilus](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/nautilus.json)


```json
"minecraft:behavior.swim_wander": {
  "priority": 7,
  "interval": 10,
  "look_ahead": 2,
  "speed_multiplier": 1.5,
  "wander_time": 5
}
```

#### [Pufferfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pufferfish.json)


```json
"minecraft:behavior.swim_wander": {
  "priority": 5,
  "interval": 1,
  "look_ahead": 2,
  "speed_multiplier": 1,
  "wander_time": 5
}
```

#### [Salmon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/salmon.json)


```json
"minecraft:behavior.swim_wander": {
  "priority": 4,
  "interval": 0.0166,
  "look_ahead": 5,
  "speed_multiplier": 0.014,
  "wander_time": 5
}
```

#### [Zombie Nautilus](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie_nautilus.json)


```json
"minecraft:behavior.swim_wander": {
  "priority": 5,
  "interval": 10,
  "look_ahead": 2,
  "speed_multiplier": 1.5,
  "wander_time": 5
}
```
