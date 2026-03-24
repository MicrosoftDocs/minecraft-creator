---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.sniff"
description: "Describes the minecraft:behavior.sniff ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.sniff

Allows this entity to detect the nearest player within "sniffing_radius" and update its "minecraft:suspect_tracking" component state.


## Entity Sniff Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| cooldown_range | {"max":10,"min":3} | [Cooldown Range](#item-components-floatrange) item | Cooldown range between sniffs in seconds | Warden: `{"min":5,"max":10}` | 
| duration | 1 | Decimal number | Sniffing duration in seconds | Warden: `4.16` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Warden: `6` | 
| sniffing_radius | 5 | Decimal number | Mob detection radius | Warden: `24` | 
| suspicion_radius_horizontal | 3 | Decimal number | Mob suspicion horizontal radius. When a player is within this radius horizontally, the anger level towards that player is increased | Warden: `6` | 
| suspicion_radius_vertical | 3 | Decimal number | Mob suspicion vertical radius. When a player is within this radius vertically, the anger level towards that player is increased Value must be >= 1. | Warden: `20` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `cooldown_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

## Samples

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:behavior.sniff": {
  "duration": 4.16,
  "sniffing_radius": 24,
  "suspicion_radius_horizontal": 6,
  "suspicion_radius_vertical": 20,
  "cooldown_range": {
    "min": 5,
    "max": 10
  },
  "priority": 6
}
```
