---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:teleport"
description: "Describes the minecraft:teleport entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:teleport

Defines an entity's teleporting behavior.


## Teleport Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| dark_teleport_chance | 0.01 | Decimal number | Modifies the chance that the entity will teleport if the entity is in darkness |  | 
| light_teleport_chance | 0.01 | Decimal number | Modifies the chance that the entity will teleport if the entity is in daylight |  | 
| max_random_teleport_time | 20 | Decimal number | Maximum amount of time in seconds between random teleports |  | 
| min_random_teleport_time | 0 | Decimal number | Minimum amount of time in seconds between random teleports |  | 
| random_teleport_cube | [32, 16, 32] | x, y, z coordinate array | Entity will teleport to a random position within the area defined by this cube |  | 
| random_teleports | true | Boolean true/false | If true, the entity will teleport randomly |  | 
| target_distance | 16 | Decimal number | Maximum distance the entity will teleport when chasing a target |  | 
| target_teleport_chance | 1 | Decimal number | The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100% |  | 