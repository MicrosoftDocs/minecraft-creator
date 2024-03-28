---
author: JimSeaman42
ms.author: mikeam
title: Data-Driven Spawn Rules
description: "A reference document outlining the concept of data-driven spawning"
ms.service: minecraft-bedrock-edition
---

# Data-Driven Spawn Rules

Data-Driven spawning allows creators to adjust the spawn conditions of mobs within Minecraft: Bedrock Edition, providing the tools to determine when, where, and how mobs spawn in the world. Let's take a closer look at how data-driven spawning works.

## Spawn Rules

First and foremost, all Spawn Rules JSON files must have an ID that follows the "namespace:name" convention. Note that the `minecraft` namespace is reserved for vanilla Minecraft rules.

When changing an existing mob, use the ID that appears in the entity JSON for that entity. When creating your own mob, make sure all of the entity's JSON files use the same ID.

Secondly, the pool used for population control must be defined. There are four pools that entities can be assigned to (animal, water_animal, monster, and cat), and each has its own spawn limit. By assigning an entity to a pool, it will spawn as long as that pool hasn't reached the spawn limit.

> [!IMPORTANT]
> The 'cat' pool functions differently than the other 3 population pools. Cat spawn rules and limits are based upon the amount within a village.

> [!NOTE]
> There are 2 more pools located within the game files, `Villager` and `Pillager`. However, these are not currently used by any entities.

### Components

The following components provide the specifics in determining the ways in which spawns occur, from specifying which spawns occur by difficulty to setting the probability of spawned entities to mutate; this is where the potential for magic occurs.

| Name| Description |
|:-----------|:-----------|
| [minecraft:biome_filter](../Definitions/NestedTables/biome_filter.md)| Allows players to specify which biomes the mob spawns in. Check on **minecraft:biome_filter** to see which Biome Tags exist, and what each biome is tagged as.|
| [minecraft:brightness_filter](../Definitions/NestedTables/brightness_filter.md)| Allows players to set the light level range that causes the mob to spawn. |
| [minecraft:delay_filter](../Definitions/NestedTables/delay_filter.md) |Allows players to set mobs spawn with specified time delays.|
| [minecraft:density_limit](../Definitions/NestedTables/density_limit.md)| Allows players to specify the amount of mobs to spawn in certain locations. |
| [minecraft:difficulty_filter](../Definitions/NestedTables/difficulty_filter.md)| Allows creators to set which mobs spawn depending on difficulty level. |
| [minecraft:disallow_spawns_in_bubble](../Definitions/NestedTables/disallow_spawns_in_bubble.md)| Allows creators to keep entities from spawning in bubbles. |
| [minecraft:entity_types](../Definitions/NestedTables/entity_types.md) |This is a specific type of JSON object used by Minecraft: Bedrock Edition to encapsulate entity data that can be used in certain behaviors and components. |
| [minecraft:height_filter](../Definitions/NestedTables/height_filter.md) |Allows players to set mob spawning within specific heights of the map. |
| [minecraft:herd](../Definitions/NestedTables/herd.md)| Allows players to determine the herd size of animals.|
| [minecraft:mob_event_filter](../Definitions/NestedTables/mob_event_filter.md) |Allows players to spawn mobs on a pillager, wandering trader, or ender dragon event.
| [minecraft:operator](../Definitions/NestedTables/operator.md) | Defines arithmetic operators in order to compare the values of two given data points. |
| [minecraft:permute_type](../Definitions/NestedTables/permute_type.md) |Allows players to specify the permutations of a mob that will spawn. |
| [minecraft:player_in_village_filter](../Definitions/NestedTables/player_in_village_filter.md) |Allows players to be filtered by whether they are in a village or not, using distance and the village border definitions. |
| [minecraft:spawn_event](../Definitions/NestedTables/spawn_event.md) |Event related to the spawning of an entity. |
| [minecraft:spawns_lava](../Definitions/NestedTables/spawns_lava.md) |Determines if an entity spawns on lava. |
| [minecraft:spawns_on_block_filter](../Definitions/NestedTables/spawns_on_block_filter.md) |Allows an entity to spawn on a particular block. |
| [minecraft:spawns_on_block_prevented_filter](../Definitions/NestedTables/spawns_on_block_prevented_filter.md) |Prevents an entity from spawning on a particular block. |
| [minecraft:spawns_on_surface](../Definitions/NestedTables/spawns_on_surface.md) |Allows an entity to spawn on the surface. |
| [minecraft:spawns_underwater](../Definitions/NestedTables/spawns_underwater.md)|Allows the mob to spawn underwater.  |
| [minecraft:weight](../Definitions/NestedTables/weight.md)|Allows players to set a priority for how often that mob should spawn. |
| [minecraft:world_age_filter](../Definitions/NestedTables/world_age_filter.md) |Allows players to set mob spawns after a specified amount of time has passed within a world.|

### Example Spawn Rules for the zombie

```json
{
  "format_version": "1.8.0",
  "minecraft:spawn_rules": {
    "description": {
      "identifier": "minecraft:zombie",
      "population_control": "monster"
    },
    "conditions": [
      {
        "minecraft:spawns_on_surface": {},
        "minecraft:spawns_underground": {},
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
            "entity_type": "minecraft:zombie_villager_v2"
          }
        ],
        "minecraft:biome_filter": {
          "test": "has_biome_tag", "operator": "==", "value": "monster"
        }
      }
    ]
  }
}
```

## Vanilla Entity Spawn Rules

Below is a list of all available spawn rules for Vanilla Behavior Pack entities as of the publication of this article.

|Entity Spawn Rules JSON |
|:-----|
|[axolotl](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/axolotl.md)|
|[bat](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/bat.md)|
|[bee](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/bee.md)|
|[blaze](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/blaze.md)|
|[cat](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/cat.md)|
|[chicken](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/chicken.md)|
|[cod](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/cod.md)|
|[cow](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/cow.md)|
|[creeper](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/creeper.md)|
|[dolphin](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/dolphin.md)|
|[donkey](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/donkey.md)|
|[drowned](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/drowned.md)|
|[enderman](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/enderman.md)|
|[fox](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/fox.md)|
|[ghast](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/ghast.md)|
|[glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/glow_squid.md)|
|[goat](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/goat.md)|
|[guardian](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/guardian.md)|
|[hoglin](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/hoglin.md)|
|[horse](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/horse.md)|
|[husk](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/husk.md)|
|[llama](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/llama.md)|
|[magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/magma_cube.md)|
|[mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/mooshroom.md)|
|[ocelot](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/ocelot.md)|
|[panda](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/panda.md)|
|[parrot](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/parrot.md)|
|[phantom](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/phantom.md)|
|[pig](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/pig.md)|
|[piglin](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/piglin.md)|
|[pillager](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/pillager.md)|
|[polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/polar_bear.md)|
|[pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/pufferfish.md)|
|[rabbit](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/rabbit.md)|
|[salmon](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/salmon.md)|
|[sheep](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/sheep.md)|
|[skeleton](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/skeleton.md)|
|[slime](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/slime.md)|
|[spider](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/spider.md)|
|[squid](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/squid.md)|
|[stray](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/stray.md)|
|[strider](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/strider.md)|
|[tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/tropicalfish.md)|
|[turtle](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/turtle.md)|
|[witch](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/witch.md)|
|[wither_skeleton](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/wither_skeleton.md)|
|[wolf](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/wolf.md)|
|[zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/zombie_pigman.md)|
|[zombie](../../../../Source/VanillaBehaviorPack_Snippets/spawn_rules/zombie.md)|