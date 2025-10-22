---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:replace_biomes"
description: "Describes the minecraft:replace_biomes biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:replace_biomes

Replaces a specified portion of one or more Minecraft biomes.


## Biome Replace Biomes Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| replacements | *not set* | [Replacements](#biome-replacement) item | List of biome replacement configurations. Retroactively adding a new replacement to the front of this list will cause the world generation to change. Please add any new replacements to the end of the list. |  | 

## Biome Replacement
Represents the replacement information used to determine the placement of the overriding biome.


#### Biome Replacement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| amount | *not set* | Decimal number | Noise value used to determine whether or not the replacement is attempted, similar to a percentage. Must be in the range (0.0, 1.0]. Value must be <= 1. |  | 
| dimension | *not set* | String | Dimension in which this replacement can happen. Must be 'minecraft:overworld'. |  | 
| noise_frequency_scale | *not set* | Decimal number | Scaling value used to alter the frequency of replacement attempts. A lower frequency will mean a bigger contiguous biome area that occurs less often. A higher frequency will mean smaller contiguous biome areas that occur more often. Must be in the range (0.0, 100.0]. Value must be <= 100. |  | 
| targets | *not set* | Array of objects | Biomes that are going to be replaced by the overriding biome. Target biomes must not contain namespaces. Value must have at least 1 items. |  | 