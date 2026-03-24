---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:0_0_dropdownsetting"
description: "Describes the minecraft:0_0_dropdownsetting pack manifest"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:0_0_dropdownsetting


## 3.0.0.DropdownSetting Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| default | *not set* | String |  | 
| name | *not set* | String |  | 
| options | *not set* | Array of [Options](#3.0.0.dropdownoption) items |  | 
| text | *not set* | String |  | 
| type | *not set* | [Type](#type-choices) choices |  | 

### 3.0.0.DropdownOption
A single option within a dropdown setting. Contains a unique identifier used by scripts and localized display text shown to players. Options are presented in the order defined.


#### 3.0.0.DropdownOption Properties

**JSON path:** `options`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name | *not set* | String |  | 
| text | *not set* | String |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| dropdown | Dropdown | |
| label | Label | |
| slider | Slider | |
| toggle | Toggle | |