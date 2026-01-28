---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:navigation.walk"
description: "Describes the minecraft:navigation.walk entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:navigation.walk

Walking style of the mob.


## Walk navigation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| avoid_damage_blocks | false | Boolean true/false | Tells the pathfinder to avoid blocks that cause damage when finding a path | Blaze: `true` | 
| avoid_portals | false | Boolean true/false | Tells the pathfinder to avoid portals (like nether portals) when finding a path |  | 
| avoid_sun | false | Boolean true/false | Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths | Bogged: `true` | 
| avoid_water | false | Boolean true/false | Tells the pathfinder to avoid water when creating a path | Blaze: `true` | 
| blocks_to_avoid | *not set* | Array of strings | List of block descriptors that the pathfinder should avoid. Items can be block identifier strings or objects with name/tags properties. | Breeze: `[{"tags":"query.any_tag('trapdoors')"}]` | 
| blocks_to_avoid (Alternate 1) | *not set* | Array of [Blocks To Avoid](#blocks-to-avoid) items |  |  | 
| can_breach | false | Boolean true/false | Tells the pathfinder whether or not it can jump out of water (like a dolphin) |  | 
| can_break_doors | false | Boolean true/false | Tells the pathfinder that it can path through a closed door and break it |  | 
| can_float | *not set* | Boolean true/false |  |  | 
| can_jump | true | Boolean true/false | Tells the pathfinder whether or not it can jump up blocks |  | 
| can_open_doors | false | Boolean true/false | Tells the pathfinder that it can path through a closed door assuming the AI will open the door |  | 
| can_open_iron_doors | false | Boolean true/false | Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door |  | 
| can_pass_doors | true | Boolean true/false | Whether a path can be created through a door |  | 
| can_path_from_air | false | Boolean true/false | Tells the pathfinder that it can start pathing when in the air |  | 
| can_path_over_lava | false | Boolean true/false | Tells the pathfinder whether or not it can travel on the surface of the lava |  | 
| can_path_over_water | false | Boolean true/false | Tells the pathfinder whether or not it can travel on the surface of the water | Blaze: `true` | 
| can_sink | true | Boolean true/false | Tells the pathfinder whether or not it will be pulled down by gravity while in water |  | 
| can_swim | false | Boolean true/false | Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path |  | 
| can_walk | true | Boolean true/false | Tells the pathfinder whether or not it can walk on the ground outside water |  | 
| can_walk_in_lava | false | Boolean true/false | Tells the pathfinder whether or not it can travel in lava like walking on ground |  | 
| is_amphibious | false | Boolean true/false | Tells the pathfinder whether or not it can walk on the ground underwater | Bogged: `true` | 

## Blocks To Avoid

#### Block to Avoid Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | String | Block identifier to avoid. |  | 
| tags | *not set* | Molang | Molang expression to match block tags, e.g. query.any_tag('trapdoors') |  | 

## Samples

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:navigation.walk": {
  "can_path_over_water": true,
  "avoid_water": true,
  "avoid_damage_blocks": true
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:navigation.walk": {
  "is_amphibious": true,
  "avoid_sun": true,
  "avoid_water": true
}
```

#### [Breeze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json)


```json
"minecraft:navigation.walk": {
  "blocks_to_avoid": [
    {
      "tags": "query.any_tag('trapdoors')"
    }
  ]
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:navigation.walk": {
  "can_path_over_water": true,
  "avoid_damage_blocks": true
}
```
