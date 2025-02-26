---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.look_at_target"
description: "Describes the minecraft:behavior.look_at_target ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.look_at_target

Compels an entity to look at the target by rotating the head bone pose within a set limit.

> [!Note]
> Requires a target in order to work properly. Entities can generate targets via one of the following behaviors:
> 
> * [minecraft:behavior.nearest_attackable_target](../EntityGoals/minecraftBehavior_nearest_attackable_target.md)
> * [minecraft:behavior.hurt_by_target](../EntityGoals/minecraftBehavior_hurt_by_target.md)

## Look At Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| angle_of_view_horizontal | 360 | Integer number | The angle in degrees that the mob can see in the Y-axis (up-down). |  | 
| angle_of_view_vertical | 360 | Integer number | The angle in degrees that the mob can see in the X-axis (left-right). |  | 
| look_distance | 8 | Decimal number | The distance in blocks from which the entity will look at this mob's current target. |  | 
| look_time | *not set* | Range of integers | Time range to look at this mob's current target. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Wither: `5` | 
| probability | 0.02 | Decimal number | The probability of looking at the target. A value of 1.00 is 100%. |  | 

## Samples

#### [Wither](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither.json)


```json
"minecraft:behavior.look_at_target": {
  "priority": 5
}
```
