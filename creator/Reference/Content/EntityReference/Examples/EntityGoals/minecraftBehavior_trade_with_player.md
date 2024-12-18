---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.trade_with_player
description: "A reference document detailing the 'behavior.trade_with_player' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.trade_with_player

`minecraft:behavior.trade_with_player` compels the entity to stop moving and trade with the player.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|Conditions that need to be met for the behavior to start.|
|filters| -- |Minecraft filter|The higher the priority, the sooner this behavior will be executed as a goal.|
|max_distance_from_player|8.00|Decimal|The max distance that the mob can be from the player before exiting the goal.|

## Example

```json
"minecraft:behavior.trade_with_player":{
    "priority": 1
}
```

## Vanilla entities examples

### wandering_trader

```json
"minecraft:behavior.trade_with_player": {
        "priority": 1
      }
```

## Vanilla entities using `minecraft:behavior.trade_with_player`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
