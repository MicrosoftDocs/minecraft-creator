---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:navigation.float"
description: "Describes the minecraft:navigation.float entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:navigation.float

Allows this entity to generate paths by flying around the air like the regular Ghast.


## Float Navigation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| avoid_damage_blocks | false | Boolean true/false | Tells the pathfinder to avoid blocks that cause damage when finding a path | Happy Ghast: `true` | 
| avoid_portals | false | Boolean true/false | Tells the pathfinder to avoid portals (like nether portals) when finding a path |  | 
| avoid_sun | false | Boolean true/false | Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths |  | 
| avoid_water | false | Boolean true/false | Tells the pathfinder to avoid water when creating a path | Happy Ghast: `true` | 
| blocks_to_avoid | *not set* | Array of strings | Tells the pathfinder which blocks to avoid when creating a path |  | 
| can_breach | false | Boolean true/false | Tells the pathfinder whether or not it can jump out of water (like a dolphin) |  | 
| can_break_doors | false | Boolean true/false | Tells the pathfinder that it can path through a closed door and break it |  | 
| can_jump | true | Boolean true/false | Tells the pathfinder whether or not it can jump up blocks |  | 
| can_open_doors | false | Boolean true/false | Tells the pathfinder that it can path through a closed door assuming the AI will open the door |  | 
| can_open_iron_doors | false | Boolean true/false | Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door |  | 
| can_pass_doors | true | Boolean true/false | Whether a path can be created through a door |  | 
| can_path_from_air | false | Boolean true/false | Tells the pathfinder that it can start pathing when in the air |  | 
| can_path_over_lava | false | Boolean true/false | Tells the pathfinder whether or not it can travel on the surface of the lava |  | 
| can_path_over_water | false | Boolean true/false | Tells the pathfinder whether or not it can travel on the surface of the water | Bat: `true` | 
| can_sink | true | Boolean true/false | Tells the pathfinder whether or not it will be pulled down by gravity while in water |  | 
| can_swim | false | Boolean true/false | Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path |  | 
| can_walk | true | Boolean true/false | Tells the pathfinder whether or not it can walk on the ground outside water |  | 
| can_walk_in_lava | false | Boolean true/false | Tells the pathfinder whether or not it can travel in lava like walking on ground |  | 
| is_amphibious | false | Boolean true/false | Tells the pathfinder whether or not it can walk on the ground underwater |  | 

## Samples

#### [Bat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json)


```json
"minecraft:navigation.float": {
  "can_path_over_water": true
}
```

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)


```json
"minecraft:navigation.float": {
  "can_path_over_water": true,
  "avoid_damage_blocks": true,
  "avoid_water": true
}
```
