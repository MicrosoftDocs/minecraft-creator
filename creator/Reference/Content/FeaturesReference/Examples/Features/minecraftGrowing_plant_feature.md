---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:growing_plant_feature
ms.prod: gaming
---

# Features Documentation - minecraft:growing_plant_feature

`minecraft:growing_plant_feature` places a growing plant in the world. A growing plant is a column that is anchored either to the ceiling or the floor, based on its growth direction. The growing plant has a body and a head, where the head is the tip of the plant, and the body consists of the remainder blocks.

This feature can be used to define growing plants with variable body and head blocks, e.g. Cave Vines.

## Example

### Defining a growing plant feature with variable body and head blocks and height distribution

```json
{
  "format_version": "1.16.0",
  "minecraft:growing_plant_feature": {
    "description": {
      "identifier": "minecraft:cave_vine_feature"
    },
    "height_distribution":  [
      [{"range_min": 1, "range_max": 13}, 2],
      [{"range_min": 1, "range_max": 2}, 3],
      [{"range_min": 1, "range_max": 7}, 10]
    ],
    "growth_direction": "DOWN",
    "age" : {"range_min": 17, "range_max": 26},
    "body_blocks" : [
      ["minecraft:cave_vines", 4],
      ["minecraft:cave_vines_body_with_berries", 1 ]
    ],
    "head_blocks" : [
      ["minecraft:cave_vines", 4],
      ["minecraft:cave_vines_head_with_berries", 1 ]
    ],
    "allow_water": true
  }
}
```
