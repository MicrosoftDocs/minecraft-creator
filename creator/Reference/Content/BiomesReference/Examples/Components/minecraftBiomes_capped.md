---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:capped"
description: "Describes the minecraft:capped biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:capped

Generates surface on blocks with non-solid blocks above or below.


## Minecraft Capped Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| beach_material | *not set* | Object | Material used to decorate surface near sea level. |  | 
| ceiling_materials | *not set* | Array of objects | Materials used for the surface ceiling. Value must have at least 1 items. |  | 
| ceiling_materials (Alternate 1) | *not set* | [Ceiling Materials (Alternate 1)](#ceiling-materials-(alternate-1)-item-type) item |  |  | 
| floor_materials | *not set* | Array of objects | Materials used for the surface floor. Value must have at least 1 items. |  | 
| floor_materials (Alternate 1) | *not set* | [Floor Materials (Alternate 1)](#floor-materials-(alternate-1)-item-type) item |  |  | 
| foundation_material | *not set* | Object | Material used to replace solid blocks that are not surface blocks. |  | 
| sea_material | *not set* | Object | Material used to replace air blocks below sea level. |  | 
| type | *not set* | String | Controls the type of surface builder to use |  | 

## Ceiling Materials (Alternate 1) item type

#### Ceiling Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Floor Materials (Alternate 1) item type

#### Floor Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 