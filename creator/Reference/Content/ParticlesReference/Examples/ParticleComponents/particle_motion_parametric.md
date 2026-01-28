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

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | Molang array | Direction of particle motion, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. |  | 
| direction (Alternate 1) | *not set* | Key/item pairs of [Direction](#direction) items |  |  | 
| direction (Alternate 2) | *not set* | Decimal number |  |  | 
| relative_position | *not set* | Molang array | Position offset relative to the particle emitter, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. |  | 
| relative_position (Alternate 1) | *not set* | Key/item pairs of [Relative Position](#relative-position) items |  |  | 
| relative_position (Alternate 2) | *not set* | Decimal number |  |  | 
| rotation | *not set* | Keyed set of strings |  |  | 
| rotation (Alternate 1) | *not set* | Key/item pairs of [Rotation](#rotation) items |  |  | 
| rotation (Alternate 2) | *not set* | Decimal number |  |  | 

## Direction

#### Direction Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Relative Position

#### Relative Position Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Rotation

#### Rotation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 