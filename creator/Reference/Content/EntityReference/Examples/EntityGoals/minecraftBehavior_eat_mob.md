---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.eat_mob"
description: "Describes the minecraft:behavior.eat_mob ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.eat_mob

Allows the entity to eat a specified Mob.


## Eat Mob Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| eat_animation_time | 1 | Decimal number | Sets the time in seconds the eat animation should play for. | Frog: `0.3` | 
| eat_mob_sound | *not set* | String | Sets the sound that should play when eating a mob. | Frog: `"tongue"` | 
| loot_table | *not set* | String | The loot table for loot to be dropped when eating a mob. | Frog: `"loot_tables/entities/frog.json"` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Frog: `7` | 
| pull_in_force | 1 | Decimal number | Sets the force which the mob-to-be-eaten is pulled towards the eating mob. | Frog: `0.75` | 
| reach_mob_distance | 1 | Decimal number | Sets the desired distance to be reached before eating the mob. | Frog: `1.75` | 
| run_speed | 1 | Decimal number | Sets the entity's speed when running toward the target. | Frog: `2` | 

## Samples

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.eat_mob": {
  "priority": 7,
  "run_speed": 2,
  "eat_animation_time": 0.3,
  "pull_in_force": 0.75,
  "reach_mob_distance": 1.75,
  "eat_mob_sound": "tongue",
  "loot_table": "loot_tables/entities/frog.json"
}
```
