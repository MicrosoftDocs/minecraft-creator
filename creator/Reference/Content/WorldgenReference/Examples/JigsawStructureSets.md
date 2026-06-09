---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:structure_set"
description: "Describes the minecraft:structure_set jigsaw json"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:structure_set

Defines a structure set that controls the placement and distribution of structures in the world. A Structure Set contains a set of Jigsaw Structures and rules for how those structures should be placed in the world relative to other instances of structures from the same set. Each structure within a set is paired with a weight that influences how frequently it is chosen.


## Structure Set Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | String | The format version of this structure set definition. | 
| minecraft:structure_set | *not set* | [Structure Set](#structure-set) item | The structure set definition. | 

### Structure Set

#### Structure Set Definition Properties

**JSON path:** `minecraft:structure_set`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#structure-set-description) item | The description block containing the structure set identifier. | 
| placement | *not set* | [Placement](#placement) item | Defines how structures in this set are placed in the world. | 
| structures | *not set* | Array of [Structures](#jigsawstructureset-structure) items | Array of structures in this set with their relative weights. | 

#### Structure Set Description
Identifies the Structure Set. The identifier set here groups one or more Jigsaw Structures under a shared placement strategy and is referenced when configuring world generation.


##### Structure Set Description Properties

**JSON path:** `minecraft:structure_set > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | Identifier of the Jigsaw Structure Set. | 

#### Placement

##### Placement Properties

**JSON path:** `minecraft:structure_set > placement`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| salt | *not set* | Integer number | Seed used for the random generator to provide a unique scatter pattern. This is used to prevent overlap when multiple structure sets share the same placement values. | 
| separation | 8 | Integer number | Padding (in chunks) within each grid cell. Structures will not generate within the padded area. | 
| spacing | 34 | Integer number | Grid cell size (in chunks) used when generating the structure. Structures will attempt to generate at a random position within each cell. Must be greater than separation. | 
| spread_type | linear | String | How structures spread within the grid. Valid values: 'linear', 'triangular'. | 
| type | *not set* | String | The placement algorithm type. Valid values: 'minecraft:random_spread', 'minecraft:concentric_rings'. | 

#### JigsawStructureSet Structure
JigsawStructureSet Structure.


##### JigsawStructureSet Structure Properties

**JSON path:** `minecraft:structure_set > structures`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| structure | *not set* | String | Identifier of the Jigsaw Structure. | 
| weight | *not set* | Integer number | Weight of the Jigsaw Structure in the set. Higher weights are more likely to be selected. | 