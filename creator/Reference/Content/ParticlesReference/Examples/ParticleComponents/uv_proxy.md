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

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| flipbook | *not set* | [Flipbook](#client-particles-particle-appearance-billboard-flipbook-data) item |  |  | 
| texture_height | 1 | Integer number |  |  | 
| texture_width | 1 | Integer number |  |  | 
| uv | *not set* | Keyed set of strings |  |  | 
| uv (Alternate 1) | *not set* | Key/item pairs of [Uv](#uv) items |  |  | 
| uv (Alternate 2) | *not set* | Decimal number |  |  | 
| uv_size | *not set* | Keyed set of strings |  |  | 
| uv_size (Alternate 1) | *not set* | Key/item pairs of [Uv Size](#uv-size) items |  |  | 
| uv_size (Alternate 2) | *not set* | Decimal number |  |  | 

## Client Particles Particle Appearance Billboard Flipbook Data
Enables sprite sheet animation for particle billboards, cycling through frames over the particle's lifetime. Configure the texture grid dimensions, animation speed, and whether to loop or stretch timing. Essential for animated particles like animated flames, water splashes with frames, explosion sequences, and any particle using multi-frame textures.


#### Client Particles Particle Appearance Billboard Flipbook Data Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_UV | *not set* | Keyed set of strings |  |  | 
| base_UV (Alternate 1) | *not set* | Key/item pairs of [Base UV](#base-uv) items |  |  | 
| base_UV (Alternate 2) | *not set* | Decimal number |  |  | 
| frames_per_second | 0 | Decimal number |  |  | 
| loop | false | Boolean true/false |  |  | 
| max_frame | *not set* | Keyed set of strings |  |  | 
| max_frame (Alternate 1) | *not set* | Key/item pairs of [Max Frame](#max-frame) items |  |  | 
| max_frame (Alternate 2) | *not set* | Decimal number |  |  | 
| size_UV | [1, 1] | Array of numbers |  |  | 
| step_UV | [0, 0] | Array of numbers |  |  | 
| stretch_to_lifetime | false | Boolean true/false |  |  | 

## Base UV

#### Base UV Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Max Frame

#### Max Frame Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Uv

#### Uv Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Uv Size

#### Uv Size Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 