---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - behavior.skeleton_horse_trap"
description: "Describes the behavior.skeleton_horse_trap AI Goals"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - behavior.skeleton_horse_trap

Allows Equine mobs to be Horse Traps and be triggered like them, spawning a lightning bolt and a bunch of horses when a player is nearby. Can only be used by Horses, Mules, Donkeys and Skeleton Horses.

> [!Note]
> Can only be used on the following types of entity:
> 
> * Horse (minecraft:horse)
> * Mule (minecraft:mule)
> * Donkey (minecraft:donkey)
> * Skeleton Horse (minecraft:skeleton_horse)
> 

## Skeleton Horse Trap Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| duration | 1 | Decimal number | Amount of time in seconds the trap exists. After this amount of time is elapsed, the trap is removed from the world if it hasn't been activated | Skeleton Horse: `900` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Skeleton Horse: `2` | 
| within_radius | 0 | Decimal number | Distance in blocks that the player has to be within to trigger the horse trap | Skeleton Horse: `10` | 

## Samples

#### [Skeleton Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/skeleton_horse.json)


```json
{
  "within_radius": 10,
  "duration": 900,
  "priority": 2
}
```
