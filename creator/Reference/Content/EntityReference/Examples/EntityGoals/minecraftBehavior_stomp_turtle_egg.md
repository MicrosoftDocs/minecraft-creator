---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.stomp_turtle_egg"
description: "Describes the minecraft:behavior.stomp_turtle_egg ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.stomp_turtle_egg

Allows this mob to stomp turtle eggs.


## Stomp Turtle Egg Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot | Drowned: `1.14` | 
| interval | 120 | Integer number | A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal | Drowned: `20` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Drowned: `4`, Zombie Pigman: `5` | 
| search_height | 1 | Integer number | Height in blocks the mob will look for turtle eggs to move towards | Drowned: `2` | 
| search_range | 0 | Integer number | The distance in blocks it will look for turtle eggs to move towards | Drowned: `10` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Drowned: `1` | 

## Samples

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:behavior.stomp_turtle_egg": {
  "priority": 4,
  "speed_multiplier": 1,
  "search_range": 10,
  "search_height": 2,
  "goal_radius": 1.14,
  "interval": 20
}
```

#### [Zombie Pigman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zombie_pigman.json)


```json
"minecraft:behavior.stomp_turtle_egg": {
  "priority": 5,
  "speed_multiplier": 1,
  "search_range": 10,
  "search_height": 2,
  "goal_radius": 1.14,
  "interval": 20
}
```
