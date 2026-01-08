---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:slidersetting"
description: "Describes the minecraft:slidersetting pack manifest"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:slidersetting

A numeric slider setting that appears in the pack's world settings UI. Allows players to adjust values like 'Difficulty Multiplier' or 'Spawn Rate' within defined min/max bounds. Scripts can read the chosen value at runtime.


## 3.0.0.SliderSetting Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| default | *not set* | Decimal number |  |  | 
| max | *not set* | Decimal number |  |  | 
| min | *not set* | Decimal number |  |  | 
| name | *not set* | String |  |  | 
| step | *not set* | Decimal number |  |  | 
| text | *not set* | String |  |  | 
| type | *not set* | [Type](#type-choices) choices |  |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| dropdown | Dropdown | |
| label | Label | |
| slider | Slider | |
| toggle | Toggle | |