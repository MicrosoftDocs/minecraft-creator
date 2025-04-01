---
author: mammerla
ms.author: mikeam
title: "Client Biome Documentation - minecraft:water_appearance"
description: "Describes the minecraft:water_appearance client biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Client Biome Documentation - minecraft:water_appearance

Set the water surface color used during rendering. Biomes without this component will have default water surface color behavior.


## Water Appearance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| surface_color | *not set* | String | RGB color of the water surface |  | 
| surface_color (Alternate 1) | *not set* | Array of numbers |  |  | 
| surface_opacity | *not set* | Decimal number | Opacity of the water surface (must be between 0 for invisible and 1 for opaque, inclusive) |  | 

## Samples


```json
"minecraft:water_appearance": {
	"surface_color": "#62529e"}
```
