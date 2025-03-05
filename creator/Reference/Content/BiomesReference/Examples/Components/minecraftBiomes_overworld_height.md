---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:overworld_height"
description: "Describes the minecraft:overworld_height biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:overworld_height

Noise parameters used to drive terrain height in the Overworld.


## Overworld Height Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| noise_params | *not set* | Array of objects | First value is depth - more negative means deeper underwater, while more positive means higher. Second value is scale, which affects how much noise changes as it moves from the surface. |  | 
| noise_type | *not set* | String | Specifies a preset based on a built-in setting rather than manually using noise_params |  | 