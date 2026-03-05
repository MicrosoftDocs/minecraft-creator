---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:frozen_ocean"
description: "Describes the minecraft:frozen_ocean biome"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:frozen_ocean

Similar to overworld_surface. Adds icebergs.


## Biome Frozen Ocean Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome | 
| foundation_material (Foundation Material) | *not set* | [Foundation Material (Foundation Material)](#foundation-material-foundation-material) item |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome | 
| mid_material (Mid Material) | *not set* | [Mid Material (Mid Material)](#mid-material-mid-material) item |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur Value must be <= 127. | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome | 
| sea_floor_material (Sea Floor Material) | *not set* | [Sea Floor Material (Sea Floor Material)](#sea-floor-material-sea-floor-material) item |  | 
| sea_material | *not set* | String | Controls the block type used for the bodies of water in this biome | 
| sea_material (Sea Material) | *not set* | [Sea Material (Sea Material)](#sea-material-sea-material) item |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome | 
| top_material (Top Material) | *not set* | [Top Material (Top Material)](#top-material-top-material) item |  | 
| type | *not set* | [Type](#type-choices) choices | Controls the type of surface builder to use | 

### Foundation Material (Foundation Material)

#### Foundation Material Properties

**JSON path:** `foundation_material`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | Object | Name of the block | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. | 
| states (as Keyed collection of boolean values) | *not set* | Keyed collection of boolean values |  | 
| states (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

### Mid Material (Mid Material)

Same structure as [Foundation Material (Foundation Material)](#foundation-material-foundation-material).


### Sea Floor Material (Sea Floor Material)

Same structure as [Foundation Material (Foundation Material)](#foundation-material-foundation-material).


### Sea Material (Sea Material)

Same structure as [Foundation Material (Foundation Material)](#foundation-material-foundation-material).


### Top Material (Top Material)

Same structure as [Foundation Material (Foundation Material)](#foundation-material-foundation-material).


### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:capped | Minecraft:capped | |
| minecraft:frozen_ocean | Minecraft:frozen ocean | |
| minecraft:mesa | Minecraft:mesa | |
| minecraft:overworld | Minecraft:overworld | |
| minecraft:swamp | Minecraft:swamp | |
| minecraft:the_end | Minecraft:the end | |