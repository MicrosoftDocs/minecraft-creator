---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:header"
description: "Describes the minecraft:header pack manifest"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:header

The header section of manifest.json containing the pack's identity: its name shown in the UI, description, unique UUID, and version. The min_engine_version field specifies the minimum Minecraft version required to load the pack.


## 3.0.0.Header Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| allow_random_seed | *not set* | Boolean true/false |  | 
| base_game_version | *not set* | String |  | 
| description | *not set* | String |  | 
| lock_template_options | *not set* | Boolean true/false |  | 
| min_engine_version | *not set* | String |  | 
| name | *not set* | String |  | 
| pack_optimization_version (Pack Optimization Version) | *not set* | [Pack Optimization Version](#pack-optimization-version) item |  | 
| pack_optimization_version (as String) | *not set* | String |  | 
| pack_scope | *not set* | String |  | 
| platform_locked | *not set* | Boolean true/false |  | 
| uuid | *not set* | Object |  | 
| version (Version) | *not set* | [Version](#version) item |  | 
| version (as String) | *not set* | String |  | 

### Pack Optimization Version

#### Pack Optimization Version Properties

**JSON path:** `pack_optimization_version`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| buildMeta |  | String |  | 
| major | 0 | Integer number |  | 
| minor | 0 | Integer number |  | 
| patch | 0 | Integer number |  | 
| preRelease |  | String |  | 

### Version

Same structure as [Pack Optimization Version](#pack-optimization-version).
