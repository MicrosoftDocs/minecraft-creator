---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:jigsaw_structure"
description: "Describes the minecraft:jigsaw_structure jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:jigsaw_structure

Defines a jigsaw structure that generates in the world using template pools and structure sets.


## Jigsaw Structure Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | The format version of this jigsaw structure definition. |  | 
| minecraft:jigsaw | *not set* | [Jigsaw](#jigsaw) item | The jigsaw structure definition. |  | 

## Jigsaw

#### Jigsaw Definition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| biome_filters | *not set* | Array of objects | Array of filter conditions that determine which biomes can generate this structure. |  | 
| description | *not set* | [Description](#jigsawstructuredefinition-description) item | The description block containing the structure identifier. |  | 
| heightmap_projection | *not set* | String | Which heightmap to use for surface placement. Valid values: 'world_surface', 'world_surface_wg', 'ocean_floor', 'ocean_floor_wg', 'motion_blocking', 'motion_blocking_no_leaves'. |  | 
| max_depth | 7 | Integer number | Maximum recursion depth for jigsaw piece connections. Higher values allow more complex structures. |  | 
| max_distance_from_center | *not set* | [Max Distance From Center](#max-distance-from-center) item | Maximum horizontal and vertical distance pieces can generate from the structure center. |  | 
| start_height | *not set* | [Start Height](#start-height) item | The height at which the structure starts generating. |  | 
| start_pool | *not set* | String | The identifier of the template pool to use as the starting point for structure generation. |  | 
| step | *not set* | String | The world generation step during which this structure generates. Valid values: 'raw_generation', 'lakes', 'local_modifications', 'underground_structures', 'surface_structures', 'strongholds', 'underground_ores', 'underground_decoration', 'fluid_springs', 'vegetal_decoration', 'top_layer_modification'. |  | 
| terrain_adaptation | *not set* | String | How the structure adapts to terrain. Valid values: 'none', 'beard_thin', 'beard_box', 'bury', 'encapsulate'. |  | 

## JigsawStructureDefinition Description
JigsawStructureDefinition Description.


#### JigsawStructureDefinition Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | Identifier of the Jigsaw Structure. |  | 

## Max Distance From Center

#### Max Distance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| horizontal | 80 | Integer number | Maximum horizontal distance in blocks. |  | 
| vertical | 80 | Integer number | Maximum vertical distance in blocks. |  | 

## Start Height

#### Start Height Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| type | *not set* | String | Height provider type. Valid values: 'constant', 'uniform', 'biased_to_bottom', 'very_biased_to_bottom', 'trapezoid', 'weighted_list'. |  | 
| value | *not set* | [Value](#value) item | The height value or configuration. |  | 

## Value

#### Height Value Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| above_bottom | *not set* | Integer number | Distance above world bottom. |  | 
| absolute | *not set* | Integer number | Fixed Y coordinate. |  | 
| below_top | *not set* | Integer number | Distance below world top. |  | 