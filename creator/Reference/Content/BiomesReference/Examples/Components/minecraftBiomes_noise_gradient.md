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
| noise_block_specifiers | *not set* | Array of [Noise Block Specifiers](#biome-noiseblockspecifier) items | The noise block specifiers defining which ranges of noise are associated with which blocks. | 
| noise_descriptor | *not set* | [Noise Descriptor](#biome-noisedescriptor) item | The Specification for the Noise used by the surface builder. | 
| non_replaceable_blocks | *not set* | String | A list of blocks that the surface builder is not allowed to replace. Leaving this list empty or unspecified will allow the replacement of any (non-air) block type. | 
| non_replaceable_blocks (Non Replaceable Blocks) | *not set* | [Non Replaceable Blocks (Non Replaceable Blocks)](#non-replaceable-blocks-non-replaceable-blocks) item |  | 
| type | *not set* | [Type](#type-choices) choices |  | 

### noise_block_specifiers

The noise block specifiers defining which ranges of noise are associated with which blocks. The ranges provided are valid on the interval [0, 1], and may overlap at their endpoints. Value must have at least 1 items.


### Biome NoiseBlockSpecifier

#### Biome NoiseBlockSpecifier Properties

**JSON path:** `noise_block_specifiers`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block | *not set* | String | The block to place if the noise sample satisfies the provided threshold/range | 
| block (Block) | *not set* | [Block (Block)](#block-block) item |  | 
| noise |  | String | The string identifier of the noise associated with this NoiseBlockSpecifier. Value must match a regular expression pattern of "^\S+$". | 
| range | {"max":0,"min":0} | [Range](#item-components-floatrange) item | The range of sampled noise value associated with the provided Block. | 
| threshold | 0 | Decimal number | The minimum sampled noise value associated with the provided Block. | 

#### Block (Block)

##### Block Properties

**JSON path:** `noise_block_specifiers > block`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | Object | Name of the block | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. | 
| states (as Keyed collection of boolean values) | *not set* | Keyed collection of boolean values |  | 
| states (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

#### Item Components FloatRange
Has minimum and maximum float values.


##### Item Components FloatRange Properties

**JSON path:** `noise_block_specifiers > range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

### Biome NoiseDescriptor

#### Biome NoiseDescriptor Properties

**JSON path:** `noise_descriptor`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| amplitudes | *not set* | Array of numbers | Governs the attenuation of the first n octaves in the generated noise. Value must have at least 1 items. Value must have at most 100 items. | 
| first_octave | *not set* | Integer number | Governs the general frequency characteristics of the generated noise. Lower value results in noise with lower frequency content. | 
| name | *not set* | String | The string used to initialize the noise. Has no impact on the qualitative aspects of the generated values. | 

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