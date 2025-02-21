---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - behavior.sniff"
description: "Describes the behavior.sniff AI Goals"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - behavior.sniff

Allows this entity to detect the nearest player within "sniffing_radius" and update its "minecraft:suspect_tracking" component state.


## Sniff Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_range | *not set* | Range of integers | Cooldown range between sniffs in seconds | Warden: `[5,10]` | 
| duration | 1 | Decimal number | Sniffing duration in seconds | Warden: `4.16` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Warden: `6` | 
| sniffing_radius | 5 | Decimal number | Mob detection radius | Warden: `24` | 
| suspicion_radius_horizontal | 3 | Decimal number | Mob suspicion horizontal radius. When a player is within this radius horizontally, the anger level towards that player is increased | Warden: `6` | 
| suspicion_radius_vertical | 3 | Decimal number | Mob suspicion vertical radius. When a player is within this radius vertically, the anger level towards that player is increased | Warden: `20` | 

## Samples

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
{
  "priority": 6,
  "duration": 4.16,
  "sniffing_radius": 24,
  "suspicion_radius_horizontal": 6,
  "suspicion_radius_vertical": 20,
  "cooldown_range": [
    5,
    10
  ]
}
```
