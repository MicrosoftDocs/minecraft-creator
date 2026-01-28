---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:structure_set"
description: "Describes the minecraft:structure_set jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:structure_set

Defines a structure set that controls the placement and distribution of structures in the world.


## Structure Set Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | The format version of this structure set definition. |  | 
| minecraft:structure_set | *not set* | [Structure Set](#structure-set) item | The structure set definition. |  | 

## Structure Set

#### Structure Set Definition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#jigsawstructureset-description) item | The description block containing the structure set identifier. |  | 
| placement | *not set* | [Placement](#placement) item | Defines how structures in this set are placed in the world. |  | 
| structures | *not set* | Array of [Structures](#jigsawstructureset-structure) items | Array of structures in this set with their relative weights. |  | 

## JigsawStructureSet Description
JigsawStructureSet Description.


#### JigsawStructureSet Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | Identifier of the Jigsaw Structure Set. |  | 

## Placement

#### Placement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| salt | *not set* | Integer number | A seed modifier for randomization. Each structure set should use a unique salt. |  | 
| separation | 8 | Integer number | Minimum distance in chunks between structure placements. |  | 
| spacing | 34 | Integer number | Average distance in chunks between structure placements. Must be greater than separation. |  | 
| spread_type | linear | String | How structures spread within the grid. Valid values: 'linear', 'triangular'. |  | 
| type | *not set* | String | The placement algorithm type. Valid values: 'minecraft:random_spread', 'minecraft:concentric_rings'. |  | 

## JigsawStructureSet Structure
JigsawStructureSet Structure.


#### JigsawStructureSet Structure Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| structure | *not set* | String | Identifier of the Jigsaw Structure. |  | 
| weight | *not set* | Integer number | Weight of the Jigsaw Structure in the set. Higher weights are more likely to be selected. |  | 