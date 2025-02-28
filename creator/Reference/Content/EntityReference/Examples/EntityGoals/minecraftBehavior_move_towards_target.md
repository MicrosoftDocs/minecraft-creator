---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_towards_target"
description: "Describes the minecraft:behavior.move_towards_target ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_towards_target

Allows mob to move towards its current target.

> [!Note]
> Requires a target in order to work properly. Entities can generate targets via one of the following behaviors:
> 
> * [minecraft:behavior.nearest_attackable_target](../EntityGoals/minecraftBehavior_nearest_attackable_target.md)
> * [minecraft:behavior.hurt_by_target](../EntityGoals/minecraftBehavior_hurt_by_target.md)

## Move Towards Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Iron Golem: `2` | 
| speed_multiplier | *not set* | Decimal number |  | Iron Golem: `0.9` | 
| within_radius | 0 | Decimal number | Defines the radius in blocks that the mob tries to be from the target. A value of 0 means it tries to occupy the same block as the target | Iron Golem: `32` | 

## Samples

#### [Iron Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json)


```json
"minecraft:behavior.move_towards_target": {
  "priority": 2,
  "speed_multiplier": 0.9,
  "within_radius": 32
}
```
