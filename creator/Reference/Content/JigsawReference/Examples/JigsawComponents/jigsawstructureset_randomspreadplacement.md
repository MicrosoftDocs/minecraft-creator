---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:jigsawstructureset_randomspreadplacement"
description: "Describes the minecraft:jigsawstructureset_randomspreadplacement jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:jigsawstructureset_randomspreadplacement

Defines random spread placement with spacing and separation for structure sets.


## JigsawStructureSet RandomSpreadPlacement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| salt | *not set* | Integer number | Seed used for the random generator to provide a unique scatter pattern. This is used to prevent overlap in the case where multiple structure sets use the same placement values. |  | 
| separation | *not set* | Integer number | Padding (in chunks) within each grid cell. Structures will not generate within the padded area. |  | 
| spacing | *not set* | Integer number | Grid cell size (in chunks) to use when generating the structure. Structures will attempt to generate at a random position within each cell. |  | 
| spread_type | *not set* | String | Randomness algorithm used when placing structures. |  | 
| type | *not set* | String | Type of placement for the Jigsaw Structure Set. |  | 