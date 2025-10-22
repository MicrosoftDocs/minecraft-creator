---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:surface_builder"
description: "Describes the minecraft:surface_builder biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:surface_builder

Controls the materials used for terrain generation.


## Biome Surface Builder Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| builder (Biome Overworld) | *not set* | [Builder](#biome-overworld) item | Controls the block types used for terrain generation. |  | 
| builder (Alternate 1) | *not set* | [Builder](#biome-frozen-ocean) item |  |  | 
| builder (Alternate 2) | *not set* | [Builder](#biome-mesa) item |  |  | 
| builder (Alternate 3) | *not set* | [Builder](#biome-swamp) item |  |  | 
| builder (Alternate 4) | *not set* | [Builder](#biome-capped) item |  |  | 
| builder (Alternate 5) | *not set* | [Builder](#biome-the-end) item |  |  | 

## Biome Overworld
Controls the blocks used for the default Minecraft Overworld terrain generation.


#### Biome Overworld Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material](#foundation-material) item |  |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material](#mid-material) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur Value must be <= 127. |  | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material](#sea-floor-material) item |  |  | 
| sea_material | *not set* | String | Controls the block type used for the bodies of water in this biome |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material](#sea-material) item |  |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome |  | 
| top_material (Alternate 1) | *not set* | [Top Material](#top-material) item |  |  | 
| type | *not set* | String | Controls the type of surface builder to use |  | 

## Foundation Material

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mid Material

#### Mid Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Floor Material

#### Sea Floor Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Material

#### Top Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Biome Frozen Ocean
Similar to overworld_surface. Adds icebergs.


#### Biome Frozen Ocean Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material](#foundation-material) item |  |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material](#mid-material) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur Value must be <= 127. |  | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material](#sea-floor-material) item |  |  | 
| sea_material | *not set* | String | Controls the block type used for the bodies of water in this biome |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material](#sea-material) item |  |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome |  | 
| top_material (Alternate 1) | *not set* | [Top Material](#top-material) item |  |  | 
| type | *not set* | String | Controls the type of surface builder to use |  | 

## Biome Mesa
Similar to overworld_surface. Adds colored strata and optional pillars.


#### Biome Mesa Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bryce_pillars | *not set* | Boolean true/false | Whether the mesa generates with pillars |  | 
| clay_material | *not set* | String | Base clay block to use |  | 
| clay_material (Alternate 1) | *not set* | [Clay Material](#clay-material) item |  |  | 
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material](#foundation-material) item |  |  | 
| hard_clay_material | *not set* | String | Hardened clay block to use |  | 
| hard_clay_material (Alternate 1) | *not set* | [Hard Clay Material](#hard-clay-material) item |  |  | 
| has_forest | *not set* | Boolean true/false | Places coarse dirt and grass at high altitudes |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material](#mid-material) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur Value must be <= 127. |  | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material](#sea-floor-material) item |  |  | 
| sea_material | *not set* | String | Controls the block type used for the bodies of water in this biome |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material](#sea-material) item |  |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome |  | 
| top_material (Alternate 1) | *not set* | [Top Material](#top-material) item |  |  | 
| type | *not set* | String | Controls the type of surface builder to use |  | 

## Clay Material

#### Clay Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Hard Clay Material

#### Hard Clay Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Biome Swamp
Used to add decoration to the surface of swamp biomes such as water lilies.


#### Biome Swamp Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome. |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material](#foundation-material) item |  |  | 
| max_puddle_depth_below_sea_level | *not set* | Integer number | Controls the depth at which surface level blocks can be replaced with water for puddles. The number represents the number of blocks (0, 127) below sea level that we will go down to look for a surface block. Value must be <= 127. |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome. |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material](#mid-material) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur. Value must be <= 127. |  | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome. |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material](#sea-floor-material) item |  |  | 
| sea_material | *not set* | String | Controls the block type used for the bodies of water in this biome. |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material](#sea-material) item |  |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome. |  | 
| top_material (Alternate 1) | *not set* | [Top Material](#top-material) item |  |  | 
| type | *not set* | String | Controls the type of surface builder to use |  | 

## Biome Capped
Generates surface on blocks with non-solid blocks above or below.


#### Biome Capped Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| beach_material | *not set* | String | Material used to decorate surface near sea level. |  | 
| beach_material (Alternate 1) | *not set* | [Beach Material](#beach-material) item |  |  | 
| ceiling_materials | *not set* | String | Materials used for the surface ceiling. Value must have at least 1 items. |  | 
| ceiling_materials (Alternate 1) | *not set* | [Ceiling Materials](#ceiling-materials) item |  |  | 
| floor_materials | *not set* | String | Materials used for the surface floor. Value must have at least 1 items. |  | 
| floor_materials (Alternate 1) | *not set* | [Floor Materials](#floor-materials) item |  |  | 
| foundation_material | *not set* | String | Material used to replace solid blocks that are not surface blocks. |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material](#foundation-material) item |  |  | 
| sea_material | *not set* | String | Material used to replace air blocks below sea level. |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material](#sea-material) item |  |  | 
| type | *not set* | String | Controls the type of surface builder to use |  | 

## Beach Material

#### Beach Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Ceiling Materials

#### Ceiling Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Floor Materials

#### Floor Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Biome The End

#### Biome The End Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| type | *not set* | String | Use default Minecraft End terrain generation. |  | 