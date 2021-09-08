---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:navigation.float
ms.prod: gaming
---

# Entity Documentation - minecraft:navigation.float

`minecraft:navigation.float` allows this entity to generate paths by flying around the air like the regular Ghast.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| avoid_damage_blocks| False| Boolean| Tells the pathfinder to avoid blocks that cause damage when finding a path |
| avoid_portals| False| Boolean| Tells the pathfinder to avoid portals (like nether portals) when finding a path |
| avoid_sun| False| Boolean| Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths |
| avoid_water| False| Boolean| Tells the pathfinder to avoid water when creating a path |
| blocks_to_avoid| *not set*| List| Tells the pathfinder which blocks to avoid when creating a path |
| can_breach| False| Boolean| Tells the pathfinder whether or not it can jump out of water (like a dolphin) |
| can_break_doors| False| Boolean| Tells the pathfinder that it can path through a closed door and break it |
| can_jump| True| Boolean| Tells the pathfinder whether or not it can jump up blocks |
| can_open_doors| False| Boolean| Tells the pathfinder that it can path through a closed door assuming the AI will open the door |
| can_open_iron_doors| False| Boolean| Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door |
| can_pass_doors| True| Boolean| Whether a path can be created through a door |
| can_path_from_air| False| Boolean| Tells the pathfinder that it can start pathing when in the air |
| can_path_over_lava| False| Boolean| Tells the pathfinder whether or not it can travel on the surface of the lava |
| can_path_over_water| False| Boolean| Tells the pathfinder whether or not it can travel on the surface of the water |
| can_sink| True| Boolean| Tells the pathfinder whether or not it will be pulled down by gravity while in water |
| can_swim| False| Boolean| Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path |
| can_walk| True| Boolean| Tells the pathfinder whether or not it can walk on the ground outside water |
| can_walk_in_lava| False| Boolean| Tells the pathfinder whether or not it can travel in lava like walking on ground |
| is_amphibious| False| Boolean| Tells the pathfinder whether or not it can walk on the ground underwater |

## Example

```json
"minecraft:navigation.float":{
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

### ghast

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ghast.json" range="36-38":::

## Vanilla entities using `minecraft:navigation.float`

- [bat](../../../../Source/VanillaBehaviorPack_Snippets/entities/bat.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/entities/ghast.md)