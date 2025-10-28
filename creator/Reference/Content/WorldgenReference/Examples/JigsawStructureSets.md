---
author: iconicNurdle
ms.author: mikeam
title: Jigsaw Structure Sets Documentation 
description: "A reference document about Jigsaw Structure Sets"
ms.service: minecraft-bedrock-edition
---

# Jigsaw Structure Sets

A Structure Set contains a set of Jigsaw Structures and rules for how those structures should be placed in the world relative to other instances of structures from the same set. Each structure within a set is paired with a weight that influences how frequently it is chosen.

## Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [description](#description) | *not set* | Required | JSON Object | Object containing the identifier of the Structure Set. This MUST contain an identifier.  | `"description": { "identifier": "test:trail_ruins_structure_sets" }` |
| [placement](#placement) | *not set* | Required | JSON Object | Describes where structures in the set spawn relative to one another. | (go to section) |
| [structures](#structures) | *not set* | Required | JSON Object | A weighted list of Jigsaw Structure identifiers. Structures will be randomly chosen from this set during world generation. | (go to section) |


## description
Object containing the identifier of the Structure Set. This MUST contain an identifier.

### Properties
|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| identifier | *not set* | Required | String | Identifier of the Structure Set |  `"identifier": "test:trail_ruins_structure_set"` | 

```json
"description": {
  "identifier": "test:trail_ruins_structure_sets"
}
```

## placement
Object of five properties that determine how structures in the set spawn relative to one another. 

### Properties
|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [type](#type) | `"random_spread"` | Required | String | Type of algorithm that controls how structures in the set are placed relative to one another.  | `"type": "minecraft:random_spread"`  | 
| [salt](#salt) | *not set* | Required | int32_t | Seed used for the random generator to provide a unique scatter pattern. | `"salt": 83469867`  | 
| [separation](#separation) | *not set* | Required | uint16_t | Padding (in chunks) within each grid cell. | `"separation": 8`  | 
| [spacing](#spacing) | *not set* | Required | uint16_t | Grid cell size (in chunks) to use when generating the structure. | `"spacing": 34`  | 
| [spread_type](#spread_type) | `"linear"` | Required | String | Randomness algorithm used when placing structures. | `"spread_type": "linear"`  | 

```json
"placement": {
  "type": "minecraft:random_spread",
  "salt": 83469867,
  "separation": 8,
  "spacing": 34,
  "spread_type": "linear"
}
```

### type
Type of algorithm that controls how structures in the set are placed relative to one another. 
>[!NOTE]
> Currently, the only placement type supported is `"random_spread"`, which scatters structures randomly with a given separation and spacing.

### salt
Seed used for the random generator to provide a unique scatter pattern. 
This is used to prevent overlap in the case where multiple structure sets use the same placement values.

### separation
Padding (in chunks) within each grid cell. 
Structures will not generate within the padded area.  

### spacing
Grid cell size (in chunks) to use when generating the structure. 
Structures will attempt to generate at a random position within each cell.

### spread_type
Randomness algorithm used when placing structures.  

#### Properties
|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| linear | *not set* | Required | String | Basic randomness: `rand(x)` | `"spread_type": "linear"`  | 
| triangle | *not set* | Required | String | Average of 2 randoms: `(rand(x) + rand(x)) / 2` | `"spread_type": "triangle"`  | 

 
## structures
A weighted list of Jigsaw Structure identifiers. Structures will be randomly chosen from this set during world generation.

### Properties
|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [structure](#structure) | *not set* | Required | String | Identifier of the Jigsaw Structure. | `"structure": "test:jigsaw"`  | 
| [weight](#weight) | *not set* | Required | String | Weight of the Jigsaw Structure in the set. Higher weights are more likely to be selected. | `"weight": 1`  | 

```json
"structures": [
  {
    "structure": "test:jigsaw",
    "weight": 1
  }
]
```

## Example Structure Set JSON

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
