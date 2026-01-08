---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:beards_and_shavers"
description: "Describes the minecraft:beards_and_shavers feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:beards_and_shavers

> [!IMPORTANT]
> This type is internal to vanilla Minecraft usage, and is not functional or supported within custom Minecraft content.

Carves or fills terrain within a defined bounding box during world generation. 'Beard' operations add blocks below structures to connect them to ground, while 'shaver' operations remove blocks above to create clearance. Used for natural integration of structures like villages into varied terrain.


## Beards And Shavers Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bounding_box_max | *not set* | Array of strings | Dimensions of the Bounding Box |  | 
| bounding_box_min | *not set* | Array of strings | Dimensions of the Bounding Box |  | 
| description | *not set* | [Description](#description) item |  |  | 
| format_version | *not set* | String |  |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 