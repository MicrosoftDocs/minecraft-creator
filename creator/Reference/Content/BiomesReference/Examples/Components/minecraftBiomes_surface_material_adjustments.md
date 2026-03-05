---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:surface_material_adjustments"
description: "Describes the minecraft:surface_material_adjustments biome"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:surface_material_adjustments

Specify fine-detail changes to blocks used in terrain generation (based on a noise function).


## Biome Surface Material Adjustments Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| adjustments | *not set* | Array of [Adjustments](#adjustments) items | All adjustments that match the column's noise values will be applied in the order listed. | 

### Adjustments
An adjustment to generated terrain, replacing blocks based on the specified settings.


#### Surface Material Adjustments - Surface Adjustment Settings Properties

**JSON path:** `adjustments`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| height_range | *not set* | Decimal number | Defines a range of noise values [min, max] for which this adjustment should be applied. Value must have at least 2 items. Value must have at most 2 items. | 
| height_range (as Boolean true/false) | *not set* | Boolean true/false |  | 
| height_range (as String) | *not set* | String |  | 
| materials | *not set* | [Materials](#materials) item | The specific blocks used for this surface adjustment | 
| noise_frequency_scale | *not set* | Decimal number | The scale to multiply by the position when accessing the noise value for the material adjustments. | 
| noise_range | *not set* | Array of numbers | Defines a range of noise values [min, max] for which this adjustment should be applied. Value must have at least 2 items. Value must have at most 2 items. | 

#### Materials
The specific blocks used for this surface adjustment.


##### Surface Material Adjustments - Surface Adjustment Materials Settings Properties

**JSON path:** `adjustments > materials`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| foundation_material | *not set* | String | Controls the block type used deep underground in this biome when this adjustment is active. | 
| foundation_material (Foundation Material) | *not set* | [Foundation Material (Foundation Material)](#foundation-material-foundation-material) item |  | 
| mid_material | *not set* | String | Controls the block type used in a layer below the surface of this biome when this adjustment is active. | 
| mid_material (Mid Material) | *not set* | [Mid Material (Mid Material)](#mid-material-mid-material) item |  | 
| sea_floor_material | *not set* | String | Controls the block type used as a floor for bodies of water in this biome when this adjustment is active. | 
| sea_floor_material (Sea Floor Material) | *not set* | [Sea Floor Material (Sea Floor Material)](#sea-floor-material-sea-floor-material) item |  | 
| sea_material | *not set* | String | Controls the block type used in the bodies of water in this biome when this adjustment is active. | 
| sea_material (Sea Material) | *not set* | [Sea Material (Sea Material)](#sea-material-sea-material) item |  | 
| top_material | *not set* | String | Controls the block type used for the surface of this biome when this adjustment is active. | 
| top_material (Top Material) | *not set* | [Top Material (Top Material)](#top-material-top-material) item |  | 

##### Foundation Material (Foundation Material)

###### Foundation Material Properties

**JSON path:** `adjustments > materials > foundation_material`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | Object | Name of the block | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. | 
| states (as Keyed collection of boolean values) | *not set* | Keyed collection of boolean values |  | 
| states (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

##### Mid Material (Mid Material)

Same structure as [Foundation Material (Foundation Material)](#foundation-material-foundation-material).


##### Sea Floor Material (Sea Floor Material)

Same structure as [Foundation Material (Foundation Material)](#foundation-material-foundation-material).


##### Sea Material (Sea Material)

Same structure as [Foundation Material (Foundation Material)](#foundation-material-foundation-material).


##### Top Material (Top Material)

Same structure as [Foundation Material (Foundation Material)](#foundation-material-foundation-material).
