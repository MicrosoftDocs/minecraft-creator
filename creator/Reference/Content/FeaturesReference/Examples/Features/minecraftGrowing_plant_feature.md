---
author: JimSeaman42
ms.author: mikeam
title: Features Documentation - minecraft:growing_plant_feature
description: "A reference document detailing the 'growing_plant_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:growing_plant_feature

`minecraft:growing_plant_feature` places a growing plant in the world. A growing plant is a column that is anchored either to the ceiling or the floor, based on its growth direction. The growing plant has a body and a head, where the head is the tip of the plant, and the body consists of the remaining blocks.

This feature can be used to define growing plants with variable body and head blocks, e.g. Cave Vines.

### Schema

```json
object "minecraft:growing_plant_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  array "height_distribution"[1,*]
  {
    array "<any array element>"[2] // Collection of weighted heights that placement will select from.
    {
     "[0..0]" // Plant height.
      float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
    }
  }
  string "growth_direction" // Direction that the plant grows towards. Valid values: UP and DOWN
  "age" : opt // Age of the head of the plant.
      array "body_blocks"[1,*]
  {
    array "<any array element>"[2] // Collection of weighted block descriptor that placement will select from for the body of the plant.
    {
      "[0..0]" // Plant body block.
      float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
    }
  }
  array "head_blocks"[1,*]
  {
    array "<any array element>"[2] // Collection of weighted block descriptor that placement will select from for the head of the plant.
    {
    "[0..0]" // Plant head block.
    float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
    }
  }
  bool "allow_water" : opt // Plant blocks can be placed in water.
}
```

### Example

Defining a growing plant feature with variable body and head blocks and height distribution

```json
{
  "format_version": "1.13.0",
  "minecraft:growing_plant_feature": {
    "description": {
      "identifier": "example:cave_vine_feature"
    },
    "height_distribution": [
      [{ "range_min": 1, "range_max": 13 }, 2],
      [{ "range_min": 1, "range_max": 2 }, 3],
      [{ "range_min": 1, "range_max": 7 }, 10]
    ],
    "growth_direction": "DOWN",
    "age": { "range_min": 17, "range_max": 26 },
    "body_blocks": [
      ["minecraft:cave_vines", 4],
      ["minecraft:cave_vines_body_with_berries", 1]
    ],
    "head_blocks": [
      ["minecraft:cave_vines", 4],
      ["minecraft:cave_vines_head_with_berries", 1]
    ],
    "allow_water": true
  }
}
```
