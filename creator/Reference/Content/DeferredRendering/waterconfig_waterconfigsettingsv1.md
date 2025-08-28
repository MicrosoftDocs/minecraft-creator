---
author: mammerla
ms.author: mikeam
title: "Deferred Rendering Documentation - minecraft:waterconfig_waterconfigsettingsv1"
description: "Describes the minecraft:waterconfig_waterconfigsettingsv1 deferred rendering"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Deferred Rendering Documentation - minecraft:waterconfig_waterconfigsettingsv1

Struct WaterConfig WaterConfigSettingsV1 Client Deferred Rendering.


## Water Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | [editor(readonly:true)] |  | 
| minecraft:water_settings | *not set* | [Water Settings (WaterConfig WaterConfigSettingsV1 WaterSettings)](#water-settings-waterconfig-waterconfigsettingsv1-watersettings) item | minecraft:water_settings |  | 

## Water Settings (WaterConfig WaterConfigSettingsV1 WaterSettings)
WaterConfig WaterConfigSettingsV1 WaterSettings.


#### WaterConfig WaterConfigSettingsV1 WaterSettings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| caustics | *not set* | [Caustics (Mce Framebuilder CausticsParameters)](#caustics-mce-framebuilder-causticsparameters) item | caustics |  | 
| description | *not set* | [Description (WaterConfig WaterConfigSettingsV0 WaterSettings WaterDescription)](#description-waterconfig-waterconfigsettingsv0-watersettings-waterdescription) item | description |  | 
| particle_concentrations | *not set* | [Particle Concentrations (WaterConfig WaterConfigSettingsV0 WaterSettings PSY)](#particle-concentrations-waterconfig-waterconfigsettingsv0-watersettings-psy) item | particle_concentrations |  | 
| waves | *not set* | [Waves (Mce Framebuilder WaterSurfaceParameters)](#waves-mce-framebuilder-watersurfaceparameters) item | waves |  | 

## Caustics (Mce Framebuilder CausticsParameters)
Mce Framebuilder CausticsParameters.


#### Mce Framebuilder CausticsParameters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| enabled | *not set* | Boolean true/false | enabled |  | 
| frame_length | *not set* | Decimal number | frame_length Value must be >= 0.009999999776482582. Value must be <= 5. |  | 
| power | *not set* | Integer number | power Value must be >= 1. Value must be <= 6. |  | 
| scale | *not set* | Decimal number | scale Value must be >= 0.10000000149011612. Value must be <= 5. |  | 
| texture | *not set* | String | texture |  | 

## Description (WaterConfig WaterConfigSettingsV0 WaterSettings WaterDescription)
WaterConfig WaterConfigSettingsV0 WaterSettings WaterDescription.


#### WaterConfig WaterConfigSettingsV0 WaterSettings WaterDescription Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | identifier |  | 

## Particle Concentrations (WaterConfig WaterConfigSettingsV0 WaterSettings PSY)
WaterConfig WaterConfigSettingsV0 WaterSettings PSY.


#### WaterConfig WaterConfigSettingsV0 WaterSettings PSY Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cdom | *not set* | Decimal number | cdom Value must be <= 15. |  | 
| chlorophyll | *not set* | Decimal number | chlorophyll Value must be <= 10. |  | 
| suspended_sediment | *not set* | Decimal number | suspended_sediment Value must be <= 300. |  | 

## Waves (Mce Framebuilder WaterSurfaceParameters)
Mce Framebuilder WaterSurfaceParameters.


#### Mce Framebuilder WaterSurfaceParameters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| depth | *not set* | Decimal number | depth Value must be <= 3. |  | 
| direction_increment | *not set* | Decimal number | direction_increment Value must be <= 360. |  | 
| enabled | *not set* | Boolean true/false | enabled |  | 
| frequency | *not set* | Decimal number | frequency Value must be >= 0.009999999776482582. Value must be <= 3. |  | 
| frequency_scaling | *not set* | Decimal number | frequency_scaling Value must be <= 2. |  | 
| mix | *not set* | Decimal number | mix Value must be <= 1. |  | 
| octaves | *not set* | Integer number | octaves Value must be >= 1. Value must be <= 30. |  | 
| pull | *not set* | Decimal number | pull Value must be >= -1. Value must be <= 1. |  | 
| sampleWidth | *not set* | Decimal number | sampleWidth Value must be >= 0.009999999776482582. Value must be <= 1. |  | 
| shape | *not set* | Decimal number | shape Value must be >= 1. Value must be <= 10. |  | 
| speed | *not set* | Decimal number | speed Value must be >= 0.009999999776482582. Value must be <= 10. |  | 
| speed_scaling | *not set* | Decimal number | speed_scaling Value must be <= 2. |  | 