---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:processor_list"
description: "Describes the minecraft:processor_list jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:processor_list

Defines a list of structure processors that modify blocks during structure generation.


## Processor List Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | The format version of this processor list definition. |  | 
| minecraft:processor_list | *not set* | [Processor List](#processor-list) item | The processor list definition. |  | 

## Processor List

#### Processor List Definition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#jigsawstructureprocessorlist-description) item | The description block containing the processor list identifier. |  | 
| processors | *not set* | Array of [Processors](#processors) items | Array of processor configurations to apply in order. |  | 

## JigsawStructureProcessorList Description
JigsawStructureProcessorList Description.


#### JigsawStructureProcessorList Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | Identifier of the Processor List. This is referenced by Template Pools when pairing processors with Structure Templates. |  | 

## Processors

#### Processor Entry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| blocks | *not set* | Array of strings | List of block identifiers (for 'minecraft:block_ignore' and 'minecraft:protected_blocks' types). |  | 
| delegate | *not set* | Object | Nested processor for 'minecraft:capped' processor type. |  | 
| limit | *not set* | Integer number | Maximum number of blocks to process (for 'minecraft:capped' processor type). |  | 
| processor_type | *not set* | String | The type of processor. Valid values: 'minecraft:rule', 'minecraft:block_ignore', 'minecraft:block_rot', 'minecraft:protected_blocks', 'minecraft:capped', 'minecraft:gravity', 'minecraft:jigsaw_replacement', 'minecraft:blackstone_replace', 'minecraft:nop'. |  | 
| rules | *not set* | Array of [Rules](#rules) items | Array of processing rules (for 'minecraft:rule' processor type). |  | 

## Rules

#### Processor Rule Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_entity_modifier | *not set* | [Block Entity Modifier](#block-entity-modifier) item | Optional block entity data modification. |  | 
| input_predicate | *not set* | [Input Predicate](#input-predicate) item | Condition for matching input blocks to process. |  | 
| output_state | *not set* | [Output State](#output-state) item | The block to replace matched blocks with. |  | 

## Block Entity Modifier

#### Block Entity Modifier Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| loot_table | *not set* | String | Path to loot table for 'append_loot' type. |  | 
| type | *not set* | String | Modifier type. Valid values: 'minecraft:append_loot', 'minecraft:passthrough', 'minecraft:clear'. |  | 

## Input Predicate

#### Block Predicate Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block | *not set* | String | Block identifier to match. |  | 
| predicate_type | *not set* | String | Type of block predicate. Valid values: 'minecraft:always_true', 'minecraft:block_match', 'minecraft:random_block_match', 'minecraft:tag_match', 'minecraft:axis_aligned_linear_pos'. |  | 
| probability | *not set* | Decimal number | Probability of matching (0.0-1.0) for random predicates. |  | 

## Output State

#### Block State Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | String | Block identifier for the output. |  | 
| states | *not set* | Object | Block state values to set. |  | 