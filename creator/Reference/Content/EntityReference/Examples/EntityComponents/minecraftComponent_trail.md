---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:trail"
description: "Describes the minecraft:trail entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:trail

Causes an entity to leave a trail of blocks as it moves about the world.


## Trail Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_type | air | String | The type of block you wish to be spawned by the entity as it move about the world. Solid blocks may not be spawned at an offset of (0,0,0). | Snow Golem: `"minecraft:snow_layer"` | 
| spawn_filter | *not set* | Minecraft filter | One or more conditions that must be met in order to cause the chosen block type to spawn. | Snow Golem: `{"test":"is_temperature_value","operator":"<","value":0.81}` | 
| spawn_offset | [0, 0, 0] | x, y, z coordinate array | The distance from the entities current position to spawn the block. Capped at up to 16 blocks away. The X value is left/right(-/+), the Z value is backward/forward(-/+), the Y value is below/above(-/+). |  | 

## Samples

#### [Snow Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/snow_golem.json)


```json
"minecraft:trail": {
  "block_type": "minecraft:snow_layer",
  "spawn_filter": {
    "test": "is_temperature_value",
    "operator": "<",
    "value": 0.81
  }
}
```
