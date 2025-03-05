---
author: mammerla
ms.author: mikeam
title: "Client Biome Documentation - minecraft:foliage_appearance"
description: "Describes the minecraft:foliage_appearance client biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Client Biome Documentation - minecraft:foliage_appearance

Sets the foliage color or color map used during rendering. Biomes without this component will have default foliage appearance.


## Foliage Appearance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | Object | RGB color of foliage, or a Foliage Color Map object. |  | 

## Samples


```json
"minecraft:foliage_appearance": {
	"minecraft:fog_appearance": {
		"fog_identifier": "minecraft:fog_the_end"
	}
```
