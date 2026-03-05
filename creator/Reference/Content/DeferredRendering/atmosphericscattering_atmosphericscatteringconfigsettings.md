---
author: mammerla
ms.author: mikeam
title: "Deferred Rendering Documentation - minecraft:atmosphericscattering_atmosphericscatteringconfigsettings"
description: "Describes the minecraft:atmosphericscattering_atmosphericscatteringconfigsettings deferred rendering"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Deferred Rendering Documentation - minecraft:atmosphericscattering_atmosphericscatteringconfigsettings

Customize atmospherics effects.


## Atmospheric Scattering Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | String | format_version | 
| minecraft:atmosphere_settings | *not set* | [Atmosphere Settings](#atmosphere-settings) item | minecraft:atmosphere_settings | 

### Atmosphere Settings
AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings.


#### AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings Properties

**JSON path:** `minecraft:atmosphere_settings`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#description) item | description | 
| horizon_blend_stops | *not set* | [Horizon Blend Stops](#horizon-blend-stops) item | horizon_blend_stops | 
| moon_mie_strength | *not set* | Decimal number | moon_mie_strength Value must be <= 20. | 
| moon_mie_strength (as Keyed set of numbers) | *not set* | Keyed set of numbers |  | 
| rayleigh_strength | *not set* | Decimal number | rayleigh_strength Value must be <= 11. | 
| rayleigh_strength (as Keyed set of numbers) | *not set* | Keyed set of numbers |  | 
| sky_horizon_color | *not set* | Keyed set of strings | sky_horizon_color | 
| sky_horizon_color (as String) | *not set* | String |  | 
| sky_horizon_color (as Named set of objects) | *not set* | Named set of objects |  | 
| sky_zenith_color | *not set* | Keyed set of strings | sky_zenith_color | 
| sky_zenith_color (as String) | *not set* | String |  | 
| sky_zenith_color (as Named set of objects) | *not set* | Named set of objects |  | 
| sun_glare_shape | *not set* | Decimal number | sun_glare_shape Value must be <= 50. | 
| sun_glare_shape (as Keyed set of numbers) | *not set* | Keyed set of numbers |  | 
| sun_mie_strength | *not set* | Decimal number | sun_mie_strength Value must be <= 60. | 
| sun_mie_strength (as Keyed set of numbers) | *not set* | Keyed set of numbers |  | 

#### Description
AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings AtmosphericScatteringDescription.


##### AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings AtmosphericScatteringDescription Properties

**JSON path:** `minecraft:atmosphere_settings > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | identifier | 

#### Horizon Blend Stops
AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings HorizonBlendKeyFrames.


##### AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings HorizonBlendKeyFrames Properties

**JSON path:** `minecraft:atmosphere_settings > horizon_blend_stops`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | *not set* | Decimal number | max Value must be <= 1. | 
| max (as Keyed set of numbers) | *not set* | Keyed set of numbers |  | 
| mie_start | *not set* | Decimal number | mie_start Value must be <= 1.2000000476837158. | 
| mie_start (as Keyed set of numbers) | *not set* | Keyed set of numbers |  | 
| min | *not set* | Decimal number | min Value must be <= 1. | 
| min (as Keyed set of numbers) | *not set* | Keyed set of numbers |  | 
| start | *not set* | Decimal number | start Value must be <= 1. | 
| start (as Keyed set of numbers) | *not set* | Keyed set of numbers |  | 