---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:noiseblockspecifier"
description: "Describes the minecraft:noiseblockspecifier biome"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:noiseblockspecifier


## Biome NoiseBlockSpecifier Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block | *not set* | String | The block to place if the noise sample satisfies the provided threshold/range | 
| block (Block) | *not set* | [Block (Block)](#block-block) item |  | 
| noise |  | String | The string identifier of the noise associated with this NoiseBlockSpecifier. Value must match a regular expression pattern of "^\S+$". | 
| range | {"max":0,"min":0} | [Range](#legacy-floatrange) item | The range of sampled noise value associated with the provided Block. | 
| threshold | 0 | Decimal number | The minimum sampled noise value associated with the provided Block. | 

### Block (Block)

#### Block Properties

**JSON path:** `block`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | Object | Name of the block | 
| states | {} | Keyed set of numbers | Contains members named after each state, with boolean, integer, or string values. | 
| states (as Keyed collection of boolean values) | *not set* | Keyed collection of boolean values |  | 
| states (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

### Legacy FloatRange

#### Legacy FloatRange Properties

**JSON path:** `range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 