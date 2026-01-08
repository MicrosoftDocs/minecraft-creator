---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:dependency"
description: "Describes the minecraft:dependency pack manifest"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:dependency

Declares that this pack requires another pack or native module to function. Dependencies can reference other add-ons by UUID/version or native Script API modules like '@minecraft/server'. Minecraft ensures dependencies are loaded first.


## 3.0.0.Dependency Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| module_name | *not set* | String |  |  | 
| uuid | *not set* | Object |  |  | 
| version (Version) | *not set* | [Version](#version) item |  |  | 
| version (Alternate 1) | *not set* | String |  |  | 

## Version

#### Version Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| buildMeta | *not set* | String |  |  | 
| major | *not set* | Integer number |  |  | 
| minor | *not set* | Integer number |  |  | 
| patch | *not set* | Integer number |  |  | 
| preRelease | *not set* | String |  |  | 