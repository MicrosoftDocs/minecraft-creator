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

- Identifier: Identifier of the Processor List. This is referenced by Template Pools when pairing processors with Structure Templates.

- Processor Type: The type of processor. Currently, only the Block Rule processor (minecraft:rule) is supported.

- Rules: A list of block rules. Each rule contains one or more predicates and is evaluated on every block in the Structure Template. If each predicate evaluates true, the output state specifies the replacement block. Subsequent rules in the processor list are evaluated using the output state block as the source block of the next input predicate.

## Predicates 

Predicates are a series of filters that run across all blocks being placed in the world during Jigsaw Structure generation. When all the predicates in a given rule pass, the output state of that rule replaces the block that would normally be placed with a new block specified by the output state's block specifier.  

- Distance Predicate: A filter evaluated on the world position of the block being placed and the Jigsaw Structure's origin.

- Input Predicate: A filter evaluated on the Structure Template block.

- Location Predicate: A filter evaluated on the target block, i.e. the block in the world where the structure block will be placed.

- Output State: The block type that will replace the target block if all filters evaluate true. If no block is specified, then no replacement will occur.

  - Name: Name of the block.

  - States (optional): Additional block states to apply.

Note: Some filters can modify blocks directly as a side-effect of filter evaluation, such as setting a block entity's loot table, so having an undefined result block is sometimes desired.

## Filters

- Always True: A filter that always succeeds. Empty predicates default to always_true.

- Archeology Block Loot: A rule that adds a loot table to blocks. Note: Adding a loot table is a side-effect of the filter and can modify blocks independently from the output state. Note: The block must support loot tables; for example, the Suspicious Sand or Suspicious Gravel block.

  - Limit: Upper limit for how many blocks can receive loot as a result of this filter.

  - Loot Table: The loot table to add to the replaced block for the archaeology block replacement rule.

  - Block Mapping: Specifies how a block should be transformed before applying the loot table.  

- Block Match: A filter that returns true if the block filter matches.

  - Block: The block type to compare.

- Random Block Match: A filter that returns true if the block filter matches AND a randomly generated number between 0-1 is greater than probability.

  - Block: The block type to compare.

  - Probability: The chance of the block being replaced.

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
