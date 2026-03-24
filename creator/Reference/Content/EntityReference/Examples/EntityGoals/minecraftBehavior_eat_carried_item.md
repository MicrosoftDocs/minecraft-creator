---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.eat_carried_item"
description: "Describes the minecraft:behavior.eat_carried_item ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.eat_carried_item

If the mob is carrying a food item, the mob will eat it and the effects will be applied to the mob.

> [!Note]
> Requires food items to be in the entity's inventory in order to eat the food.


## Entity Eat Carried Item Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| delay_before_eating | 0 | Decimal number | Time in seconds the mob should wait before eating the item. | Fox: `28` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Fox: `12` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:behavior.eat_carried_item": {
  "priority": 12,
  "delay_before_eating": 28
}
```
