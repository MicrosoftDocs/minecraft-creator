---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:jigsawstructuretemplatepool_templatepoolelement"
description: "Describes the minecraft:jigsawstructuretemplatepool_templatepoolelement jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:jigsawstructuretemplatepool_templatepoolelement

Defines a weighted template pool element with structure and processor references.


## JigsawStructureTemplatePool TemplatePoolElement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| element | *not set* | Object | A grouping of a Structure Template, the Processor List to use when placing the structure, and its weight that determines the likelihood of the element being chosen. |  | 
| projection | *not set* | String | Specifies how structures should be placed relative to the terrain. |  | 
| weight | *not set* | Integer number | The weighted probability of choosing the element from the pool. For example, a template pool containing 2 structures with weights of 1 and 3 will have a 25% and 75% chance of being chosen respectively. |  | 