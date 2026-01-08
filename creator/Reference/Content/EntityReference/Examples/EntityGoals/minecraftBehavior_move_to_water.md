---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_water"
description: "Describes the minecraft:behavior.move_to_water ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_water

Allows the mob to move back into water when on land.

> [!Note]
> This behavior is used by aquatic and semi-aquatic mobs like axolotl, dolphin, and pregnant frogs. The entity will search for and move toward water blocks when on land.


## Move To Water Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot | Axolotl: `0.1`, Frog: `1.5` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Axolotl: `6`, Dolphin: `1`, Frog: `3` | 
| search_count | 10 | Integer number | The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick | Axolotl: `1` | 
| search_height | 1 | Integer number | Height in blocks the mob will look for water to move towards | Axolotl: `5` | 
| search_range | 0 | Integer number | The distance in blocks it will look for water to move towards | Axolotl: `16`, Dolphin: `15`, Frog: `20` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 

## Samples

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:behavior.move_to_water": {
  "priority": 6,
  "search_range": 16,
  "search_height": 5,
  "search_count": 1,
  "goal_radius": 0.1
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:behavior.move_to_water": {
  "priority": 1,
  "search_range": 15,
  "search_height": 5
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.move_to_water": {
  "priority": 3,
  "search_range": 20,
  "search_height": 5,
  "goal_radius": 1.5
}
```
