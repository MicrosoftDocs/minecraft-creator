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

- Identifier: Identifier of the template pool. This is used by both the start_pool property of the Jigsaw Structure JSON and the Jigsaw Block's Target Pool field. 

- Elements: An array of pool elements. 

- Element: A grouping of a Structure Template, the Processor List to use when placing the structure, and its weight that determines the likelihood of the element being chosen. 

  - Element Type: The type of element. Currently, only minecraft:single_pool_element is supported. 

  - Location: The path of the structure file. This path is relative to the behavior pack's "structures" folder. 

  - Processors (optional): The identifier of the processor list to use when placing the structure. 

  - Projection (optional): Specifies how structures should be placed relative to the terrain.  

    - minecraft:rigid (default): Structures are placed without any height adjustment. 

    - minecraft:terrain_matching: Structures are placed relative to the terrain height. Structure blocks will adjust along the Y axis to match the ground. 

- Weight: The weighted probability of choosing the element from the pool. For example, a template pool containing 2 structures with weights of 1 and 3 will have a 25% and 75% chance of being chosen respectively. 

- Fallback: Fallback template pool to use if no element in the pool can be placed successfully. 

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
        "weight": 1 
      }, 
      { 
        "element": { 
          "element_type": "minecraft:single_pool_element", 
          "location": "minecraft:trail_ruins/tower/tower_top_2", 
          "processors": "minecraft:trail_ruins_tower_top_archaeology" 
          "projection": "minecraft:terrain_matching" 
        }, 
        "weight": 2 
      }, 
    ] 
  } 
} 
```
