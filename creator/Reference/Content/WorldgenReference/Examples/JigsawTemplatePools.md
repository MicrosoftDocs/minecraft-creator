---
author: iconicNurdle
ms.author: mikeam
title: Jigsaw Template Pool Documentation 
description: "A reference document about Jigsaw JSON Template Pools"
ms.service: minecraft-bedrock-edition
---

# Jigsaw Template Pool 

Template Pools are groups of related structure templates with assigned weights and processors. During world generation, the Jigsaw Structure "Start Pool" specifies which Template Pool to use first. A Structure Template is then randomly chosen from the pool and placed as the first structure piece. Jigsaw Blocks within the placed structure may also specify Template Pools from which subsequent structure pieces are placed recursively until the Jigsaw Structure becomes fully generated. 

>[!IMPORTANT]
> This feature is currently experimental, subject to change, and is only available when the **Data-driven Jigsaw Structures** experiment is enabled for a world.

## Properties 

| Name| Default Value| Requirement Status| Type| Description| Example Values|
| ----| -------------| ------------------| ----| -----------| --------------|
| [description](#description) | *not set* | Required | JSON Object | Description information of the template pool such as the identifier. |  |
| [elements](#elements) | *not set* | Required | Array of JSON Objects | An array of pool elements. |  |
| fallback | `minecraft:empty` | Optional | String | Fallback template pool to use if no element in the pool can be placed successfully. |  |

### description
| Name| Default Value| Requirement Status| Type| Description| Example Values|
| ----| -------------| ------------------| ----| -----------| --------------|
| identifier | *not set* | Required | String | Identifier of the template pool. This is used by both the start_pool property of the Jigsaw Structure JSON and the Jigsaw Block's Target Pool field. |  |

### elements

An array of pool element objects that each are a grouping of a Structure Template and its weight that determines the likelihood of the element being chosen.

#### Properties

| Name| Default Value| Requirement Status| Type| Description| Example Values|
| ----| -------------| ------------------| ----| -----------| --------------|
| [element](#element) | *not set* | Required | JSON Object | The templated element object. |  |
| weight | *not set* | Required | Positive Integer | The weighted probability of choosing the element from the pool. 1 to 200 inclusive. For example, a template pool containing 2 structures with weights of 1 and 3 will have a 25% and 75% chance of being chosen respectively. |  |

### element

A templated pool element object that depending on the element type will contain additional properties.

#### Properties

| Name| Default Value| Requirement Status| Type| Description| Example Values|
| ----| -------------| ------------------| ----| -----------| --------------|
| element_type | *not set* | Required | String | The type of element. Supported types include [minecraft:single_pool_element](#minecraftsingle_pool_element) and [minecraft:empty_pool_element](#minecraftempty_pool_element). |  |

### minecraft:single_pool_element

#### Additional Properties

| Name| Default Value| Requirement Status| Type| Description| Example Values|
| ----| -------------| ------------------| ----| -----------| --------------|
| location | *not set* | Required | String | The path of the structure file. This path is relative to the behavior pack's "structures" folder. |  |
| processors | *not set* | Optional | String | The identifier of the processor list to use when placing the structure. |  |
| [projection](#terrain_projection) | "minecraft:rigid" | Optional | String | Specifies how structures should be placed relative to the terrain. |  |

### minecraft:empty_pool_element

Will place nothing when it is chosen.

### terrain_projection

| Name| Description|
| ----| -------------|
| minecraft:rigid | Structures are placed without any height adjustment. |
| minecraft:terrain_matching | Structures are placed relative to the terrain height. Structure blocks will adjust along the Y axis to match the ground. |

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
