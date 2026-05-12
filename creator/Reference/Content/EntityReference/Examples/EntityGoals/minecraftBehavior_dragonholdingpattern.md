---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.dragonholdingpattern"
description: "Describes the minecraft:behavior.dragonholdingpattern ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.dragonholdingpattern

Allows the Dragon to fly around in a circle around the center podium.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Ender Dragon (minecraft:ender_dragon)
> 

## Entity Dragonholdingpattern Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Ender Dragon: `3` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:behavior.dragonholdingpattern": {
  "priority": 3
}
```
