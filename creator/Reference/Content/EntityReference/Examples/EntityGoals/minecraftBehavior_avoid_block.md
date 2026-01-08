---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.avoid_block"
description: "Describes the minecraft:behavior.avoid_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.avoid_block

Allows this entity to avoid certain blocks.


## Avoid Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| avoid_block_sound | *not set* | String | The sound event to play when the mob is avoiding a block. | Hoglin: `"retreat"` | 
| on_escape | *not set* | Array of Minecraft Event Triggers | Event triggers that fire when the entity escapes from the avoided block. Can be a single trigger or an array of triggers. | Hoglin: `[{"event":"escaped_event","target":"self"}]` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Hoglin: `1`, Piglin: `9` | 
| search_height | 0 | Integer number | Maximum distance to look for a block in y. | Hoglin: `4` | 
| search_range | 0 | Integer number | Maximum distance to look for a block in xz. | Hoglin: `8` | 
| sound_interval | *not set* | Range of integers | The range of time in seconds to randomly wait before playing the sound again. | Hoglin: `{"range_min":2,"range_max":5}`, Piglin: `{"min":2,"max":5}` | 
| sprint_speed_modifier | 1 | Decimal number | Modifier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster. | Hoglin: `1`, Piglin: `1.1` | 
| target_blocks | *not set* | Array of strings | List of block types this mob avoids. | Hoglin: `["minecraft:warped_fungus","minecraft:portal","minecraft:respawn_anchor"]`, Piglin: `["minecraft:soul_fire","minecraft:soul_lantern","minecraft:soul_torch","minecraft:item.soul_campfire"]` | 
| target_selection_method | nearest | String | Block search method. | Hoglin: `"nearest"` | 
| tick_interval | 1 | Integer number | Should start tick interval. | Hoglin: `5` | 
| walk_speed_modifier | 1 | Decimal number | Modifier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster. | Hoglin: `1` | 

## Samples

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)


```json
"minecraft:behavior.avoid_block": {
  "priority": 1,
  "tick_interval": 5,
  "search_range": 8,
  "search_height": 4,
  "walk_speed_modifier": 1,
  "sprint_speed_modifier": 1,
  "avoid_block_sound": "retreat",
  "sound_interval": {
    "range_min": 2,
    "range_max": 5
  },
  "target_selection_method": "nearest",
  "target_blocks": [
    "minecraft:warped_fungus",
    "minecraft:portal",
    "minecraft:respawn_anchor"
  ],
  "on_escape": [
    {
      "event": "escaped_event",
      "target": "self"
    }
  ]
}
```

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:behavior.avoid_block": {
  "priority": 9,
  "tick_interval": 5,
  "search_range": 8,
  "search_height": 4,
  "sprint_speed_modifier": 1.1,
  "target_selection_method": "nearest",
  "target_blocks": [
    "minecraft:soul_fire",
    "minecraft:soul_lantern",
    "minecraft:soul_torch",
    "minecraft:item.soul_campfire"
  ],
  "avoid_block_sound": "retreat",
  "sound_interval": {
    "min": 2,
    "max": 5
  }
}
```
