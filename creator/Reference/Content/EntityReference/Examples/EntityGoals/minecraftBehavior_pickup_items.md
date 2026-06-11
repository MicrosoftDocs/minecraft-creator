---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.pickup_items"
description: "Describes the minecraft:behavior.pickup_items ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.pickup_items

Allows the mob to pick up items on the ground.


## Entity Pickup Items Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_pickup_any_item | false | Boolean true/false | If true, the mob can pick up any item | Bogged: `true` | 
| can_pickup_to_hand_or_equipment | true | Boolean true/false | If true, the mob can pick up items to its hand or armor slots |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| cooldown_after_being_attacked | 0 | Integer number | Time in seconds the mob cannot pickup items after being attacked |  | 
| excluded_items | [] | String | List of items this mob will not pick up | Bogged: `[{"tags":"q.all_tags('minecraft:is_spear')"}]`, Drowned: `["minecraft:glow_ink_sac",{"tags":"q.all_tags('minecraft:is_spear')"}]` | 
| excluded_items (as Keyed set of strings) | *not set* | Keyed set of strings |  |  | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot | Allay: `2.2`, Bogged: `2` | 
| max_dist | 1 | Integer number | Maximum distance this mob will look for items to pick up | Allay: `32`, Bogged: `3` | 
| on_pickup_item_end | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Pickup Item End](#entity-actordefinitiontrigger) item | Event to run when this mob either finishes or loses interest in picking up an item |  | 
| on_pickup_item_start | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Pickup Item Start](#entity-actordefinitiontrigger) item | Event to run when this mob moves to pick up an item |  | 
| pickup_based_on_chance | false | Boolean true/false | If true, depending on the difficulty, there is a random chance that the mob may not be able to pickup items | Bogged: `true` | 
| pickup_same_items_as_in_hand | false | Boolean true/false | If true, the mob will only pick up items that match what it is already holding. | Allay: `true` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `2`, Bogged: `5`, Drowned: `6` | 
| search_height | 1 | Integer number | Height in blocks the mob will search for items | Allay: `32` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Allay: `6`, Bogged: `1` | 
| stop_if_holding_item | false | Boolean true/false | If true, the mob will not pick up another item if the item's preferred slot matches |  | 
| track_target | false | Boolean true/false | If true, this mob will chase after the target as long as it's a valid target |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_pickup_item_end`

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

**JSON path:** `on_pickup_item_end > filters`

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

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.pickup_items": {
  "can_pickup_any_item": false,
  "search_height": 32,
  "priority": 2,
  "goal_radius": 2.2,
  "can_pickup_to_hand_or_equipment": false,
  "max_dist": 32,
  "pickup_based_on_chance": false,
  "pickup_same_items_as_in_hand": true,
  "speed_multiplier": 6
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:behavior.pickup_items": {
  "can_pickup_any_item": true,
  "excluded_items": [
    {
      "tags": "q.all_tags('minecraft:is_spear')"
    }
  ],
  "pickup_based_on_chance": true,
  "goal_radius": 2,
  "priority": 5,
  "max_dist": 3,
  "speed_multiplier": 1
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:behavior.pickup_items": {
  "can_pickup_any_item": true,
  "excluded_items": [
    "minecraft:glow_ink_sac",
    {
      "tags": "q.all_tags('minecraft:is_spear')"
    }
  ],
  "pickup_based_on_chance": true,
  "goal_radius": 2,
  "priority": 6,
  "max_dist": 3,
  "speed_multiplier": 1
}
```

#### [Parched](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parched.json)


```json
"minecraft:behavior.pickup_items": {
  "can_pickup_any_item": true,
  "excluded_items": [
    {
      "tags": "q.all_tags('minecraft:is_spear')"
    }
  ],
  "pickup_based_on_chance": true,
  "goal_radius": 2,
  "priority": 6,
  "max_dist": 3,
  "speed_multiplier": 1
}
```
