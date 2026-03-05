---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:surface_builder"
description: "Describes the minecraft:surface_builder biome"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:surface_builder

## Contents

- [Biome Overworld](#biome-overworld)
- [Biome Mesa](#biome-mesa)
- [Biome Swamp](#biome-swamp)
- [Biome Capped](#biome-capped)
- [Biome The End](#biome-the-end)

Controls the materials used for terrain generation.


## Biome Surface Builder Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| builder (Biome Overworld) | *not set* | [Builder](#biome-overworld) item | Controls the block types used for terrain generation. | 
| builder (Alternate 1) | *not set* | [Builder](#biome-frozen-ocean) item |  | 
| builder (Alternate 2) | *not set* | [Builder](#biome-mesa) item |  | 
| builder (Alternate 3) | *not set* | [Builder](#biome-swamp) item |  | 
| builder (Alternate 4) | *not set* | [Builder](#biome-capped) item |  | 
| builder (Alternate 5) | *not set* | [Builder](#biome-the-end) item |  | 

### Biome Overworld
Controls the blocks used for the default Minecraft Overworld terrain generation.


#### Biome Overworld Properties

**JSON path:** `builder`

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

#### Foundation Material (Foundation Material)

##### Foundation Material Properties

**JSON path:** `builder > foundation_material`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | Object | Name of the block | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. | 
| states (as Keyed collection of boolean values) | *not set* | Keyed collection of boolean values |  | 
| states (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

#### Mid Material (Mid Material)

Same structure as [Foundation Material (Foundation Material)](#foundation-material-foundation-material).


#### Sea Floor Material (Sea Floor Material)

Same structure as [Foundation Material (Foundation Material)](#foundation-material-foundation-material).


#### Sea Material (Sea Material)

##### Sea Material Properties

**JSON path:** `builder > sea_material`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | Object | Name of the block | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. | 
| states (as Keyed collection of boolean values) | *not set* | Keyed collection of boolean values |  | 
| states (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

#### Top Material (Top Material)

Same structure as [Sea Material (Sea Material)](#sea-material-sea-material).


### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:capped | Minecraft:capped | |
| minecraft:frozen_ocean | Minecraft:frozen ocean | |
| minecraft:mesa | Minecraft:mesa | |
| minecraft:overworld | Minecraft:overworld | |
| minecraft:swamp | Minecraft:swamp | |
| minecraft:the_end | Minecraft:the end | |

### Biome Frozen Ocean

Same structure as [Biome Overworld](#biome-overworld).


### Biome Mesa
Similar to overworld_surface. Adds colored strata and optional pillars.


#### Biome Mesa Properties

**JSON path:** `builder`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| bryce_pillars | *not set* | Boolean true/false | Whether the mesa generates with pillars | 
| clay_material | *not set* | String | Base clay block to use | 
| clay_material (Clay Material) | *not set* | [Clay Material (Clay Material)](#clay-material-clay-material) item |  | 
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome | 
| foundation_material (Foundation Material) | *not set* | [Foundation Material (Foundation Material)](#foundation-material-foundation-material) item |  | 
| hard_clay_material | *not set* | String | Hardened clay block to use | 
| hard_clay_material (Hard Clay Material) | *not set* | [Hard Clay Material (Hard Clay Material)](#hard-clay-material-hard-clay-material) item |  | 
| has_forest | *not set* | Boolean true/false | Places coarse dirt and grass at high altitudes | 
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

#### Clay Material (Clay Material)

##### Clay Material Properties

**JSON path:** `builder > clay_material`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | Object | Name of the block | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. | 
| states (as Keyed collection of boolean values) | *not set* | Keyed collection of boolean values |  | 
| states (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

#### Hard Clay Material (Hard Clay Material)

Same structure as [Clay Material (Clay Material)](#clay-material-clay-material).


### Biome Swamp
Used to add decoration to the surface of swamp biomes such as water lilies.


#### Biome Swamp Properties

**JSON path:** `builder`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome. | 
| foundation_material (Foundation Material) | *not set* | [Foundation Material (Foundation Material)](#foundation-material-foundation-material) item |  | 
| max_puddle_depth_below_sea_level | *not set* | Integer number | Controls the depth at which surface level blocks can be replaced with water for puddles. | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome. | 
| mid_material (Mid Material) | *not set* | [Mid Material (Mid Material)](#mid-material-mid-material) item |  | 
| sea_floor_depth | *not set* | Integer number | Controls how deep below the world water level the floor should occur. Value must be <= 127. | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome. | 
| sea_floor_material (Sea Floor Material) | *not set* | [Sea Floor Material (Sea Floor Material)](#sea-floor-material-sea-floor-material) item |  | 
| sea_material | *not set* | String | Controls the block type used for the bodies of water in this biome. | 
| sea_material (Sea Material) | *not set* | [Sea Material (Sea Material)](#sea-material-sea-material) item |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome. | 
| top_material (Top Material) | *not set* | [Top Material (Top Material)](#top-material-top-material) item |  | 
| type | *not set* | [Type](#type-choices) choices | Controls the type of surface builder to use | 

#### max_puddle_depth_below_sea_level

Controls the depth at which surface level blocks can be replaced with water for puddles. The number represents the number of blocks (0, 127) below sea level that we will go down to look for a surface block. Value must be <= 127.


### Biome Capped
Generates surface on blocks with non-solid blocks above or below.


#### Biome Capped Properties

**JSON path:** `builder`

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

#### Beach Material (Beach Material)

##### Beach Material Properties

**JSON path:** `builder > beach_material`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | Object | Name of the block | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. | 
| states (as Keyed collection of boolean values) | *not set* | Keyed collection of boolean values |  | 
| states (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

#### Ceiling Materials (Ceiling Materials)

Same structure as [Beach Material (Beach Material)](#beach-material-beach-material).


#### Floor Materials (Floor Materials)

Same structure as [Beach Material (Beach Material)](#beach-material-beach-material).


### Biome The End
Marks a biome as using End dimension terrain generation. Biomes with this component will use the characteristic End terrain style with end stone and void generation.


#### Biome The End Properties

**JSON path:** `builder`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| type | *not set* | [Type](#type-choices) choices | Use default Minecraft End terrain generation. | 