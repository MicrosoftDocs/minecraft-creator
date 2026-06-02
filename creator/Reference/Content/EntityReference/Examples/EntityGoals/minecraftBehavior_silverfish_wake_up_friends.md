---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.silverfish_wake_up_friends"
description: "Describes the minecraft:behavior.silverfish_wake_up_friends ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.silverfish_wake_up_friends

Allows the mob to alert mobs in nearby blocks to come out.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Ender Dragon (minecraft:ender_dragon)
> 

## Entity Silverfish Wake Up Friends Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Silverfish: `1` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Silverfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/silverfish.json)


```json
"minecraft:behavior.silverfish_wake_up_friends": {
  "priority": 1
}
```
