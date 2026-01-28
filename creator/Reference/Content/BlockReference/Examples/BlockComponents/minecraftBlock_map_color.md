---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:map_color"
description: "Describes the minecraft:map_color block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:map_color

Sets the color of the block when rendered to a map. If this component is omitted, the block will not show up on the map.


## Map Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | String | The color is represented as a hex value in the format "#RRGGBB". May also be expressed as an array of [R, G, B] from 0 to 255. |  | 
| tint_method | *not set* | String | Optional, tint multiplied to the color. Tint method logic varies, but often refers to the "rain" and "temperature" of the biome the block is placed in to compute the tint. Supported tint methods are "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage", "grass" and "water" This item requires a format version of at least 1.21.80. |  | 

## Samples
