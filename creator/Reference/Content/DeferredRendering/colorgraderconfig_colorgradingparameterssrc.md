---
author: mammerla
ms.author: mikeam
title: "Deferred Rendering Documentation - minecraft:colorgraderconfig_colorgradingparameterssrc"
description: "Describes the minecraft:colorgraderconfig_colorgradingparameterssrc deferred rendering"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Deferred Rendering Documentation - minecraft:colorgraderconfig_colorgradingparameterssrc

Minecraft's color grading system allows for many degrees of customization of the final image. You can control the saturation, contrast, gain, and offset of pixels per RGB channel. This can be done on a global scale regardless of pixel luminance, or it can be done on a more fine-grained scale with unique sets of parameters for shadows, midtones and highlights.


## Color Grading Settings Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | String | format_version | 
| minecraft:color_grading_settings | *not set* | [Color Grading Settings](#color-grading-settings) item | minecraft:color_grading_settings | 

### Color Grading Settings
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings.


#### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Properties

**JSON path:** `minecraft:color_grading_settings`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| color_grading | *not set* | [Color Grading](#color-grading) item | color_grading | 
| description | *not set* | [Description](#description) item | description | 
| tone_mapping | *not set* | [Tone Mapping](#tone-mapping) item | tone_mapping | 

#### Color Grading
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGrading.


##### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGrading Properties

**JSON path:** `minecraft:color_grading_settings > color_grading`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| highlights | *not set* | [Highlights](#highlights) item | highlights | 
| midtones | *not set* | [Midtones](#midtones) item | midtones | 
| shadows | *not set* | [Shadows](#shadows) item | shadows | 

##### Highlights
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Highlights.


###### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Highlights Properties

**JSON path:** `minecraft:color_grading_settings > color_grading > highlights`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| contrast | *not set* | Array of numbers | contrast Value must be <= 4. | 
| contrast (Contrast) | *not set* | [Contrast (Contrast)](#contrast-contrast) item |  | 
| enabled | *not set* | Boolean true/false | enabled | 
| gain | *not set* | Array of numbers | gain Value must be <= 10. | 
| gain (Gain) | *not set* | [Gain (Gain)](#gain-gain) item |  | 
| gamma | *not set* | Array of numbers | gamma Value must be <= 4. | 
| gamma (Gamma) | *not set* | [Gamma (Gamma)](#gamma-gamma) item |  | 
| highlightsMin | *not set* | Decimal number | highlightsMin Value must be >= 1. Value must be <= 20. | 
| offset | *not set* | Array of numbers | offset Value must be >= -1. Value must be <= 1. | 
| offset (Offset) | *not set* | [Offset (Offset)](#offset-offset) item |  | 
| saturation | *not set* | Array of numbers | saturation Value must be <= 10. | 
| saturation (Saturation) | *not set* | [Saturation (Saturation)](#saturation-saturation) item |  | 

###### Contrast (Contrast)
Contrast


###### Contrast Properties

**JSON path:** `minecraft:color_grading_settings > color_grading > highlights > contrast`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | *not set* | Decimal number | x | 
| y | *not set* | Decimal number | y | 
| z | *not set* | Decimal number | z | 

###### Gain (Gain)

Same structure as [Contrast (Contrast)](#contrast-contrast).


###### Gamma (Gamma)

Same structure as [Contrast (Contrast)](#contrast-contrast).


###### Offset (Offset)

Same structure as [Contrast (Contrast)](#contrast-contrast).


###### Saturation (Saturation)

Same structure as [Contrast (Contrast)](#contrast-contrast).


##### Midtones
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Midtones.


###### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Midtones Properties

**JSON path:** `minecraft:color_grading_settings > color_grading > midtones`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| contrast | *not set* | Array of numbers | contrast Value must be <= 4. | 
| contrast (Contrast) | *not set* | [Contrast (Contrast)](#contrast-contrast) item |  | 
| gain | *not set* | Array of numbers | gain Value must be <= 10. | 
| gain (Gain) | *not set* | [Gain (Gain)](#gain-gain) item |  | 
| gamma | *not set* | Array of numbers | gamma Value must be <= 4. | 
| gamma (Gamma) | *not set* | [Gamma (Gamma)](#gamma-gamma) item |  | 
| offset | *not set* | Array of numbers | offset Value must be >= -1. Value must be <= 1. | 
| offset (Offset) | *not set* | [Offset (Offset)](#offset-offset) item |  | 
| saturation | *not set* | Array of numbers | saturation Value must be <= 10. | 
| saturation (Saturation) | *not set* | [Saturation (Saturation)](#saturation-saturation) item |  | 

##### Shadows
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Shadows.


###### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings Shadows Properties

**JSON path:** `minecraft:color_grading_settings > color_grading > shadows`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| contrast | *not set* | Array of numbers | contrast Value must be <= 4. | 
| contrast (Contrast) | *not set* | [Contrast (Contrast)](#contrast-contrast) item |  | 
| enabled | *not set* | Boolean true/false | enabled | 
| gain | *not set* | Array of numbers | gain Value must be <= 10. | 
| gain (Gain) | *not set* | [Gain (Gain)](#gain-gain) item |  | 
| gamma | *not set* | Array of numbers | gamma Value must be <= 4. | 
| gamma (Gamma) | *not set* | [Gamma (Gamma)](#gamma-gamma) item |  | 
| offset | *not set* | Array of numbers | offset Value must be >= -1. Value must be <= 1. | 
| offset (Offset) | *not set* | [Offset (Offset)](#offset-offset) item |  | 
| saturation | *not set* | Array of numbers | saturation Value must be <= 10. | 
| saturation (Saturation) | *not set* | [Saturation (Saturation)](#saturation-saturation) item |  | 
| shadowsMax | *not set* | Decimal number | shadowsMax Value must be <= 1. | 

#### Description
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGradingDescription.


##### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ColorGradingDescription Properties

**JSON path:** `minecraft:color_grading_settings > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | identifier | 

#### Tone Mapping
ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ToneMapping.


##### ColorGraderConfig ColorGradingParametersSrc ColorGradingSettings ToneMapping Properties

**JSON path:** `minecraft:color_grading_settings > tone_mapping`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| operator | *not set* | String | enum dragon_framerenderer_modules_Tonemapper | 