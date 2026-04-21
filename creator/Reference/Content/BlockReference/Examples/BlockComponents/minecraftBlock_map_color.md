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

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| color | *not set* | String | The color is represented as a hex value in the format "#RRGGBB". May also be expressed as an array of [R, G, B] from 0 to 255. | 
| tint_method | *not set* | String | Optional, tint multiplied to the color. | 

### tint_method

Optional, tint multiplied to the color. Tint method logic varies, but often refers to the "rain" and "temperature" of the biome the block is placed in to compute the tint. Supported tint methods are "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage", "grass" and "water" This item requires a format version of at least 1.21.80.


## Samples

#### Block Fabricator


```json
"minecraft:map_color": "#5f4a2b"
```

#### Block Gray Ore


```json
"minecraft:map_color": "#ffcd17"
```

#### Block Palm Leave


```json
"minecraft:map_color": "#639f28"
```

#### Block Palm Leave Corner


```json
"minecraft:map_color": "#495f2b"
```

#### Block Palm Trunk


```json
"minecraft:map_color": "#b9ae9d"
```

#### Block White Sand


```json
"minecraft:map_color": "#fdfdfd"
```

#### Block Leaf Pile


```json
"minecraft:map_color": "#ffffff"
```

#### Block Orange Ore


```json
"minecraft:map_color": "#a69787"
```

#### Apple Block


```json
"minecraft:map_color": "#f30000"
```
