---
author: cam-wilkerson
ms.author: v-vwilkerson
title: "Biome Documentation - minecraft:mesa"
description: "Describes the minecraft:mesa biome"
ms.service: minecraft-bedrock-edition
ms.date: 08/12/2025 
---

# Biome Documentation - minecraft:mesa

Similar to overworld_surface. Adds colored strata and optional pillars.


## Minecraft mesa biome properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| type | minecraft:mesa | String | Controls the type of surface builder to use |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur (value must be <= 127) |  |
| sea_floor_material | *not set* | Object | Controls the block type used as a floor for bodies of water in this biome |  | 
| foundation_material | *not set* | Object | Controls the block type used deep underground in this biome |  | 
| mid_material | *not set* | Object | Controls the block type used in a layer below the surface of this biome |  |  
| top_material | *not set* | Object | Controls the block type used for the surface of this biome |  |
| sea_material | *not set* | Object | Controls the block type used for the bodies of water in this biome |  | 
| clay_material | *not set* | Object | Base clay block to use |  | 
| hard_clay_material | *not set* | Object | Hardened clay block to use |  | 
| bryce_pillars | *not set* | Boolean true/false | Whether the mesa generates with pillars |  | 
| has_forest | *not set* | Boolean true/false | Places coarse dirt and grass at high altitudes |  | 

 
