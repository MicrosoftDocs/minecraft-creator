---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:surface_material_adjustments"
description: "Describes the minecraft:surface_material_adjustments biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:surface_material_adjustments

Specify fine-detail changes to blocks used in terrain generation (based on a noise function).


## Minecraft Surface Material Adjustments Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| adjustments | *not set* | Array of [Adjustments](#adjustments-item-type) items | All adjustments that match the column's noise values will be applied in the order listed. |  | 
| foundation_material | *not set* | Object | Controls the block type used deep underground in this biome when this adjustment is active. |  | 
| mid_material | *not set* | Object | Controls the block type used in a layer below the surface of this biome when this adjustment is active. |  | 
| sea_floor_material | *not set* | Object | Controls the block type used as a floor for bodies of water in this biome when this adjustment is active. |  | 
| sea_material | *not set* | Object | Controls the block type used in the bodies of water in this biome when this adjustment is active. |  | 
| top_material | *not set* | Object | Controls the block type used for the surface of this biome when this adjustment is active. |  | 

## Adjustments item type
An adjustment to generated terrain, replacing blocks based on the specified settings.


#### Surface Material Adjustments - Surface Adjustment Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| height_range | *not set* | Decimal number | Defines a range of noise values [min, max] for which this adjustment should be applied. Value must have at least 2 items. Value must have at most 2 items. |  | 
| height_range (Alternate 1) | *not set* | Boolean true/false |  |  | 
| height_range (Alternate 2) | *not set* | String |  |  | 
| materials | *not set* | [Materials](#materials-item-type) item | The specific blocks used for this surface adjustment |  | 
| noise_frequency_scale | *not set* | Decimal number | The scale to multiply by the position when accessing the noise value for the material adjustments. |  | 
| noise_range | *not set* | Array of numbers | Defines a range of noise values [min, max] for which this adjustment should be applied. Value must have at least 2 items. Value must have at most 2 items. |  | 

## Materials item type
The specific blocks used for this surface adjustment.


#### Surface Material Adjustments - Surface Adjustment Materials Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| foundation_material | *not set* | Keyed set of strings | Controls the block type used deep underground in this biome when this adjustment is active. |  | 
| foundation_material (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| foundation_material (Alternate 2) | *not set* | [Foundation Material (Alternate 2)](#foundation-material-(alternate-2)-item-type) item |  |  | 
| mid_material | *not set* | Keyed set of strings | Controls the block type used in a layer below the surface of this biome when this adjustment is active. |  | 
| mid_material (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| mid_material (Alternate 2) | *not set* | [Mid Material (Alternate 2)](#mid-material-(alternate-2)-item-type) item |  |  | 
| sea_floor_material | *not set* | Keyed set of strings | Controls the block type used as a floor for bodies of water in this biome when this adjustment is active. |  | 
| sea_floor_material (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| sea_floor_material (Alternate 2) | *not set* | [Sea Floor Material (Alternate 2)](#sea-floor-material-(alternate-2)-item-type) item |  |  | 
| sea_material | *not set* | Keyed set of strings | Controls the block type used in the bodies of water in this biome when this adjustment is active. |  | 
| sea_material (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| sea_material (Alternate 2) | *not set* | [Sea Material (Alternate 2)](#sea-material-(alternate-2)-item-type) item |  |  | 
| top_material | *not set* | Keyed set of strings | Controls the block type used for the surface of this biome when this adjustment is active. |  | 
| top_material (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| top_material (Alternate 2) | *not set* | [Top Material (Alternate 2)](#top-material-(alternate-2)-item-type) item |  |  | 

## Foundation Material (Alternate 2) item type

#### Foundation Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Mid Material (Alternate 2) item type

#### Mid Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Floor Material (Alternate 2) item type

#### Sea Floor Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Sea Material (Alternate 2) item type

#### Sea Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 

## Top Material (Alternate 2) item type

#### Top Material Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | Object | Name of the block |  | 
| states | *not set* | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. |  | 
| states (Alternate 1) | *not set* | Keyed collection of boolean values |  |  | 
| states (Alternate 2) | *not set* | Keyed set of strings |  |  | 