---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:tags"
description: "Describes the minecraft:tags item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:tags

Determines which tags are included on a given item.


## Minecraft Tags Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| tags | *not set* | Array of strings | An array that can contain multiple item tags. | Apple: `["minecraft:is_food"]` | 

## Samples


```json
"minecraft:tags": {
  "do_swing_animation": false,
  "launch_power_scale": 1,
  "max_draw_duration": 0,
  "max_launch_power": 1,
  "min_draw_duration": 0,
  "scale_power_by_draw_duration": false
}
```

#### [Apple](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/apple.json)


```json
"minecraft:tags": {
  "tags": [
    "minecraft:is_food"
  ]
}
```
