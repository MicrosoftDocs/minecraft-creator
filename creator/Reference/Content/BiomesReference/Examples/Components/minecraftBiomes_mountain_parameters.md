---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:mountain_parameters"
description: "Describes the minecraft:mountain_parameters biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:mountain_parameters

Noise parameters used to drive mountain terrain generation in Overworld.


## Minecraft Mountain Parameters Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| east_slopes | *not set* | Boolean true/false | Enable for east-facing slopes |  | 
| material | *not set* | Object | Block type use as steep material |  | 
| north_slopes | *not set* | Boolean true/false | Enable for north-facing slopes |  | 
| south_slopes | *not set* | Boolean true/false | Enable for south-facing slopes |  | 
| steep_material_adjustment | *not set* | [Steep Material Adjustment](#steep-material-adjustment-item-type) item | Defines surface material for steep slopes |  | 
| top_slide | *not set* | [Top Slide](#top-slide-item-type) item | Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high |  | 
| west_slopes | *not set* | Boolean true/false | Enable for west-facing slopes |  | 

## Steep Material Adjustment item type
Defines surface material for steep slopes.


#### Mountain Parameters - Steep Material Adjustment Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| east_slopes | *not set* | Boolean true/false | Enable for east-facing slopes |  | 
| material | *not set* | Object | Block type use as steep material |  | 
| north_slopes | *not set* | Boolean true/false | Enable for north-facing slopes |  | 
| south_slopes | *not set* | Boolean true/false | Enable for south-facing slopes |  | 
| west_slopes | *not set* | Boolean true/false | Enable for west-facing slopes |  | 

## Top Slide item type
Controls the density tapering that happens at the top of the world to prevent terrain from reaching too high.


#### Mountain Parameters - Top Slide Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| enabled | *not set* | Boolean true/false | If false, top slide will be disabled. If true, other parameters will be taken into account. |  | 