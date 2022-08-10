---
author: docsbryce
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.jump_to_block
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.jump_to_block

`minecraft:behavior.jump_to_block` allows the mob to search around for a block to jump to and then jump to that block.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| cooldown_range| [10, 20]| Range [a, b]| Minimum and maximum cooldown time-range (positive, in seconds) between each attempted jump. |
| forbidden_blocks| | Array| Blocks that the mob can't jump to. |
| max_velocity| 1.500000| Decimal| The maximum velocity with which the mob can jump. |
| minimum_distance| 2| Integer| The minimum distance (in blocks) from the mob to a block, in order to consider jumping to it. |
| minimum_path_length| 5| Integer| The minimum length (in blocks) of the mobs path to a block, in order to consider jumping to it. |
| preferred_blocks| | Array| Blocks that the mob prefers jumping to. |
| preferred_blocks_chance| 1.000000| Decimal| Chance (between 0.0 and 1.0) that the mob will jump to a preferred block, if in range. Only matters if preferred blocks are defined. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| scale_factor| 0.700000| Decimal| The scalefactor of the bounding box of the mob while it is jumping. |
| search_height| 10| Integer| The height (in blocks, in range [2, 15]) of the search box, centered around the mob. |
| search_width| 8| Integer| The width (in blocks, in range [2, 15]) of the search box, centered around the mob. |

## Example

```json
"minecraft:behavior.jump_to_block":{
    "search_width": 9,
    "search_height": 5,
    "scale_factor": 2.0,
    "max_velocity": 10.0,
    "minimum_path_length": 4,
    "minimum_distance": 6,
    "cooldown_range": [5, 10],
}
```

## Vanilla Mob examples

### Goat

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

## Vanilla Mobs using `minecraft:behavior.jump_to_block`

- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
