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

Sets rules for under what conditions the block can be placed and survive. If the placement conditions are not met, the block cannot be placed. If the block is already placed and the conditions become invalid (e.g., the supporting block is removed), the block will pop off and drop as an item. If the blocks in the filter are liquid blocks, ensure that an item block is created with a 'liquid_clipped' component set to 'true' and a 'block_placer' component with 'replace_block_item' set to 'true'.

> [!Note]
> Fixed in 1.26.10: `minecraft:placement_filter` and `minecraft:block_placer` now correctly support placing on liquid blocks when the item uses `liquid_clipped`.

> [!Note]
> This item requires a format version of at least 1.19.60.


## Block Placement Filter Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| conditions | [] | Array of [Conditions](#block-placement-condition) items | List of conditions where the block can be placed/survive Value must have at most 64 items. | 

### Block Placement Condition

#### Block Placement Condition Properties

**JSON path:** `conditions`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| allowed_faces | [down, up, north, south, west, east] | Object | List of any of the following strings describing which face(s) this block can be placed on | 
| block_filter (Block Filter) | [] | Array of [Block Filter](#block-filter) items | List of blocks that this block can be placed against in the "allowed_faces" direction. | 
| block_filter (as String) | *not set* | String |  | 
| block_filter (as Object) | *not set* | Object |  | 

#### block_filter

List of blocks that this block can be placed against in the "allowed_faces" direction. Each block in this list can either be specified as a String (block name) or as a BlockDescriptor. Value must have at most 64 items.


#### Block Filter

##### Block Filter Properties

**JSON path:** `conditions > block_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 