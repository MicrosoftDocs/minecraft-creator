---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.move_to_random_block
description: "A reference document detailing the 'behavior.move_to_random_block' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.move_to_random_block

`minecraft:behavior.move_to_random_block` compels an entity to move to a random block within a set radius.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|block_distance| 16.0| Decimal| Defines the distance from the mob, in blocks, that the block to move to will be chosen. |
|within_radius| 0.0| Decimal|Defines the distance in blocks the mob has to be from the block for the movement to be finished. |
| speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |
| priority| -1| Integer| The Minecraft behavior priority. The higher the priority, the sooner this behavior will be executed as a goal. |

## Example

```json
"minecraft:behavior.move_to_random_block":{
    "priority": 2,
    "within_radius": 5.0,
    "block_distance": 128.0
}
```

## Vanilla entities examples

### pillager

```json
"minecraft:behavior.move_to_random_block": {
          "priority": 6,
          "speed_multiplier": 0.55,
          "within_radius": 8,
          "block_distance": 512
        }
```

## Vanilla entities using `minecraft:behavior.move_to_random_block`

- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
