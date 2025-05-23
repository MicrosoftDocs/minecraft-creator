---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:destruction_particles"
description: "Describes the minecraft:destruction_particles block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:destruction_particles

[Note: This component is currently experimental]. Sets the particles that will be used when block is destroyed.

> [!Note]
> This item requires a format version of at least 1.21.80.


## Destruction Particles Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| particle_count | *not set* | Integer number | Optional, number of particles to spawn of destruction. Default is 100, maximum is 255 inclusively |  | 
| texture | *not set* | String | The texture name used for the particle. |  | 
| tint_method | *not set* | [Tint Method](#tint-method-choices) choices | Tint multiplied to the color. Tint method logic varies, but often refers to the "rain" and "temperature" of the biome the block is placed in to compute the tint. |  | 

### Tint Method choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| none | None | |
| default_foliage | Default Foliage | |
| birch_foliage | Birch Foliage | |
| evergreen_foliage | Evergereen Foliage | |
| dry_foliage | Dry Foliage | |
| grass | Grass | |
| water | Water | |