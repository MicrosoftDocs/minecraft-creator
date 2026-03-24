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


## Entity Random Search And Dig Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| cooldown_range | {"max":0,"min":0} | [Cooldown Range](#item-components-floatrange) item | Goal cooldown range in seconds. | Sniffer: `{"min":0,"max":0}` | 
| digging_duration_range | {"max":10,"min":8} | [Digging Duration Range](#item-components-floatrange) item | Digging duration in seconds. | Sniffer: `{"min":8,"max":10}` | 
| find_valid_position_retries | 5 | Integer number | Amount of retries to find a valid target position within search range. | Sniffer: `5` | 
| goal_radius | 1.5 | Decimal number | Distance in blocks within the entity to considers it has reached it's target position. | Sniffer: `2` | 
| item_table |  | String | File path relative to the resource pack root for items to spawn list (loot table format). | Sniffer: `"loot_tables/gameplay/entities/sniffer_seeds.json"` | 
| on_digging_start | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Digging Start](#entity-actordefinitiontrigger) item | Event to run when the goal ends searching has begins digging. | Sniffer: `{"event":"on_digging_start","target":"self"}` | 
| on_fail_during_digging | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Fail During Digging](#entity-actordefinitiontrigger) item | Event to run when the goal failed while in digging state. | Sniffer: `{"event":"on_fail_during_digging","target":"self"}` | 
| on_fail_during_searching | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Fail During Searching](#entity-actordefinitiontrigger) item | Event to run when the goal failed while in searching state. | Sniffer: `{"event":"on_fail_during_searching","target":"self"}` | 
| on_item_found | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Item Found](#entity-actordefinitiontrigger) item | Event to run when the goal find a item. | Sniffer: `{"event":"on_item_found","target":"self"}` | 
| on_searching_start | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Searching Start](#entity-actordefinitiontrigger) item | Event to run when the goal starts searching. | Sniffer: `{"event":"on_searching_start","target":"self"}` | 
| on_success | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Success](#entity-actordefinitiontrigger) item | Event to run when searching and digging has ended. | Sniffer: `{"event":"on_search_and_digging_success","target":"self"}` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Sniffer: `5` | 
| search_range_xz | 10 | Integer number | Width and length of the volume around the entity used to find a valid target position | Sniffer: `20` | 
| search_range_y | 7 | Integer number | Height of the volume around the entity used to find a valid target position | Sniffer: `3` | 
| spawn_item_after_seconds | 0 | Decimal number | Digging duration before spawning item in seconds. | Sniffer: `6` | 
| spawn_item_pos_offset | 0 | Decimal number | Distance to offset the item's spawn location in the direction the mob is facing. | Sniffer: `2.25` | 
| speed_multiplier | 1 | Decimal number | Searching movement speed multiplier. | Sniffer: `1.25` | 
| target_blocks (Target Blocks) | [] | Array of [Target Blocks](#target-blocks) items | List of target block types the goal will look to dig on. Overrides the default list. | Sniffer: `["minecraft:dirt","minecraft:coarse_dirt","minecraft:grass","minecraft:podzol","minecraft:dirt_with_roots","minecraft:moss_block","minecraft:pale_moss_block","minecraft:mud","minecraft:muddy_mangrove_roots"]` | 
| target_blocks (as String) | *not set* | String |  |  | 
| target_blocks (as Object) | *not set* | Object |  |  | 
| target_dig_position_offset | 2.25 | Decimal number | Dig target position offset from the feet position of the mob in their facing direction. |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `cooldown_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_digging_start`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event |  | String |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Filters allow data objects to specify test criteria which allows their use. | 
| filters (Alternate 1) | *not set* | Object |  | 
| target | self | [Target](#target-choices) choices |  | 

#### filters

Filters allow data objects to specify test criteria which allows their use. Filters can be defined by a single object of type (Filter Test), an array of tests, collection groups, or a combination of these objects.


#### Filters

##### Filters Properties

**JSON path:** `on_digging_start > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Target choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| baby | Baby | |
| block | Block | |
| damager | Damager | |
| holder | Holder | |
| item | Item | |
| other | Other | |
| parent | Parent | |
| player | Player | |
| self | Self | |
| target | Target | |

### Target Blocks

#### Target Blocks Properties

**JSON path:** `target_blocks`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

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
  "cooldown_range": {
    "min": 0,
    "max": 0
  },
  "digging_duration_range": {
    "min": 8,
    "max": 10
  },
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
