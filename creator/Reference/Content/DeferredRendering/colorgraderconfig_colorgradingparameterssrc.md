---
author: mammerla
ms.author: mikeam
title: "Deferred Rendering Documentation - minecraft:colorgraderconfig_colorgradingparameterssrc"
description: "Describes the minecraft:colorgraderconfig_colorgradingparameterssrc deferred rendering"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Deferred Rendering Documentation - minecraft:colorgraderconfig_colorgradingparameterssrc

Minecraft's color grading system allows for many degrees of customization of the final image. You can control the saturation, contrast, gain, and offset of pixels per RGB channel. This can be done on a global scale regardless of pixel luminance, or it can be done on a more fine-grained scale with unique sets of parameters for shadows, midtones and highlights.


## Color Grading Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | format_version |  | 
| minecraft:color_grading_settings | *not set* | [Color Grading Settings](#color-grading-settings) item | minecraft:color_grading_settings |  | 

## Color Grading Settings
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color_grading | *not set* | [Color Grading](#color-grading) item | color_grading |  | 
| description | *not set* | [Description](#description) item | description |  | 
| tone_mapping | *not set* | [Tone Mapping](#tone-mapping) item | tone_mapping |  | 

## Color Grading
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGrading.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGrading Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| highlights | *not set* | [Highlights](#highlights) item | highlights |  | 
| midtones | *not set* | [Midtones](#midtones) item | midtones |  | 
| shadows | *not set* | [Shadows](#shadows) item | shadows |  | 

## Highlights
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Highlights.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Highlights Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| contrast | *not set* | Array of numbers | contrast Value must be <= 4. |  | 
| contrast (Alternate 1) | *not set* | [Contrast](#contrast) item |  |  | 
| enabled | *not set* | Boolean true/false | enabled |  | 
| gain | *not set* | Array of numbers | gain Value must be <= 10. |  | 
| gain (Alternate 1) | *not set* | [Gain](#gain) item |  |  | 
| gamma | *not set* | Array of numbers | gamma Value must be <= 4. |  | 
| gamma (Alternate 1) | *not set* | [Gamma](#gamma) item |  |  | 
| highlightsMin | *not set* | Decimal number | highlightsMin Value must be >= 1. Value must be <= 20. |  | 
| offset | *not set* | Array of numbers | offset Value must be >= -1. Value must be <= 1. |  | 
| offset (Alternate 1) | *not set* | [Offset](#offset) item |  |  | 
| saturation | *not set* | Array of numbers | saturation Value must be <= 10. |  | 
| saturation (Alternate 1) | *not set* | [Saturation](#saturation) item |  |  | 

## Contrast
Contrast


#### Contrast Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Gain
Gain


#### Gain Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Gamma
Gamma


#### Gamma Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Offset
Offset


#### Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Saturation
Saturation


#### Saturation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Midtones
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Midtones.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Midtones Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| contrast | *not set* | Array of numbers | contrast Value must be <= 4. |  | 
| contrast (Alternate 1) | *not set* | [Contrast](#contrast) item |  |  | 
| gain | *not set* | Array of numbers | gain Value must be <= 10. |  | 
| gain (Alternate 1) | *not set* | [Gain](#gain) item |  |  | 
| gamma | *not set* | Array of numbers | gamma Value must be <= 4. |  | 
| gamma (Alternate 1) | *not set* | [Gamma](#gamma) item |  |  | 
| offset | *not set* | Array of numbers | offset Value must be >= -1. Value must be <= 1. |  | 
| offset (Alternate 1) | *not set* | [Offset](#offset) item |  |  | 
| saturation | *not set* | Array of numbers | saturation Value must be <= 10. |  | 
| saturation (Alternate 1) | *not set* | [Saturation](#saturation) item |  |  | 

## Shadows
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Shadows.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Shadows Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| contrast | *not set* | Array of numbers | contrast Value must be <= 4. |  | 
| contrast (Alternate 1) | *not set* | [Contrast](#contrast) item |  |  | 
| enabled | *not set* | Boolean true/false | enabled |  | 
| gain | *not set* | Array of numbers | gain Value must be <= 10. |  | 
| gain (Alternate 1) | *not set* | [Gain](#gain) item |  |  | 
| gamma | *not set* | Array of numbers | gamma Value must be <= 4. |  | 
| gamma (Alternate 1) | *not set* | [Gamma](#gamma) item |  |  | 
| offset | *not set* | Array of numbers | offset Value must be >= -1. Value must be <= 1. |  | 
| offset (Alternate 1) | *not set* | [Offset](#offset) item |  |  | 
| saturation | *not set* | Array of numbers | saturation Value must be <= 10. |  | 
| saturation (Alternate 1) | *not set* | [Saturation](#saturation) item |  |  | 
| shadowsMax | *not set* | Decimal number | shadowsMax Value must be <= 1. |  | 

## Description
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGradingDescription.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGradingDescription Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | identifier |  | 

## Tone Mapping
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ToneMapping.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ToneMapping Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | *not set* | String | enum dragon_framerenderer_modules_Tonemapper |  | 