---
author: mammerla
ms.author: mikeam
title: "Deferred Rendering Documentation - minecraft:pbrfallbackconfig_pbrfallbackconfigsettings"
description: "Describes the minecraft:pbrfallbackconfig_pbrfallbackconfigsettings deferred rendering"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Deferred Rendering Documentation - minecraft:pbrfallbackconfig_pbrfallbackconfigsettings

Struct PBRFallbackConfig PBRFallbackConfigSettings Client Deferred Rendering.


## PBR Fallback Settings Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | String | format_version | 
| minecraft:pbr_fallback_settings | *not set* | [Pbr Fallback Settings](#pbr-fallback-settings) item | minecraft:pbr_fallback_settings | 

### Pbr Fallback Settings
PBRFallbackConfig PBRFallbackConfigSettings PBRFallbackSettings.


#### PBRFallbackConfig PBRFallbackConfigSettings PBRFallbackSettings Properties

**JSON path:** `minecraft:pbr_fallback_settings`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| actors (Actors) | *not set* | [Actors](#actors) item | actors | 
| actors (Actors) | *not set* | [Actors (Actors)](#actors-actors) item |  | 
| blocks (Blocks) | *not set* | [Blocks](#blocks) item | blocks | 
| blocks (Blocks) | *not set* | [Blocks (Blocks)](#blocks-blocks) item |  | 
| items (Items) | *not set* | [Items](#items) item | items | 
| items (Items) | *not set* | [Items (Items)](#items-items) item |  | 
| particles (Particles) | *not set* | [Particles](#particles) item | particles | 
| particles (Particles) | *not set* | [Particles (Particles)](#particles-particles) item |  | 

#### Actors
Actors


##### Actors Properties

**JSON path:** `minecraft:pbr_fallback_settings > actors`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| global_metalness_emissive_roughness | *not set* | String | global_metalness_emissive_roughness | 
| global_metalness_emissive_roughness (as Array of numbers) | *not set* | Array of numbers |  | 

#### Actors (Actors)
Actors


##### Actors Properties

**JSON path:** `minecraft:pbr_fallback_settings > actors`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| global_metalness_emissive_roughness_subsurface | *not set* | String | global_metalness_emissive_roughness_subsurface | 
| global_metalness_emissive_roughness_subsurface (as Array of numbers) | *not set* | Array of numbers |  | 

#### Blocks

Same structure as [Actors](#actors).


#### Blocks (Blocks)

Same structure as [Actors (Actors)](#actors-actors).


#### Items

Same structure as [Actors](#actors).


#### Items (Items)

Same structure as [Actors (Actors)](#actors-actors).


#### Particles

Same structure as [Actors](#actors).


#### Particles (Particles)

Same structure as [Actors (Actors)](#actors-actors).
