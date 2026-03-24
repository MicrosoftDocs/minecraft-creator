---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_land"
description: "Describes the minecraft:behavior.move_to_land ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_land

Allows the mob to move back onto land when in water.


## Entity Move To Land Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. Value must be > 0. | Frog: `2` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Frog: `6` | 
| search_count | 10 | Integer number | The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. | Frog: `80` | 
| search_height | 1 | Integer number | Height in blocks the mob will look for land to move towards Value must be > 0. | Frog: `8` | 
| search_range | 0 | Integer number | The distance in blocks it will look for land to move towards Value must be > 0. | Frog: `30` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this goal. |  | 

### search_count

The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.


### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.move_to_land": {
  "goal_radius": 2,
  "priority": 6,
  "search_count": 80,
  "search_height": 8,
  "search_range": 30
}
```
