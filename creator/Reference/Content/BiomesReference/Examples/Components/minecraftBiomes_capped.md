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


## Biome Capped Properties

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
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Ceiling Materials

#### Ceiling Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Floor Materials

#### Floor Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Foundation Material

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 