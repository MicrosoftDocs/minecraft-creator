---
author: mammerla
ms.author: mikeam
title: "Deferred Rendering Documentation - minecraft:lightinggroup_lightingimpl_1_21_70"
description: "Describes the minecraft:lightinggroup_lightingimpl_1_21_70 deferred rendering"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Deferred Rendering Documentation - minecraft:lightinggroup_lightingimpl_1_21_70

Lighting Settings.


## Lighting Settings Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | String | format_version | 
| minecraft:lighting_settings | *not set* | [Lighting Settings](#lighting-settings) item | minecraft:lighting_settings | 

### Lighting Settings
LightingGroup LightingImpl<1,21,70> LightingSettings.


#### LightingGroup LightingImpl<1,21,70> LightingSettings Properties

**JSON path:** `minecraft:lighting_settings`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| ambient | *not set* | [Ambient](#ambient) item | ambient | 
| description | *not set* | [Description](#description) item | description | 
| directional_lights | *not set* | [Directional Lights](#directional-lights) item | directional_lights | 
| emissive | *not set* | [Emissive](#emissive) item | emissive | 
| sky | *not set* | [Sky](#sky) item | sky | 

#### Ambient
LightingGroup AmbientLight.


##### LightingGroup AmbientLight Properties

**JSON path:** `minecraft:lighting_settings > ambient`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| color | *not set* | String | color | 
| color (as Array of numbers) | *not set* | Array of numbers |  | 
| illuminance | *not set* | Decimal number | illuminance Value must be <= 5. | 

#### Description
LightingGroup LightingDescription.


##### LightingGroup LightingDescription Properties

**JSON path:** `minecraft:lighting_settings > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | identifier | 

#### Directional Lights
LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights.


##### LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights Properties

**JSON path:** `minecraft:lighting_settings > directional_lights`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| moon | *not set* | [Moon](#moon) item | moon | 
| orbital_offset_degrees | *not set* | Decimal number | orbital_offset_degrees Value must be <= 359.989990234375. | 
| orbital_offset_degrees (as Keyed set of numbers) | *not set* | Keyed set of numbers |  | 
| sun | *not set* | [Sun](#sun) item | sun | 

##### Moon
LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights DirectionalLight.


###### LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights DirectionalLight Properties

**JSON path:** `minecraft:lighting_settings > directional_lights > moon`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| color | *not set* | Keyed set of strings | color | 
| color (as String) | *not set* | String |  | 
| color (as Named set of objects) | *not set* | Named set of objects |  | 
| illuminance | *not set* | Decimal number | illuminance Value must be <= 110000. | 
| illuminance (as Keyed set of numbers) | *not set* | Keyed set of numbers |  | 

##### Sun

Same structure as [Moon](#moon).


#### Emissive
LightingGroup Emissive.


##### LightingGroup Emissive Properties

**JSON path:** `minecraft:lighting_settings > emissive`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| desaturation | *not set* | Decimal number | desaturation Value must be <= 1. | 

#### Sky
LightingGroup SkyIntensity<1,21,70>.


##### LightingGroup SkyIntensity<1,21,70> Properties

**JSON path:** `minecraft:lighting_settings > sky`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| intensity | *not set* | Decimal number | intensity Value must be >= 0.10000000149011612. Value must be <= 1. | 