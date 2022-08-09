---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.avoid_block
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.avoid_block

`minecraft:behavior.avoid_block` allows an entity to avoid certain blocks.

## Parameters

| Name| Default Value| Type | Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| avoid_block_sound| | String | The sound event to play when the mob is avoiding a block. |
| on_escape| | Trigger| Escape trigger. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| search_height| 0 | Integer | Maximum distance to look for a block in y. |
| search_range| 0 | Integer | Maximum distance to look for a block in xz. |
| sound_interval| [3.0, 8.0] | Range [a, b] | The range of time in seconds to randomly wait before playing the sound again. |
| sprint_speed_modifier| 1.0 | Decimal | Modifier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster. |
| target_blocks| | List | List of block types this mob avoids. |
| target_selection_method| nearest | String| Block search method. |
| tick_interval| 1 | Integer | Should start tick interval. |
| walk_speed_modifier| 1.0 | Decimal| Modifier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster. |

## Example

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
    "range_min": 2.0,
    "range_max": 5.0
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

## Vanilla entities examples

### piglin

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
    "range_min": 2.0,
    "range_max": 5.0
  }
}
```

## Vanilla entities using `avoid_blocks`

- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
