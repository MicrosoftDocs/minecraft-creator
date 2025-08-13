---
author: cam-wilkerson
ms.author: v-cwilkerson
title: "Biome Documentation - minecraft:swamp"
description: "Describes the minecraft:swamp biome"
ms.service: minecraft-bedrock-edition
ms.date: 08/12/2025 
---

# Biome Documentation - minecraft:swamp

Used to add decoration to the surface of swamp biomes such as water lilies.


## Minecraft swamp biome properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| type | minecraft:swamp | BuilderType | Controls the type of surface builder to use |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur (value must be <= 127) |  | 
| sea_floor_material | *not set* | Object | Controls the block type used as a floor for bodies of water in this biome |  | 
| foundation_material | *not set* | Object | Controls the block type used deep underground in this biome. |  | 
| mid_material | *not set* | Object | Controls the block type used in a layer below the surface of this biome |  | 
| top_material | *not set* | Object | Controls the block type used for the surface of this biome |  | 
| sea_material | *not set* | Object | Controls the block type used for the bodies of water in this biome |  | 
| max_puddle_depth_below_sea_level | *not set* | Integer number | Controls the depth at which surface level blocks can be replaced to make puddles. The number represents the number of blocks below sea level that will still register as a surface block. (value must be <= 127) |  | 


