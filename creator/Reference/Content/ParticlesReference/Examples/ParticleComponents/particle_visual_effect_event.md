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

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| effect | *not set* | String |  | 
| pre_effect_expression | 0 | Keyed set of strings |  | 
| pre_effect_expression (as Named set of objects) | *not set* | Key/item pairs of [Pre Effect Expression (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| pre_effect_expression (as Decimal number) | *not set* | Decimal number |  | 
| type | *not set* | [Type](#type-choices) choices |  | 

### Legacy Molang Expression

#### Legacy Molang Expression Properties

**JSON path:** `pre_effect_expression`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| emitter | Emitter | |
| emitter_bound | Emitter bound | |
| particle | Particle | |
| particle_with_velocity | Particle with velocity | |