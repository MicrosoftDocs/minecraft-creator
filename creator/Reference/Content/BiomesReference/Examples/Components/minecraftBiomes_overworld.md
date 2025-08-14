---
author: cam-wilkerson
ms.author: v-cwilkerson
title: "Biome Documentation - minecraft:overworld"
description: "Describes the minecraft:overworld biome"
ms.service: minecraft-bedrock-edition
ms.date: 08/12/2025 
---

# Biome Documentation - minecraft:overworld

Controls the blocks used for the default Minecraft Overworld terrain generation.


## Minecraft Overworld biome properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| type | minecraft:overworld | BuilderType | Controls the type of surface builder to use |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur (Value must be <= 127) |  | 
| foundation_material | *not set* | Object | Controls the block type used deep underground in this biome |  | 
| mid_material | *not set* | Object | Controls the block type used in a layer below the surface of this biome |  | 
| top_material | *not set* | Object | Controls the block type used for the surface of this biome |  |  
| sea_material | *not set* | Object | Controls the block type used for the bodies of water in this biome |  | 
