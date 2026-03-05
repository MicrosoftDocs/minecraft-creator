---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_appearance_billboard_flipbook_data"
description: "Describes the minecraft:particle_appearance_billboard_flipbook_data particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_appearance_billboard_flipbook_data

Enables sprite sheet animation for particle billboards, cycling through frames over the particle's lifetime. Configure the texture grid dimensions, animation speed, and whether to loop or stretch timing. Essential for animated particles like animated flames, water splashes with frames, explosion sequences, and any particle using multi-frame textures.


## Client Particles Particle Appearance Billboard Flipbook Data Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| base_UV | *not set* | Keyed set of strings |  | 
| base_UV (Base UV) | *not set* | Key/item pairs of [Base UV (Base UV)](#base-uv-base-uv) items |  | 
| base_UV (as Decimal number) | *not set* | Decimal number |  | 
| frames_per_second | 0 | Decimal number |  | 
| loop | false | Boolean true/false |  | 
| max_frame | *not set* | Keyed set of strings |  | 
| max_frame (Max Frame) | *not set* | Key/item pairs of [Max Frame (Max Frame)](#max-frame-max-frame) items |  | 
| max_frame (as Decimal number) | *not set* | Decimal number |  | 
| size_UV | [1, 1] | Array of numbers |  | 
| step_UV | [0, 0] | Array of numbers |  | 
| stretch_to_lifetime | false | Boolean true/false |  | 

### Base UV (Base UV)

#### Base UV Properties

**JSON path:** `base_UV`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Max Frame (Max Frame)

Same structure as [Base UV (Base UV)](#base-uv-base-uv).
