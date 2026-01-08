---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.jump_to_block"
description: "Describes the minecraft:behavior.jump_to_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.jump_to_block

Allows an entity to jump to another random block.


## Jump To Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_range | *not set* | Range of integers | Minimum and maximum cooldown time-range (positive, in seconds) between each attempted jump. | Frog: `[5,7]`, Goat: `[30,60]` | 
| forbidden_blocks | *not set* | Array of strings | Blocks that the mob can't jump to. | Frog: `["minecraft:water"]` | 
| max_velocity | 1.5 | Decimal number | The maximum velocity with which the mob can jump. | Frog: `1` | 
| minimum_distance | 2 | Integer number | The minimum distance (in blocks) from the mob to a block, in order to consider jumping to it. | Frog: `1` | 
| minimum_path_length | 5 | Integer number | The minimum length (in blocks) of the mobs path to a block, in order to consider jumping to it. | Frog: `2`, Goat: `8` | 
| preferred_blocks | *not set* | Array of strings | Blocks that the mob prefers jumping to. | Frog: `["minecraft:waterlily","minecraft:big_dripleaf"]` | 
| preferred_blocks_chance | 1 | Decimal number | Chance (between 0.0 and 1.0) that the mob will jump to a preferred block, if in range. Only matters if preferred blocks are defined. | Frog: `0.5` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Frog: `10`, Goat: `8` | 
| scale_factor | 0.7 | Decimal number | The scalefactor of the bounding box of the mob while it is jumping. | Frog: `0.6` | 
| search_height | 10 | Integer number | The height (in blocks, in range [2, 15]) of the search box, centered around the mob. | Frog: `4`, Goat: `10` | 
| search_width | 8 | Integer number | The width (in blocks, in range [2, 15]) of the search box, centered around the mob. | Frog: `8`, Goat: `10` | 

## Samples

#### [Frog](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json)


```json
"minecraft:behavior.jump_to_block": {
  "priority": 10,
  "search_width": 8,
  "search_height": 4,
  "minimum_path_length": 2,
  "minimum_distance": 1,
  "scale_factor": 0.6,
  "max_velocity": 1,
  "cooldown_range": [
    5,
    7
  ],
  "preferred_blocks": [
    "minecraft:waterlily",
    "minecraft:big_dripleaf"
  ],
  "preferred_blocks_chance": 0.5,
  "forbidden_blocks": [
    "minecraft:water"
  ]
}
```

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)


```json
"minecraft:behavior.jump_to_block": {
  "priority": 8,
  "search_width": 10,
  "search_height": 10,
  "minimum_path_length": 8,
  "minimum_distance": 1,
  "scale_factor": 0.6,
  "cooldown_range": [
    30,
    60
  ]
}
```
