---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.stalk_and_pounce_on_target"
description: "Describes the minecraft:behavior.stalk_and_pounce_on_target ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.stalk_and_pounce_on_target

Allows a mob to stalk a target, then once within range pounce onto a target, on success the target will be attacked dealing damage defined by the attack component. On failure, the mob will risk getting stuck.

> [!Note]
> Requires a target in order to work properly. Entities can generate targets via one of the following behaviors:
> 
> * [Nearest Attackable Target Behavior (minecraft:behavior.nearest_attackable_target)](./minecraftBehavior_nearest_attackable_target.md)
> * [Hurt By Target Behavior (minecraft:behavior.hurt_by_target)](./minecraftBehavior_hurt_by_target.md)
> [!Note]
> Requires the following component in order to work properly:
> 
> * [Attack (minecraft:attack)](../EntityComponents/minecraftComponent_attack.md)
> 

## Stalk And Pounce On Target Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| interest_time | 2 | Decimal number | The amount of time the mob will be interested before pouncing. This happens when the mob is within range of pouncing | 
| leap_distance | 0.8 | Decimal number | The distance in blocks the mob jumps in the direction of its target | 
| leap_height | 0.9 | Decimal number | The height in blocks the mob jumps when leaping at its target | 
| max_stalk_dist | 10 | Decimal number | The maximum distance away a target can be before the mob gives up on stalking | 
| pounce_max_dist | 5 | Decimal number | The maximum distance away from the target in blocks to begin pouncing at the target | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| set_persistent | false | Boolean true/false | Allows the actor to be set to persist upon targeting a player | 
| stalk_speed | 1.2 | Decimal number | The movement speed in which you stalk your target | 
| strike_dist | 2 | Decimal number | The max distance away from the target when landing from the pounce that will still result in damaging the target | 
| stuck_time | 2 | Decimal number | The amount of time the mob will be stuck if they fail and land on a block they can be stuck on | 

## Samples
