---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.eat_block"
description: "Describes the minecraft:behavior.eat_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.eat_block

Allows the entity to consume a block, replace the eaten block with another block, and trigger an event as a result.


## Eat Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| eat_and_replace_block_pairs | *not set* | Array of strings | A collection of pairs of blocks; the first ("eat_block")is the block the entity should eat, the second ("replace_block") is the block that should replace the eaten block. | Sheep: `[{"eat_block":"grass","replace_block":"dirt"},{"eat_block":"tallgrass","replace_block":"air"},{"eat_block":"short_dry_grass","replace_block":"air"},{"eat_block":"tall_dry_grass","replace_block":"air"}]` | 
| on_eat | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to trigger when the block eating animation has completed. | Sheep: `{"event":"minecraft:on_eat_block","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Sheep: `6` | 
| success_chance | 0.02 | String | A molang expression defining the success chance the entity has to consume a block. | Sheep: `"query.is_baby ? 0.02 : 0.001"` | 
| time_until_eat | 1.8 | Decimal number | The amount of time (in seconds) it takes for the block to be eaten upon a successful eat attempt. | Sheep: `1.8` | 

## Samples

#### [Sheep](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sheep.json)


```json
"minecraft:behavior.eat_block": {
  "priority": 6,
  "success_chance": "query.is_baby ? 0.02 : 0.001",
  "time_until_eat": 1.8,
  "eat_and_replace_block_pairs": [
    {
      "eat_block": "grass",
      "replace_block": "dirt"
    },
    {
      "eat_block": "tallgrass",
      "replace_block": "air"
    },
    {
      "eat_block": "short_dry_grass",
      "replace_block": "air"
    },
    {
      "eat_block": "tall_dry_grass",
      "replace_block": "air"
    }
  ],
  "on_eat": {
    "event": "minecraft:on_eat_block",
    "target": "self"
  }
}
```
