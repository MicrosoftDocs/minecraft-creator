---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:jigsawblockmetadata"
description: "Describes the minecraft:jigsawblockmetadata jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:jigsawblockmetadata

JigsawBlockMetadata.


## JigsawBlockMetadata Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block | *not set* | String | The serialization Id of the Jigsaw block before generation. |  | 
| final_block | *not set* | String | The serialization Id to replace the starting Jigsaw block with. |  | 
| joint_type | *not set* | String | The type of Jigsaw joint made with 'target'. |  | 
| name | *not set* | String | The name identifier referenced by the 'target' field of another Jigsaw block. |  | 
| placement_priority | *not set* | Integer number | The priority used during target block placement. |  | 
| pool | *not set* | String | The structure template pool containing possible structures to generate. |  | 
| pos | *not set* | Object | The Jigsaw block position. |  | 
| selection_priority | *not set* | Integer number | The priority used during target block selection. |  | 
| target | *not set* | String | The name identifier of the Jigsaw block to target within the generated structure. |  | 