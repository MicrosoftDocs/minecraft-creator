---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation -  Spawn Rules and Data-Driven Spawning
ms.prod: gaming
---

# Entity Documentation - Spawn Rules and Data-Driven Spawning

Data-Driven spawning allows you to adjust the spawn conditions of mobs within Minecraft: Bedrock Edition, including new mobs added to the game to spawn naturally in biomes, add or remove a mob's spawn egg to the creative inventory and set the mob's spawn egg, and add or remove a to the /summon command.

## Spawn Rules

Spawn rules contain description and conditionsAll Spawn Rules JSON need to have an ID (located under the description section). Similar to other identifiers, it follows the convention "namespace:name". The minecraft namespace is reserved for the vanilla Minecraft rules. When changing an existing mob use the ID that appears in the entity JSON for that entity. When creating your own mob, make sure the mobs have the same ID in all the entity's JSON files.

Spawn Rules also needs to define the pool that is used for population control. Each pool has their own spawn limit. By setting an entity to a pool it will spawn as long as that pool hasn't reached the spawn limit.

There are 4 pools that entities can be assigned to:

- animal
- water_animal
- monster
- cat

> [!IMPORTANT]
> The cat pool functions differently than the other 3 population pools. Cat's spawn rules and limits are based upon the amount within a village.

> [!NOTE]
> There are 2 more pools located within the game files. `Villager`, and `Pillager`. However, these are not currently used by any Entities within Minecraft due to the entities spawn differently.

### Conditions

Components

| Name| Description |
|:-----------|:-----------|
| [minecraft:biome_filter](../Definitions/NestedTables/biome_filter.md)| This component allows the players to specify which biomes the mob spawns in. Check on **minecraft:biome_filter** to see which Biome Tags exist, and what each biome is tagged as.|
| [minecraft:brightness_filter](../Definitions/NestedTables/brightness_filter.md)|This component allows players to set the light level range that causes the mob to spawn.  |
| [minecraft:delay_filter](../Definitions/NestedTables/delay_filter.md) |This component allows players to set mobs spawn with certain time delays before they will spawn.|
| [minecraft:density_limit](../Definitions/NestedTables/density_limit.md)|This component allows the players to specify the amount of mobs to spawn in certain locations. |
| [minecraft:difficulty_filter](../Definitions/NestedTables/difficulty_filter.md)| This component allows players to set mobs spawn with certain difficulty levels. |
| [minecraft:entity_types](../Definitions/NestedTables/entity_types.md) |This component is a specific type of JSON object used by Minecraft: Bedrock Edition in order to encapsulate entity data that can be used in certain behaviors and components. |
| [minecraft:height_filter](../Definitions/NestedTables/height_filter.md) |This component allows players to set mobs spawn within certain heights of their map. |
| [minecraft:herd](../Definitions/NestedTables/herd.md)| This component allows players to determine the herd size of animals.|
| [minecraft:mob_event_filter](../Definitions/NestedTables/mob_event_filter.md) |This component allows players to spawn mobs on a pillager, wandering trader, or ender dragon event. 
| [minecraft:operator](../Definitions/NestedTables/operator.md) | This component defines arithmetic operators in order to compare the values of two given data points. |
| [minecraft:permute_type](../Definitions/NestedTables/permute_type.md) |This component allows the players to specify the permutations of a mob that will spawn. |
| [minecraft:player_in_village_filter](../Definitions/NestedTables/player_in_village_filter.md) |This component lets players be filtered by whether they are in a village or not, using distance and the village border definitions. |
| [minecraft:spawns_lava](../Definitions/NestedTables/spawns_lava.md) |This component determines if an entity spawns lava. |
| [minecraft:spawns_on_block_filter](../Definitions/NestedTables/spawns_on_block_filter.md) |This component allows an entity to spawn on a particular block. It includes a string or array of strings for the block they may spawn on. |
| [minecraft:spawns_on_block_prevented_filter](../Definitions/NestedTables/spawns_on_block_prevented_filter.md) |This component allows an entity to not spawn on a particular block. It includes a string or array of strings for the block they may not spawn on. |
| [minecraft:spawns_on_surface](../Definitions/NestedTables/spawns_on_surface.md) |This component allows an entity to spawn on the surface. |
| [minecraft:spawns_underwater](../Definitions/NestedTables/spawns_underwater.md)|This component allows the mob to spawn underwater. Adding the component sets the value of it to be true, removing it causes the mob to stop spawning underwater.  |
| [minecraft:weight](../Definitions/NestedTables/weight.md)|This component allows players to set a priority for how often that mob should spawn. Mobs with lower weight values will have a lower chance to spawn than mobs with higher weight values. |
| [minecraft:world_age_filter](../Definitions/NestedTables/world_age_filter.md) |This component allows players to set mobs spawn after a certain amount of time has passed within a world.|


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

## Vanilla Entity Spawn Rules

Below is a list of all the available Spawn Rules that entities within Minecraft: Bedrock Edition located in the Vanilla Behavior Pack.

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