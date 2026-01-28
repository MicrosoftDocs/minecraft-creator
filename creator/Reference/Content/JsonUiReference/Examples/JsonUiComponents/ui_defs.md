---
author: mammerla
ms.author: mikeam
title: "JSON UI Documentation - minecraft:ui_defs"
description: "Describes the minecraft:ui_defs json ui component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# JSON UI Documentation - minecraft:ui_defs

The _ui_defs.json file that lists all UI screen files that should be loaded by Minecraft. This file is required for custom UI screens to be recognized.


## UI Definitions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ui_defs | *not set* | Array of strings | An array of paths to UI JSON files that should be loaded. Paths are relative to the resource pack root and typically start with 'ui/'. | Basic: `["ui/my_screen.json","ui/my_common_elements.json"]` | 

## Samples

#### [Basic](basic)


```json
{
  "ui_defs": [
    "ui/my_screen.json",
    "ui/my_common_elements.json"
  ]
}
```
