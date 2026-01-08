---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.find_cover"
description: "Describes the minecraft:behavior.find_cover ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.find_cover

Allows the mob to seek shade.


## Find Cover Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the goal again | Fox: `5` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Fox: `9` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Fox: `1` | 

## Samples

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)

At /minecraft:entity/component_groups/minecraft:fox_thunderstorm/minecraft:behavior.find_cover/: 

```json
"minecraft:behavior.find_cover": {
  "priority": 0,
  "speed_multiplier": 1,
  "cooldown_time": 0
}
```

At /minecraft:entity/component_groups/minecraft:fox_day/minecraft:behavior.find_cover/: 

```json
"minecraft:behavior.find_cover": {
  "priority": 9,
  "speed_multiplier": 1,
  "cooldown_time": 5
}
```
