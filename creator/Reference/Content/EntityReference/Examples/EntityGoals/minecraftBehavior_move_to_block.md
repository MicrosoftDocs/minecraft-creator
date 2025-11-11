---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_block"
description: "Describes the minecraft:behavior.move_to_block ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_block

Allows mob to move towards a block.


## Move To Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot | Bee: `1`, `0.633` | 
| on_reach | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run on block reached. | Bee: `[{"event":"minecraft:bee_returned_to_hive","target":"block"}]` | 
| on_stay_completed | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run on completing a stay of stay_duration at the block. | Bee: `[{"event":"collected_nectar","target":"self"}]` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Bee: `10` | 
| search_height | 1 | Integer number | The height in blocks that the mob will look for the block. | Bee: `4`, `10` | 
| search_range | 0 | Integer number | The distance in blocks that the mob will look for the block. | Bee: `6`, `16` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 
| start_chance | 1 | Decimal number | Chance to start the behavior (applied after each random tick_interval). | Bee: `0.5` | 
| stay_duration | 0 | Decimal number | Number of ticks needed to complete a stay at the block. | Bee: `20` | 
| target_block_filters | *not set* | [Target Block Filters](#target-block-filters) item |  | Bee: `{"test":"is_waterlogged","subject":"block","operator":"==","value":false}` | 
| target_blocks | *not set* | Array of strings | Block types to move to. | Bee: `["minecraft:poppy","minecraft:blue_orchid","minecraft:allium","minecraft:azure_bluet","minecraft:red_tulip","minecraft:orange_tulip","minecraft:white_tulip","minecraft:pink_tulip","minecraft:oxeye_daisy","minecraft:cornflower","minecraft:lily_of_the_valley","minecraft:dandelion","minecraft:wither_rose","minecraft:sunflower","minecraft:lilac","minecraft:rose_bush","minecraft:peony","minecraft:flowering_azalea","minecraft:azalea_leaves_flowered","minecraft:mangrove_propagule","minecraft:pitcher_plant","minecraft:torchflower","minecraft:cherry_leaves","minecraft:pink_petals","minecraft:open_eyeblossom","minecraft:wildflowers","minecraft:cactus_flower"]`, `["bee_nest","beehive"]` | 
| target_offset | [0, 0, 0] | x, y, z coordinate array | Offset to add to the selected target position. | Bee: `[0,0.25,0]` | 
| target_selection_method | nearest | String | Kind of block to find fitting the specification. Valid values are "random" and "nearest". | Bee: `"random"` | 
| tick_interval | 20 | Integer number | Average interval in ticks to try to run this behavior. | Bee: `1` | 

## Target Block Filters

#### Target block filters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| operator | *not set* | String |  | Bee: `"=="` | 
| subject | *not set* | String |  | Bee: `"block"` | 
| test | *not set* | String |  | Bee: `"is_waterlogged"` | 
| value | *not set* | String |  | Bee: `false` | 

## Samples

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)

At /minecraft:entity/component_groups/look_for_food/minecraft:behavior.move_to_block/: 

```json
"minecraft:behavior.move_to_block": {
  "priority": 10,
  "tick_interval": 1,
  "start_chance": 0.5,
  "search_range": 6,
  "search_height": 4,
  "goal_radius": 1,
  "stay_duration": 20,
  "target_selection_method": "random",
  "target_offset": [
    0,
    0.25,
    0
  ],
  "target_block_filters": {
    "test": "is_waterlogged",
    "subject": "block",
    "operator": "==",
    "value": false
  },
  "target_blocks": [
    "minecraft:poppy",
    "minecraft:blue_orchid",
    "minecraft:allium",
    "minecraft:azure_bluet",
    "minecraft:red_tulip",
    "minecraft:orange_tulip",
    "minecraft:white_tulip",
    "minecraft:pink_tulip",
    "minecraft:oxeye_daisy",
    "minecraft:cornflower",
    "minecraft:lily_of_the_valley",
    "minecraft:dandelion",
    "minecraft:wither_rose",
    "minecraft:sunflower",
    "minecraft:lilac",
    "minecraft:rose_bush",
    "minecraft:peony",
    "minecraft:flowering_azalea",
    "minecraft:azalea_leaves_flowered",
    "minecraft:mangrove_propagule",
    "minecraft:pitcher_plant",
    "minecraft:torchflower",
    "minecraft:cherry_leaves",
    "minecraft:pink_petals",
    "minecraft:open_eyeblossom",
    "minecraft:wildflowers",
    "minecraft:cactus_flower"
  ],
  "on_stay_completed": [
    {
      "event": "collected_nectar",
      "target": "self"
    }
  ]
}
```

At /minecraft:entity/component_groups/find_hive/minecraft:behavior.move_to_block/: 

```json
"minecraft:behavior.move_to_block": {
  "priority": 10,
  "search_range": 16,
  "search_height": 10,
  "tick_interval": 1,
  "goal_radius": 0.633,
  "target_blocks": [
    "bee_nest",
    "beehive"
  ],
  "on_reach": [
    {
      "event": "minecraft:bee_returned_to_hive",
      "target": "block"
    }
  ]
}
```
