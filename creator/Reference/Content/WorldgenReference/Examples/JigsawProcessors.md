---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:processor_list"
description: "Describes the minecraft:processor_list jigsaw json"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:processor_list

Defines a list of structure processors that modify blocks during structure generation. Processors are functions that run when placing a Structure Template in the world. For example, you might want to randomly replace half of the Cobblestone blocks with Mossy Cobblestone, or replace Gravel with Suspicious Gravel and add a loot table. A Processor List contains one or more Processors that are run in sequence on each block. Each Processor contains one or more Predicates with a given Filter; if all the filters pass, the placed block will be modified according to the Output State.


## Processor List Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | String | The format version of this processor list definition. | 
| minecraft:processor_list | *not set* | [Processor List](#processor-list) item | The processor list definition. | 

### Processor List

#### Processor List Definition Properties

**JSON path:** `minecraft:processor_list`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#processor-list-description) item | The description block containing the processor list identifier. | 
| processors | *not set* | Array of [Processors](#processors) items | Array of processor configurations to apply in order. | 

#### processors

Array of processor configurations to apply in order. Rules within each processor are evaluated in order as defined in the list, and only the first rule whose conditions are all met will take effect on a given block.


#### Processor List Description
Identifies the Processor List. The identifier set here is what Template Pool elements reference in their 'processors' field to pair a set of block-processing rules with a Structure Template.


##### Processor List Description Properties

**JSON path:** `minecraft:processor_list > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | Identifier of the Processor List. This is referenced by Template Pools when pairing processors with Structure Templates. | 

#### Processors

##### Processor Entry Properties

**JSON path:** `minecraft:processor_list > processors`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| blocks | *not set* | Array of strings | List of block identifiers to remove from the placed structure. Used by 'minecraft:block_ignore'. | 
| delegate | *not set* | Object | Nested processor configuration for the 'minecraft:capped' processor type. Any processor except another 'minecraft:capped'. | 
| limit | *not set* | Integer number | Maximum number of blocks the 'minecraft:capped' processor may apply to. Either a constant integer or an IntProvider object for dynamic ranges. | 
| limit (as Object) | *not set* | [Limit (Int Provider)](#limit-int-provider) item | IntProvider for the limit. | 
| processor_type | *not set* | [Processor Type](#processor-type-choices) choices | The kind of processor, which determines what other fields are valid on this entry. | 
| rules | *not set* | Array of [Rules](#rules) items | Array of processing rules for the 'minecraft:rule' processor type. Rules are evaluated in order; only the first rule whose conditions are all met takes effect on a given block. | 
| value | *not set* | String | Block tag for blocks already in the world that will be protected from replacement. Used by 'minecraft:protected_blocks'. | 

##### Limit (Int Provider)

###### Int Provider Properties

**JSON path:** `minecraft:processor_list > processors > limit`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max_inclusive | *not set* | Integer number | Maximum possible value (when type is 'uniform'). | 
| min_inclusive | *not set* | Integer number | Minimum possible value (when type is 'uniform'). | 
| type | *not set* | [Type](#type-choices) choices | IntProvider type. | 
| value | *not set* | Integer number | Constant integer value (when type is 'constant'). | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| constant | Constant | A single constant value. Requires 'value'.|
| uniform | Uniform | A value selected uniformly at random within [min_inclusive, max_inclusive]. max_inclusive must be greater than min_inclusive.|

### Processor Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:block_ignore | Block Ignore | Removes specified blocks from the placed structure. Removed blocks are not replaced by air; the world blocks underneath are retained. Requires 'blocks'.|
| minecraft:protected_blocks | Protected Blocks | Specifies which blocks in the world cannot be overridden by this structure. Requires 'value' (a block tag).|
| minecraft:capped | Capped | Applies a nested processor to some random blocks instead of all blocks, with a maximum number of applications. Requires 'limit' (integer or IntProvider) and 'delegate' (any processor except another 'minecraft:capped').|
| minecraft:rule | Rule | Runs a list of block rules per block. Requires 'rules'. Each block in the structure template is processed independently and only the first rule with all conditions met takes effect.|

##### Rules

###### Processor Rule Properties

**JSON path:** `minecraft:processor_list > processors > rules`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block_entity_modifier | *not set* | [Block Entity Modifier](#block-entity-modifier) item | Optional modifier applied to the output block's block entity data when all predicates match. | 
| input_predicate | *not set* | [Input Predicate](#block-predicate) item | BlockRule evaluated on the Structure Template block (the block that would be placed by the structure). | 
| location_predicate | *not set* | [Location Predicate](#block-predicate) item | BlockRule evaluated on the world block (the block in the world that would be overridden). | 
| output_state | *not set* | [Output State](#block-specifier) item | BlockSpecifier for the block to place if all predicates evaluate to true. | 
| position_predicate | *not set* | [Position Predicate](#position-predicate) item | PositionRule evaluated on the distance between the structure's world origin and the world block. | 

###### Block Entity Modifier
Optional modifier applied to the output block's block-entity data when all predicates in a rule match.


###### Block Entity Modifier Properties

**JSON path:** `minecraft:processor_list > processors > rules > block_entity_modifier`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| loot_table | *not set* | String | Path to the loot table JSON file (used by 'minecraft:append_loot'). | 
| type | minecraft:passthrough | [Type](#type-choices) choices | The kind of block entity modifier. | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:passthrough | Passthrough | No modification is performed. Default.|
| minecraft:append_loot | Append Loot | Sets a loot table on the output block, so the block in the world will be replaced by a block drawn from that loot table. Requires 'loot_table'.|
| minecraft:clear | Clear | Clears existing block-entity data on the output block.|

###### Block Predicate
A BlockRule is a predicate (test) applied to a block. The 'predicate_type' determines the test and what other fields are valid.


###### Block Predicate Properties

**JSON path:** `minecraft:processor_list > processors > rules > input_predicate`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block | *not set* | String | Block identifier to match. Used by 'block_match' and 'random_block_match'. | 
| block_state | *not set* | [Block State](#block-specifier) item | BlockSpecifier to match (name plus optional states). Used by 'blockstate_match' and 'random_blockstate_match'. | 
| predicate_type | minecraft:always_true | [Predicate Type](#predicate-type-choices) choices | The kind of block predicate. | 
| probability | *not set* | Decimal number | Probability of matching, in the range [0, 1]. Used by 'random_block_match' and 'random_blockstate_match'. | 
| tag | *not set* | String | Block tag to match. Used by 'tag_match'. | 

###### Block Specifier
Specifies a particular block state. Can be a bare block-name string, or a JSON object naming the block and (optionally) its block-state properties.


###### Block Specifier Properties

**JSON path:** `minecraft:processor_list > processors > rules > input_predicate > block_state`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | String | Block identifier (for example 'minecraft:gravel'). | 
| states | *not set* | Object | Block-state properties as a JSON object. Property values may be boolean, integer, or string. | 

### Predicate Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:always_true | Always True | The test is skipped and assumed true. Default predicate if none specified.|
| minecraft:block_match | Block Match | Matches if the block is exactly the given block name. Requires 'block'.|
| minecraft:random_block_match | Random Block Match | Matches if the block equals 'block' AND a random roll passes 'probability' (0-1). Use minecraft:block_match if it should always match.|
| minecraft:blockstate_match | Blockstate Match | Matches if the block matches the given BlockSpecifier (name + states). Requires 'block_state'.|
| minecraft:random_blockstate_match | Random Blockstate Match | Matches if the block matches the BlockSpecifier AND a random roll passes 'probability' (0-1). Requires 'block_state' and 'probability'.|
| minecraft:tag_match | Tag Match | Matches if the block carries the given block tag. Requires 'tag'.|

###### Position Predicate
A PositionRule is a predicate (test) applied to the world block's position relative to the structure's world origin.


###### Position Predicate Properties

**JSON path:** `minecraft:processor_list > processors > rules > position_predicate`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| axis | *not set* | [Axis](#axis-choices) choices | Axis along which to measure distance. Used by 'axis_aligned_linear_pos'. | 
| max_chance | 1 | Decimal number | Upper bound of the matching probability. Must be in [0, 1) and greater than min_chance. | 
| max_dist | 1 | Integer number | Maximum distance from the structure origin along the chosen axis. Must be greater than 0. | 
| min_chance | 0 | Decimal number | Lower bound of the matching probability. Must be in [0, 1). | 
| min_dist | 0 | Integer number | Minimum distance from the structure origin along the chosen axis. Must be greater than 0. | 
| predicate_type | *not set* | [Predicate Type](#predicate-type-choices) choices | The kind of positional predicate. | 

### Axis choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| x | X | |
| y | Y | |
| z | Z | |

### Predicate Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:always_true | Always True | The test is skipped and assumed true.|
| minecraft:axis_aligned_linear_pos | Axis Aligned Linear Position | Validates a block based on its linear distance along a chosen axis from the structure's origin. max_chance must be greater than min_chance.|