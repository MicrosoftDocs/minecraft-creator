---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_rate_manual"
description: "Describes the minecraft:emitter_rate_manual particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_rate_manual

Allows manual control over particle emission through events rather than automatic spawning. Particles are only created when explicitly triggered via Molang or particle events, up to the max_particles limit. Useful for effects that should only spawn under specific conditions, like damage indicators, pickup sparkles, or script-controlled visual feedback.


## Client Particles Emitter Rate Manual Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_particles | *not set* | Molang | The maximum number of particles that can exist at once. Can be a number or Molang expression. |  | 
| max_particles (Alternate 1) | *not set* | Key/item pairs of [Max Particles](#max-particles) items |  |  | 
| max_particles (Alternate 2) | *not set* | Decimal number |  |  | 

## Max Particles

#### Max Particles Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 