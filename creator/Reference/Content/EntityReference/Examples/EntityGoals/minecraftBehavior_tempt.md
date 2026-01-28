---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.tempt"
description: "Describes the minecraft:behavior.tempt ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.tempt

Allows a mob to be tempted by a player holding a specific item. Uses pathfinding for movement.


## Tempt Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_get_scared | false | Boolean true/false | If true, the mob can stop being tempted if the player moves too fast while close to this mob. | Fox: `true` | 
| can_tempt_vertically | false | Boolean true/false | If true, vertical distance to the player will be considered when tempting. | Frog: `true` | 
| can_tempt_while_ridden | false | Boolean true/false | If true, the mob can be tempted even if it has a passenger (i.e. if being ridden). |  | 
| items | [] | Array of strings | List of items that can tempt the mob. | Chicken: `["wheat_seeds","beetroot_seeds","melon_seeds","pumpkin_seeds","pitcher_pod","torchflower_seeds"]`, Cow: `["wheat"]`, Fox: `["sweet_berries","glow_berries"]` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Chicken: `4`, Fox: `3`, Frog: `5` | 
| sound_interval | *not set* | Integer number | Range of random ticks to wait between tempt sounds. Can be a number, an array [min, max], or an object with range_min/range_max or min/max. |  | 
| sound_interval (Alternate 1) | *not set* | Array of [Sound Interval](#sound-interval) items |  |  | 
| sound_interval (Alternate 2) | *not set* | [Sound Interval](#sound-interval) item |  |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Chicken: `1`, Cow: `1.25`, Fox: `0.5` | 
| stop_distance | 1.5 | Decimal number | The distance at which the mob will stop following the player. |  | 
| tempt_sound | *not set* | String | Sound to play while the mob is being tempted. |  | 
| within_radius | 0 | Decimal number | Distance in blocks this mob can get tempted by a player holding an item they like. | Fox: `16` | 

## Sound Interval

#### Sound Interval Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| 0 | *not set* | Integer number |  |  | 
| 1 | *not set* | Integer number |  |  | 

## Samples

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:behavior.tempt": {
  "priority": 4,
  "speed_multiplier": 1,
  "items": [
    "wheat_seeds",
    "beetroot_seeds",
    "melon_seeds",
    "pumpkin_seeds",
    "pitcher_pod",
    "torchflower_seeds"
  ]
}
```

#### [Cow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json)


```json
"minecraft:behavior.tempt": {
  "priority": 4,
  "speed_multiplier": 1.25,
  "items": [
    "wheat"
  ]
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:behavior.tempt": {
  "priority": 3,
  "speed_multiplier": 0.5,
  "within_radius": 16,
  "can_get_scared": true,
  "items": [
    "sweet_berries",
    "glow_berries"
  ]
}
```

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.tempt": {
  "priority": 5,
  "speed_multiplier": 1.25,
  "can_tempt_vertically": true,
  "items": [
    "slime_ball"
  ]
}
```

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)


```json
"minecraft:behavior.tempt": {
  "priority": 4,
  "speed_multiplier": 0.75,
  "items": [
    "wheat"
  ]
}
```
