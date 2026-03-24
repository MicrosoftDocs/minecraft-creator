---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_towards_dwelling_restriction"
description: "Describes the minecraft:behavior.move_towards_dwelling_restriction ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_towards_dwelling_restriction

Allows entities with the "minecraft:dweller" component to move toward their village area that the entity should be restricted to.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Dweller (minecraft:dweller)](../EntityComponents/minecraftComponent_dweller.md)
> 

## Entity Move Towards Dwelling Restriction Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Iron Golem: `4` | 
| speed_multiplier | 1 | Decimal number | This multiplier modifies the entity's speed when moving towards its restriction. |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Iron Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json)


```json
"minecraft:behavior.move_towards_dwelling_restriction": {
  "priority": 4
}
```
