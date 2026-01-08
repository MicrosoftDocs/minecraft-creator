---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:feature_rule_definition"
description: "Describes the minecraft:feature_rule_definition feature type"
ai-usage: ai-assisted
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
Controls the scatter distribution of features during world generation.


#### Distribution Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| coordinate_eval_order | xzy | [Coordinate Eval Order](#coordinate-eval-order-choices) choices | The order in which coordinates will be evaluated. Should be used when a coordinate depends on another. Defaults to 'xzy'. |  | 
| iterations | 1 | Integer number | Number of scattered positions to generate. Can be an integer or a Molang expression. |  | 
| scatter_chance | 1 | Decimal number | Probability that this scatter will occur (0.0 to 1.0 or Molang expression). If not triggered, no iterations will run. |  | 
| x | 0 | Integer number | Distribution for the X coordinate (evaluated each iteration). Can be an integer, range object, or Molang expression. |  | 
| y | 0 | Integer number | Distribution for the Y coordinate (evaluated each iteration). Can be an integer, range object, or Molang expression. |  | 
| z | 0 | Integer number | Distribution for the Z coordinate (evaluated each iteration). Can be an integer, range object, or Molang expression. |  | 

### Coordinate Eval Order choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |