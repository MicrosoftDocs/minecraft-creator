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

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| adjust_for_weather | false | Boolean true/false | When true, brightness is adjusted for the current weather (rain/thunder reduce light levels). | 
| max | 15 | Integer number | Maximum light level (0-15) at which this entity can spawn. Value must be <= 15. | 
| min | 0 | Integer number | Minimum light level (0-15) at which this entity can spawn. Value must be <= 15. | 