---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.stalk_and_pounce_on_target"
description: "Describes the minecraft:behavior.stalk_and_pounce_on_target ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.stalk_and_pounce_on_target

Allows a mob to stalk a target, then once within range pounce onto a target, on success the target will be attacked dealing damage defined by the attack component. On failure, the mob will risk getting stuck.

> [!Note]
> Requires a target in order to work properly. Entities can generate targets via one of the following behaviors:
> 
> * [minecraft:behavior.nearest_attackable_target](../EntityGoals/minecraftBehavior_nearest_attackable_target.md)
> * [minecraft:behavior.hurt_by_target](../EntityGoals/minecraftBehavior_hurt_by_target.md)
> [!Note]
> Requires the following component in order to work properly:
> 
> * [Attack (minecraft:attack)](../EntityComponents/minecraftComponent_attack.md)
> 

## Stalk And Pounce On Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| interest_time | 2 | Decimal number | The amount of time the mob will be interested before pouncing. This happens when the mob is within range of pouncing | Fox: `2` | 
| leap_dist | *not set* | Decimal number |  | Fox: `0.8` | 
| leap_distance | 0.8 | Decimal number | The distance in blocks the mob jumps in the direction of its target |  | 
| leap_height | 0.9 | Decimal number | The height in blocks the mob jumps when leaping at its target | Fox: `0.9` | 
| max_stalk_dist | 10 | Decimal number | The maximum distance away a target can be before the mob gives up on stalking | Fox: `12` | 
| pounce_max_dist | 5 | Decimal number | The maximum distance away from the target in blocks to begin pouncing at the target | Fox: `5` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Fox: `7` | 
| set_persistent | false | Boolean true/false | Allows the actor to be set to persist upon targeting a player |  | 
| stalk_speed | 1.2 | Decimal number | The movement speed in which you stalk your target | Fox: `1.2` | 
| strike_dist | 2 | Decimal number | The max distance away from the target when landing from the pounce that will still result in damaging the target | Fox: `2` | 
| stuck_blocks | *not set* | [Stuck Blocks](#stuck-blocks-item-type) item |  | Fox: `{"test":"is_block","subject":"block","operator":"==","value":"snow_layer"}` | 
| stuck_time | 2 | Decimal number | The amount of time the mob will be stuck if they fail and land on a block they can be stuck on | Fox: `2` | 

## Stuck Blocks item type

#### Stuck_blocks Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | *not set* | String |  | Fox: `"=="` | 
| subject | *not set* | String |  | Fox: `"block"` | 
| test | *not set* | String |  | Fox: `"is_block"` | 
| value | *not set* | String |  | Fox: `"snow_layer"` | 

## Samples

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:behavior.stalk_and_pounce_on_target": {
  "priority": 7,
  "stalk_speed": 1.2,
  "max_stalk_dist": 12,
  "leap_height": 0.9,
  "leap_dist": 0.8,
  "pounce_max_dist": 5,
  "interest_time": 2,
  "stuck_time": 2,
  "strike_dist": 2,
  "stuck_blocks": {
    "test": "is_block",
    "subject": "block",
    "operator": "==",
    "value": "snow_layer"
  }
}
```
