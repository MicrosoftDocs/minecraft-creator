---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - behavior.wither_random_attack_pos_goal"
description: "Describes the behavior.wither_random_attack_pos_goal AI Goals"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - behavior.wither_random_attack_pos_goal

Allows the wither to launch random attacks. Can only be used by the Wither Boss.


## Wither Random Attack Pos Goal Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Wither: `3` | 

## Samples

#### [Wither](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither.json)


```json
{
  "priority": 3
}
```
