---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:noisedescriptor"
description: "Describes the minecraft:noisedescriptor biome"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:noisedescriptor


## Biome NoiseDescriptor Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| amplitudes | *not set* | Array of numbers | Governs the attenuation of the first n octaves in the generated noise. Value must have at least 1 items. Value must have at most 100 items. | 
| first_octave | *not set* | Integer number | Governs the general frequency characteristics of the generated noise. Lower value results in noise with lower frequency content. | 
| name | *not set* | String | The string used to initialize the noise. Has no impact on the qualitative aspects of the generated values. | 