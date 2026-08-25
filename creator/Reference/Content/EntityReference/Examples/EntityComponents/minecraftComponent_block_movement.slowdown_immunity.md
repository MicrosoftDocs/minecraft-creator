---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:block_movement_slowdown_immunity"
description: "Describes the minecraft:block_movement_slowdown_immunity entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:block_movement_slowdown_immunity

Prevents specified blocks from contributing to this entity's block movement slowdown. It does not cause other blocks to apply slowdown.


## Entity Block Movement Slowdown Immunity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| blocks (Blocks) | [] | Array of [Blocks](#blocks) items | List of block descriptors whose existing movement slowdown contribution should be ignored. If omitted or empty, no contributions are ignored. | Cave Spider: `["minecraft:web"]` | 
| blocks (as String) | *not set* | String |  |  | 
| blocks (as Object) | *not set* | Object |  |  | 

### Blocks

#### Blocks Properties

**JSON path:** `blocks`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

## Samples

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:block_movement_slowdown_immunity": {
  "blocks": [
    "minecraft:web"
  ]
}
```
