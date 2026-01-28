---
author: mammerla
ms.author: mikeam
title: "JSON UI Documentation - minecraft:ui_global_variables"
description: "Describes the minecraft:ui_global_variables json ui component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# JSON UI Documentation - minecraft:ui_global_variables

The _global_variables.json file that defines global variables used across all UI screens in Minecraft. Variables are defined with '$' prefix and can include colors, sizes, and other values.

> [!Note]
> Variable names must start with '$'. Colors are typically specified as [r, g, b] or [r, g, b, a] arrays with values between 0.0 and 1.0.


## UI Global Variables Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| $background_color | *not set* | String |  | Colors: `[0.2,0.2,0.2,0.8]` | 
| $button_text_color | *not set* | String |  | Colors: `[1,1,1]` | 
| $highlight_color | *not set* | String |  | Colors: `[1,0.84,0]` | 

## Samples

#### [Colors](colors)


```json
{
  "$button_text_color": [
    1,
    1,
    1
  ],
  "$background_color": [
    0.2,
    0.2,
    0.2,
    0.8
  ],
  "$highlight_color": [
    1,
    0.84,
    0
  ]
}
```
