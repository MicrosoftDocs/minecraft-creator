---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:dropdownsetting"
description: "Describes the minecraft:dropdownsetting pack manifest"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:dropdownsetting

A dropdown selection setting that appears in the pack's world settings UI. Players choose from predefined options like game modes or difficulty presets. Each option has an internal ID and display text.


## 3.0.0.DropdownSetting Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| default | *not set* | String |  |  | 
| name | *not set* | String |  |  | 
| options | *not set* | [Options](#3.0.0.dropdownoption) item |  |  | 
| text | *not set* | String |  |  | 
| type | *not set* | [Type](#type-choices) choices |  |  | 

## 3.0.0.DropdownOption
A single option within a dropdown setting. Contains a unique identifier used by scripts and localized display text shown to players. Options are presented in the order defined.


#### 3.0.0.DropdownOption Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | String |  |  | 
| text | *not set* | String |  |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| dropdown | Dropdown | |
| label | Label | |
| slider | Slider | |
| toggle | Toggle | |