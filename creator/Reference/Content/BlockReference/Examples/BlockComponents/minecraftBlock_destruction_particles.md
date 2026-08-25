---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:destruction_particles"
description: "Describes the minecraft:destruction_particles block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:destruction_particles

Sets the particles that will be used when block is destroyed.

> [!Note]
> Available without experimental toggle in 1.21.100. The particle_count field controls how many particles spawn when the block is broken.

> [!Note]
> This item requires a format version of at least 1.21.80.


## Block Destruction Particles Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| particle_count | 100 | Integer number | Sets number of particles to spawn on block destruction. Value must be <= 255. | Block Black Concrete Slab: `48` | 
| texture |  | String | The texture name used for the particle. |  | 
| tint_method | none | [Tint Method](#tint-method-choices) choices | Tint multiplied to the color. Tint method logic varies, but often refers to the "rain" and "temperature" of the biome the block is placed in to compute the tint. |  | 

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

## Samples

#### [Block Black Concrete Slab](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_concrete_slab.block.json)


```json
"minecraft:destruction_particles": {
  "particle_count": 48
}
```
