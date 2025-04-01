---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:sculk_patch_feature"
description: "Describes the minecraft:sculk_patch_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:sculk_patch_feature

> [!IMPORTANT]
> This type is internal to vanilla Minecraft usage, and is not functional or supported within custom Minecraft content.


## Sculk Patch Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_place_sculk_patch_on | *not set* | Array of strings |  |  | 
| charge_amount | *not set* | Integer number |  |  | 
| cursor_count | *not set* | Integer number |  |  | 
| description | *not set* | [Description](#description-item-type) item |  |  | 
| format_version | *not set* | String |  |  | 
| growth_rounds | *not set* | Integer number |  |  | 
| spread_attempts | *not set* | Integer number |  |  | 
| spread_rounds | *not set* | Integer number |  |  | 

## Description item type

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 