---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.go_home"
description: "Describes the minecraft:behavior.go_home ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.go_home

Allows the mob to move back to the position they were spawned.


## Go Home Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| calculate_new_path_radius | 2 | Decimal number | Distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home. |  | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. | Turtle: `4` | 
| interval | 120 | Integer number | A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal. | Turtle: `700` | 
| on_failed | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event(s) to run when this goal fails. |  | 
| on_home | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event(s) to run when this mob gets home. | Turtle: `[{"event":"minecraft:go_lay_egg","target":"self"}]` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Turtle: `1` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal. | Turtle: `1` | 

## Samples

#### [Turtle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/turtle.json)


```json
"minecraft:behavior.go_home": {
  "priority": 1,
  "speed_multiplier": 1,
  "interval": 700,
  "goal_radius": 4,
  "on_home": [
    {
      "event": "minecraft:go_lay_egg",
      "target": "self"
    }
  ]
}
```
