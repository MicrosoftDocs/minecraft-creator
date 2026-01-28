---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_rate_steady"
description: "Describes the minecraft:emitter_rate_steady particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_rate_steady

Continuously spawns particles at a consistent rate over time. The spawn_rate controls how many particles appear per second, while max_particles limits the total active count. This is the most common emission mode, used for ongoing effects like torch flames, mob auras, weather effects, potion bubbles, and ambient environmental particles.


## Client Particles Emitter Rate Steady Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_particles | *not set* | Molang | The maximum number of particles that can exist at once. Can be a number or Molang expression. |  | 
| max_particles (Alternate 1) | *not set* | Key/item pairs of [Max Particles](#max-particles) items |  |  | 
| max_particles (Alternate 2) | *not set* | Decimal number |  |  | 
| spawn_rate | *not set* | Molang | The number of particles to spawn per second. Can be a number or Molang expression. |  | 
| spawn_rate (Alternate 1) | *not set* | Key/item pairs of [Spawn Rate](#spawn-rate) items |  |  | 
| spawn_rate (Alternate 2) | *not set* | Decimal number |  |  | 

## Max Particles

#### Max Particles Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Spawn Rate

#### Spawn Rate Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 