---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.find_underwater_treasure"
description: "Describes the minecraft:behavior.find_underwater_treasure ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.find_underwater_treasure

Allows the mob to move towards the nearest underwater ruin or shipwreck.


## Find Underwater Treasure Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Dolphin: `2` | 
| search_range | 0 | Integer number | The range that the mob will search for a treasure chest within a ruin or shipwreck to move towards. | Dolphin: `30` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Dolphin: `2` | 
| stop_distance | 2 | Decimal number | The distance the mob will move before stopping. | Dolphin: `50` | 

## Samples

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:behavior.find_underwater_treasure": {
  "priority": 2,
  "speed_multiplier": 2,
  "search_range": 30,
  "stop_distance": 50
}
```
