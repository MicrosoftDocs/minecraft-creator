---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_initial_spin"
description: "Describes the minecraft:particle_initial_spin particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_initial_spin

Sets the starting rotation angle and spin velocity for each particle. Initial rotation provides random orientation variety, while spin_rate creates continuous rotation during the particle's lifetime. Use for debris that tumbles, leaves spinning as they fall, sparks that twist, or any particle needing rotational motion.


## Client Particles Particle Initial Spin Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| rotation | 0 | Keyed set of strings |  | 
| rotation (Rotation) | *not set* | Key/item pairs of [Rotation (Rotation)](#rotation-rotation) items |  | 
| rotation (as Decimal number) | *not set* | Decimal number |  | 
| rotation_rate | 0 | Keyed set of strings |  | 
| rotation_rate (Rotation Rate) | *not set* | Key/item pairs of [Rotation Rate (Rotation Rate)](#rotation-rate-rotation-rate) items |  | 
| rotation_rate (as Decimal number) | *not set* | Decimal number |  | 

### Rotation (Rotation)

#### Rotation Properties

**JSON path:** `rotation`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Rotation Rate (Rotation Rate)

Same structure as [Rotation (Rotation)](#rotation-rotation).
