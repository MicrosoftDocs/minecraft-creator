---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:swamp"
description: "Describes the minecraft:swamp biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:swamp

Used to add decoration to the surface of swamp biomes such as water lilies.


## Biome Swamp Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome. |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material (Foundation Material)](#foundation-material-foundation-material) item |  |  | 
| max_puddle_depth_below_sea_level | *not set* | Integer number | Controls the depth at which surface level blocks can be replaced with water for puddles. The number represents the number of blocks (0, 127) below sea level that we will go down to look for a surface block. Value must be <= 127. |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome. |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material (Mid Material)](#mid-material-mid-material) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur. Value must be <= 127. |  | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome. |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material (Sea Floor Material)](#sea-floor-material-sea-floor-material) item |  |  | 
| sea_material | *not set* | String | Controls the block type used for the bodies of water in this biome. |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material (Sea Material)](#sea-material-sea-material) item |  |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome. |  | 
| top_material (Alternate 1) | *not set* | [Top Material (Top Material)](#top-material-top-material) item |  |  | 
| type | *not set* | String | Controls the type of surface builder to use |  | 

## Foundation Material (Foundation Material)

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mid Material (Mid Material)

#### Mid Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Floor Material (Sea Floor Material)

#### Sea Floor Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material (Sea Material)

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Material (Top Material)

#### Top Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 