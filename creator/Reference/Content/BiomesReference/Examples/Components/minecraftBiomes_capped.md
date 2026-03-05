---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:capped"
description: "Describes the minecraft:capped biome"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:capped

Generates surface on blocks with non-solid blocks above or below.


## Biome Capped Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| beach_material | *not set* | String | Material used to decorate surface near sea level. | 
| beach_material (Beach Material) | *not set* | [Beach Material (Beach Material)](#beach-material-beach-material) item |  | 
| ceiling_materials | *not set* | String | Materials used for the surface ceiling. Value must have at least 1 items. | 
| ceiling_materials (Ceiling Materials) | *not set* | [Ceiling Materials (Ceiling Materials)](#ceiling-materials-ceiling-materials) item |  | 
| floor_materials | *not set* | String | Materials used for the surface floor. Value must have at least 1 items. | 
| floor_materials (Floor Materials) | *not set* | [Floor Materials (Floor Materials)](#floor-materials-floor-materials) item |  | 
| foundation_material | *not set* | String | Material used to replace solid blocks that are not surface blocks. | 
| foundation_material (Foundation Material) | *not set* | [Foundation Material (Foundation Material)](#foundation-material-foundation-material) item |  | 
| sea_material | *not set* | String | Material used to replace air blocks below sea level. | 
| sea_material (Sea Material) | *not set* | [Sea Material (Sea Material)](#sea-material-sea-material) item |  | 
| type | *not set* | [Type](#type-choices) choices | Controls the type of surface builder to use | 

### Beach Material (Beach Material)

#### Beach Material Properties

**JSON path:** `beach_material`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | Object | Name of the block | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. | 
| states (as Keyed collection of boolean values) | *not set* | Keyed collection of boolean values |  | 
| states (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

### Ceiling Materials (Ceiling Materials)

Same structure as [Beach Material (Beach Material)](#beach-material-beach-material).


### Floor Materials (Floor Materials)

Same structure as [Beach Material (Beach Material)](#beach-material-beach-material).


### Foundation Material (Foundation Material)

Same structure as [Beach Material (Beach Material)](#beach-material-beach-material).


### Sea Material (Sea Material)

Same structure as [Beach Material (Beach Material)](#beach-material-beach-material).


### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:capped | Minecraft:capped | |
| minecraft:frozen_ocean | Minecraft:frozen ocean | |
| minecraft:mesa | Minecraft:mesa | |
| minecraft:overworld | Minecraft:overworld | |
| minecraft:swamp | Minecraft:swamp | |
| minecraft:the_end | Minecraft:the end | |