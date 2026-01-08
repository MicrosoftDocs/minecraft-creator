---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.inspect_bookshelf"
description: "Describes the minecraft:behavior.inspect_bookshelf ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.inspect_bookshelf

Allows the mob to inspect bookshelves.


## Inspect Bookshelf Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot | Villager v2: `0.8` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager v2: `8` | 
| search_count | 10 | Integer number | The number of blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick |  | 
| search_height | 1 | Integer number | The height that the mob will search for bookshelves | Villager v2: `3` | 
| search_range | 0 | Integer number | Distance in blocks the mob will look for books to inspect | Villager v2: `4` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Villager v2: `0.6` | 

## Samples

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/job_specific_goals/minecraft:behavior.inspect_bookshelf/: 

```json
"minecraft:behavior.inspect_bookshelf": {}
```

At /minecraft:entity/component_groups/work_schedule_librarian/minecraft:behavior.inspect_bookshelf/: 

```json
"minecraft:behavior.inspect_bookshelf": {
  "priority": 8,
  "speed_multiplier": 0.6,
  "search_range": 4,
  "search_height": 3,
  "goal_radius": 0.8,
  "search_count": 0
}
```
