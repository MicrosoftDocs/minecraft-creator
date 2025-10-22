---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:header"
description: "Describes the minecraft:header pack manifest"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:header


## 3.0.0.Header Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_random_seed | *not set* | Boolean true/false |  |  | 
| base_game_version | *not set* | String |  |  | 
| description | *not set* | String |  |  | 
| lock_template_options | *not set* | Boolean true/false |  |  | 
| min_engine_version | *not set* | String |  |  | 
| name | *not set* | String |  |  | 
| pack_optimization_version (Pack Optimization Version) | *not set* | [Pack Optimization Version](#pack-optimization-version) item |  |  | 
| pack_optimization_version (Alternate 1) | *not set* | String |  |  | 
| pack_scope | *not set* | String |  |  | 
| platform_locked | *not set* | Boolean true/false |  |  | 
| uuid | *not set* | Object |  |  | 
| version (Version) | *not set* | [Version](#version) item |  |  | 
| version (Alternate 1) | *not set* | String |  |  | 

## Pack Optimization Version

#### Pack Optimization Version Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| buildMeta | *not set* | String |  |  | 
| major | *not set* | Integer number |  |  | 
| minor | *not set* | Integer number |  |  | 
| patch | *not set* | Integer number |  |  | 
| preRelease | *not set* | String |  |  | 

## Version

#### Version Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| buildMeta | *not set* | String |  |  | 
| major | *not set* | Integer number |  |  | 
| minor | *not set* | Integer number |  |  | 
| patch | *not set* | Integer number |  |  | 
| preRelease | *not set* | String |  |  | 