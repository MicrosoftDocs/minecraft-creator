---
author: iconicNurdle
ms.author: mikeam
title: Jigsaw Template Pool Documentation 
description: "A reference document about Jigsaw JSON Template Pools"
ms.service: minecraft-bedrock-edition
---

# Jigsaw Template Pool 

Template Pools are groups of related structure templates with assigned weights and processors. During world generation, the Jigsaw Structure "Start Pool" specifies which Template Pool to use first. A Structure Template is then randomly chosen from the pool and placed as the first structure piece. Jigsaw Blocks within the placed structure may also specify Template Pools from which subsequent structure pieces are placed recursively until the Jigsaw Structure becomes fully generated. 

## Properties 

| Name| Default Value| Requirement Status| Type| Description| 
| ----| -------------| ------------------| ----| -----------|
| [description](#description) | *not set* | Required | JSON Object | Description information of the template pool such as the identifier. |
| [elements](#elements) | *not set* | Required | Array of JSON Objects | An array of pool elements. |
| fallback | `minecraft:empty` | Optional | String | Fallback template pool to use if no element in the pool can be placed successfully. |

## Description
| Name| Default Value| Requirement Status| Type| Description|
| ----| -------------| ------------------| ----| -----------|
| identifier | *not set* | Required | String | Identifier of the template pool. This is used by both the start_pool property of the Jigsaw Structure JSON and the Jigsaw Block's Target Pool field. |

## Elements

An array of pool element objects that each are a grouping of a Structure Template and its weight that determines the likelihood of the element being chosen.

### Properties

| Name| Default Value| Requirement Status| Type| Description|
| ----| -------------| ------------------| ----| -----------|
| [element](#element) | *not set* | Required | JSON Object | The templated element object. |
| [weight](#weight) | *not set* | Required | Positive Integer | The weighted probability of choosing the element from the pool. 1 to 200 inclusive. |

## Element

A templated pool element object that depending on the element type will contain additional properties.

### Properties

| Name| Default Value| Requirement Status| Type| Description|
| ----| -------------| ------------------| ----| -----------|
| element_type | *not set* | Required | String | The type of element. Supported types include [minecraft:single_pool_element](#minecraftsingle_pool_element) and [minecraft:empty_pool_element](#minecraftempty_pool_element). |

## minecraft:single_pool_element

### Properties
| Name| Default Value| Requirement Status| Type| Description|
| ----| -------------| ------------------| ----| -----------|
| location | *not set* | Required | String | The path of the structure file. This path is relative to the behavior pack's "structures" folder. |
| [processors](./JigsawProcessors.md) | *not set* | Optional | String | The identifier of the processor list to use when placing the structure. See [Jigsaw Processor List Documentation](./JigsawProcessors.md)|
| [projection](#projection) | "minecraft:rigid" | Optional | String | Specifies how structures should be placed relative to the terrain. |

## minecraft:empty_pool_element
Will place nothing when it is chosen.

## Projection
Projection determines if and how the structure will adjust according to the terrain when placed.
See [Terrain Matching Tips & FAQ](../../../../Documents/Structures/TerrainMatchingTips.md) for more guidance.

### Properties
| Name| Description|
| ----| -------------|
| minecraft:rigid | Structures are placed without any height adjustment. |
| minecraft:terrain_matching | Structures are placed relative to the terrain height. Structure blocks will adjust along the Y axis to match the ground. |

## Weight
The weighted probability of choosing the element from the pool. 1 to 200 inclusive. For example, a template pool containing 2 structures with weights of 1 and 3 will have a 25% and 75% chance of being chosen respectively.
>[!Tip]
>A large weight does not mean a large probability. Weighted probability is calculated by comparing the individual weight with the total weight of all the weights added together (denominator).
>
>For example, a template pool containing 2 structures with weights of 1 and 3 (total weight of 4) will have a 25% (1/4) and 75% (3/4) chance of being chosen respectively.
>While weights of 10 and 30 would lead to the same probability, under the hood it would not be as performant.

### Example JSON 

```json
{
  "format_version": "1.21.20", 
  "minecraft:template_pool": { 
    "description": { 
      "identifier": "minecraft:trail_ruins/tower/tower_top" 
    }, 
    "elements": [ 
      { 
        "element": { 
          "element_type": "minecraft:single_pool_element", 
          "location": "minecraft:trail_ruins/tower/tower_top_1", 
          "processors": "minecraft:trail_ruins_tower_top_archaeology" 
        }, 
        "weight": 2
      }, 
      { 
        "element": { 
          "element_type": "minecraft:single_pool_element", 
          "location": "minecraft:trail_ruins/tower/tower_top_2", 
          "processors": "minecraft:trail_ruins_tower_top_archaeology",
          "projection": "minecraft:terrain_matching" 
        }, 
        "weight": 3
      },
      {
        "element": {
          "element_type": "minecraft:empty_pool_element"
        },
        "weight": 1
      }
    ] 
  } 
} 
```
