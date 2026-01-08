---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.wither_random_attack_pos_goal"
description: "Describes the minecraft:behavior.wither_random_attack_pos_goal ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.wither_random_attack_pos_goal

Allows the wither to launch random attacks.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Wither (minecraft:wither)
> 

## Wither Random Attack Pos Goal Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Wither: `3` | 

## Samples

#### [Wither](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither.json)


```json
"minecraft:behavior.wither_random_attack_pos_goal": {
  "priority": 3
}
```
