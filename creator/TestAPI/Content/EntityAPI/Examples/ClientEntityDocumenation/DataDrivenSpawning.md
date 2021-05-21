---
author: v-josjones
ms.author: v-josjones
title: Data-Driven Spawning
ms.prod: gaming
---

# Data-Driven Spawning

Data-Driven spawning allows you to adjust the spawn conditions of mobs within Minecraft: Bedrock Edition, including new mobs added to the game to spawn naturally in biomes, add or remove a mob's spawn egg to the creative inventory and set the mob's spawn egg, and add or remove a to the /summon command.

## Spawn Rules

Spawn rules contain description and conditionsAll Spawn Rules JSON need to have an ID (located under the description section). Similar to other identifiers, it follows the convention "namespace:name". The minecraft namespace is reserved for the vanilla Minecraft rules.When changing an existing mob use the ID that appears in the entity JSON for that entity. When creating your own mob, make sure the mobs have the same ID in all the entity's JSON files.

Spawn Rules also needs to define the pool that is used for population control.Each pool has their own spawn limit, By setting an entity to a pool it will spawn as long as that pool hasn't reached the spawn limit.

There are 3 pools that entities can be assigned to:
-animal
-water_animal
-monster

### Conditions

Components

| Name| Description |
|:-----------|:-----------|
| minecraft:spawns_on_surface|This component allows the mob to spawn on the ground. Adding the component sets the value of it to be true, removing it causes the mob to stop spawning on the surface.  |
| minecraft:spawns_underwater|This component allows the mob to spawn underwater. Adding the component sets the value of it to be true, removing it causes the mob to stop spawning underwater.  |
| [minecraft:brightness_filter](../Definitions/NestedTables/brightness_filter.md)|This component allows players to set the light level range that causes the mob to spawn.  |
| [minecraft:weight](../Definitions/NestedTables/weight.md)|This component allows players to set a priority for how often that mob should spawn. Mobs with lower weight values will have a lower chance to spawn than mobs with higher weight values. |
| [minecraft:difficulty_filter](../Definitions/NestedTables/difficulty_filter.md)| This component allows players to set mobs spawn with certain difficulty levels. |
| [minecraft:herd](../Definitions/NestedTables/herd.md)| This component allows players to determine the herd size of animals.|
| [minecraft:biome_filter](../Definitions/biome_filter.md)| This component allows the players to specify which biomes the mob spawns in. Check on **minecraft:biome_filter** to see which Biome Tags exist, and what each biome is tagged as. |
| [minecraft:density_limit](../Definitions/NestedTables/density_limit.md)|*Description Needed!* |

### Example Spawn Rules for the zombie

```json
"format_version": "1.8.0",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "minecraft:zombie",
      "population_control": "monster"
    },
    "conditions": [
      {
        "minecraft:spawns_on_surface": {},
        "minecraft:brightness_filter": {
          "min": 0,
          "max": 7,
          "adjust_for_weather": true
        },
        "minecraft:difficulty_filter": {
          "min": "easy",
          "max": "hard"
        },
        "minecraft:weight": {
          "default": 100
        },
        "minecraft:herd": {
          "min_size": 2,
          "max_size": 4
        },
        "minecraft:permute_type": [
          {
            "weight": 95
          },
          {
            "weight": 5,
            "entity_type": "minecraft:zombie_villager"
          }
        ],
        "minecraft:biome_filter": {
          "test": "has_biome_tag", "operator": "==", "value": "monster"
        }
      }
    ]
  }
```
