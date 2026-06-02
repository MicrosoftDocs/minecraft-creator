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

## Entity Stalk And Pounce On Target Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| interest_time | 2 | Decimal number | The amount of time the mob will be interested before pouncing. This happens when the mob is within range of pouncing | 
| leap_dist | 0.800000011920929 | Decimal number | The distance in blocks the mob jumps in the direction of its target | 
| leap_distance | 0.8 | Decimal number | The distance in blocks the mob jumps in the direction of its target | 
| leap_height | 0.8999999761581421 | Decimal number | The height in blocks the mob jumps when leaping at its target | 
| max_stalk_dist | 10 | Decimal number | The maximum distance away a target can be before the mob gives up on stalking | 
| pounce_max_dist | 5 | Decimal number | The maximum distance away from the target in blocks to begin pouncing at the target | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| set_persistent | false | Boolean true/false | Allows the actor to be set to persist upon targeting a player | 
| stalk_speed | 1.2000000476837158 | Decimal number | The movement speed in which you stalk your target | 
| strike_dist | 2 | Decimal number | The max distance away from the target when landing from the pounce that will still result in damaging the target | 
| stuck_blocks (Stuck Blocks) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Stuck Blocks](#stuck-blocks) item | Blocks that the mob can get stuck in after a pounce. | 
| stuck_blocks (Alternate 1) | *not set* | Object |  | 
| stuck_time | 2 | Decimal number | The amount of time the mob will be stuck if they fail and land on a block they can be stuck on | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Stuck Blocks

#### Stuck Blocks Properties

**JSON path:** `stuck_blocks`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

## Samples
