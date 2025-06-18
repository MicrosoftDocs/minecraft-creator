---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.take_block"
description: "Describes the minecraft:behavior.take_block ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.take_block


## Take Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| affected_by_griefing_rule | *not set* | Boolean true/false | If true, whether the goal is affected by the mob griefing game rule. |  | 
| blocks | *not set* | Array of strings | Block descriptors for which blocks are valid to be taken by the entity, if empty all blocks are valid. | Enderman: `["dirt","grass_block","podzol","coarse_dirt","mycelium","dirt_with_roots","moss_block","pale_moss_block","muddy_mangrove_roots","mud","sand","red_sand","gravel","brown_mushroom","red_mushroom","tnt","cactus","cactus_flower","clay","pumpkin","carved_pumpkin","melon_block","crimson_fungus","crimson_nylium","crimson_roots","warped_fungus","warped_nylium","warped_roots","dandelion","open_eyeblossom","closed_eyeblossom","poppy","blue_orchid","allium","azure_bluet","red_tulip","orange_tulip","white_tulip","pink_tulip","oxeye_daisy","cornflower","lily_of_the_valley","wither_rose","torchflower"]` | 
| can_take | *not set* | Minecraft filter | Filters for if the entity should try to take a block. Self and Target are set. |  | 
| chance | *not set* | Decimal number | Chance each tick for the entity to try and take a block. | Enderman: `0.05` | 
| on_take | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Trigger ran if the entity does take a block. Self, Target, and Block are set. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Enderman: `11` | 
| requires_line_of_sight | *not set* | Boolean true/false | If true, whether the entity needs line of sight to the block they are trying to take. |  | 
| xz_range | *not set* | Range of integers | XZ range from which the entity will try and take blocks from. | Enderman: `2` | 
| y_range | *not set* | Range of integers | Y range from which the entity will try and take blocks from. | Enderman: `[0,3]` | 

## Samples

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:behavior.take_block": {
  "priority": 11,
  "xz_range": 2,
  "y_range": [
    0,
    3
  ],
  "chance": 0.05,
  "blocks": [
    "dirt",
    "grass_block",
    "podzol",
    "coarse_dirt",
    "mycelium",
    "dirt_with_roots",
    "moss_block",
    "pale_moss_block",
    "muddy_mangrove_roots",
    "mud",
    "sand",
    "red_sand",
    "gravel",
    "brown_mushroom",
    "red_mushroom",
    "tnt",
    "cactus",
    "cactus_flower",
    "clay",
    "pumpkin",
    "carved_pumpkin",
    "melon_block",
    "crimson_fungus",
    "crimson_nylium",
    "crimson_roots",
    "warped_fungus",
    "warped_nylium",
    "warped_roots",
    "dandelion",
    "open_eyeblossom",
    "closed_eyeblossom",
    "poppy",
    "blue_orchid",
    "allium",
    "azure_bluet",
    "red_tulip",
    "orange_tulip",
    "white_tulip",
    "pink_tulip",
    "oxeye_daisy",
    "cornflower",
    "lily_of_the_valley",
    "wither_rose",
    "torchflower"
  ]
}
```
