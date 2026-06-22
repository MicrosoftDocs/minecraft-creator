---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:uv_proxy"
description: "Describes the minecraft:uv_proxy particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:uv_proxy

Controls UV texture mapping and flipbook animation for particles.


## Client Particles UV Proxy Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| flipbook | *not set* | [Flipbook](#client-particles-particle-appearance-billboard-flipbook-data) item |  | 
| texture_height | 1 | Integer number |  | 
| texture_width | 1 | Integer number |  | 
| uv | *not set* | Keyed set of strings |  | 
| uv (as Named set of objects) | *not set* | Key/item pairs of [Uv (Item Molang Expression)](#item-molang-expression) items |  | 
| uv (as Decimal number) | *not set* | Decimal number |  | 
| uv_size | *not set* | Keyed set of strings |  | 
| uv_size (as Named set of objects) | *not set* | Key/item pairs of [Uv Size (Item Molang Expression)](#item-molang-expression) items |  | 
| uv_size (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Particle Appearance Billboard Flipbook Data
Enables sprite sheet animation for particle billboards, cycling through frames over the particle's lifetime. Configure the texture grid dimensions, animation speed, and whether to loop or stretch timing. Essential for animated particles like animated flames, water splashes with frames, explosion sequences, and any particle using multi-frame textures.


#### Client Particles Particle Appearance Billboard Flipbook Data Properties

**JSON path:** `flipbook`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| base_UV | *not set* | Keyed set of strings |  | 
| base_UV (as Named set of objects) | *not set* | Key/item pairs of [Base UV (Item Molang Expression)](#item-molang-expression) items |  | 
| base_UV (as Decimal number) | *not set* | Decimal number |  | 
| frames_per_second | 0 | Decimal number |  | 
| loop | false | Boolean true/false |  | 
| max_frame | *not set* | Keyed set of strings |  | 
| max_frame (as Named set of objects) | *not set* | Key/item pairs of [Max Frame (Item Molang Expression)](#item-molang-expression) items |  | 
| max_frame (as Decimal number) | *not set* | Decimal number |  | 
| size_UV | [1, 1] | Array of numbers |  | 
| step_UV | [0, 0] | Array of numbers |  | 
| stretch_to_lifetime | false | Boolean true/false |  | 

#### Item Molang Expression

##### Item Molang Expression Properties

**JSON path:** `flipbook > base_UV`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 