---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.controlled_by_player"
description: "Describes the minecraft:behavior.controlled_by_player ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.controlled_by_player

Allows the entity to be controlled by the player using an item in the item_controllable property (required). On every tick, the entity will attempt to rotate towards where the player is facing with the control item whilst simultaneously moving forward.

> [!Note]
> Requires the following components in order to work properly:
> 
> * [Movement (minecraft:movement)](../EntityComponents/minecraftComponent_movement.md)
> * [Rideable (minecraft:rideable)](../EntityComponents/minecraftComponent_rideable.md)
> * [Item Controllable (minecraft:item_controllable)](../EntityComponents/minecraftComponent_item_controllable.md)
> 

## Controlled By Player Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| fractional_rotation | 0.5 | Decimal number | The entity will attempt to rotate to face where the player is facing each tick. The entity will target this percentage of their difference in their current facing angles each tick (from 0.0 to 1.0 where 1.0 = 100%). This is limited by FractionalRotationLimit. A value of 0.0 will result in the entity no longer turning to where the player is facing. |  | 
| fractional_rotation_limit | 5 | Decimal number | Limits the total degrees the entity can rotate to face where the player is facing on each tick. |  | 
| mount_speed_multiplier | 1 | Decimal number | Speed multiplier of mount when controlled by player. | Strider: `1.45` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 

## Samples

#### [Pig](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pig.json)


```json
"minecraft:behavior.controlled_by_player": {
  "priority": 0
}
```

#### [Strider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/strider.json)


```json
"minecraft:behavior.controlled_by_player": {
  "priority": 0,
  "mount_speed_multiplier": 1.45
}
```
