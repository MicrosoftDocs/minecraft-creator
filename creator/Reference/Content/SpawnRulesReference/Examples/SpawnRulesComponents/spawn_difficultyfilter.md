---
author: mammerla
ms.author: mikeam
title: "Spawn Rules Documentation - minecraft:spawn_difficultyfilter"
description: "Describes the minecraft:spawn_difficultyfilter spawn rule component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Spawn Rules Documentation - minecraft:spawn_difficultyfilter

Restricts mob spawning to specific difficulty levels (Peaceful, Easy, Normal, Hard). For example, hostile mobs don't spawn on Peaceful, and some dangerous variants only appear on Hard difficulty.


## Spawn DifficultyFilter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | hard | [Max](#max-choices) choices |  |  | 
| min | peaceful | [Min](#min-choices) choices |  |  | 

### Max choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| easy | Easy | |
| hard | Hard | |
| normal | Normal | |
| peaceful | Peaceful | |

### Min choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| easy | Easy | |
| hard | Hard | |
| normal | Normal | |
| peaceful | Peaceful | |