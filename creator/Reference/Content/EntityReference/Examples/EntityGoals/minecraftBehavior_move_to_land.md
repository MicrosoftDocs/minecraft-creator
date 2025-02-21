---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_land"
description: "Describes the minecraft:behavior.move_to_land ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_land

Allows the mob to move back onto land when in water.


## Move To Land Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot | Frog: `2`, Turtle: `0.5` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Frog: `6` | 
| search_count | 10 | Integer number | The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick | Frog: `80` | 
| search_height | 1 | Integer number | Height in blocks the mob will look for land to move towards | Frog: `8`, Turtle: `5` | 
| search_range | 0 | Integer number | The distance in blocks it will look for land to move towards | Frog: `30`, Turtle: `16` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 

## Samples

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.move_to_land": {
  "priority": 6,
  "search_range": 30,
  "search_height": 8,
  "search_count": 80,
  "goal_radius": 2
}
```

#### [Turtle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/turtle.json)


```json
"minecraft:behavior.move_to_land": {
  "priority": 6,
  "search_range": 16,
  "search_height": 5,
  "goal_radius": 0.5
}
```
