---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_visual_effect_event"
description: "Describes the minecraft:particle_visual_effect_event particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_visual_effect_event

Spawns another particle effect when triggered by particle events, enabling cascading visual sequences. Reference other particle effects by identifier to create chains like explosions spawning embers, impacts creating dust clouds, or magical projectiles trailing sparkles. Builds complex layered effects from simpler reusable components.


## Client Particles Particle Visual Effect Event Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| effect | *not set* | Object |  |  | 
| pre_effect_expression | 0 | Keyed set of strings |  |  | 
| pre_effect_expression (Alternate 1) | *not set* | Key/item pairs of [Pre Effect Expression](#pre-effect-expression) items |  |  | 
| pre_effect_expression (Alternate 2) | *not set* | Decimal number |  |  | 
| type | *not set* | [Type](#type-choices) choices |  |  | 

## Pre Effect Expression

#### Pre Effect Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| emitter | Emitter | |
| emitter_bound | Emitter bound | |
| particle | Particle | |
| particle_with_velocity | Particle with velocity | |