---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:navigation.walk"
description: "Describes the minecraft:navigation.walk entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:navigation.walk

Walking style of the mob.


## Walk navigation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| avoid_damage_blocks | false | Boolean true/false | Tells the pathfinder to avoid blocks that cause damage when finding a path | Armadillo: `true` | 
| avoid_portals | false | Boolean true/false | Tells the pathfinder to avoid portals (like nether portals) when finding a path | Zombie Pigman: `true` | 
| avoid_sun | false | Boolean true/false | Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths | Bogged: `true` | 
| avoid_water | false | Boolean true/false | Tells the pathfinder to avoid water when creating a path | Armadillo: `true` | 
| blocks_to_avoid | *not set* | Boolean true/false | Tells the pathfinder which blocks to avoid when creating a path | Breeze: `[{"tags":"query.any_tag('trapdoors')"}]`, Goat: `[{"name":"minecraft:powder_snow"}]` | 
| can_breach | false | Boolean true/false | Tells the pathfinder whether or not it can jump out of water (like a dolphin) |  | 
| can_break_doors | false | Boolean true/false | Tells the pathfinder that it can path through a closed door and break it | Husk: `true` | 
| can_float | *not set* | Boolean true/false |  | Cat: `true` | 
| can_jump | true | Boolean true/false | Tells the pathfinder whether or not it can jump up blocks |  | 
| can_open_doors | false | Boolean true/false | Tells the pathfinder that it can path through a closed door assuming the AI will open the door | Copper Golem: `true` | 
| can_open_iron_doors | false | Boolean true/false | Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door |  | 
| can_pass_doors | true | Boolean true/false | Whether a path can be created through a door | Copper Golem: `true` | 
| can_path_from_air | false | Boolean true/false | Tells the pathfinder that it can start pathing when in the air |  | 
| can_path_over_lava | false | Boolean true/false | Tells the pathfinder whether or not it can travel on the surface of the lava | Creaking: `true` | 
| can_path_over_water | false | Boolean true/false | Tells the pathfinder whether or not it can travel on the surface of the water | Armadillo: `true` | 
| can_sink | true | Boolean true/false | Tells the pathfinder whether or not it will be pulled down by gravity while in water |  | 
| can_swim | false | Boolean true/false | Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path |  | 
| can_walk | true | Boolean true/false | Tells the pathfinder whether or not it can walk on the ground outside water | Villager: `true` | 
| can_walk_in_lava | false | Boolean true/false | Tells the pathfinder whether or not it can travel in lava like walking on ground | Strider: `true` | 
| is_amphibious | false | Boolean true/false | Tells the pathfinder whether or not it can walk on the ground underwater | Bogged: `true` | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:navigation.walk": {
  "can_path_over_water": true,
  "avoid_damage_blocks": true,
  "avoid_water": true
}
```

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

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:navigation.walk": {
  "can_path_over_water": true,
  "avoid_damage_blocks": true
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:navigation.walk": {
  "can_float": true,
  "avoid_water": true,
  "avoid_damage_blocks": true
}
```

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)


```json
"minecraft:navigation.walk": {
  "avoid_water": true,
  "avoid_damage_blocks": true,
  "can_pass_doors": true,
  "can_open_doors": true
}
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)

At /minecraft:entity/component_groups/minecraft:spawned_by_player/minecraft:navigation.walk/: 

```json
"minecraft:navigation.walk": {
  "can_path_over_water": true,
  "can_path_over_lava": false,
  "avoid_damage_blocks": true
}
```

At /minecraft:entity/component_groups/minecraft:spawned_by_creaking_heart/minecraft:navigation.walk/: 

```json
"minecraft:navigation.walk": {
  "can_path_over_water": true,
  "can_path_over_lava": true,
  "avoid_damage_blocks": false
}
```

#### [Creeper](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creeper.json)


```json
"minecraft:navigation.walk": {
  "can_path_over_water": true
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:navigation.walk": {
  "can_path_over_water": false,
  "avoid_water": true
}
```

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:navigation.walk": {
  "can_path_over_water": true,
  "can_pass_doors": true,
  "can_open_doors": true,
  "avoid_water": true
}
```
