---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:labelsetting"
description: "Describes the minecraft:labelsetting pack manifest"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:labelsetting

A read-only text label in the pack's world settings UI. Use labels to display instructions, section headers, or explanatory text between interactive settings. Labels don't have values—they're purely informational.


## 3.0.0.LabelSetting Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| text | *not set* | String |  |  | 
| type | *not set* | [Type](#type-choices) choices |  |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| dropdown | Dropdown | |
| label | Label | |
| slider | Slider | |
| toggle | Toggle | |