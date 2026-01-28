---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:jigsawstructure_processors_blockrules"
description: "Describes the minecraft:jigsawstructure_processors_blockrules jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:jigsawstructure_processors_blockrules

Replaces and modifies blocks based on a series of rules.


## JigsawStructure Processors BlockRules Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| processor_type | *not set* | String | Processors Type |  | 
| rules | *not set* | Array of objects | List of block rules evaluated on all blocks of a Structure Template. Block rules are evaluated in order. If a block rule succeeds and the output_state is set, the output_state block will be used as the input_predicate block for subsequent rules. |  | 