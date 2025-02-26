---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:destruction_particles"
description: "Describes the minecraft:destruction_particles block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:destruction_particles

[Note: This component is currently experimental]. Sets the particles that will be used when block is destroyed. This component can be omitted.

## Destruction Particles Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| texture | *not set* | String | The texture name used for the particle. |  | 
| tint_method | *not set* | String | Optional, tint multiplied to the color. Tint method logic varies, but often refers to the "rain" and "temperature" of the biome the block is placed in to compute the tint. Supported tint methods are "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage", "grass" and "water" |  | 