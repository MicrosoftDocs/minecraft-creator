---
author: mammerla
ms.author: mikeam
title: "Deferred Rendering Documentation - minecraft:atmosphericscattering_atmosphericscatteringconfigsettings"
description: "Describes the minecraft:atmosphericscattering_atmosphericscatteringconfigsettings deferred rendering"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Deferred Rendering Documentation - minecraft:atmosphericscattering_atmosphericscatteringconfigsettings

Customize atmospherics effects.


## Atmospheric Scattering Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | format_version |  | 
| minecraft:atmosphere_settings | *not set* | [Atmosphere Settings](#atmosphere-settings-item-type) item | minecraft:atmosphere_settings |  | 

## Atmosphere Settings item type
AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings.


#### AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description-item-type) item | description |  | 
| horizon_blend_stops | *not set* | [Horizon Blend Stops](#horizon-blend-stops-item-type) item | horizon_blend_stops |  | 
| moon_mie_strength | *not set* | Decimal number | moon_mie_strength Value must be <= 20. |  | 
| moon_mie_strength (Alternate 1) | *not set* | Keyed set of numbers |  |  | 
| rayleigh_strength | *not set* | Decimal number | rayleigh_strength Value must be <= 11. |  | 
| rayleigh_strength (Alternate 1) | *not set* | Keyed set of numbers |  |  | 
| sky_horizon_color | *not set* | Keyed set of strings | sky_horizon_color |  | 
| sky_horizon_color (Alternate 1) | *not set* | String |  |  | 
| sky_horizon_color (Alternate 2) | *not set* | Named set of objects |  |  | 
| sky_zenith_color | *not set* | Keyed set of strings | sky_zenith_color |  | 
| sky_zenith_color (Alternate 1) | *not set* | String |  |  | 
| sky_zenith_color (Alternate 2) | *not set* | Named set of objects |  |  | 
| sun_glare_shape | *not set* | Decimal number | sun_glare_shape Value must be <= 50. |  | 
| sun_glare_shape (Alternate 1) | *not set* | Keyed set of numbers |  |  | 
| sun_mie_strength | *not set* | Decimal number | sun_mie_strength Value must be <= 60. |  | 
| sun_mie_strength (Alternate 1) | *not set* | Keyed set of numbers |  |  | 

## Description item type
AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings AtmosphericScatteringDescription.


#### AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings AtmosphericScatteringDescription Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | identifier |  | 

## Horizon Blend Stops item type
AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings HorizonBlendKeyFrames.


#### AtmosphericScattering AtmosphericScatteringConfigSettings AtmosphericScatteringSettings HorizonBlendKeyFrames Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Decimal number | max Value must be <= 1. |  | 
| max (Alternate 1) | *not set* | Keyed set of numbers |  |  | 
| mie_start | *not set* | Decimal number | mie_start Value must be <= 1.2000000476837158. |  | 
| mie_start (Alternate 1) | *not set* | Keyed set of numbers |  |  | 
| min | *not set* | Decimal number | min Value must be <= 1. |  | 
| min (Alternate 1) | *not set* | Keyed set of numbers |  |  | 
| start | *not set* | Decimal number | start Value must be <= 1. |  | 
| start (Alternate 1) | *not set* | Keyed set of numbers |  |  | 