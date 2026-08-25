---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_motion_parametric"
description: "Describes the minecraft:particle_motion_parametric particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_motion_parametric

Controls particle position and rotation using Molang expressions evaluated each frame, overriding physics simulation. Position is relative to emitter origin, allowing mathematical motion patterns like orbits, waves, spirals, or any path describable through equations. Ideal for magical effects, precise choreographed motion, or synchronized particle formations.


## Client Particles Particle Motion Parametric Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | *not set* | Molang array | Direction of particle motion, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. | 
| direction (as Named set of objects) | *not set* | Key/item pairs of [Direction (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| direction (as Decimal number) | *not set* | Decimal number |  | 
| relative_position | *not set* | Molang array | Position offset relative to the particle emitter, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. | 
| relative_position (as Named set of objects) | *not set* | Key/item pairs of [Relative Position (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| relative_position (as Decimal number) | *not set* | Decimal number |  | 
| rotation | *not set* | Keyed set of strings |  | 
| rotation (as Named set of objects) | *not set* | Key/item pairs of [Rotation (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| rotation (as Decimal number) | *not set* | Decimal number |  | 

### Legacy Molang Expression

#### Legacy Molang Expression Properties

**JSON path:** `direction`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 