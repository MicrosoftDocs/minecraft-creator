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


## Entity Find Cover Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the goal again | Fox: `5` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Fox: `9` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Fox: `1` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

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
