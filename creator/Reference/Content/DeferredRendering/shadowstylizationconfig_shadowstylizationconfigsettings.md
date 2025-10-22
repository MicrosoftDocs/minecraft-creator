---
author: mammerla
ms.author: mikeam
title: "Deferred Rendering Documentation - minecraft:shadowstylizationconfig_shadowstylizationconfigsettings"
description: "Describes the minecraft:shadowstylizationconfig_shadowstylizationconfigsettings deferred rendering"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Deferred Rendering Documentation - minecraft:shadowstylizationconfig_shadowstylizationconfigsettings

Struct ShadowStylizationConfig ShadowStylizationConfigSettings Client Deferred Rendering.


## Shadow settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | format_version |  | 
| minecraft:shadow_settings | *not set* | [Shadow Settings](#shadow-settings) item | minecraft:shadow_settings |  | 

## Shadow Settings
ShadowStylizationConfig ShadowStylizationConfigSettings ShadowStylizationSettings.


#### ShadowStylizationConfig ShadowStylizationConfigSettings ShadowStylizationSettings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| shadow_style | *not set* | String | enum ShadowStylizationConfig_ShadowStylizationConfigSettings_ShadowStylizationSettings_ShadowStyle |  | 
| texel_size | *not set* | Integer number | texel_size Value must be >= 1. Value must be <= 1024. |  | 