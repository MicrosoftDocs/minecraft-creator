---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:togglesetting"
description: "Describes the minecraft:togglesetting pack manifest"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:togglesetting

A boolean on/off setting that appears in the pack's world settings UI. Players can toggle features like 'Enable Hard Mode' or 'Show Tutorials' before entering a world. Scripts can read these values at runtime.


## 3.0.0.ToggleSetting Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| default | *not set* | Boolean true/false |  |  | 
| name | *not set* | String |  |  | 
| text | *not set* | String |  |  | 
| type | *not set* | [Type](#type-choices) choices |  |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| dropdown | Dropdown | |
| label | Label | |
| slider | Slider | |
| toggle | Toggle | |