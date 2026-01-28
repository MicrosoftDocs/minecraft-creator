---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:jigsawstructure_processorrule_axisalignedlinear"
description: "Describes the minecraft:jigsawstructure_processorrule_axisalignedlinear jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:jigsawstructure_processorrule_axisalignedlinear

Predicate that evaluates to true if the block is within the distance range along the provided axis and a random number is generated between the chance range.


## JigsawStructure ProcessorRule AxisAlignedLinear Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| axis | *not set* | String | The axis along which to measure distance. |  | 
| max_chance | *not set* | Decimal number | Maximum chance value for the random probability. |  | 
| max_dist | *not set* | Integer number | Maximum distance along the axis. |  | 
| min_chance | *not set* | Decimal number | Minimum chance value for the random probability. |  | 
| min_dist | *not set* | Integer number | Minimum distance along the axis. |  | 
| predicate_type | *not set* | String | PositionalBlockRuleAxis |  | 