---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:trail"
description: "Describes the minecraft:trail entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:trail

Causes an entity to leave a trail of blocks as it moves about the world.


## Trail Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_type | air | String | The type of block you wish to be spawned by the entity as it move about the world. Solid blocks may not be spawned at an offset of (0,0,0). |  | 
| spawn_filter | *not set* | Minecraft filter | One or more conditions that must be met in order to cause the chosen block type to spawn. |  | 
| spawn_offset | [0, 0, 0] | x, y, z coordinate array | The distance from the entities current position to spawn the block. Capped at up to 16 blocks away. The X value is left/right(-/+), the Z value is backward/forward(-/+), the Y value is below/above(-/+). |  | 

## Samples
