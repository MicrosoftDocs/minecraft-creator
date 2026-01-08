---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:transformation"
description: "Describes the minecraft:transformation entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:transformation

Defines an entity's transformation from the current definition into another.


## Transformation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| add | *not set* | Array of [Add](#add) items | List of components to add to the entity after the transformation |  | 
| begin_transform_sound | *not set* | String | Sound to play when the transformation starts | Zombie Villager: `"remedy"` | 
| delay | *not set* | Array of [Delay](#delay) items | Defines the properties of the delay for the transformation | Husk: `{"value":15}`, Pig: `0.5`, Zombie Villager: `{"value":100,"block_assist_chance":0.01,"block_radius":4,"block_chance":0.3,"block_types":["minecraft:bed","minecraft:iron_bars"]}` | 
| drop_equipment | false | Boolean true/false | Cause the entity to drop all equipment upon transformation | Husk: `true` | 
| drop_inventory | false | Boolean true/false | Cause the entity to drop all items in inventory upon transformation | Piglin: `true` | 
| into | *not set* | String | Entity Definition that this entity will transform into | Hoglin: `"minecraft:zoglin"`, Husk: `"minecraft:zombie<minecraft:as_adult>"`, `"minecraft:zombie<minecraft:as_baby>"` | 
| keep_level | false | Boolean true/false | If this entity has trades and has leveled up, it should maintain that level after transformation. | Hoglin: `true` | 
| keep_owner | false | Boolean true/false | If this entity is owned by another entity, it should remain owned after transformation. |  | 
| preserve_equipment | false | Boolean true/false | Cause the entity to keep equipment after going through transformation | Piglin: `true` | 
| transformation_sound | *not set* | String | Sound to play when the entity is done transforming | Hoglin: `"mob.hoglin.converted_to_zombified"`, Husk: `"mob.husk.convert_to_zombie"`, Pig: `"mob.pig.death"` | 

## Add
List of components to add to the entity after the transformation.


#### Add Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| component_groups | *not set* | Array of strings | Names of component groups to add |  | 

## Delay
Defines the properties of the delay for the transformation.


#### Delay Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_assist_chance | 0 | Decimal number | Chance that the entity will look for nearby blocks that can speed up the transformation. Value must be between 0.0 and 1.0 |  | 
| block_chance | 0 | Decimal number | Chance that, once a block is found, will help speed up the transformation |  | 
| block_max | 0 | Integer number | Maximum number of blocks the entity will look for to aid in the transformation. If not defined or set to 0, it will be set to the block radius |  | 
| block_radius | 0 | Integer number | Distance in Blocks that the entity will search for blocks that can help the transformation |  | 
| block_types | *not set* | Array of strings | List of blocks that can help the transformation of this entity |  | 
| range_max | 0 | Decimal number | Time in seconds to be added to value to have the maximum random time range value until the entity transforms (if non-zero then the time in seconds before the entity transforms will be random between value+range_min and value+range_max) |  | 
| range_min | 0 | Decimal number | Time in seconds to be added to value to have the minimum random time range value until the entity transforms (if non-zero then the time in seconds before the entity transforms will be random between value+range_min and value+range_max) |  | 
| value | 0 | Decimal number | Time in seconds before the entity transforms |  | 

## Samples

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)


```json
"minecraft:transformation": {
  "into": "minecraft:zoglin",
  "transformation_sound": "mob.hoglin.converted_to_zombified",
  "keep_level": true
}
```

#### [Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/husk.json)

At /minecraft:entity/component_groups/minecraft:convert_to_zombie/minecraft:transformation/: 

```json
"minecraft:transformation": {
  "into": "minecraft:zombie<minecraft:as_adult>",
  "transformation_sound": "mob.husk.convert_to_zombie",
  "drop_equipment": true,
  "delay": {
    "value": 15
  }
}
```

At /minecraft:entity/component_groups/minecraft:convert_to_baby_zombie/minecraft:transformation/: 

```json
"minecraft:transformation": {
  "into": "minecraft:zombie<minecraft:as_baby>",
  "transformation_sound": "mob.husk.convert_to_zombie",
  "drop_equipment": true,
  "delay": {
    "value": 15
  }
}
```

#### [Mooshroom](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/mooshroom.json)


```json
"minecraft:transformation": {
  "into": "minecraft:cow"
}
```

#### [Pig](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pig.json)


```json
"minecraft:transformation": {
  "into": "minecraft:pig_zombie",
  "transformation_sound": "mob.pig.death",
  "delay": 0.5
}
```

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:transformation": {
  "into": "minecraft:zombie_pigman",
  "transformation_sound": "converted_to_zombified",
  "keep_level": true,
  "drop_inventory": true,
  "preserve_equipment": true
}
```

#### [Piglin Brute](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin_brute.json)


```json
"minecraft:transformation": {
  "into": "minecraft:zombie_pigman",
  "transformation_sound": "converted_to_zombified",
  "keep_level": true,
  "preserve_equipment": true
}
```

#### [Skeleton](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/skeleton.json)


```json
"minecraft:transformation": {
  "into": "minecraft:stray",
  "transformation_sound": "convert_to_stray",
  "keep_level": true,
  "drop_inventory": true,
  "preserve_equipment": true
}
```

#### [Stray](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/stray.json)


```json
"minecraft:transformation": {
  "into": "minecraft:skeleton",
  "delay": 0.5
}
```

#### [Tadpole](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/tadpole.json)


```json
"minecraft:transformation": {
  "into": "minecraft:frog",
  "transformation_sound": "convert_to_frog"
}
```

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)

At /minecraft:entity/component_groups/become_witch/minecraft:transformation/: 

```json
"minecraft:transformation": {
  "into": "minecraft:witch",
  "delay": 0.5
}
```

At /minecraft:entity/component_groups/become_villager_v2/minecraft:transformation/: 

```json
"minecraft:transformation": {
  "into": "minecraft:villager_v2",
  "keep_level": true
}
```

At /minecraft:entity/component_groups/become_zombie/minecraft:transformation/: 

```json
"minecraft:transformation": {
  "into": "minecraft:zombie_villager"
}
```
