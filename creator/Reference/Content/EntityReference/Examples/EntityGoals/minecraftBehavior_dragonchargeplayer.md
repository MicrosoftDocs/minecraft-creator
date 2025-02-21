---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.dragonchargeplayer"
description: "Describes the minecraft:behavior.dragonchargeplayer ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.dragonchargeplayer

Allows this entity to attack a player by charging at them. The player is chosen by the "minecraft:behavior.dragonscanning".

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Dragonscanning Behavior (minecraft:behavior.dragonscanning)](../EntityComponents/minecraftComponent_behavior.dragonscanning.md)
> 
> [!Note]
> Can only be used on the following type of entity:
> 
> * Ender Dragon (minecraft:ender_dragon)
> 

## Dragonchargeplayer Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| active_speed | 3 | Decimal number | The speed this entity moves when this behavior has started or while it's active. |  | 
| continue_charge_threshold_time | 0.5 | Decimal number | If the dragon is outside the "target_zone" for longer than "continue_charge_threshold_time" seconds, the charge is canceled. |  | 
| flight_speed | 0.6 | Decimal number | The speed this entity moves while this behavior is not active. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Ender Dragon: `1` | 
| target_zone | *not set* | Range of integers | Minimum and maximum distance, from the target, this entity can use this behavior. |  | 
| turn_speed | 0.7 | Decimal number | The speed at which this entity turns while using this behavior. |  | 

## Samples

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:behavior.dragonchargeplayer": {
  "priority": 1
}
```
