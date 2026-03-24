---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_towards_home_restriction"
description: "Describes the minecraft:behavior.move_towards_home_restriction ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_towards_home_restriction

Allows entities with a `minecraft:home` component to move towards their home position. 
		If `restriction_radius` is set, entities will be able to run this behavior only if outside of it.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Home (minecraft:home)](../EntityComponents/minecraftComponent_home.md)
> 

## Entity Move Towards Home Restriction Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Elder Guardian: `5` | 
| speed_multiplier | 1 | Decimal number | This multiplier modifies the entity's speed when moving towards its restriction. |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Elder Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json)


```json
"minecraft:behavior.move_towards_home_restriction": {
  "priority": 5
}
```
