---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_search_and_dig"
description: "Describes the minecraft:behavior.random_search_and_dig ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_search_and_dig

Allows this entity to locate a random target block that it can path find to. Once found, the entity will move towards it and dig up an item. [Default target block types: Dirt, Grass, Podzol, DirtWithRoots, MossBlock, Mud, MuddyMangroveRoots].


## Random Search And Dig Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_range | *not set* | Range of integers | Goal cooldown range in seconds. |  | 
| digging_duration_range | *not set* | Range of integers | Digging duration in seconds. | Sniffer: `[8,10]` | 
| find_valid_position_retries | 5 | Integer number | Amount of retries to find a valid target position within search range. | Sniffer: `5` | 
| goal_radius | 1.5 | Decimal number | Distance in blocks within the entity to considers it has reached it's target position. | Sniffer: `2` | 
| item_table | *not set* | String | File path relative to the resource pack root for items to spawn list (loot table format). | Sniffer: `"loot_tables/gameplay/entities/sniffer_seeds.json"` | 
| on_digging_start | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when the goal ends searching has begins digging. | Sniffer: `{"event":"on_digging_start","target":"self"}` | 
| on_fail_during_digging | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when the goal failed while in digging state. | Sniffer: `{"event":"on_fail_during_digging","target":"self"}` | 
| on_fail_during_searching | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when the goal failed while in searching state. | Sniffer: `{"event":"on_fail_during_searching","target":"self"}` | 
| on_item_found | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when the goal find a item. | Sniffer: `{"event":"on_item_found","target":"self"}` | 
| on_searching_start | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when the goal starts searching. | Sniffer: `{"event":"on_searching_start","target":"self"}` | 
| on_success | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when searching and digging has ended. | Sniffer: `{"event":"on_search_and_digging_success","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Sniffer: `5` | 
| search_range_xz | 10 | Integer number | Width and length of the volume around the entity used to find a valid target position | Sniffer: `20` | 
| search_range_y | 7 | Integer number | Height of the volume around the entity used to find a valid target position | Sniffer: `3` | 
| spawn_item_after_seconds | 0 | Decimal number | Digging duration before spawning item in seconds. | Sniffer: `6` | 
| spawn_item_pos_offset | 0 | Decimal number | Distance to offset the item's spawn location in the direction the mob is facing. | Sniffer: `2.25` | 
| speed_multiplier | 1 | Decimal number | Searching movement speed multiplier. | Sniffer: `1.25` | 
| target_blocks | *not set* | Array of strings | List of target block types the goal will look to dig on. Overrides the default list. | Sniffer: `["minecraft:dirt","minecraft:coarse_dirt","minecraft:grass","minecraft:podzol","minecraft:dirt_with_roots","minecraft:moss_block","minecraft:pale_moss_block","minecraft:mud","minecraft:muddy_mangrove_roots"]` | 
| target_dig_position_offset | 2.25 | Decimal number | Dig target position offset from the feet position of the mob in their facing direction. |  | 

## Samples

#### [Sniffer](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json)


```json
"minecraft:behavior.random_search_and_dig": {
  "priority": 5,
  "speed_multiplier": 1.25,
  "find_valid_position_retries": 5,
  "target_blocks": [
    "minecraft:dirt",
    "minecraft:coarse_dirt",
    "minecraft:grass",
    "minecraft:podzol",
    "minecraft:dirt_with_roots",
    "minecraft:moss_block",
    "minecraft:pale_moss_block",
    "minecraft:mud",
    "minecraft:muddy_mangrove_roots"
  ],
  "goal_radius": 2,
  "search_range_xz": 20,
  "search_range_y": 3,
  "cooldown_range": 0,
  "digging_duration_range": [
    8,
    10
  ],
  "item_table": "loot_tables/gameplay/entities/sniffer_seeds.json",
  "spawn_item_after_seconds": 6,
  "spawn_item_pos_offset": 2.25,
  "on_searching_start": {
    "event": "on_searching_start",
    "target": "self"
  },
  "on_fail_during_searching": {
    "event": "on_fail_during_searching",
    "target": "self"
  },
  "on_digging_start": {
    "event": "on_digging_start",
    "target": "self"
  },
  "on_item_found": {
    "event": "on_item_found",
    "target": "self"
  },
  "on_fail_during_digging": {
    "event": "on_fail_during_digging",
    "target": "self"
  },
  "on_success": {
    "event": "on_search_and_digging_success",
    "target": "self"
  }
}
```
