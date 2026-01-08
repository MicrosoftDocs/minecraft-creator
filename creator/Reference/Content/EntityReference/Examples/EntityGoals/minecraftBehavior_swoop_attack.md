---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.swoop_attack"
description: "Describes the minecraft:behavior.swoop_attack ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.swoop_attack

Allows an entity to attack using swoop attack behavior; Ideal for use with flying mobs. The behavior ends if the entity has a horizontal collision or gets hit.


## Swoop Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage_reach | 0.2 | Decimal number | Added to the base size of the entity, to determine the target's maximum allowable distance, when trying to deal attack damage. | Phantom: `0.2` | 
| delay_range | *not set* | Range of integers | Minimum and maximum cooldown time-range (in seconds) between each attempted swoop attack. | Phantom: `{"min":10,"max":20}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Phantom: `2` | 
| speed_multiplier | 1 | Decimal number | During swoop attack behavior, this determines the multiplier the entity's speed is modified by when moving toward the target. | Phantom: `1` | 

## Samples

#### [Phantom](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/phantom.json)


```json
"minecraft:behavior.swoop_attack": {
  "priority": 2,
  "damage_reach": 0.2,
  "speed_multiplier": 1,
  "delay_range": {
    "min": 10,
    "max": 20
  }
}
```
