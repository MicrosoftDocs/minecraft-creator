---
author: mammerla
ms.author: mikeam
title: "Deferred Rendering Documentation - minecraft:lightinggroup_lightingimpl_1_21_70"
description: "Describes the minecraft:lightinggroup_lightingimpl_1_21_70 deferred rendering"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Deferred Rendering Documentation - minecraft:lightinggroup_lightingimpl_1_21_70

Lighting Settings.


## Lighting Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | format_version |  | 
| minecraft:lighting_settings | *not set* | [Lighting Settings (LightingGroup LightingImpl<1,21,70> LightingSettings)](#lighting-settings-lightinggroup-lightingimpl<1,21,70>-lightingsettings) item | minecraft:lighting_settings |  | 

## Lighting Settings (LightingGroup LightingImpl<1,21,70> LightingSettings)
LightingGroup LightingImpl<1,21,70> LightingSettings.


#### LightingGroup LightingImpl<1,21,70> LightingSettings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient | *not set* | [Ambient (LightingGroup AmbientLight)](#ambient-lightinggroup-ambientlight) item | ambient |  | 
| description | *not set* | [Description (LightingGroup LightingDescription)](#description-lightinggroup-lightingdescription) item | description |  | 
| directional_lights | *not set* | [Directional Lights (LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights)](#directional-lights-lightinggroup-lightingimpl<1,21,70>-lightingsettings-directionallights) item | directional_lights |  | 
| emissive | *not set* | [Emissive (LightingGroup Emissive)](#emissive-lightinggroup-emissive) item | emissive |  | 
| sky | *not set* | [Sky (LightingGroup SkyIntensity<1,21,70>)](#sky-lightinggroup-skyintensity<1,21,70>) item | sky |  | 

## Ambient (LightingGroup AmbientLight)
LightingGroup AmbientLight.


#### LightingGroup AmbientLight Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | String | color |  | 
| color (Alternate 1) | *not set* | Array of numbers |  |  | 
| illuminance | *not set* | Decimal number | illuminance Value must be <= 5. |  | 

## Description (LightingGroup LightingDescription)
LightingGroup LightingDescription.


#### LightingGroup LightingDescription Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | identifier |  | 

## Directional Lights (LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights)
LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights.


#### LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| moon | *not set* | [Moon (LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights DirectionalLight)](#moon-lightinggroup-lightingimpl<1,21,70>-lightingsettings-directionallights-directionallight) item | moon |  | 
| orbital_offset_degrees | *not set* | Decimal number | orbital_offset_degrees Value must be <= 359.989990234375. |  | 
| orbital_offset_degrees (Alternate 1) | *not set* | Keyed set of numbers |  |  | 
| sun | *not set* | [Sun (LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights DirectionalLight)](#sun-lightinggroup-lightingimpl<1,21,70>-lightingsettings-directionallights-directionallight) item | sun |  | 

## Moon (LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights DirectionalLight)
LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights DirectionalLight.


#### LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights DirectionalLight Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | Keyed set of strings | color |  | 
| color (Alternate 1) | *not set* | String |  |  | 
| color (Alternate 2) | *not set* | Named set of objects |  |  | 
| illuminance | *not set* | Decimal number | illuminance Value must be <= 110000. |  | 
| illuminance (Alternate 1) | *not set* | Keyed set of numbers |  |  | 

## Sun (LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights DirectionalLight)
LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights DirectionalLight.


#### LightingGroup LightingImpl<1,21,70> LightingSettings DirectionalLights DirectionalLight Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | Keyed set of strings | color |  | 
| color (Alternate 1) | *not set* | String |  |  | 
| color (Alternate 2) | *not set* | Named set of objects |  |  | 
| illuminance | *not set* | Decimal number | illuminance Value must be <= 110000. |  | 
| illuminance (Alternate 1) | *not set* | Keyed set of numbers |  |  | 

## Emissive (LightingGroup Emissive)
LightingGroup Emissive.


#### LightingGroup Emissive Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| desaturation | *not set* | Decimal number | desaturation Value must be <= 1. |  | 

## Sky (LightingGroup SkyIntensity<1,21,70>)
LightingGroup SkyIntensity<1,21,70>.


#### LightingGroup SkyIntensity<1,21,70> Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| intensity | *not set* | Decimal number | intensity Value must be >= 0.10000000149011612. Value must be <= 1. |  | 