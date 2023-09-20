---
author: JimSeaman42
ms.author: mikeam
title: Particle Documentation - Particle Molang Integration
description: "A reference document exploring ways creators can utilize Molang in particle effects"
ms.service: minecraft-bedrock-edition
---

# Particle Documentation - Particle Molang Integration

Any field can use a Molang expression. Molang expressions are strings, defined in the Molang documentation [here](../MolangReference/Examples/MolangConcepts/MolangIntroduction.md). The particle system uses some special Molang variables for particle Molang expressions.

Additionally, custom Molang parameters can be set in various ways and used in Molang expressions in effects.

| Name| Description |
|:-----------|:-----------|
| variable.emitter_age| Age since the current loop started for the emitter |
| variable.emitter_lifetime| How long the current loop lasts for the emitter |
| variable.emitter_random_1| A random from 0.0 to 1.0 that is constant for the current loop of the emitter |
| variable.emitter_random_2| Another random from 0.0 to 1.0 that is constant for the current loop of the emitter |
| variable.emitter_random_3| A third random from 0.0 to 1.0 that is constant for the current loop of the emitter |
| variable.emitter_random_4| A fourth random from 0.0 to 1.0 that is constant for the current loop of the emitter |
| variable.entity_scale| When the effect is attached to an entity, this value is the scale of the entity |
| variable.particle_age| How long the particle has lived |
| variable.particle_lifetime| How long the particle will live |
| variable.particle_random_1| A random from 0.0 to 1.0 that is constant for the lifetime of the particle |
| variable.particle_random_2| Another random from 0.0 to 1.0 that is constant for the lifetime of the particle |
| variable.particle_random_3| A third random from 0.0 to 1.0 that is constant for the lifetime of the particle |
| variable.particle_random_4| A fourth random from 0.0 to 1.0 that is constant for the lifetime of the particle |
