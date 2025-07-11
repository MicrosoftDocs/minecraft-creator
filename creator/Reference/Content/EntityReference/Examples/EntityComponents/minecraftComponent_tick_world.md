---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:tick_world"
description: "Describes the minecraft:tick_world entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:tick_world

Defines if the entity ticks the world and the radius around it to tick.


## Minecraft Tick World Entity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| distance_to_players | 128 | Decimal number | The distance at which the closest player has to be before this entity despawns. This option will be ignored if never_despawn is true. Default value: 128. Value must be >= 128. |  | 
| never_despawn | true | Boolean true/false | If true, this entity will not despawn even if players are far away. If false, distance_to_players will be used to determine when to despawn. Default value: true. |  | 
| radius | 2 | Integer number | The area around the entity to tick. Allowed range: 2-6. Default value: 2. Value must be >= 2. Value must be <= 6. |  | 