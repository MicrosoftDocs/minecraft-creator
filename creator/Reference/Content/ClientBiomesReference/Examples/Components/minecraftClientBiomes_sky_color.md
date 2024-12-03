---
author: mammerla
ms.author: mikeam
title: Client Biomes Documentation - sky color
description: "A reference document detailing the 'sky color' client biome component"
ms.service: minecraft-bedrock-edition
ms.date: 12/03/2024 #Required; mm/dd/yyyy format.
---

# Client Biomes Documentation - sky_color

Sets the sky color used during rendering. Biomes without this component will have default sky color behavior.

## Attributes

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|sky_color| Object of type Color255RGB| Required| RGB color of the sky.|


## Example

```json
      "minecraft:sky_color": {
        "sky_color": "#000000"
      }
```      
