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
| tint_method | *not set* | String | Tint multiplier applied to the map color. | 

### tint_method

Tint multiplier applied to the map color. Typically references the biome's "rain" and "temperature" to compute the tint. Supported values: "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage", "grass", "water". This item requires a format version of at least 1.21.80.


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

#### [Block Black Concrete Double Slab](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_concrete_double_slab.block.json)


```json
"minecraft:map_color": "#191919"
```

#### [Block Black Wool Double Slab](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_wool_double_slab.block.json)


```json
"minecraft:map_color": "#1D1D21"
```
