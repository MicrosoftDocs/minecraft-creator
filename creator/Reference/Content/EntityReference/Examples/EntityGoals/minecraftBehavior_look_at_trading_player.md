---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.look_at_trading_player"
description: "Describes the minecraft:behavior.look_at_trading_player ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.look_at_trading_player

Compels an entity to look at the player that is currently trading with the entity.

> [!Note]
> Requires the ability to trade in order to work properly.


## Look At Trading Player Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| angle_of_view_horizontal | 360 | Integer number | The angle in degrees that the mob can see in the Y-axis (up-down). |  | 
| angle_of_view_vertical | 360 | Integer number | The angle in degrees that the mob can see in the X-axis (left-right). |  | 
| look_distance | 8 | Decimal number | The distance in blocks from which the entity will look at the player this mob is trading with. |  | 
| look_time | *not set* | Range of integers | Time range to look at the player this mob is trading with. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager: `2`, Villager v2: `7`, Wandering Trader: `4` | 
| probability | 0.02 | Decimal number | The probability of looking at the target. A value of 1.00 is 100%. |  | 

## Samples

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)


```json
"minecraft:behavior.look_at_trading_player": {
  "priority": 2
}
```

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:behavior.look_at_trading_player": {
  "priority": 7
}
```

#### [Wandering Trader](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wandering_trader.json)


```json
"minecraft:behavior.look_at_trading_player": {
  "priority": 4
}
```
