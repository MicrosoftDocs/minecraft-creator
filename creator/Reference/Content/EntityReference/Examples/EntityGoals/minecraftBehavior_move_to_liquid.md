---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_liquid"
description: "Describes the minecraft:behavior.move_to_liquid ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_liquid

Allows the mob to move into a liquid when on land.


## Move To Liquid Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot | Strider: `0.9` | 
| material_type | Any | String | The material type of the liquid block to find. Valid values are "Any", "Water", and "Lava". | Strider: `"Lava"` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Strider: `7` | 
| search_count | 10 | Integer number | The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick | Strider: `30` | 
| search_height | 1 | Integer number | Height in blocks the mob will look for the liquid block to move towards | Strider: `10` | 
| search_range | 0 | Integer number | The distance in blocks it will look for the liquid block to move towards | Strider: `16` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 

## Samples

#### [Strider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/strider.json)


```json
"minecraft:behavior.move_to_liquid": {
  "priority": 7,
  "search_range": 16,
  "search_height": 10,
  "goal_radius": 0.9,
  "material_type": "Lava",
  "search_count": 30
}
```
