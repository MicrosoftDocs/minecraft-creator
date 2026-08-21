---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_motion_dynamic"
description: "Describes the minecraft:particle_motion_dynamic particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_motion_dynamic

Applies physics simulation to particle movement including gravity, acceleration, and air resistance. Linear acceleration adds constant force (gravity pulls down, wind pushes sideways), while drag slows particles over time. Rotation acceleration and drag control spinning. Creates natural-feeling motion for smoke rising, debris falling, or leaves drifting.


## Client Particles Particle Motion Dynamic Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| linear_acceleration | [0, 0, 0] | Molang array | The linear acceleration of particles, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| linear_acceleration (as Named set of objects) | *not set* | Key/item pairs of [Linear Acceleration (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| linear_acceleration (as Decimal number) | *not set* | Decimal number |  | 
| linear_drag_coefficient | 0 | Molang | The drag coefficient applied to particle motion. Can be a number or Molang expression. | 
| linear_drag_coefficient (as Named set of objects) | *not set* | Key/item pairs of [Linear Drag Coefficient (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| linear_drag_coefficient (as Decimal number) | *not set* | Decimal number |  | 
| rotation_acceleration | 0 | Molang | The rotation acceleration. Can be a number or Molang expression. | 
| rotation_acceleration (as Named set of objects) | *not set* | Key/item pairs of [Rotation Acceleration (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| rotation_acceleration (as Decimal number) | *not set* | Decimal number |  | 
| rotation_drag_coefficient | 0 | Molang | The rotation drag coefficient. Can be a number or Molang expression. | 
| rotation_drag_coefficient (as Named set of objects) | *not set* | Key/item pairs of [Rotation Drag Coefficient (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| rotation_drag_coefficient (as Decimal number) | *not set* | Decimal number |  | 

### Legacy Molang Expression

#### Legacy Molang Expression Properties

**JSON path:** `linear_acceleration`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 