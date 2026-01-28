---
author: mammerla
ms.author: mikeam
title: "Spawn Rules Documentation - minecraft:spawn_brightnessfilter"
description: "Describes the minecraft:spawn_brightnessfilter spawn rule component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Spawn Rules Documentation - minecraft:spawn_brightnessfilter

Restricts mob spawning based on light level at the spawn location. Hostile mobs typically spawn in darkness (light level 0-7), while passive mobs spawn in brighter areas. Allows setting min/max brightness thresholds and whether to adjust for spawning on a block surface.


## Spawn BrightnessFilter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| adjust_for_weather | false | Boolean true/false |  |  | 
| max | 15 | Integer number |  |  | 
| min | 0 | Integer number |  |  | 