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

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| linear_acceleration | [0, 0, 0] | Molang array | The linear acceleration of particles, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. |  | 
| linear_acceleration (Alternate 1) | *not set* | Key/item pairs of [Linear Acceleration](#linear-acceleration) items |  |  | 
| linear_acceleration (Alternate 2) | *not set* | Decimal number |  |  | 
| linear_drag_coefficient | 0 | Molang | The drag coefficient applied to particle motion. Can be a number or Molang expression. |  | 
| linear_drag_coefficient (Alternate 1) | *not set* | Key/item pairs of [Linear Drag Coefficient](#linear-drag-coefficient) items |  |  | 
| linear_drag_coefficient (Alternate 2) | *not set* | Decimal number |  |  | 
| rotation_acceleration | 0 | Molang | The rotation acceleration. Can be a number or Molang expression. |  | 
| rotation_acceleration (Alternate 1) | *not set* | Key/item pairs of [Rotation Acceleration](#rotation-acceleration) items |  |  | 
| rotation_acceleration (Alternate 2) | *not set* | Decimal number |  |  | 
| rotation_drag_coefficient | 0 | Molang | The rotation drag coefficient. Can be a number or Molang expression. |  | 
| rotation_drag_coefficient (Alternate 1) | *not set* | Key/item pairs of [Rotation Drag Coefficient](#rotation-drag-coefficient) items |  |  | 
| rotation_drag_coefficient (Alternate 2) | *not set* | Decimal number |  |  | 

## Linear Acceleration

#### Linear Acceleration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Linear Drag Coefficient

#### Linear Drag Coefficient Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Rotation Acceleration

#### Rotation Acceleration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Rotation Drag Coefficient

#### Rotation Drag Coefficient Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 