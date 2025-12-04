---
author: iconicNurdle
ms.author: mikeam
title: Jigsaw Processor List Documentation 
description: "A reference document about Jigsaw JSON Processors"
ms.service: minecraft-bedrock-edition
---

# Jigsaw Processor List

Processors are functions that run when placing a Structure Template in the world. For example, you might want to randomly replace half of the Cobblestone blocks with Mossy Cobblestone. Or you might want to replace Gravel with Suspicious Gravel and add a loot table.

A Processor List contains one or more Processors that are run in sequence on each block. Each Processor contains one or more Predicates with a given Filter. If all the filters pass, the placed block will be modified according to the Output State.

## Properties
|Name       |Default Value |Requirement Status |Type |Description |Example |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [description](#description) | *not set* | Required | JSON Object | Object containing the identifier of the Processor List. This MUST contain an identifier.  | `"description": { "identifier": "minecraft:trail_ruins_roads_archaeology" }` |
| [processors](#processors) | *not set* | Required | List of JSON Objects | A list of processors that will be run when placing associated structures. Order of rules matter. | (go to section) |

### Description

Identifier of the Processor List. This is referenced by Template Pools when pairing processors with Structure Templates.

#### Description Properties

|Name       |Default Value |Requirement Status |Type |Description |Example |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| identifier | *not set* | Required | String | Identifier of the Jigsaw Processor list. |  `"identifier": "minecraft:trail_ruins_roads_archaeology"` | 

```json
"description": {
  "identifier": "minecraft:trail_ruins_roads_archaeology"
}
```

## Processors

A list of processors of [processor_type](#processor_type) that will be run when placing associated structures.  

>[!NOTE]
> Rules are run in order as defined in the list. See JSON example below for two JSON objects with different lists of rules.

```json
"processors": [ 
  { 
    "processor_type": "minecraft:block_ignore", 
    "blocks": ["<block_name>", ...]
  },
  { 
    "processor_type": "minecraft:block_ignore", 
    "value": "<block_tag>"
  },
  { 
    "processor_type": "minecraft:capped",
    "limit": <Int | IntProvider>,
    "delegate": {
      "processor_type": "minecraft:rule",
      "rules": [...]
    }
  },
  { 
    "processor_type": "minecraft:rule", 
    "rules": [<Rule>,...]
  }
]
```

## processor_type

Different types of processors that can be run when placing associated structures. Click into each processor to see how they affect block placing differently.

|Name       |Description |
|:----------|:-----------|
| [minecraft:block_ignore](#minecraftblock_ignore) | Removes specified blocks from the placed structure. |
| [minecraft:protected_blocks](#minecraftprotected_blocks)  | Specifies which blocks in the world cannot be overridden by this structure. |
| [minecraft:capped](#minecraftcapped)  | Applies a processor to some random blocks instead of applying it to all blocks, with a limit on the number of times it can be applied. |
| [minecraft:rule](#minecraftrule) | A list of block rules that are applied per block. |

### minecraft:block_ignore

Removes specified blocks from the placed structure. The removed blocks are not replaced by air, but retain the blocks from the world.

#### block_ignore Properties
|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [processor_type](#processor_type) | `"minecraft:block_ignore"` | Required | String | Identifier of [processor_type](#processor_type) | `"processor_type": "minecraft:block_ignore"` |
| blocks | *not set* | Required | JSON Object | Blocks that, when found within the structure, will be filtered from the final output. | `"blocks": ["<block_name>", ...]` |

```json
"processors": [ 
  { 
    "processor_type": "minecraft:block_ignore", 
    "blocks": ["<block_name>", ...]
  },
]
```

### minecraft:protected_blocks
Specifies which blocks in the world cannot be overridden by this structure.

#### protected_blocks Properties
|Name       |Default Value |Requirement Status |Type |Description |Example |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [processor_type](#processor_type) | `"minecraft:protected_blocks"` | Required | String | Identifier of [processor_type](#processor_type) | `"processor_type": "minecraft:protected_blocks"` |
| value | *not set* | Required | String | Block tag for blocks already in the world that will be protected from replacement | `"value": "<block_tag>"` |

```json
"processors": [ 
  { 
    "processor_type": "minecraft:protected_blocks", 
    "value": "<block_tag>"
  },
]
```

### minecraft:capped

Applies a processor to some random blocks instead of applying it to all blocks, with a limit on the number of times it can be applied.

#### capped Properties
|Name       |Default Value |Requirement Status |Type |Description |Example |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [processor_type](#processor_type) | `"minecraft:capped"` | Required | String | Identifier of [processor_type](#processor_type) | `"processor_type": "minecraft:capped"` |
| limit | *not set* | Required | <Integer / [IntProvider](#intprovider)> | Number of blocks the processor can apply to. | `"limit": <Integer / IntProvider>` |
| delegate | *not set* | Required | String | The processor to run (Can be any processor except a `minecraft:capped` processor) | `"delegate": <Processor>` |

```json
"processors": [ 
  { 
    "processor_type": "minecraft:capped",
    "limit": 2,
    "delegate": {
      "processor_type": "minecraft:rule",
      "rules": [...]
    }
  },
  { 
    "processor_type": "minecraft:capped",
    "limit": {
      "type": "uniform",
      "min_inclusive": <Int>,
      "max_inclusive": <Int>
    },
    "delegate": {
      "processor_type": "minecraft:rule",
      "rules": [...]
    }
  }
]
```

### minecraft:rule

A list of block [rules](#rule) that will attempt to apply to the block. 
>[!NOTE]
> Only the first [rule](#rule) with all conditions met will take effect.

Each block in the structure template is independently processed.

#### rule Properties
|Name       |Default Value |Requirement Status |Type |Description |Example|
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [processor_type](#processor_type) | `"minecraft:rule"` | Required | String | Identifier of [processor_type](#processor_type) | `"processor_type": "minecraft:rule"` |
| [rules](#rule) | *not set* | Required | JSON Object | A list of block [`"rules"`](#rule) that attempt to apply per block. | `"rules": [<Rule>,...]` |

```json
"processors": [ 
  { 
    "processor_type": "minecraft:rule", 
    "rules": [<Rule>,...]
  },
]
```

## Rule

A rule is a set of conditions that, if are all met, can replace or modify a block.
The rule type determines how the block will be affected. See the table below for the different rule types.

### Types of Rule
|Name       |Requirement Status |Type |Description |Example|
|:----------|:------------------|:----|:-----------|:------------- |
| input_predicate | Optional | [BlockRule](#blockrule) | A predicate evaluated on the Structure Template block, i.e test to apply to block that will be placed by the structure. | `"input_predicate": <BlockRule>` |
| location_predicate | Optional | [BlockRule](#blockrule) | A predicate evaluated on the world block, i.e. test to apply to block in the world that will be overriden. | `"location_predicate": <BlockRule>` |
| position_predicate | Optional | [PositionRule](#positionrule) | A predicate evaluated on the distance between the structure's world origin and the world block, i.e. test for block's positional relationship to the origin of the structure. | `"position_predicate": <PositionRule>` |
| output_state | Required | [BlockSpecifier](#blockspecifier) | Block to replace the world block with if all predicates evaluate to true, i.e. the block that will be placed if the conditions are met. | `"output_state": <BlockSpecifier>` |
| block_entity_modifier | Optional | [BlockEntityModifier](#blockentitymodifier) | A block state modifier for block entities when all predicate match, i.e. modifies the block's state if the conditions are met. | `"block_entity_modifier": <BlockEntityModifier>` |

```json
{
  "rules": [<Rule>,...]
}
```

### BlockRule
A BlockRule is a predicate (i.e. test) applied to each block in the structure template. 

The `"predicate_type"` of BlockRule specifies the type of test applied to each block. 

It can be one of the following: [minecraft:always_true](#minecraftalways_true), [minecraft:block_match](#minecraftblock_match), [minecraft:random_block_match](#minecraftrandom_block_match), [minecraft:blockstate_match](#minecraftblockstate_match), [minecraft:random_blockstate_match](#minecraftrandom_blockstate_match) and [minecraft:tag_match](#minecrafttag_match).

See [rule](#rule) to understand where it's used.

#### BlockRule Properties
|Name       |Default Value |Requirement Status |Type |Description |Example |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| predicate_type | `"minecraft:always_true"` | Required | String | The type of Block rule. | `"predicate_type": <type>` |

### minecraft:always_true
The test will be skipped and assumed true. Default predicate if none specified.

```json
{
  "predicate_type": "minecraft:always_true"
}
```

### minecraft:block_match
Checks if the block in question matches the `"<block_name>"`. 

#### block_match Properties
|Name       | Requirement Status | Description | Example |
|:----------|:-----------|:-----------|:------------- |
| block |Required| Block to be matched with. | `"block": "<block_name>"` |

```json
{
  "predicate_type": "minecraft:block_match",
  "block": "<block_name>"
}
```

### minecraft:random_block_match
Check if the block in question matches the `"<block_name>"`.
The `"probability"` defines how likely the block wil be replaced if matched.
>[!NOTE]
> Use `minecraft:block_match` if it should always be replaced if matched.

#### random_block_match Properties
|Name       | Requirement Status |Description | Example |
|:----------|:------------------|:-----------|:------------- |
| block |Required |Block to be matched with. | `"block": "<block_name>"` |
| probability |Required | Must be between `[0, 1]` | `"probability": <Number>` |
```json
{
  "predicate_type": "minecraft:random_block_match",
  "block": "<block_name>",
  "probability": <Number>
}
```

### minecraft:blockstate_match
The block will be matched based on it's [BlockSpecifier](#blockspecifier).

#### blockstate_match Properties
|Name       | Requirement Status | Description | Example |
|:----------|:-----------|:-----------|:------------- |
| block_state |Required| [BlockSpecifier](#blockspecifier) to match with. | `"block_state": <BlockSpecifier` |

```json
{
  "predicate_type": "minecraft:blockstate_match",
  "block_state": <BlockSpecifier>
}
```

### minecraft:random_blockstate_match
The block will be matched based on it's [BlockSpecifier](#blockspecifier).
The `"probability"` defines how likely the block wil be replaced if matched.

>[!NOTE]
> Use `minecraft:blockstate_match` if it should always be replaced if matched.

#### random_blockstate_match Properties
|Name       | Requirement Status| Description | Example |
|:----------|:-----------|:-----------|:------------- |
| block_state |Required| [BlockSpecifier](#blockspecifier) to match with. | `"block_state": <BlockSpecifier` |
| probability |Required| Must be between `[0, 1]` | `"probability": <Number>` |
```json
{
  "predicate_type": "minecraft:random_blockstate_match",
  "block_state": <BlockSpecifier,
  "probability": <Number>
}
```

### minecraft:tag_match
The block will be matched based on it's tags.

#### tag_match Properties
|Name       | Requirement Status| Description | Example |
|:----------|:-----------|:-----------|:------------- |
| tag |Required| Block tag to match with. | `"tag": "<block_tag>"` |

```json
{
  "predicate_type": "minecraft:tag_match",
  "tag": "<block_tag>"
}
```

### PositionRule
A PositionRule is a predicate (i.e. test) applied to the structure's position. One of the following: [minecraft:always_true](#minecraftalways_true) or [minecraft:axis_aligned_linear_pos](#minecraftaxis_aligned_linear_pos).

See [rule](#rule) to understand where it's used.

#### PositionRule Properties
|Name       |Requirement Status |Type |Description |Example |
|:----------|:------------------|:----|:-----------|:------------- |
| predicate_type | Required | String | The type of positional rule. | `"predicate_type": <type>` |

### minecraft:always_true
The test will be skipped and assumed true.

```json
{
  "predicate_type": "minecraft:always_true"
}
```

### minecraft:axis_aligned_linear_pos
The block will be validated based on the linear distance along the provided axis from the structures origin.
>[!NOTE]
> `"max_chance"` must be greater than `"min_chance" `.

#### axis_aligned_linear_pos Properties
|Name       |Default Value |Requirement Status |Type |Description |Example|
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| min_chance | 0.0 | Optional | Float | Must be between `[0, 1)`. | `"min_chance": <Number>` |
| max_chance | 1.0 | Optional | Float | Must be between `[0, 1)`. Must be greater than `min_chance`. | `"max_chance": <Number>` |
| min_dist | 0 | Optional | int32_t | Must be greater than `0`. | `"min_dist": <Integer>` |
| max_dist | 1 | Optional | int32_t | Must be greater than `0`. | `"max_dist": <Integer>` |
| axis | *not set* | Optional | [Axis](#axis) | The axis can be one of the following: `x`, `y`, or `z`. | `"axis": "<axis>"` |

## BlockSpecifier
Specifies a particular block state. Can be a string block name or a JSON object.

See [rule](#rule) to understand where it's used.

### BlockSpecifier Properties
|Name |Required |Type |Description |
|:-----------|:-----------|:-------|:-----------|
|name| Required| String| Name of the block|
|states| Optional| Object| Properties that specify the specific block. Boolean, integer, or string values.|

## BlockEntityModifier
The type of block entity modifier. One of the following [minecraft:passthrough](#minecraftpassthrough) or [minecraft:append_loot](#minecraftappend_loot).

See [rule](#rule) to understand where it's used.

### BlockEntityModifierProperties
|Name       |Default Value |Requirement Status |Type |Description |Example |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| predicate_type | `"minecraft:passthrough"` | Required | String | The type of block entity modifier. | `"predicate_type": <type>` |

### minecraft:passthrough
No modification is performed. Default.

### minecraft:append_loot
A loot table will be set on the output block. This means the block in the world will be replaced by a block from the loot table.

#### append_loot Properties

|Name       |Type |Description |Example Values |
|:----------|:----|:-----------|:------------- |
| loot_table | Path to JSON file | Block will be replaced by block from the loot table. | `"loot_table": "<path_to_loot_table.json>"` |

### IntProvider

The IntProvider type provides dynamic integer values for the [minecraft:capped](#minecraftcapped) processor type.

#### IntProvider Properties
|Name       |Type |Description |Example |
|:----------|:----|:-----------|:------------- |
| type | String | The type of the int provider. One of [`"constant"`](#constant) or [`"uniform"`](#uniform). | `"type": <type>` |

### Constant
A constant integer value.

#### constant Properties
|Name       |Type |Description |Example |
|:----------|:----|:-----------|:------------- |
| value | Int | Constant value | `"value": <Integer>` |
```json
{
  "type": "constant",
  "value": <Int>
}
```

## Uniform
An integer is randomly selected between `min_inclusive` and `max_inclusive` based on a uniform distribution.

### Uniform Properties
|Name       |Type |Description |Example |
|:----------|:----|:-----------|:------------- |
| min_inclusive | Int | The minimum possible value. | `"min_inclusive": <Integer>` |
| max_inclusive | Int | The maximum possible value. | `"max_inclusive": <Integer>` |

>[!NOTE]
> `"max_inclusive"` must be greater than `"min_inclusive"`.
```json
{
  "type": "uniform",
  "min_inclusive": <Int>,
  "max_inclusive": <Int>
}
```


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
