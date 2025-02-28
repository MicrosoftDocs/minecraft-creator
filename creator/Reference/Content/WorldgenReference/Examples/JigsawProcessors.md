---
author: iconicNurdle
ms.author: mikeam
title: Jigsaw Processor List Documentation 
description: "A reference document about Jigsaw JSON Processors"
ms.service: minecraft-bedrock-edition
---

# Jigsaw Processor List

Processors are functions that run when placing a Structure Template in the world. Currently, the only supported processor is the Block Rules processor, which describes how individual blocks of Structure Templates should be modified when placed in the world. For example, you might want to randomly replace half of the Cobblestone blocks with Mossy Cobblestone. Or you might want to replace Gravel with Suspicious Gravel and add a loot table.

A Processor List contains one or more Processors that are run in sequence on each block. Each Processor contains one or more Predicates with a given Filter. If all the filters pass, the placed block will be modified according to the Output State.

>[!IMPORTANT]
> This feature is currently experimental, subject to change, and is only available when the **Data-driven Jigsaw Structures** experiment is enabled for a world.

## Properties

## Description

- `"identifier": "<string>"`: Identifier of the Processor List. This is referenced by Template Pools when pairing processors with Structure Templates.

## Processors

- `"processors": [<Processor>, ...]`: A list of processors that will be run when placing associated structures.  Rules are run in order as defined in the list.

## Processor Types

### Block Ignore (minecraft:block_ignore)

Removes specified blocks from the placed structure. The removed blocks are not replaced by air, but retain the blocks from the world.

Fields:

- `"processor_type": "minecraft:block_ignore"`
- `"blocks": ["<block_name>", ...]`
  - Blocks that when found within the structure will be filtered from the final output.

### Protected Blocks (minecraft:protected_blocks)
Specifies which blocks in the world cannot be overridden by this structure.

- `"processor_type": "minecraft:protected_blocks"`
- `"value": "<block_tag>"`
  - Block tag for blocks already in the world that will be protected from replacement

### Capped (minecraft:capped)

Applies a processor to some random blocks instead of applying it to all blocks, with a limit on the number of times it can be applied.

- `"processor_type": "minecraft:capped"`
- `"delegate": <Processor>`
  - The processor to run (Can be any processor except a `minecraft:capped` processor)
- `"limit": <Integer | IntProvider>`

#### Int Provider

The IntProvider type provides dynamic integer values for the `Capped` processor type.

- `"type": <type>`
  - The type of the int provider. One of `constant` or `uniform`.

If the type is `constant`

- `"value": <Integer>`:
  - Specifies the constant value to be returned.

If the type is `uniform`, an integer is randomly selected between `min_inclusive` and `max_inclusive` based on a uniform distribution:

- `"min_inclusive": <Integer>`
  - The minimum possible value.

- `"max_inclusive": <Integer>`
  - The maximum possible value. (Must be greater than min_inclusive)

### Block Rules (minecraft:rule)

A list of rules that are applied per block. Only the first rule that all conditions are met takes effect.

Each block in the structure template is independently processed.

- `"processor_type": "minecraft:rule"`
- `"rules": [<Rule>,...]`

#### Rule

A rule is a set of conditions that determine if a block should be replaced or modified.

- `"input_predicate": <BlockRule>`
  - Optional
  - Test to apply to the block that will be placed by the structure.
- `"location_predicate": <BlockRule>`
  - Optional
  - Test to apply to the block in the world that will be overriden in the world.
- `"position_predicate": <PositionRule>`
  - Optional
  - Test for block's positional relationship to the origin of the structure.
- `"output_state": <BlockSpecifier>`
  - The block that will be placed if the conditions are met.
- `"block_entity_modifier": <BlockEntityModifier>`
  - Optional
  - Modifies the block's state if the conditions are met.

#### Block Rule

- `"predicate_type": <type>`
  - The type of Block rule. One of the following `minecraft:always_true`, `minecraft:block_match`, `minecraft:random_block_match`, and `minecraft:tag_match`

If the type is `minecraft:always_true` the test will be skipped and assumed true.

If the type is `minecraft:block_match` the block will be matched based on it's name.

- `"block": "<block_name>"`

If the type is `minecraft:random_block_match` the block will be matched based on it's name

- `"block": "<block_name>"`
- `"probability": <Number>`
  - Must be between `[0, 1)` (Use `minecraft:block_match` if it should always be replaced if matched.)

If the type is `minecraft:tag_match` the block will be matched based on it's name

- `"tag": "<block_tag>"`

#### Position Rule

- `"predicate_type": <type>`
  - The type of positional rule. One of the following `minecraft:always_true` or `minecraft:axis_aligned_linear_pos`

If the type is `minecraft:always_true` the test will be skipped and assumed true.

If the type is `minecraft:axis_aligned_linear_pos` the block will be validated
based on the linear distance along the provided axis from the structures origin.

- `"min_chance": <Number>`
  - Must be between `[0, 1)`
- `"max_chance": <Number>`
  - Must be between `[0, 1)`. Must be greater than `min_chance`
- `"min_dist": <Integer>`
  - Must be greater than `0`
- `"max_dist": <Integer>`
  - Must be greater than `0`.
- `"axis": "<axis>"`
  - The axis can be one of the following: `x`, `y`, or `z`.

#### Block Entity Modifier

- `"type": <type>`
  - The type of block entity modifier. One of the following `minecraft:passthrough` or `minecraft:append_loot`

If the type is `minecraft:passthrough` no modification is performed (default)

If the type is `minecraft:append_loot` a loot table will be set on the output block.

- `"loot_table": "<path_to_loot_table.json>"`

## Example JSON

This example shows how a structure template can be dynamically modified at generation time to replace blocks and add loot tables.

The first rule randomly replaces 20% of gravel blocks with dirt blocks.

The second rule replaces 10% of gravel blocks with coarse dirt blocks.

The third rule replaces 10% of mud bricks blocks with packed mud.

Finally, the fourth rule replaces a single random gravel block with a suspicious gravel block and adds a loot table to it.

```json
{ 
  "format_version": "1.21.20", 
  "minecraft:processor_list": { 
    "description": { 
      "identifier": "minecraft:trail_ruins_roads_archaeology" 
    }, 
    "processors": [ 
      { 
        "processor_type": "minecraft:rule", 
        "rules": [ 
          { 
            "input_predicate": { 
              "predicate_type": "minecraft:random_block_match", 
              "block": "minecraft:gravel", 
              "probability": 0.2 
            }, 
            "output_state": { 
              "name": "minecraft:dirt" 
            } 
          }, 
          { 
            "input_predicate": { 
              "predicate_type": "minecraft:random_block_match", 
              "block": "minecraft:gravel", 
              "probability": 0.1 
            }, 
            "output_state": { 
              "name": "minecraft:coarse_dirt" 
            } 
          }, 
          { 
            "input_predicate": { 
              "predicate_type": "minecraft:random_block_match", 
              "block": "minecraft:mud_bricks", 
              "probability": 0.1 
            }, 
            "output_state": { 
              "name": "minecraft:packed_mud" 
            } 
          }, 
          { 
            "input_predicate": { 
              "predicate_type": "minecraft:block_match", 
              "block": "minecraft:gravel" 
            }, 
            "output_state": {
              "name": "minecraft:suspicious_gravel"
            }
          } 
        ] 
      } 
    ] 
  } 
} 
```
