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
| minecraft:color_grading_settings | *not set* | [Color Grading Settings](#color-grading-settings-item-type) item | minecraft:color_grading_settings |  | 

## Color Grading Settings item type
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color_grading | *not set* | [Color Grading](#color-grading-item-type) item | color_grading |  | 
| description | *not set* | [Description](#description-item-type) item | description |  | 
| tone_mapping | *not set* | [Tone Mapping](#tone-mapping-item-type) item | tone_mapping |  | 

## Color Grading item type
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGrading.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGrading Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| highlights | *not set* | [Highlights](#highlights-item-type) item | highlights |  | 
| midtones | *not set* | [Midtones](#midtones-item-type) item | midtones |  | 
| shadows | *not set* | [Shadows](#shadows-item-type) item | shadows |  | 

## Highlights item type
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Highlights.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Highlights Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| contrast | *not set* | Array of numbers | contrast Value must be <= 4. |  | 
| contrast (Alternate 1) | *not set* | [Contrast (Alternate 1)](#contrast-alternate-1-item-type) item |  |  | 
| enabled | *not set* | Boolean true/false | enabled |  | 
| gain | *not set* | Array of numbers | gain Value must be <= 10. |  | 
| gain (Alternate 1) | *not set* | [Gain (Alternate 1)](#gain-alternate-1-item-type) item |  |  | 
| gamma | *not set* | Array of numbers | gamma Value must be <= 4. |  | 
| gamma (Alternate 1) | *not set* | [Gamma (Alternate 1)](#gamma-alternate-1-item-type) item |  |  | 
| highlightsMin | *not set* | Decimal number | highlightsMin Value must be >= 1. Value must be <= 20. |  | 
| offset | *not set* | Array of numbers | offset Value must be >= -1. Value must be <= 1. |  | 
| offset (Alternate 1) | *not set* | [Offset (Alternate 1)](#offset-alternate-1-item-type) item |  |  | 
| saturation | *not set* | Array of numbers | saturation Value must be <= 10. |  | 
| saturation (Alternate 1) | *not set* | [Saturation (Alternate 1)](#saturation-alternate-1-item-type) item |  |  | 

## Contrast (Alternate 1) item type
Contrast


#### Contrast Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Gain (Alternate 1) item type
Gain


#### Gain Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Gamma (Alternate 1) item type
Gamma


#### Gamma Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Offset (Alternate 1) item type
Offset


#### Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Saturation (Alternate 1) item type
Saturation


#### Saturation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Midtones item type
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Midtones.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Midtones Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| contrast | *not set* | Array of numbers | contrast Value must be <= 4. |  | 
| contrast (Alternate 1) | *not set* | [Contrast (Alternate 1)](#contrast-alternate-1-item-type) item |  |  | 
| gain | *not set* | Array of numbers | gain Value must be <= 10. |  | 
| gain (Alternate 1) | *not set* | [Gain (Alternate 1)](#gain-alternate-1-item-type) item |  |  | 
| gamma | *not set* | Array of numbers | gamma Value must be <= 4. |  | 
| gamma (Alternate 1) | *not set* | [Gamma (Alternate 1)](#gamma-alternate-1-item-type) item |  |  | 
| offset | *not set* | Array of numbers | offset Value must be >= -1. Value must be <= 1. |  | 
| offset (Alternate 1) | *not set* | [Offset (Alternate 1)](#offset-alternate-1-item-type) item |  |  | 
| saturation | *not set* | Array of numbers | saturation Value must be <= 10. |  | 
| saturation (Alternate 1) | *not set* | [Saturation (Alternate 1)](#saturation-alternate-1-item-type) item |  |  | 

## Contrast (Alternate 1) item type
Contrast


#### Contrast Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Gain (Alternate 1) item type
Gain


#### Gain Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Gamma (Alternate 1) item type
Gamma


#### Gamma Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Offset (Alternate 1) item type
Offset


#### Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Saturation (Alternate 1) item type
Saturation


#### Saturation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Shadows item type
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Shadows.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Shadows Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| contrast | *not set* | Array of numbers | contrast Value must be <= 4. |  | 
| contrast (Alternate 1) | *not set* | [Contrast (Alternate 1)](#contrast-alternate-1-item-type) item |  |  | 
| enabled | *not set* | Boolean true/false | enabled |  | 
| gain | *not set* | Array of numbers | gain Value must be <= 10. |  | 
| gain (Alternate 1) | *not set* | [Gain (Alternate 1)](#gain-alternate-1-item-type) item |  |  | 
| gamma | *not set* | Array of numbers | gamma Value must be <= 4. |  | 
| gamma (Alternate 1) | *not set* | [Gamma (Alternate 1)](#gamma-alternate-1-item-type) item |  |  | 
| offset | *not set* | Array of numbers | offset Value must be >= -1. Value must be <= 1. |  | 
| offset (Alternate 1) | *not set* | [Offset (Alternate 1)](#offset-alternate-1-item-type) item |  |  | 
| saturation | *not set* | Array of numbers | saturation Value must be <= 10. |  | 
| saturation (Alternate 1) | *not set* | [Saturation (Alternate 1)](#saturation-alternate-1-item-type) item |  |  | 
| shadowsMax | *not set* | Decimal number | shadowsMax Value must be <= 1. |  | 

## Contrast (Alternate 1) item type
Contrast


#### Contrast Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Gain (Alternate 1) item type
Gain


#### Gain Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Gamma (Alternate 1) item type
Gamma


#### Gamma Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Offset (Alternate 1) item type
Offset


#### Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Saturation (Alternate 1) item type
Saturation


#### Saturation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | Decimal number | x |  | 
| y | *not set* | Decimal number | y |  | 
| z | *not set* | Decimal number | z |  | 

## Description item type
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGradingDescription.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGradingDescription Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | identifier |  | 

## Tone Mapping item type
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ToneMapping.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ToneMapping Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | *not set* | String | enum dragon_framerenderer_modules_Tonemapper |  | 