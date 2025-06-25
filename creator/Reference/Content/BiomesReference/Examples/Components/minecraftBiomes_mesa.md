---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:mesa"
description: "Describes the minecraft:mesa biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:mesa

Similar to overworld_surface. Adds colored strata and optional pillars.


## Minecraft Mesa Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bryce_pillars | *not set* | Boolean true/false | Whether the mesa generates with pillars |  | 
| clay_material | *not set* | Keyed set of strings | Base clay block to use |  | 
| clay_material (Alternate 1) | *not set* | [Clay Material (Alternate 1)](#clay-material-(alternate-1)-item-type) item |  |  | 
| foundation_material | *not set* | Keyed set of strings | Controls the block type used deep underground in this biome |  | 
| foundation_material (Alternate 1) | *not set* | [Foundation Material (Alternate 1)](#foundation-material-(alternate-1)-item-type) item |  |  | 
| hard_clay_material | *not set* | Keyed set of strings | Hardened clay block to use |  | 
| hard_clay_material (Alternate 1) | *not set* | [Hard Clay Material (Alternate 1)](#hard-clay-material-(alternate-1)-item-type) item |  |  | 
| has_forest | *not set* | Boolean true/false | Places coarse dirt and grass at high altitudes |  | 
| mid_material | *not set* | Keyed set of strings | Controls the block type used in a layer below the surface of this biome |  | 
| mid_material (Alternate 1) | *not set* | [Mid Material (Alternate 1)](#mid-material-(alternate-1)-item-type) item |  |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur |  | 
| sea_floor_material | *not set* | Keyed set of strings | Controls the block type used as a floor for bodies of water in this biome |  | 
| sea_floor_material (Alternate 1) | *not set* | [Sea Floor Material (Alternate 1)](#sea-floor-material-(alternate-1)-item-type) item |  |  | 
| sea_material | *not set* | Keyed set of strings | Controls the block type used for the bodies of water in this biome |  | 
| sea_material (Alternate 1) | *not set* | [Sea Material (Alternate 1)](#sea-material-(alternate-1)-item-type) item |  |  | 
| top_material | *not set* | Keyed set of strings | Controls the block type used for the surface of this biome |  | 
| top_material (Alternate 1) | *not set* | [Top Material (Alternate 1)](#top-material-(alternate-1)-item-type) item |  |  | 
| type | *not set* | String | Controls the type of surface builder to use |  | 

## Clay Material (Alternate 1) item type

#### Clay Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Foundation Material (Alternate 1) item type

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Hard Clay Material (Alternate 1) item type

#### Hard Clay Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mid Material (Alternate 1) item type

#### Mid Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Floor Material (Alternate 1) item type

#### Sea Floor Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material (Alternate 1) item type

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Material (Alternate 1) item type

#### Top Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 