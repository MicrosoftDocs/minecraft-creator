---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_appearance_billboard"
description: "Describes the minecraft:particle_appearance_billboard particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_appearance_billboard

Controls how particle sprites render and orient toward the camera. The facing_camera_mode determines billboard behavior: 'lookat_xyz' always faces the camera (classic sprites), 'rotate_y' only rotates vertically (tall flames), and direction modes align with particle velocity (arrows, sparks). Size controls particle dimensions using Molang for dynamic scaling.


## Client Particles Particle Appearance Billboard Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | Object |  |  | 
| facing_camera_mode | *not set* | [Facing Camera Mode](#facing-camera-mode-choices) choices | The facing mode of the billboard. Controls how the particle faces the camera. |  | 
| size | *not set* | Molang array | The size of the particle billboard, as [width, height] using Molang expressions or numbers. Value must have at least 2 items. Value must have at most 2 items. |  | 
| size (Alternate 1) | *not set* | Key/item pairs of [Size](#size) items |  |  | 
| size (Alternate 2) | *not set* | Decimal number |  |  | 
| uv | *not set* | Object |  |  | 

### Facing Camera Mode choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| lookat_xyz | Look At XYZ | |
| lookat_y | Look At Y | |
| lookat_direction | Look At Direction | |
| rotate_xyz | Rotate XYZ | |
| rotate_y | Rotate Y | |
| direction_x | Direction X | |
| direction_y | Direction Y | |
| direction_z | Direction Z | |
| emitter_transform_xy | Emitter Transform XY | |
| emitter_transform_xz | Emitter Transform XZ | |
| emitter_transform_yz | Emitter Transform YZ | |

## Size

#### Size Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 