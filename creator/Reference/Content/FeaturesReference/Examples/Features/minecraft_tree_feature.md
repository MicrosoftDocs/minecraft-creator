---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:tree_feature"
description: "Describes the minecraft:tree_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:tree_feature

Places a tree in the world. A tree consists of a column that is anchored to a base block with set parameters for what it can be placed on and canopy that extends from the column. The trunk height can be randomized with a min and max value, as well as the canopy offset.


## Tree Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| acacia_canopy | *not set* | [Acacia Canopy](#acacia-canopy-item-type) item |  |  | 
| acacia_trunk | *not set* | [Acacia Trunk](#acacia-trunk-item-type) item |  |  | 
| base_block | *not set* | Array of strings |  |  | 
| base_cluster | *not set* | [Base Cluster](#base-cluster-item-type) item | Clusters of blocks randomly replaced with "base_block" around the base of the tree. |  | 
| canopy | *not set* | [Canopy](#canopy-item-type) item |  |  | 
| cherry_canopy | *not set* | [Cherry Canopy](#cherry-canopy-item-type) item |  |  | 
| cherry_trunk | *not set* | [Cherry Trunk](#cherry-trunk-item-type) item |  |  | 
| description | *not set* | [Description](#description-item-type) item |  |  | 
| fallen_trunk | *not set* | [Fallen Trunk](#fallen-trunk-item-type) item |  |  | 
| fancy_canopy | *not set* | [Fancy Canopy](#fancy-canopy-item-type) item |  |  | 
| fancy_trunk | *not set* | [Fancy Trunk](#fancy-trunk-item-type) item |  |  | 
| format_version | *not set* | String |  |  | 
| mangrove_canopy | *not set* | Key/item pairs of [Mangrove Canopy](#mangrove-canopy-item-type) items |  |  | 
| mangrove_roots | *not set* | [Mangrove Roots](#mangrove-roots-item-type) item |  |  | 
| mangrove_trunk | *not set* | [Mangrove Trunk](#mangrove-trunk-item-type) item |  |  | 
| may_grow_on | *not set* | Array of strings |  |  | 
| may_grow_through | *not set* | Array of strings |  |  | 
| may_replace | *not set* | Array of strings |  |  | 
| mega_canopy | *not set* | [Mega Canopy](#mega-canopy-item-type) item |  |  | 
| mega_pine_canopy | *not set* | [Mega Pine Canopy](#mega-pine-canopy-item-type) item |  |  | 
| mega_trunk | *not set* | [Mega Trunk](#mega-trunk-item-type) item |  |  | 
| pine_canopy | *not set* | [Pine Canopy](#pine-canopy-item-type) item |  |  | 
| random_spread_canopy | *not set* | Key/item pairs of [Random Spread Canopy](#random-spread-canopy-item-type) items |  |  | 
| roofed_canopy | *not set* | [Roofed Canopy](#roofed-canopy-item-type) item |  |  | 
| spruce_canopy | *not set* | Object |  |  | 
| trunk | *not set* | [Trunk](#trunk-item-type) item |  |  | 

## Acacia Canopy item type

#### Acacia Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_size | *not set* | Integer number | The size of the canopy. |  | 
| simplify_canopy | *not set* | Boolean true/false | If true the canopy uses a simple pattern. |  | 

## Acacia Trunk item type

#### Acacia Trunk Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| branches | *not set* | [Branches](#branches-item-type) item | Configuration object for branches. |  | 
| trunk_decoration | *not set* | [Trunk Decoration](#trunk-decoration-item-type) item | Configuration object for the trunk decoration. |  | 
| trunk_height | *not set* | [Trunk Height](#trunk-height-item-type) item | Configuration object for the trunk height. |  | 
| trunk_lean | *not set* | [Trunk Lean](#trunk-lean-item-type) item | Configuration object for diagonal branches. |  | 
| trunk_width | *not set* | Integer number | The width of the tree trunk. |  | 

## Branches item type

#### Branches Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| branch_canopy | *not set* | [Branch Canopy](#branch-canopy-item-type) item | Configuration object for the canopy. |  | 

## Branch Canopy item type

#### Branch Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| acacia_canopy | *not set* | [Acacia Canopy](#acacia-canopy-item-type) item |  |  | 
| canopy | *not set* | [Canopy](#canopy-item-type) item |  |  | 
| cherry_canopy | *not set* | [Cherry Canopy](#cherry-canopy-item-type) item |  |  | 
| fancy_canopy | *not set* | [Fancy Canopy](#fancy-canopy-item-type) item |  |  | 
| mangrove_canopy | *not set* | Key/item pairs of [Mangrove Canopy](#mangrove-canopy-item-type) items |  |  | 
| mega_canopy | *not set* | [Mega Canopy](#mega-canopy-item-type) item |  |  | 
| mega_pine_canopy | *not set* | [Mega Pine Canopy](#mega-pine-canopy-item-type) item |  |  | 
| pine_canopy | *not set* | [Pine Canopy](#pine-canopy-item-type) item |  |  | 
| roofed_canopy | *not set* | [Roofed Canopy](#roofed-canopy-item-type) item |  |  | 
| spruce_canopy | *not set* | Object |  |  | 

## Acacia Canopy item type

#### Acacia Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_size | *not set* | Integer number | The size of the canopy. |  | 
| simplify_canopy | *not set* | Boolean true/false | If true the canopy uses a simple pattern. |  | 

## Canopy item type

#### Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_decoration | *not set* | [Canopy Decoration](#canopy-decoration-item-type) item | Configuration object for the canopy decoration. |  | 
| canopy_offset | *not set* | [Canopy Offset](#canopy-offset-item-type) item | Canopy position offset relative to the block above the trunk. |  | 
| canopy_slope | *not set* | [Canopy Slope](#canopy-slope-item-type) item | Configuration object for the canopy slope. |  | 
| min_width | *not set* | Integer number | Min width for the canopy. |  | 
| variation_chance | *not set* | Array of strings |  |  | 

## Canopy Decoration item type

#### Canopy Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Canopy Offset item type

#### Canopy Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Integer number | Max canopy position offset. |  | 
| min | *not set* | Integer number | Min canopy position offset. |  | 

## Canopy Slope item type

#### Canopy Slope Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rise | *not set* | Integer number | The numerator for the slope fraction. |  | 
| run | *not set* | Integer number | The denominator for the slope fraction. |  | 

## Cherry Canopy item type

#### Cherry Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| trunk_width | *not set* | Integer number | The width of the tree trunk. |  | 

## Fancy Canopy item type

#### Fancy Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| height | *not set* | Integer number | Number of layers for the canopy. |  | 
| radius | *not set* | Integer number | The radius of the canopy. |  | 

## Mangrove Canopy item type

#### Mangrove Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_decoration | *not set* | [Canopy Decoration](#canopy-decoration-item-type) item | Configuration object for the canopy decoration. |  | 
| leaf_blocks | *not set* | Array of strings |  |  | 
| leaf_placement_attempts | *not set* | Integer number | Max number of attempts to create leaf blocks. |  | 

## Canopy Decoration item type

#### Canopy Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Mega Canopy item type

#### Mega Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 
| simplify_canopy | *not set* | Boolean true/false | If true the canopy uses a simple pattern. |  | 

## Mega Pine Canopy item type

#### Mega Pine Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 

## Pine Canopy item type

#### Pine Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 

## Roofed Canopy item type

#### Roofed Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_height | *not set* | Integer number | Roofed canopies feature a base and a top layer, and an extra cap layer on some occasions, this value controls the number of layers in the middle. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 
| inner_radius | *not set* | Integer number | Radius used for the middle layers. |  | 
| outer_radius | *not set* | Integer number | Radius used for the base and top layers. |  | 

## Trunk Decoration item type

#### Trunk Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Trunk Height item type

#### Trunk Height Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base | *not set* | Integer number | Min height for the trunk. |  | 
| intervals | *not set* | Array of strings |  |  | 
| min_height_for_canopy | *not set* | Integer number | Min height where the canopy can be placed. |  | 

## Trunk Lean item type

#### Trunk Lean Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_diagonal_growth | *not set* | Boolean true/false | If true, diagonal branches will be created. |  | 

## Base Cluster item type

#### Base Cluster Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cluster_radius | *not set* | Integer number | The radius of each cluster. |  | 
| may_replace | *not set* | Array of strings |  |  | 
| num_clusters | *not set* | Integer number | Number of clusters to generate. |  | 

## Canopy item type

#### Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_decoration | *not set* | [Canopy Decoration](#canopy-decoration-item-type) item | Configuration object for the canopy decoration. |  | 
| canopy_offset | *not set* | [Canopy Offset](#canopy-offset-item-type) item | Canopy position offset relative to the block above the trunk. |  | 
| canopy_slope | *not set* | [Canopy Slope](#canopy-slope-item-type) item | Configuration object for the canopy slope. |  | 
| min_width | *not set* | Integer number | Min width for the canopy. |  | 
| variation_chance | *not set* | Array of strings |  |  | 

## Canopy Decoration item type

#### Canopy Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Canopy Offset item type

#### Canopy Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Integer number | Max canopy position offset. |  | 
| min | *not set* | Integer number | Min canopy position offset. |  | 

## Canopy Slope item type

#### Canopy Slope Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rise | *not set* | Integer number | The numerator for the slope fraction. |  | 
| run | *not set* | Integer number | The denominator for the slope fraction. |  | 

## Cherry Canopy item type

#### Cherry Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| trunk_width | *not set* | Integer number | The width of the tree trunk. |  | 

## Cherry Trunk item type

#### Cherry Trunk Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| branches | *not set* | [Branches](#branches-item-type) item | Configuration object for branches. |  | 
| trunk_height | *not set* | [Trunk Height](#trunk-height-item-type) item | Configuration object for the trunk height. |  | 

## Branches item type

#### Branches Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| branch_canopy | *not set* | [Branch Canopy](#branch-canopy-item-type) item | Configuration object for the canopy. |  | 
| tree_type_weights | *not set* | [Tree Type Weights](#tree-type-weights-item-type) item | Configuration object to pick a tree variant based on a weighted random number. |  | 

## Branch Canopy item type

#### Branch Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| acacia_canopy | *not set* | [Acacia Canopy](#acacia-canopy-item-type) item |  |  | 
| canopy | *not set* | [Canopy](#canopy-item-type) item |  |  | 
| cherry_canopy | *not set* | [Cherry Canopy](#cherry-canopy-item-type) item |  |  | 
| fancy_canopy | *not set* | [Fancy Canopy](#fancy-canopy-item-type) item |  |  | 
| mangrove_canopy | *not set* | Key/item pairs of [Mangrove Canopy](#mangrove-canopy-item-type) items |  |  | 
| mega_canopy | *not set* | [Mega Canopy](#mega-canopy-item-type) item |  |  | 
| mega_pine_canopy | *not set* | [Mega Pine Canopy](#mega-pine-canopy-item-type) item |  |  | 
| pine_canopy | *not set* | [Pine Canopy](#pine-canopy-item-type) item |  |  | 
| roofed_canopy | *not set* | [Roofed Canopy](#roofed-canopy-item-type) item |  |  | 
| spruce_canopy | *not set* | Object |  |  | 

## Acacia Canopy item type

#### Acacia Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_size | *not set* | Integer number | The size of the canopy. |  | 
| simplify_canopy | *not set* | Boolean true/false | If true the canopy uses a simple pattern. |  | 

## Canopy item type

#### Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_decoration | *not set* | [Canopy Decoration](#canopy-decoration-item-type) item | Configuration object for the canopy decoration. |  | 
| canopy_offset | *not set* | [Canopy Offset](#canopy-offset-item-type) item | Canopy position offset relative to the block above the trunk. |  | 
| canopy_slope | *not set* | [Canopy Slope](#canopy-slope-item-type) item | Configuration object for the canopy slope. |  | 
| min_width | *not set* | Integer number | Min width for the canopy. |  | 
| variation_chance | *not set* | Array of strings |  |  | 

## Canopy Decoration item type

#### Canopy Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Canopy Offset item type

#### Canopy Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Integer number | Max canopy position offset. |  | 
| min | *not set* | Integer number | Min canopy position offset. |  | 

## Canopy Slope item type

#### Canopy Slope Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rise | *not set* | Integer number | The numerator for the slope fraction. |  | 
| run | *not set* | Integer number | The denominator for the slope fraction. |  | 

## Cherry Canopy item type

#### Cherry Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| trunk_width | *not set* | Integer number | The width of the tree trunk. |  | 

## Fancy Canopy item type

#### Fancy Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| height | *not set* | Integer number | Number of layers for the canopy. |  | 
| radius | *not set* | Integer number | The radius of the canopy. |  | 

## Mangrove Canopy item type

#### Mangrove Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_decoration | *not set* | [Canopy Decoration](#canopy-decoration-item-type) item | Configuration object for the canopy decoration. |  | 
| leaf_blocks | *not set* | Array of strings |  |  | 
| leaf_placement_attempts | *not set* | Integer number | Max number of attempts to create leaf blocks. |  | 

## Canopy Decoration item type

#### Canopy Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Mega Canopy item type

#### Mega Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 
| simplify_canopy | *not set* | Boolean true/false | If true the canopy uses a simple pattern. |  | 

## Mega Pine Canopy item type

#### Mega Pine Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 

## Pine Canopy item type

#### Pine Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 

## Roofed Canopy item type

#### Roofed Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_height | *not set* | Integer number | Roofed canopies feature a base and a top layer, and an extra cap layer on some occasions, this value controls the number of layers in the middle. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 
| inner_radius | *not set* | Integer number | Radius used for the middle layers. |  | 
| outer_radius | *not set* | Integer number | Radius used for the base and top layers. |  | 

## Tree Type Weights item type

#### Tree Type Weights Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| one_branch | *not set* | Integer number | Tree variant with one branch. |  | 
| two_branches | *not set* | Integer number | Tree variant with two branches. |  | 
| two_branches_and_trunk | *not set* | Integer number | Tree variant with three branches. |  | 

## Trunk Height item type

#### Trunk Height Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base | *not set* | Integer number | Min height for the trunk. |  | 
| intervals | *not set* | Array of strings |  |  | 

## Description item type

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Fallen Trunk item type

#### Fallen Trunk Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| trunk_decoration | *not set* | [Trunk Decoration](#trunk-decoration-item-type) item | Configuration object for the trunk decoration. |  | 

## Trunk Decoration item type

#### Trunk Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Fancy Canopy item type

#### Fancy Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| height | *not set* | Integer number | Number of layers for the canopy. |  | 
| radius | *not set* | Integer number | The radius of the canopy. |  | 

## Fancy Trunk item type

#### Fancy Trunk Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| branches | *not set* | Object | Configuration object for branches. |  | 
| trunk_height | *not set* | [Trunk Height](#trunk-height-item-type) item | Configuration object for the trunk height. |  | 
| trunk_width | *not set* | Integer number | The width of the tree trunk. |  | 

## Trunk Height item type

#### Trunk Height Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base | *not set* | Integer number | Min height for the trunk. |  | 
| variance | *not set* | Integer number | Modifier for the trunk height. |  | 

## Mangrove Canopy item type

#### Mangrove Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_decoration | *not set* | [Canopy Decoration](#canopy-decoration-item-type) item | Configuration object for the canopy decoration. |  | 
| leaf_blocks | *not set* | Array of strings |  |  | 
| leaf_placement_attempts | *not set* | Integer number | Max number of attempts to create leaf blocks. |  | 

## Canopy Decoration item type

#### Canopy Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Mangrove Roots item type

#### Mangrove Roots Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| above_root | *not set* | Object | Configuration object for blocks decorating the top of the roots. |  | 
| max_root_length | *not set* | Integer number | Max length for the roots. |  | 
| max_root_width | *not set* | Integer number | Max width that the roots can occupy. The width increases up to the max width while moving downwards. When a max width is reached, roots will grow vertically. |  | 
| root_decoration | *not set* | [Root Decoration](#root-decoration-item-type) item | Configuration object for the root decoration. |  | 
| roots_may_grow_through | *not set* | Array of strings |  |  | 

## Root Decoration item type

#### Root Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Mangrove Trunk item type

#### Mangrove Trunk Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| branches | *not set* | Object | Configuration object for branches. |  | 
| trunk_decoration | *not set* | [Trunk Decoration](#trunk-decoration-item-type) item | Configuration object for the trunk decoration. |  | 
| trunk_height | *not set* | [Trunk Height](#trunk-height-item-type) item | Configuration object for the trunk height. |  | 
| trunk_width | *not set* | Integer number | The width of the tree trunk. |  | 

## Trunk Decoration item type

#### Trunk Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Trunk Height item type

#### Trunk Height Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base | *not set* | Integer number | Min height for the trunk. |  | 
| height_rand_a | *not set* | Integer number | Tree height modifier A. |  | 
| height_rand_b | *not set* | Integer number | Tree height modifier B. |  | 

## Mega Canopy item type

#### Mega Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 
| simplify_canopy | *not set* | Boolean true/false | If true the canopy uses a simple pattern. |  | 

## Mega Pine Canopy item type

#### Mega Pine Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 

## Mega Trunk item type

#### Mega Trunk Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| branches | *not set* | [Branches](#branches-item-type) item | Configuration object for branches. |  | 
| trunk_decoration | *not set* | [Trunk Decoration](#trunk-decoration-item-type) item | Configuration object for the trunk decoration. |  | 
| trunk_height | *not set* | [Trunk Height](#trunk-height-item-type) item | Configuration object for the trunk height. |  | 
| trunk_width | *not set* | Integer number | The width of the tree trunk. |  | 

## Branches item type

#### Branches Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| branch_altitude_factor | *not set* | Object | Altitude at which branches can spawn, relative to the tree height. |  | 
| branch_canopy | *not set* | [Branch Canopy](#branch-canopy-item-type) item | Configuration object for the canopy. |  | 
| branch_length | *not set* | Integer number | Length for the branch. |  | 

## Branch Canopy item type

#### Branch Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| acacia_canopy | *not set* | [Acacia Canopy](#acacia-canopy-item-type) item |  |  | 
| canopy | *not set* | [Canopy](#canopy-item-type) item |  |  | 
| cherry_canopy | *not set* | [Cherry Canopy](#cherry-canopy-item-type) item |  |  | 
| fancy_canopy | *not set* | [Fancy Canopy](#fancy-canopy-item-type) item |  |  | 
| mangrove_canopy | *not set* | Key/item pairs of [Mangrove Canopy](#mangrove-canopy-item-type) items |  |  | 
| mega_canopy | *not set* | [Mega Canopy](#mega-canopy-item-type) item |  |  | 
| mega_pine_canopy | *not set* | [Mega Pine Canopy](#mega-pine-canopy-item-type) item |  |  | 
| pine_canopy | *not set* | [Pine Canopy](#pine-canopy-item-type) item |  |  | 
| roofed_canopy | *not set* | [Roofed Canopy](#roofed-canopy-item-type) item |  |  | 
| spruce_canopy | *not set* | Object |  |  | 

## Acacia Canopy item type

#### Acacia Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_size | *not set* | Integer number | The size of the canopy. |  | 
| simplify_canopy | *not set* | Boolean true/false | If true the canopy uses a simple pattern. |  | 

## Canopy item type

#### Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_decoration | *not set* | [Canopy Decoration](#canopy-decoration-item-type) item | Configuration object for the canopy decoration. |  | 
| canopy_offset | *not set* | [Canopy Offset](#canopy-offset-item-type) item | Canopy position offset relative to the block above the trunk. |  | 
| canopy_slope | *not set* | [Canopy Slope](#canopy-slope-item-type) item | Configuration object for the canopy slope. |  | 
| min_width | *not set* | Integer number | Min width for the canopy. |  | 
| variation_chance | *not set* | Array of strings |  |  | 

## Canopy Decoration item type

#### Canopy Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Canopy Offset item type

#### Canopy Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Integer number | Max canopy position offset. |  | 
| min | *not set* | Integer number | Min canopy position offset. |  | 

## Canopy Slope item type

#### Canopy Slope Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rise | *not set* | Integer number | The numerator for the slope fraction. |  | 
| run | *not set* | Integer number | The denominator for the slope fraction. |  | 

## Cherry Canopy item type

#### Cherry Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| trunk_width | *not set* | Integer number | The width of the tree trunk. |  | 

## Fancy Canopy item type

#### Fancy Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| height | *not set* | Integer number | Number of layers for the canopy. |  | 
| radius | *not set* | Integer number | The radius of the canopy. |  | 

## Mangrove Canopy item type

#### Mangrove Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_decoration | *not set* | [Canopy Decoration](#canopy-decoration-item-type) item | Configuration object for the canopy decoration. |  | 
| leaf_blocks | *not set* | Array of strings |  |  | 
| leaf_placement_attempts | *not set* | Integer number | Max number of attempts to create leaf blocks. |  | 

## Canopy Decoration item type

#### Canopy Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Mega Canopy item type

#### Mega Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 
| simplify_canopy | *not set* | Boolean true/false | If true the canopy uses a simple pattern. |  | 

## Mega Pine Canopy item type

#### Mega Pine Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 

## Pine Canopy item type

#### Pine Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 

## Roofed Canopy item type

#### Roofed Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_height | *not set* | Integer number | Roofed canopies feature a base and a top layer, and an extra cap layer on some occasions, this value controls the number of layers in the middle. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 
| inner_radius | *not set* | Integer number | Radius used for the middle layers. |  | 
| outer_radius | *not set* | Integer number | Radius used for the base and top layers. |  | 

## Trunk Decoration item type

#### Trunk Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Trunk Height item type

#### Trunk Height Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base | *not set* | Integer number | Min height for the trunk. |  | 
| intervals | *not set* | Array of strings |  |  | 

## Pine Canopy item type

#### Pine Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_radius | *not set* | Integer number | Radius of the canopy. |  | 

## Random Spread Canopy item type

#### Random Spread Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| leaf_blocks | *not set* | Array of strings |  |  | 
| leaf_placement_attempts | *not set* | Integer number | Max number of attempts to create leaf blocks. |  | 

## Roofed Canopy item type

#### Roofed Canopy Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| canopy_height | *not set* | Integer number | Roofed canopies feature a base and a top layer, and an extra cap layer on some occasions, this value controls the number of layers in the middle. |  | 
| core_width | *not set* | Integer number | Width of the tree trunk. |  | 
| inner_radius | *not set* | Integer number | Radius used for the middle layers. |  | 
| outer_radius | *not set* | Integer number | Radius used for the base and top layers. |  | 

## Trunk item type

#### Trunk Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_be_submerged | *not set* | [Can Be Submerged](#can-be-submerged-item-type) item | Specifies if the trunk can be submerged. |  | 
| can_be_submerged (Alternate 1) | *not set* | Boolean true/false | Specifies if the trunk can be submerged. |  | 
| trunk_decoration | *not set* | [Trunk Decoration](#trunk-decoration-item-type) item | Configuration object for the trunk decoration. |  | 

## Can Be Submerged item type

#### Can Be Submerged Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_depth | *not set* | Integer number | Defines the max depth at which the trunk can be submerged. |  | 

## Trunk Decoration item type

#### Trunk Decoration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_steps | *not set* | Integer number | Number of decoration blocks to place. |  | 
| step_direction"<"down", "up", "out", "away" | *not set* | String | Directions to spread decoration blocks. |  | 

## Samples

#### [Example](example)


```json
"minecraft:tree_feature": {
  "format_version": "1.13.0",
  "minecraft:tree_feature": {
    "description": {
      "identifier": "example:azalea_tree_feature"
    },
    "acacia_trunk": {
      "trunk_width": 1,
      "trunk_height": {
        "base": 4,
        "intervals": [
          2
        ],
        "min_height_for_canopy": 3
      },
      "trunk_block": {
        "name": "minecraft:log",
        "states": {
          "old_log_type": "oak"
        }
      },
      "trunk_lean": {
        "allow_diagonal_growth": true,
        "lean_height": {
          "range_min": 2,
          "range_max": 3
        },
        "lean_steps": {
          "range_min": 3,
          "range_max": 4
        },
        "lean_length": {
          "range_min": 1,
          "range_max": 2
        }
      }
    },
    "random_spread_canopy": {
      "canopy_height": 2,
      "canopy_radius": 3,
      "leaf_placement_attempts": 50,
      "leaf_blocks": [
        [
          "minecraft:azalea_leaves",
          3
        ],
        [
          "minecraft:azalea_leaves_flowered",
          1
        ]
      ]
    },
    "base_block": [
      "minecraft:dirt_with_roots"
    ],
    "may_grow_on": [
      "minecraft:dirt",
      "minecraft:grass_block",
      "minecraft:podzol",
      "minecraft:dirt",
      "minecraft:farmland",
      "minecraft:dirt_with_roots",
      "minecraft:moss_block",
      "minecraft:clay",
      "minecraft:mycelium",
      "minecraft:mud",
      "minecraft:muddy_mangrove_roots"
    ],
    "may_replace": [
      "minecraft:oak_leaves",
      "minecraft:spruce_leaves",
      "minecraft:birch_leaves",
      "minecraft:jungle_leaves",
      "minecraft:acacia_leaves",
      "minecraft:dark_oak_leaves",
      "minecraft:azalea",
      "minecraft:flowering_azalea",
      "minecraft:azalea_leaves",
      "minecraft:azalea_leaves_flowered",
      "minecraft:mangrove_leaves",
      "minecraft:water",
      "minecraft:flowing_water",
      "minecraft:moss_carpet",
      "minecraft:tallgrass",
      "minecraft:grass_block",
      "minecraft:air",
      "minecraft:sunflower",
      "minecraft:lilac",
      "minecraft:tall_grass",
      "minecraft:large_fern",
      "minecraft:rose_bush",
      "minecraft:peony"
    ],
    "may_grow_through": [
      "minecraft:dirt",
      "minecraft:grass_block",
      "minecraft:moss_carpet",
      "minecraft:tallgrass",
      "minecraft:sunflower",
      "minecraft:lilac",
      "minecraft:tall_grass",
      "minecraft:large_fern",
      "minecraft:rose_bush",
      "minecraft:peony"
    ]
  }
}
```
