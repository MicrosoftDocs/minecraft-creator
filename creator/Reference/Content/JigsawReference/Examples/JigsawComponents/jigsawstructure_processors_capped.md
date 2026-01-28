---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:jigsawstructure_processors_capped"
description: "Describes the minecraft:jigsawstructure_processors_capped jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:jigsawstructure_processors_capped

Processor that wraps a processor and caps the number of times the delegated processor can be applied.


## JigsawStructure Processors Capped Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| delegate | *not set* | Object | The processor that will be executed. |  | 
| limit | *not set* | Object | The maximum number of times that this delegate can be applied. |  | 
| processor_type | *not set* | String | Processors Type |  | 