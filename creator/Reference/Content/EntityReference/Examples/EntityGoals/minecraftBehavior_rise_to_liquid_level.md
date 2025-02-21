---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.rise_to_liquid_level"
description: "Describes the minecraft:behavior.rise_to_liquid_level ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.rise_to_liquid_level

Allows the mob to stay at a certain level when in liquid.


## Rise To Liquid Level Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| liquid_y_offset | 0 | Decimal number | Target distance down from the liquid surface. i.e. Positive values move the target Y down. | Strider: `0.25` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| rise_delta | 0 | Decimal number | Movement up in Y per tick when below the liquid surface. | Strider: `0.01` | 
| sink_delta | 0 | Decimal number | Movement down in Y per tick when above the liquid surface. | Strider: `0.01` | 

## Samples

#### [Strider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/strider.json)


```json
"minecraft:behavior.rise_to_liquid_level": {
  "priority": 0,
  "liquid_y_offset": 0.25,
  "rise_delta": 0.01,
  "sink_delta": 0.01
}
```
