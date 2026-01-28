---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.sleep"
description: "Describes the minecraft:behavior.sleep ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.sleep

Allows mobs that own a bed to in a village to move to and sleep in it.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Villager (minecraft:villager)
> 

## Sleep Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_sleep_while_riding | false | Boolean true/false | If true, the mob will be able to use the sleep goal if riding something |  | 
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the goal again |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| sleep_collider_height | 1 | Decimal number | The height of the mob's collider while sleeping |  | 
| sleep_collider_width | 1 | Decimal number | The width of the mob's collider while sleeping |  | 
| sleep_y_offset | 1 | Decimal number | The y offset of the mob's collider while sleeping |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 
| timeout_cooldown | 8 | Decimal number | The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition |  | 

## Samples
