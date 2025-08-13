---
author: cam-wilkerson
ms.author: v-cwilkerson
title: "Biome Documentation - minecraft:frozen_ocean"
description: "Describes the minecraft:frozen_ocean biome"
ms.service: minecraft-bedrock-edition
ms.date: 08/12/2025 
---

# Biome Documentation - minecraft:frozen_ocean

Similar to overworld_surface. Adds icebergs.


## Minecraft frozen ocean biome properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| type | minecraft:frozen_ocean | BuilderType | Controls the type of surface builder to use |  |
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur (value must be <= 127) |  | 
| sea_floor_material | *not set* | Object | Controls the block type used as a floor for bodies of water in this biome |  | 
| foundation_material | *not set* | Object | Controls the block type used deep underground in this biome |  | 
|mid_material | *not set* | Object | Controls the block type used in a layer below the surface of this biome |  | 
| top_material | *not set* | Object | Controls the block type used for the surface of this biome |  | 
| sea_material | *not set* | Object | Controls the block type used for the bodies of water in this biome |  | 

 