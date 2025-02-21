---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.roll"
description: "Describes the minecraft:behavior.roll ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.roll

This allows the mob to roll forward.


## Roll Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Panda: `12` | 
| probability | *not set* | Decimal number | The probability that the mob will use the goal. | Panda: `0.0016`, `0.013` | 

## Samples

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)

At /minecraft:entity/component_groups/minecraft:panda_baby/minecraft:behavior.roll/: 

```json
"minecraft:behavior.roll": {
  "priority": 12,
  "probability": 0.0016
}
```

At /minecraft:entity/component_groups/minecraft:panda_playful/minecraft:behavior.roll/: 

```json
"minecraft:behavior.roll": {
  "priority": 12,
  "probability": 0.013
}
```
