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
| block_type | air | String | The type of block that is spawned as a trail behind the entity. Solid blocks cannot be spawned at an offset of (0, 0, 0). | 
| force_replace_matched_blocks | false | Boolean true/false | When true, the trail will replace blocks that match the replaceable blocks list even if normal placement rules prevent it. | 
| radius | -1 | Integer number | When provided, the trail spawns blocks across a (2 * radius + 1) by (2 * radius + 1) horizontal area centered on the spawn offset. | 
| replaceable_blocks (Replaceable Blocks) | [] | Array of [Replaceable Blocks](#replaceable-blocks) items | A list of blocks that can be replaced by the trail block. If the block at the spawn offset is not in this list, the trail block will not spawn. If omitted it will default to only air blocks. | 
| replaceable_blocks (as String) | *not set* | String |  | 
| replaceable_blocks (as Object) | *not set* | Object |  | 
| spawn_filter (Spawn Filter) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Spawn Filter](#spawn-filter) item | One or more conditions that must be met in order to cause the chosen block type to spawn. | 
| spawn_filter (Alternate 1) | *not set* | Object |  | 
| spawn_offset | [0, 0, 0] | Array of numbers | The offset from the entity's current position at which to spawn the block, capped at 16 blocks away. | 
| spawn_offset (Spawn Offset) | *not set* | [Spawn Offset (Spawn Offset)](#spawn-offset-spawn-offset) item |  | 

### radius

When provided, the trail spawns blocks across a (2 * radius + 1) by (2 * radius + 1) horizontal area centered on the spawn offset. Uses the legacy four-corner sampling when omitted. Value must be >= -1. Value must be <= 16.


### Replaceable Blocks

#### Replaceable Blocks Properties

**JSON path:** `replaceable_blocks`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

### Spawn Filter

#### Spawn Filter Properties

**JSON path:** `spawn_filter`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Spawn Offset (Spawn Offset)

#### Spawn Offset Properties

**JSON path:** `spawn_offset`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

## Samples
