---
author: iconicNurdle
ms.author: mikeam
title: Jigsaw Structure Sets Documentation 
description: "A reference document about Jigsaw Structure Sets"
ms.service: minecraft-bedrock-edition
---

# Jigsaw Structure Sets

A Structure Set contains a set of Jigsaw Structures and rules for how those structures should be placed in the world relative to other instances of structures from the same set. Each structure within a set is paired with a weight that influences how frequently it is chosen.

>[!IMPORTANT]
> This feature is currently experimental, subject to change, and is only available when the **Data-driven Jigsaw Structures** experiment is enabled for a world.

## Properties

- Identifier: The name of the Structure Set.

- Placement: Describes where structures in the set spawn relative to one another. Currently, the only placement type supported is random_spread, which scatters structures randomly with a given separation and spacing.

- Salt: Seed used for the random generator to provide a unique scatter pattern. This is used to prevent overlap in the case where multiple structure sets use the same placement values.

- Spacing: Grid cell size (in chunks) to use when generating the structure. Structures will attempt to generate at a random position within each cell.

- Separation: Padding (in chunks) within each grid cell. Structures will not generate within the padded area.  

- Spread Type: Randomness algorithm used when placing structures.  
  - Linear: Basic randomness e.g. rand(x)
  - Triangle: Average of 2 randoms e.g. (rand(x) + rand(x)) / 2

- Structures: A weighted list of Jigsaw Structure identifiers. Structures will be randomly chosen from this set during world generation.

- Structure: Identifier of the Jigsaw Structure.

- Weight: Weight of the Jigsaw Structure in the set. Higher weights are more likely to be selected.

## Example JSON

```json
{ 
  "format_version": "1.21.20", 
  "minecraft:structure_set": { 
    "description": { 
      "identifier": "minecraft:trail_ruins" 
    }, 
    "placement": { 
      "type": "minecraft:random_spread", 
      "salt": 83469867, 
      "separation": 8, 
      "spacing": 34, 
      "spread_type": "linear" 
    }, 
    "structures": [ 
      { 
        "structure": "minecraft:trail_ruins", 
        "weight": 1 
      } 
    ] 
  } 
} 
```
