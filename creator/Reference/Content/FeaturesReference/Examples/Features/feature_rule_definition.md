---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:feature_rule_definition"
description: "Describes the minecraft:feature_rule_definition feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:feature_rule_definition

Feature Rule Definition.


## Feature Rule Definition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| conditions | *not set* | Object | Parameters to control where and when the feature will be placed. |  | 
| description | *not set* | Object | Identifier for the Feature Rule and Feture to place. |  | 
| distribution | *not set* | [Distribution](#distribution) item | Parameters controlling the initial scatter of the feature. |  | 

## Distribution
Controls the scatter distribution of a particular object.


#### Distribution Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| coordinate_eval_order | *not set* | String | The order in which coordinates will be evaluated. Should be used when a coordinate depends on another. If omitted, defaults to "xzy". Supported orders are defined by "Coordinate Evaluation Order". |  | 
| iterations | *not set* | Object | Number of scattered positions to generate. |  | 
| scatter_chance | *not set* | Object | Probability that this scatter will occur. Not evaluated each iteration; either no iterations will run, or all will. |  | 
| x | *not set* | Object | Distribution for the coordinate (evaluated each iteration). |  | 
| y | *not set* | Object | Distribution for the coordinate (evaluated each iteration). |  | 
| z | *not set* | Object | Distribution for the coordinate (evaluated each iteration). |  | 