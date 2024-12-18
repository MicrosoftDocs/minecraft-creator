---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.lay_egg
description: "A reference document detailing the 'behavior.lay_egg' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.lay_egg

`minecraft:behavior.lay_egg` compels the mob to lay an egg block on certain types of blocks if the mob is pregnant.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| allow_laying_from_below| false| Boolean | Allows the mob to lay its eggs from below the target if it can't get there. This is useful if the target block is water with air above, since mobs may not be able to get to the air block above water. |
| egg_type|  `minecraft:turtle_egg` | String | Block type for the egg to lay. If this is a turtle egg, the number of eggs in the block is randomly set. |
| goal_radius| 0.5| Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
| lay_egg_sound|  lay_egg| String| Sound event name for laying egg. Defaulted to lay_egg which is used for Turtles. |
| lay_seconds| 10.0f| Decimal| Duration of the laying egg process in seconds. |
| on_lay| | Trigger| Event to run when this mob lays the egg. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| search_height| 1| Integer|Height in blocks the mob will look for a target block to move towards |
| search_range| 0| Integer| The distance in blocks it will look for a target block to move towards |
| speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |
| target_blocks| [`minecraft:sand`] | Array| Blocks that the mob can lay its eggs on top of. |
| target_materials_above_block| [ Air ]| Array| Types of materials that can exist above the target block. Valid types are Air, Water, and Lava. |
| use_default_animation| true| Boolean| Specifies if the default lay-egg animation should be played when the egg is placed or not. |

## Example

```json
"minecraft:behavior.lay_egg":{
    "allow_laying_from_below": true,
    "egg_type": "minecraft:turtle_egg",
    "goal_radius": 0.5,
    "on_lay": {
        "event": "minecraft:laid_egg",
        "target": "self"
    },
    "priority": 1,
    "search_range": 32,
    "search_height": 2,
    "speed_multiplier": 1.0
}
```

## Vanilla entities examples

### turtle

```json
"minecraft:behavior.lay_egg": {
          "priority": 1,
          "speed_multiplier": 1.0,
          "search_range": 16,
          "search_height": 4,
          "goal_radius": 1.5,
          "on_lay": {
            "event": "minecraft:laid_egg",
            "target": "self"
          }
        }
```

## Vanilla entities using `minecraft:behavior.lay_egg`

- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
