---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.hide"
description: "Describes the minecraft:behavior.hide ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.hide

Allows a mob with the hide component to attempt to move to - and hide at - an owned or nearby POI.

> [!Note]
> Requires a point of interest to be set in order to work properly.


## Hide Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| duration | 1 | Decimal number | Amount of time in seconds that the mob reacts. | Villager v2: `30` | 
| poi_type | *not set* | String | Defines what POI type to hide at. | Villager v2: `"bed"` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Villager v2: `0.8` | 
| timeout_cooldown | 8 | Decimal number | The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition. |  | 

## Samples

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:behavior.hide": {
  "priority": 0,
  "speed_multiplier": 0.8,
  "poi_type": "bed",
  "duration": 30
}
```
