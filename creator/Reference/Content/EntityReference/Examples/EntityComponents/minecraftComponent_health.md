---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:health
description: "A reference document detailing the 'health' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:health

`minecraft:health` specifies how much life an entity has when spawned.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|max|*not set* | Integer| The maximum starting health the entity has. |
|value|*not set* | Integer| The default amount of health the entity starts with. This can be an integer or a 'range_min' and 'range_max' value for entities with varying starting health. |

## Examples

```json
"minecraft:health": {
        "value": 10,
        "max": 10
      }
```

```json
"minecraft:health": {
        "value": 10,
        "max": 10
      }
```

## Vanilla entities examples

### cave_spider

```json
"minecraft:health": {
        "value": 12,
        "max": 12
      }
```

### horse

```json
"minecraft:health": {
        "value": {
        "range_min": 15,
        "range_max": 30
      }
}
```

## Vanilla entities using `minecraft:health`

- [allay](../../../../Source/VanillaBehaviorPack_Snippets/entities/allay.md)
- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [armor_stand](../../../../Source/VanillaBehaviorPack_Snippets/entities/armor_stand.md)
- [bat](../../../../Source/VanillaBehaviorPack_Snippets/entities/bat.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [ender_crystal](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_crystal.md)
- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
- [endermite](../../../../Source/VanillaBehaviorPack_Snippets/entities/endermite.md)
- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [frog](../../../../Source/VanillaBehaviorPack_Snippets/entities/frog.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/entities/ghast.md)
- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
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
- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)
- [silverfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/silverfish.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [tadpole](../../../../Source/VanillaBehaviorPack_Snippets/entities/tadpole.md)
- [trader_llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/trader_llama.md)
- [tripod_camera](../../../../Source/VanillaBehaviorPack_Snippets/entities/tripod_camera.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
- [wither_skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [xp_orb](../../../../Source/VanillaBehaviorPack_Snippets/entities/xp_orb.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
