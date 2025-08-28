---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:placement_filter"
description: "Describes the minecraft:placement_filter block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:placement_filter

Sets rules for under what conditions the block can be placed/survive.


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
| block_filter | *not set* | Array of [Block Filter](#block-filter) items | List of blocks that this block can be placed against in the "allowed_faces" direction. Limited to 64 blocks. Each block in this list can either be specified as a String (block name) or as a BlockDescriptor. A BlockDescriptor is an object that allows you to reference a block (or multiple blocks) based on its tags, or based on its name and states. The fields of a BlockDescriptor are described below. |  | 

## Block Filter
List of blocks that this block can be placed against in the "allowed_faces" direction. Limited to 64 blocks. Each block in this list can either be specified as a String (block name) or as a BlockDescriptor. A BlockDescriptor is an object that allows you to reference a block (or multiple blocks) based on its tags, or based on its name and states. The fields of a BlockDescriptor are described below.


#### Block Filter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | String | The name of a block. |  | 
| states | *not set* | Array of strings | The list of Vanilla block states and their values that the block can have, expressed in key/value pairs. |  | 
| tags | 1 | String | A condition using Molang queries that results to true/false that can be used to query for blocks with certain tags. |  | 