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
| direction (Direction) | *not set* | Key/item pairs of [Direction (Direction)](#direction-direction) items |  | 
| direction (as Decimal number) | *not set* | Decimal number |  | 
| relative_position | *not set* | Molang array | Position offset relative to the particle emitter, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. | 
| relative_position (Relative Position) | *not set* | Key/item pairs of [Relative Position (Relative Position)](#relative-position-relative-position) items |  | 
| relative_position (as Decimal number) | *not set* | Decimal number |  | 
| rotation | *not set* | Keyed set of strings |  | 
| rotation (Rotation) | *not set* | Key/item pairs of [Rotation (Rotation)](#rotation-rotation) items |  | 
| rotation (as Decimal number) | *not set* | Decimal number |  | 

### Direction (Direction)

#### Direction Properties

**JSON path:** `direction`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Relative Position (Relative Position)

Same structure as [Direction (Direction)](#direction-direction).


### Rotation (Rotation)

Same structure as [Direction (Direction)](#direction-direction).
