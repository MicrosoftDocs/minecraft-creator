---
author: mammerla
ms.author: mikeam
title: Client Biomes Documentation - water appearance
description: "A reference document detailing the 'water appearance' client biome component"
ms.service: minecraft-bedrock-edition
ms.date: 12/03/2024 #Required; mm/dd/yyyy format.
---

# Client Biomes Documentation - water_appearance

Sets the water surface color used during rendering. Biomes without this component will have default water surface color behavior.

## Attributes

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|surface_color| Object of type Color255RGB| Required| RGB color of the water surface.|


## Example JSON

```JSON
      "minecraft:water_appearance": {
        "surface_color": "#62529e"
      }
```      