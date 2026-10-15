---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:annotation.break_door"
description: "Describes the minecraft:annotation.break_door entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:annotation.break_door

Allows an entity to break doors, assuming that that flags set up for the component to use in navigation.

> [!Note]
> Requires the entity's `navigation` component to have the parameter `can_break_doors` set to `true`.


## Break doors annotation Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| break_time | 12 | Integer number | The time in seconds required to break through doors. | 
| min_difficulty | hard | [Min Difficulty](#min-difficulty-choices) choices | The minimum difficulty that the world must be on for this entity to break doors. | 

### Min Difficulty choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| easy | Easy | |
| hard | Hard | |
| normal | Normal | |
| peaceful | Peaceful | |

## Samples

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:annotation.break_door": {}
```
