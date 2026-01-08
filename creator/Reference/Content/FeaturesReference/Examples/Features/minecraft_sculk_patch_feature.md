---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:sculk_patch_feature"
description: "Describes the minecraft:sculk_patch_feature feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:sculk_patch_feature

> [!IMPORTANT]
> This type is internal to vanilla Minecraft usage, and is not functional or supported within custom Minecraft content.

Generates clusters of sculk blocks with veins spreading across surfaces, as found in Deep Dark biomes and Ancient Cities. Configure patch size, spread pattern, and catalyst generation. Creates the distinctive dark blue organic growth that defines sculk-infected underground areas.


## Sculk Patch Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_place_sculk_patch_on | *not set* | Array of strings |  |  | 
| charge_amount | *not set* | Integer number |  |  | 
| cursor_count | *not set* | Integer number |  |  | 
| description | *not set* | [Description](#description) item |  |  | 
| format_version | *not set* | String |  |  | 
| growth_rounds | *not set* | Integer number |  |  | 
| spread_attempts | *not set* | Integer number |  |  | 
| spread_rounds | *not set* | Integer number |  |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 