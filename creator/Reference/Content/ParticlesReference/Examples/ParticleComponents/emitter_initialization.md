---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_initialization"
description: "Describes the minecraft:emitter_initialization particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_initialization

Defines Molang expressions that run when the emitter is created and on each update. Useful for initializing and updating emitter variables.


## Emitter Initialization Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| creation_expression | 0 | Molang | Molang expression run once when the emitter is created. Use this to initialize variables. |  | 
| creation_expression (Alternate 1) | *not set* | Key/item pairs of [Creation Expression](#creation-expression) items |  |  | 
| creation_expression (Alternate 2) | *not set* | Decimal number |  |  | 
| per_update_expression | 0 | Molang | Molang expression run each frame while the emitter is active. Use this to update variables based on time or other conditions. |  | 
| per_update_expression (Alternate 1) | *not set* | Key/item pairs of [Per Update Expression](#per-update-expression) items |  |  | 
| per_update_expression (Alternate 2) | *not set* | Decimal number |  |  | 

## Creation Expression

#### Creation Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Per Update Expression

#### Per Update Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 