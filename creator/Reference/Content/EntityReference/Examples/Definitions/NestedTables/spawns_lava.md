---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:spawns_lava
description: "A reference document detailing the 'spawns_lava' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:spawns_lava

This component determines if an entity spawns on lava.

## Example

Striders conditionally spawn on lava.

```json
{
  "format_version": "1.8.0",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "minecraft:strider",
      "population_control": "animal"
    },
    "conditions": [
      {
        "minecraft:spawns_lava": {},
        "minecraft:spawns_underground": {},
        "minecraft:difficulty_filter": {
          "min": "peaceful",
          "max": "hard"
        },
        "minecraft:weight": {
          "default": 20
        },
        "minecraft:herd": {
          "min_size": 2,
          "max_size": 4
        },
        "minecraft:density_limit": {
          "surface": 3
        },
        "minecraft:biome_filter": {
          "test": "has_biome_tag",
          "operator": "==",
          "value": "nether"
        }
      }
    ]
  }
}
```
