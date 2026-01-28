---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:jigsawstructure_rule"
description: "Describes the minecraft:jigsawstructure_rule jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:jigsawstructure_rule

A block rule that is evaluated on all blocks of a Structure Template. All predicates must evaluate to true in order for a block to be replaced by the output_state.


## JigsawStructure Rule Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_entity_modifier | *not set* | Object | A block state modifier for block entities when all predicate match. |  | 
| input_predicate | *not set* | Object | A predicate evaluated on the Structure Template block. |  | 
| location_predicate | *not set* | Object | A predicate evaluated on the world block. |  | 
| output_state | *not set* | Object | Block to replace the world block with if all predicates evaluate to true. |  | 
| position_predicate | *not set* | Object | A predicate evaluated on the distance between the structure's world origin and the world block. |  | 