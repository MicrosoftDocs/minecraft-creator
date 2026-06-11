---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:pool_element_list"
description: "Describes the minecraft:pool_element_list jigsaw json"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:pool_element_list

Pool element that composes several other pool elements together. When chosen, all listed elements are placed as a group rather than picking one. Useful for bundling related pieces that must always appear together.


## List Pool Element Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| element_type | *not set* | [Element Type](#element-type-choices) choices | Must be 'minecraft:list_pool_element' for this element variant. | 
| elements | *not set* | Array of objects | Nested array of pool element configurations to compose. | 
| projection | rigid | [Projection](#projection-choices) choices | How the composed group projects onto terrain. | 

### elements

Nested array of pool element configurations to compose. Each entry follows the same shape as a normal pool element (Single, Legacy Single, Feature, or Empty). Nesting another List Pool Element is not supported.


### Element Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:list_pool_element | List Pool Element | |

### Projection choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| rigid | Rigid | Placed without height adjustment.|
| terrain_matching | Terrain Matching | Placed relative to terrain height.|