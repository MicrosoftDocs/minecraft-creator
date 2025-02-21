---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.lay_egg"
description: "Describes the minecraft:behavior.lay_egg ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.lay_egg

Allows the mob to lay an egg block on certain types of blocks if the mob is pregnant.


## Lay Egg Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_laying_from_below | false | Boolean true/false | Allows the mob to lay its eggs from below the target if it can't get there. This is useful if the target block is water with air above, since mobs may not be able to get to the air block above water. | Frog: `true` | 
| egg_type | minecraft:turtle_egg | String | Block type for the egg to lay. If this is a turtle egg, the number of eggs in the block is randomly set. | Frog: `"minecraft:frog_spawn"` | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot | Frog: `1.7`, Turtle: `1.5` | 
| lay_egg_sound | lay_egg | String | Name of the sound event played when laying the egg. Defaults to lay_egg, which is used for Turtles. | Frog: `"lay_spawn"` | 
| lay_seconds | 10 | Decimal number | Duration of the laying egg process in seconds. | Frog: `2` | 
| on_lay | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when this mob lays the egg. | Frog: `{"event":"laid_egg","target":"self"}`, Turtle: `{"event":"minecraft:laid_egg","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Frog: `2`, Turtle: `1` | 
| search_height | 1 | Integer number | Height in blocks the mob will look for a target block to move towards | Frog: `3`, Turtle: `4` | 
| search_range | 0 | Integer number | The distance in blocks it will look for a target block to move towards | Frog: `10`, Turtle: `16` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Frog: `1` | 
| target_blocks | [ minecraft:sand ] | Array of strings | Blocks that the mob can lay its eggs on top of. | Frog: `["minecraft:water"]` | 
| target_materials_above_block | [ Air ] | Array of strings | Types of materials that can exist above the target block. Valid types are Air, Water, and Lava. | Frog: `["Air"]` | 
| use_default_animation | true | Boolean true/false | Specifies if the default lay-egg animation should be played when the egg is placed or not. |  | 

## Samples

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.lay_egg": {
  "priority": 2,
  "speed_multiplier": 1,
  "search_range": 10,
  "search_height": 3,
  "goal_radius": 1.7,
  "target_blocks": [
    "minecraft:water"
  ],
  "target_materials_above_block": [
    "Air"
  ],
  "allow_laying_from_below": true,
  "use_default_animation": false,
  "lay_seconds": 2,
  "egg_type": "minecraft:frog_spawn",
  "lay_egg_sound": "lay_spawn",
  "on_lay": {
    "event": "laid_egg",
    "target": "self"
  }
}
```

#### [Turtle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/turtle.json)


```json
"minecraft:behavior.lay_egg": {
  "priority": 1,
  "speed_multiplier": 1,
  "search_range": 16,
  "search_height": 4,
  "goal_radius": 1.5,
  "on_lay": {
    "event": "minecraft:laid_egg",
    "target": "self"
  }
}
```
