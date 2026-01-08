---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:movement.fly"
description: "Describes the minecraft:movement.fly entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:movement.fly

This move control causes the mob to fly.


## Fly Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_turn | 30 | Decimal number | The maximum number in degrees the mob can turn per tick. |  | 
| speed_when_turning | 0.2 | Decimal number | Speed that the mob adjusts to when it has to turn quickly. |  | 
| start_speed | 0.1 | Decimal number | Initial speed of the mob when it starts gliding. |  | 

## Samples

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:movement.fly": {}
```
