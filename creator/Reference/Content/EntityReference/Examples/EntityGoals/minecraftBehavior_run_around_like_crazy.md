---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.run_around_like_crazy"
description: "Describes the minecraft:behavior.run_around_like_crazy ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.run_around_like_crazy

Allows the mob to run around aimlessly.


## Entity Run Around Like Crazy Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Llama: `1` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Llama: `1.2` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:behavior.run_around_like_crazy": {
  "priority": 1,
  "speed_multiplier": 1.2
}
```
