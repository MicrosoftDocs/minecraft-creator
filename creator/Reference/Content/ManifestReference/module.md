---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:module"
description: "Describes the minecraft:module pack manifest"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:module

Declares a module within the pack. Modules define what the pack contains: 'data' for behavior packs, 'resources' for resource packs, or 'script' for packs with JavaScript/TypeScript code. Script modules require an entry point file path.


## 3.0.0.Module Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | String |  |  | 
| entry | *not set* | String |  |  | 
| language | *not set* | String |  |  | 
| type | *not set* | String |  |  | 
| uuid | *not set* | Object |  |  | 
| version (Version) | *not set* | [Version](#version) item |  |  | 
| version (Alternate 1) | *not set* | String |  |  | 

## Version

#### Version Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| buildMeta |  | String |  |  | 
| major | 0 | Integer number |  |  | 
| minor | 0 | Integer number |  |  | 
| patch | 0 | Integer number |  |  | 
| preRelease |  | String |  |  | 