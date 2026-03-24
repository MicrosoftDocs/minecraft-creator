---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.roar"
description: "Describes the minecraft:behavior.roar ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.roar

Allows this entity to roar at another entity based on data in `minecraft:anger_level`. Once the anger threshold specified in `minecraft:anger_level` has been reached, this entity will roar for the specified amount of time, look at the other entity, apply anger boost towards it, and finally target it.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Anger Level (minecraft:anger_level)](../EntityComponents/minecraftComponent_anger_level.md)
> 

## Entity Roar Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| duration | 0 | Decimal number | The amount of time to roar for. | Warden: `4.2` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Warden: `2` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:behavior.roar": {
  "duration": 4.2,
  "priority": 2
}
```
