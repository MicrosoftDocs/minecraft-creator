---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_rate_instant"
description: "Describes the minecraft:emitter_rate_instant particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_rate_instant

Spawns all particles in a single instant burst when the emitter activates. Unlike steady emission that spawns particles over time, this creates an immediate cloud of particles—perfect for explosions, block destruction debris, potion splash impacts, ender teleportation effects, and any effect that needs an instantaneous particle release.


## Client Particles Emitter Rate Instant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_particles | *not set* | Molang | The number of particles to emit. Can be a number or Molang expression. |  | 
| num_particles (Alternate 1) | *not set* | Key/item pairs of [Num Particles](#num-particles) items |  |  | 
| num_particles (Alternate 2) | *not set* | Decimal number |  |  | 

## Num Particles

#### Num Particles Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 