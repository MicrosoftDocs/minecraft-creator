---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:trail"
description: "Describes the minecraft:trail entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:trail

Causes an entity to leave a trail of blocks as it moves about the world. Obeys Mob Griefing rules.


## Entity Trail Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block_type | air | String | The type of block that is placed. Solid blocks cannot be placed at the entity's position when offset is [0, 0, 0]. | 
| extent | 0 | Integer number | Maximum horizontal distance from the center at which blocks can be placed. Value must be <= 16. | 
| offset | [0, 0, 0] | Array of numbers | Offset from the entity's position used to determine where trail blocks are placed and placement checks are applied, capped at 16 blocks away. | 
| offset (Offset) | *not set* | [Offset (Offset)](#offset-offset) item |  | 
| place_only_on_block_position_change | false | Boolean true/false | When true, trail blocks are only placed on ticks where the bottom of the entity moves into a different block position, or where the entity lands (goes from airborne to grounded). | 
| placement_checks | block | [Placement Checks](#placement-checks-choices) choices | Controls the checks applied at each trail block placement position before placing the trail block. | 
| placement_conditions | [[object Object]] | Array of [Placement Conditions](#entity-trail-placement-conditions-entry) items | Conditions that must all be satisfied relative to the trail block placement position. | 
| placement_filter (Placement Filter) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Placement Filter](#placement-filter) item | One or more conditions that must be met in order to cause the chosen block type to be placed. | 
| placement_filter (Alternate 1) | *not set* | Object |  | 
| shape | corners | [Shape](#shape-choices) choices | Controls the horizontal placement pattern. 'corners' places four corner blocks, 'square' fills a square, and 'circle' fills a circular disk. Defaults to 'corners'. | 
| spawn_filter | *not set* | Minecraft filter | Conditions that must be met for the trail block to be placed. | 
| spawn_offset | [0, 0, 0] | x, y, z coordinate array | Offset from the entity's position where the trail block is placed. | 

### offset

Offset from the entity's position used to determine where trail blocks are placed and placement checks are applied, capped at 16 blocks away. X and Z are relative to the entity's orientation and rotate to its nearest cardinal facing; Y is a vertical offset.

### place_only_on_block_position_change

When true, trail blocks are only placed on ticks where the bottom of the entity moves into a different block position, or where the entity lands (goes from airborne to grounded). Standing still or moving within the same block does not place blocks. Defaults to false.

### placement_checks

Controls the checks applied at each trail block placement position before placing the trail block. 'none' applies no placement checks, 'block' applies block placement conditions, and 'standard' applies standard block placement rules, including clearance from entities that obblock placement.

### placement_conditions

Conditions that must all be satisfied relative to the trail block placement position. Block types within one condition are alternatives. When omitted, defaults to [{ "y_offset": 0, "block_types": ["minecraft:air"] }]. Value must have at least 1 items.


### Offset (Offset)

#### Offset Properties

**JSON path:** `offset`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

### Placement Checks choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| block | Block | |
| none | None | |
| standard | Standard | |

### Entity Trail Placement Conditions Entry

#### Entity Trail Placement Conditions Entry Properties

**JSON path:** `placement_conditions`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block_types (Block Types) | [] | Array of [Block Types](#block-types) items | Block types that satisfy this condition at its vertical offset from the placement position. Value must have at least 1 items. | 
| block_types (as String) | *not set* | String |  | 
| block_types (as Object) | *not set* | Object |  | 
| y_offset | 0 | Integer number | Vertical offset from the trail block placement position. Defaults to 0. Value must be >= -16. Value must be <= 16. | 

#### Block Types

##### Block Types Properties

**JSON path:** `placement_conditions > block_types`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

### Placement Filter

#### Placement Filter Properties

**JSON path:** `placement_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Shape choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| circle | Circle | |
| corners | Corners | |
| square | Square | |

## Samples
