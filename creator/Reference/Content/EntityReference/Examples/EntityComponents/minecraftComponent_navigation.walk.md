---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:navigation.walk
ms.prod: gaming
---

# Entity Documentation - minecraft:navigation.walk

`minecraft:navigation.walk` allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| avoid_damage_blocks| False| Boolean| Tells the pathfinder to avoid blocks that cause damage when finding a path. |
| avoid_portals| False| Boolean| Tells the pathfinder to avoid portals (like nether portals) when finding a path. |
| avoid_sun| False| Boolean| Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths. |
| avoid_water| False| Boolean| Tells the pathfinder to avoid water when creating a path. |
| blocks_to_avoid| *not set*| List| Tells the pathfinder which blocks to avoid when creating a path. |
| can_breach| False| Boolean| Tells the pathfinder whether or not it can jump out of water (like a dolphin). |
| can_break_doors| False| Boolean| Tells the pathfinder that it can path through a closed door and break it. |
| can_float| False| Boolean| Tells the pathfinder whether or not it float. |
| can_jump| True| Boolean| Tells the pathfinder whether or not it can jump up blocks. |
| can_open_doors| False| Boolean| Tells the pathfinder that it can path through a closed door assuming the AI will open the door. |
| can_open_iron_doors| False| Boolean| Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door. |
| can_pass_doors| True| Boolean| Whether a path can be created through a door. |
| can_path_from_air| False| Boolean| Tells the pathfinder that it can start pathing when in the air. |
| can_path_over_lava| False| Boolean| Tells the pathfinder whether or not it can travel on the surface of the lava. |
| can_path_over_water| False| Boolean| Tells the pathfinder whether or not it can travel on the surface of the water. |
| can_sink| True| Boolean| Tells the pathfinder whether or not it will be pulled down by gravity while in water. |
| can_swim| False| Boolean| Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path. |
| can_walk| True| Boolean| Tells the pathfinder whether or not it can walk on the ground outside water. |
| can_walk_in_lava| False| Boolean| Tells the pathfinder whether or not it can travel in lava like walking on ground. |
| is_amphibious| False| Boolean| Tells the pathfinder whether or not it can walk on the ground underwater. |

## Example

```json
"minecraft:navigation.walk":{
    "avoid_damage_blocks": false,
    "avoid_portals": false,
    "avoid_sun": false,
    "avoid_water": false,
    "blocks_to_avoid": [],
    "can_breach": false,
    "can_break_doors": false,
    "can_jump": true,
    "can_open_doors": false,
    "can_open_iron_doors": false,
    "can_pass_doors": true,
    "can_path_from_air": false,
    "can_path_over_lava": false,
    "can_path_over_water": false,
    "can_sink": true,
    "can_swim": false,
    "can_walk": true,
    "can_walk_in_lava": false,
    "is_amphibious": false
}
```

## Vanilla entities examples

### villager

```json
"minecraft:navigation.walk": {
    "is_amphibious": true,
    "can_path_over_water": true,
    "can_pass_doors": true,
    "can_open_doors": true,
    "can_walk": true,
    "avoid_water": true
}
```

## Vanilla entities using `minecraft:navigation.walk`

- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
- [endermite](../../../../Source/VanillaBehaviorPack_Snippets/entities/endermite.md)
- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
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
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [shulker_bullet](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker_bullet.md)
- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)
- [silverfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/silverfish.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
- [wither_skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)