---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.float_tempt"
description: "Describes the minecraft:behavior.float_tempt ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.float_tempt

Allows a mob to be tempted by a player holding a specific item. Uses point-to-point movement. Designed for mobs that are floating (e.g. use the "minecraft:navigation.float" component).


## Float Tempt Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_get_scared | false | Boolean true/false | If true, the mob can stop being tempted if the player moves too fast while close to this mob. |  | 
| can_tempt_vertically | false | Boolean true/false | If true, vertical distance to the player will be considered when tempting. | Happy Ghast: `true` | 
| can_tempt_while_ridden | false | Boolean true/false | If true, the mob can be tempted even if it has a passenger (i.e. if being ridden). |  | 
| items | [] | Array of strings | List of items that can tempt the mob. | Happy Ghast: `["minecraft:snowball","minecraft:black_harness","minecraft:blue_harness","minecraft:brown_harness","minecraft:cyan_harness","minecraft:gray_harness","minecraft:green_harness","minecraft:light_blue_harness","minecraft:light_gray_harness","minecraft:lime_harness","minecraft:magenta_harness","minecraft:orange_harness","minecraft:pink_harness","minecraft:purple_harness","minecraft:red_harness","minecraft:white_harness","minecraft:yellow_harness"]`, `["minecraft:snowball"]` | 
| on_tempt_end | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) |  | Happy Ghast: `{"event":"minecraft:on_stop_tempting"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Happy Ghast: `4`, `5` | 
| sound_interval | *not set* | Range of integers | Range of random ticks to wait between tempt sounds. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 
| stop_distance | 1.5 | Decimal number | The distance at which the mob will stop following the player. | Happy Ghast: `7` | 
| tempt_sound | *not set* | String | Sound to play while the mob is being tempted. |  | 
| within_radius | 0 | Decimal number | Distance in blocks this mob can get tempted by a player holding an item they like. | Happy Ghast: `16` | 

## Samples

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)

At /minecraft:entity/component_groups/minecraft:adult_unharnessed/minecraft:behavior.float_tempt/: 

```json
"minecraft:behavior.float_tempt": {
  "priority": 4,
  "can_tempt_vertically": true,
  "items": [
    "minecraft:snowball",
    "minecraft:black_harness",
    "minecraft:blue_harness",
    "minecraft:brown_harness",
    "minecraft:cyan_harness",
    "minecraft:gray_harness",
    "minecraft:green_harness",
    "minecraft:light_blue_harness",
    "minecraft:light_gray_harness",
    "minecraft:lime_harness",
    "minecraft:magenta_harness",
    "minecraft:orange_harness",
    "minecraft:pink_harness",
    "minecraft:purple_harness",
    "minecraft:red_harness",
    "minecraft:white_harness",
    "minecraft:yellow_harness"
  ],
  "within_radius": 16,
  "stop_distance": 7,
  "on_tempt_end": {
    "event": "minecraft:on_stop_tempting"
  }
}
```

At /minecraft:entity/component_groups/minecraft:adult_harnessed/minecraft:behavior.float_tempt/: 

```json
"minecraft:behavior.float_tempt": {
  "priority": 5,
  "can_tempt_vertically": true,
  "items": [
    "minecraft:snowball"
  ],
  "within_radius": 16,
  "stop_distance": 7,
  "on_tempt_end": {
    "event": "minecraft:on_stop_tempting"
  }
}
```
