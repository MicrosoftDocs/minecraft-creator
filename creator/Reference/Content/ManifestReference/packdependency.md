---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:packdependency"
description: "Describes the minecraft:packdependency pack manifest"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:packdependency

References another add-on pack that must be present for this pack to work. Commonly used to link a behavior pack to its companion resource pack, or to depend on shared library packs. Uses UUID and version matching.


## 3.0.0.PackDependency Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| uuid | *not set* | Object |  | 
| version (Version) | *not set* | [Version](#version) item |  | 
| version (as String) | *not set* | String |  | 

### Version

#### Version Properties

**JSON path:** `version`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| buildMeta |  | String |  | 
| major | 0 | Integer number |  | 
| minor | 0 | Integer number |  | 
| patch | 0 | Integer number |  | 
| preRelease |  | String |  | 