---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:scan_surface"
description: "Describes the minecraft:scan_surface feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:scan_surface

> [!IMPORTANT]
> This type is internal to vanilla Minecraft usage, and is not functional or supported within custom Minecraft content.

Searches for valid terrain surface positions before placing features. Scans downward from the generation height to find solid ground, then places the referenced feature at appropriate surface level. Essential for features like flowers, grass, and decorations that must sit on top of terrain regardless of elevation.


## Scan Surface Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item |  |  | 
| format_version | *not set* | String |  |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 