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
| noise_block_specifiers | *not set* | Array of objects | The noise block specifiers defining which ranges of noise are associated with which blocks. | 
| noise_descriptor | *not set* | Object | The Specification for the Noise used by the surface builder. | 
| non_replaceable_blocks | *not set* | String | A list of blocks that the surface builder is not allowed to replace. Leaving this list empty or unspecified will allow the replacement of any (non-air) block type. | 
| non_replaceable_blocks (Non Replaceable Blocks) | *not set* | [Non Replaceable Blocks (Non Replaceable Blocks)](#non-replaceable-blocks-non-replaceable-blocks) item |  | 
| type | *not set* | [Type](#type-choices) choices |  | 

### noise_block_specifiers

The noise block specifiers defining which ranges of noise are associated with which blocks. The ranges provided are valid on the interval [0, 1], and may overlap at their endpoints. Value must have at least 1 items.


### Non Replaceable Blocks (Non Replaceable Blocks)

#### Non Replaceable Blocks Properties

**JSON path:** `non_replaceable_blocks`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | Object | Name of the block | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. | 
| states (as Keyed collection of boolean values) | *not set* | Keyed collection of boolean values |  | 
| states (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

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