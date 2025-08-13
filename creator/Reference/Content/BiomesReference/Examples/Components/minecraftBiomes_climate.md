---
author: cam-wilkerson
ms.author: v-cwilkerson
title: "Biome Documentation - minecraft:climate"
description: "Describes the minecraft:climate biome"
ms.service: minecraft-bedrock-edition
ms.date: 08/13/2025 
---

# Biome Documentation - minecraft:climate

Describes temperature, humidity, precipitation, and similar. Biomes without this component will have default values.


## Minecraft climate biome properties

| Name |Default Value |Type |Description |Example Values |
|:-----|:-------------|:----|:-----------|:------------- |
| downfall | *not set* | Decimal number | Amount that precipitation affects colors and block changes |  | 
| snow_accumulation | *not set* | Array of numbers | Minimum and maximum snow level, each multiple of 0.125 is another snow layer Value must have at least 2 items. Value must have at most 2 items. |  | 
| temperature | *not set* | Decimal number | Temperature affects a variety of visual and behavioral things, including snow and ice placement, sponge drying, and sky color |  |