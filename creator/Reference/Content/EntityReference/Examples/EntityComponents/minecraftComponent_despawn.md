---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:despawn
ms.prod: gaming
---

# Entity Documentation - minecraft:despawn

`minecraft:despawn` allows an entity despawn when the despawn rules or optional filters evaluate to true.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|despawn_from_distance |*not set* |JSON Object| Specifies if the "min_distance" and "max_distance" are used in the standard despawn rules. |
|despawn_from_chance| true| Boolean|  Determines if "min_range_random_chance" is used in the standard despawn rules. |
|despawn_from_inactivity| true| Boolean|  Determines if the "min_range_inactivity_timer" is used in the standard despawn rules. |
|despawn_from_simulation_edge| true|  Boolean| Determines if the mob is instantly despawned at the edge of simulation distance in the standard despawn rules. |
|[filters](../FilterList.md)|*not set* | Minecraft Filter|  The list of conditions that must be satisfied before the Actor is despawned. If a filter is defined then standard despawn rules are ignored. |
|min_range_inactivity_timer| 30| Integer|  The amount of time in seconds that the mob must be inactive. |
|min_range_random_chance| 800| Integer|  A random chance between 1 and the given value. |
| remove_child_entities| false| Boolean|If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned. |

### despawn_from_distance

`despawn_from_distance` is a JSON Object that is defined by 2 parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|max_distance| 128| Integer| Maximum distance for standard despawn rules to instantly despawn the mob. |
| min_distance| 32| Integer| Minimum distance for standard despawn rules to try to despawn the mob. |

## Example

```json
"minecraft:despawn":{
    "despawn_from_distance": {
        "max_distance": 128,
        "min_distance": 32
    },
    "despawn_from_chance": false,
    "despawn_from_inactivity": false,
    "despawn_from_simulation_edge": true,
    "min_range_inactivity_timer": 30 ,
    "min_range_random_chance": 800,
    "remove_child_entities": false,
    "filters":{"test": "has_damage", "target": "self"}
}
```

## Vanilla entities examples

### zoglin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/zoglin.json" range="141-181":::

## Vanilla entities using `minecraft:despawn`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bat](../../../../Source/VanillaBehaviorPack_Snippets/entities/bat.md)
- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [chest_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/chest_minecart.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
- [endermite](../../../../Source/VanillaBehaviorPack_Snippets/entities/endermite.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/entities/ghast.md)
- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [phantom](../../../../Source/VanillaBehaviorPack_Snippets/entities/phantom.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [silverfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/silverfish.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
- [wither_skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md))
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)