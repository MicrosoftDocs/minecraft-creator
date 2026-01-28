---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:movement.sway"
description: "Describes the minecraft:movement.sway entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:movement.sway

This move control causes the mob to sway side to side giving the impression it is swimming.


## Sway Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_turn | 30 | Decimal number | The maximum number in degrees the mob can turn per tick. |  | 
| sway_amplitude | 0.05 | Decimal number | Strength of the sway movement. |  | 
| sway_frequency | 0.5 | Decimal number | Multiplier for the frequency of the sway movement. |  | 

## Samples

#### [Elder Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json)


```json
"minecraft:movement.sway": {}
```
