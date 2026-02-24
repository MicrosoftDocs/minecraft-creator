---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:placement_filter"
description: "Describes the minecraft:placement_filter block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:placement_filter

Sets rules for under what conditions the block can be placed and survive. If the placement conditions are not met, the block cannot be placed. If the block is already placed and the conditions become invalid (e.g., the supporting block is removed), the block will pop off and drop as an item.


## Placement Filter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| conditions | *not set* | Array of [Conditions](#conditions) items | List of conditions where the block can be placed/survive. Limited to 64 conditions. |  | 

## Conditions
List of conditions where the block can be placed/survive. Limited to 64 conditions.


#### Conditions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allowed_faces | *not set* | Array of strings | List of any of the following strings describing which face(s) this block can be placed on: "up", "down", "north", "south", "east", "west", "side", "all". Limited to 6 faces. |  | 
| block_filter | *not set* | Array of [Block Filter](#block-filter) items | List of blocks that this block can be placed against in the "allowed_faces" direction. Limited to 64 blocks. Each block in this list can either be specified as a String (block name) or as a BlockDescriptor. A BlockDescriptor is an object that allows you to reference a block (or multiple blocks) based on its tags, or based on its name and states. The fields of a BlockDescriptor are described below. If the blocks in the filter are liquid blocks, ensure that an item block is created with a 'liquid_clipped' component set to 'true' and a 'block_placer' component with 'replace_block_item' set to 'true'. |  | 

## Block Filter
List of blocks that this block can be placed against in the "allowed_faces" direction. Limited to 64 blocks. Each block in this list can either be specified as a String (block name) or as a BlockDescriptor. A BlockDescriptor is an object that allows you to reference a block (or multiple blocks) based on its tags, or based on its name and states. The fields of a BlockDescriptor are described below. If the blocks in the filter are liquid blocks, ensure that an item block is created with a 'liquid_clipped' component set to 'true' and a 'block_placer' component with 'replace_block_item' set to 'true'.


#### Block Filter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | String | The name of a block. |  | 
| states | *not set* | Array of strings | The list of Vanilla block states and their values that the block can have, expressed in key/value pairs. |  | 
| tags | 1 | String | A condition using Molang queries that results to true/false that can be used to query for blocks with certain tags. |  | 