---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_random_block"
description: "Describes the minecraft:behavior.move_to_random_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_random_block

Allows mob to move towards a random block.


## Move To Random Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_distance | 16 | Decimal number | Defines the distance from the mob, in blocks, that the block to move to will be chosen. | Pillager: `512` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Pillager: `6`, Vindicator: `5` | 
| speed_multiplier | *not set* | Decimal number |  | Pillager: `0.55` | 
| within_radius | 0 | Decimal number | Defines the distance in blocks the mob has to be from the block for the movement to be finished. | Pillager: `8` | 

## Samples

#### [Pillager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pillager.json)


```json
"minecraft:behavior.move_to_random_block": {
  "priority": 6,
  "speed_multiplier": 0.55,
  "within_radius": 8,
  "block_distance": 512
}
```

#### [Vindicator](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/vindicator.json)


```json
"minecraft:behavior.move_to_random_block": {
  "priority": 5,
  "speed_multiplier": 0.55,
  "within_radius": 8,
  "block_distance": 512
}
```
