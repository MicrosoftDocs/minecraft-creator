---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_through_village"
description: "Describes the minecraft:behavior.move_through_village ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_through_village

Can only be used by Villagers. Allows the villagers to create paths around the village.


## Move Through Village Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| only_at_night | false | Boolean true/false | If true, the mob will only move through the village during night time | Iron Golem: `true` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Iron Golem: `3` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Iron Golem: `0.6` | 

## Samples

#### [Iron Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json)


```json
"minecraft:behavior.move_through_village": {
  "priority": 3,
  "speed_multiplier": 0.6,
  "only_at_night": true
}
```
