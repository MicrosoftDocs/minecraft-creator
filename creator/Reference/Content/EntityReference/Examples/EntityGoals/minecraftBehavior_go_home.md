---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.go_home"
description: "Describes the minecraft:behavior.go_home ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.go_home

Allows the mob to move back to the position they were spawned.


## Go Home Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| calculate_new_path_radius | 2 | Decimal number | Distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home. |  | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. | Bee: `1.2`, Piglin Brute: `4` | 
| interval | 120 | Integer number | A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal. | Bee: `1`, Piglin Brute: `200`, Turtle: `700` | 
| on_failed | *not set* | Array of strings | Event(s) to run when this goal fails. | Bee: `[{"event":"find_hive_event","target":"self"}]`, Piglin Brute: `[{"event":"go_back_to_spawn_failed","target":"self"}]` | 
| on_home | *not set* | Array of strings | Event(s) to run when this mob gets home. | Bee: `[{"filters":{"any_of":[{"test":"is_block","subject":"block","value":"minecraft:bee_nest"},{"test":"is_block","subject":"block","value":"minecraft:beehive"}]},"event":"minecraft:bee_returned_to_hive","target":"block"},{"filters":{"all_of":[{"test":"is_block","subject":"block","operator":"!=","value":"minecraft:bee_nest"},{"test":"is_block","subject":"block","operator":"!=","value":"minecraft:beehive"}]},"event":"find_hive_event","target":"self"}]`, Turtle: `[{"event":"minecraft:go_lay_egg","target":"self"}]`, Nardolphle: `{"event":"minecraft:go_lay_egg","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Bee: `4`, Piglin Brute: `6`, Turtle: `1` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal. | Bee: `1`, Piglin Brute: `0.6` | 

## Samples

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:behavior.go_home": {
  "priority": 4,
  "speed_multiplier": 1,
  "interval": 1,
  "goal_radius": 1.2,
  "on_home": [
    {
      "filters": {
        "any_of": [
          {
            "test": "is_block",
            "subject": "block",
            "value": "minecraft:bee_nest"
          },
          {
            "test": "is_block",
            "subject": "block",
            "value": "minecraft:beehive"
          }
        ]
      },
      "event": "minecraft:bee_returned_to_hive",
      "target": "block"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "is_block",
            "subject": "block",
            "operator": "!=",
            "value": "minecraft:bee_nest"
          },
          {
            "test": "is_block",
            "subject": "block",
            "operator": "!=",
            "value": "minecraft:beehive"
          }
        ]
      },
      "event": "find_hive_event",
      "target": "self"
    }
  ],
  "on_failed": [
    {
      "event": "find_hive_event",
      "target": "self"
    }
  ]
}
```

#### [Piglin Brute](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin_brute.json)


```json
"minecraft:behavior.go_home": {
  "priority": 6,
  "interval": 200,
  "speed_multiplier": 0.6,
  "goal_radius": 4,
  "on_failed": [
    {
      "event": "go_back_to_spawn_failed",
      "target": "self"
    }
  ]
}
```

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

#### [Nardolphle](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/nardolphle.behavior.json)


```json
"minecraft:behavior.go_home": {
  "priority": 1,
  "speed_multiplier": 1,
  "interval": 700,
  "goal_radius": 4,
  "on_home": {
    "event": "minecraft:go_lay_egg",
    "target": "self"
  }
}
```
