---
author: mammerla
ms.author: mikeam
title: "Jigsaw Structures Documentation - minecraft:scatter_params"
description: "Describes the minecraft:scatter_params jigsaw component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Jigsaw Structures Documentation - minecraft:scatter_params

Controls the scatter distribution of a particular object.


## Scatter Params Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| coordinate_eval_order | *not set* | String | The order in which coordinates will be evaluated. Should be used when a coordinate depends on another. If omitted, defaults to "xzy". Supported orders are defined by "Coordinate Evaluation Order". |  | 
| iterations | *not set* | Object | Number of scattered positions to generate. |  | 
| scatter_chance | *not set* | Object | Probability that this scatter will occur. Not evaluated each iteration; either no iterations will run, or all will. |  | 
| x | *not set* | Object | Distribution for the coordinate (evaluated each iteration). |  | 
| y | *not set* | Object | Distribution for the coordinate (evaluated each iteration). |  | 
| z | *not set* | Object | Distribution for the coordinate (evaluated each iteration). |  | 