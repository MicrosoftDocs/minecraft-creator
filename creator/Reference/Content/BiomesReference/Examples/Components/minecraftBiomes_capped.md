---
author: cam-wilkerson
ms.author: v-cwilkerson
title: "Biome Documentation - minecraft:capped"
description: "Describes the minecraft:capped biome"
ms.service: minecraft-bedrock-edition
ms.date: 08/12/2025 
---

# Biome Documentation - minecraft:capped

Generates surface on blocks with non-solid blocks above or below.


## Minecraft capped biome properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| type | minecraft:capped | BuilderType | Controls the type of surface builder to use |  | 
| floor_materials | *not set* | Array of objects | Materials used for the surface floor (value must have at least 1 item) |  |
| floor_materials (Alternate 1) | *not set* | [Floor Materials (Alternate 1)](#floor-materials-(alternate-1)-item-type) item |  |  | 
| ceiling_materials | *not set* | Array of objects | Materials used for the surface ceiling (value must have at least 1 item) |  | 
| ceiling_materials (Alternate 1) | *not set* | [Ceiling Materials (Alternate 1)](#ceiling-materials-(alternate-1)-item-type) item |  |  |  
| sea_material | *not set* | Object | Material used to replace air blocks below sea level |  | 
| foundation_material | *not set* | Object | Material used to replace solid blocks that are not surface blocks |  | 
| beach_material | *not set* | Object | Material used to decorate surface near sea level |  | 


## Ceiling materials (alternate 1) item type

#### Ceiling materials properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Floor materials (alternate 1) item type

#### Floor materials properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 