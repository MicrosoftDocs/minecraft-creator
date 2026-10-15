---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:movement.glide"
description: "Describes the minecraft:movement.glide entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:movement.glide

Move control for a flying mob that has a gliding movement.


## Entity Glide Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_turn | 30 | Decimal number | The maximum number in degrees the mob can turn per tick. |  | 
| speed_when_turning | 0.2 | Decimal number | Speed that the mob adjusts to when it has to turn quickly. | Phantom: `0.2` | 
| start_speed | 0.10000000149011612 | Decimal number | Initial speed of the mob when it starts gliding. | Phantom: `0.1` | 

## Samples

#### [Phantom](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/phantom.json)


```json
"minecraft:movement.glide": {
  "speed_when_turning": 0.2,
  "start_speed": 0.1
}
```
