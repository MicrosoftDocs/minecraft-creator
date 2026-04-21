---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:noise_gradient"
description: "Describes the minecraft:noise_gradient biome"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:noise_gradient

Places continuous bands of blocks according to a noise distribution. This surface builder's processing has been implemented with sub-terrain height ranges in mind.


## Biome Noise Gradient Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| amplitudes | *not set* | Array of numbers | Governs the attenuation of the first n octaves in the generated noise. Value must have at least 1 items. | 
| first_octave | *not set* | Integer number | Governs the general frequency characteristics of the generated noise. Lower value results in noise with lower frequency content. | 
| gradient_blocks | *not set* | String | A list of block names that will be sampled according to a Perlin noise distribution. | 
| gradient_blocks (Gradient Blocks) | *not set* | [Gradient Blocks (Gradient Blocks)](#gradient-blocks-gradient-blocks) item |  | 
| noise_seed_string | *not set* | String | The string used to initialize the noise. Has no impact on the qualitative aspects of the generated values. | 
| non_replaceable_blocks | *not set* | String | A list of blocks that the surface builder is not allowed to replace. Leaving this list empty or unspecified will allow the replacement of any (non-air) block type. | 
| non_replaceable_blocks (Non Replaceable Blocks) | *not set* | [Non Replaceable Blocks (Non Replaceable Blocks)](#non-replaceable-blocks-non-replaceable-blocks) item |  | 
| type | *not set* | [Type](#type-choices) choices |  | 

### gradient_blocks

A list of block names that will be sampled according to a Perlin noise distribution. Specifying `minecraft:air`-blocks is permitted, and will result in the original block not being replaced, meaning it is possible to adjust the density/intensity of block replacement in the biome using this surface builder type. Value must have at least 1 items.


### Gradient Blocks (Gradient Blocks)

#### Gradient Blocks Properties

**JSON path:** `gradient_blocks`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | Object | Name of the block | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. | 
| states (as Keyed collection of boolean values) | *not set* | Keyed collection of boolean values |  | 
| states (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

### Non Replaceable Blocks (Non Replaceable Blocks)

Same structure as [Gradient Blocks (Gradient Blocks)](#gradient-blocks-gradient-blocks).


### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| minecraft:capped | Minecraft:capped | |
| minecraft:frozen_ocean | Minecraft:frozen ocean | |
| minecraft:mesa | Minecraft:mesa | |
| minecraft:noise_gradient | Minecraft:noise gradient | |
| minecraft:overworld | Minecraft:overworld | |
| minecraft:swamp | Minecraft:swamp | |
| minecraft:the_end | Minecraft:the end | |