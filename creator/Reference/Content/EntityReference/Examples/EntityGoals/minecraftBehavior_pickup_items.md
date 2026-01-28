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


## Pickup Items Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_pickup_any_item | false | Boolean true/false | If true, the mob can pickup any item | Bogged: `true` | 
| can_pickup_to_hand_or_equipment | true | Boolean true/false | If true, the mob can pickup items to its hand or armor slots |  | 
| excluded_items | *not set* | Array of strings | List of items this mob will not pick up | Bogged: `[{"tags":"q.all_tags('minecraft:is_spear')"}]`, Drowned: `["minecraft:glow_ink_sac",{"tags":"q.all_tags('minecraft:is_spear')"}]` | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot | Allay: `2.2`, Bogged: `2` | 
| max_dist | 0 | Decimal number | Maximum distance this mob will look for items to pick up | Allay: `32`, Bogged: `3` | 
| pickup_based_on_chance | false | Boolean true/false | If true, depending on the difficulty, there is a random chance that the mob may not be able to pickup items | Bogged: `true` | 
| pickup_same_items_as_in_hand | *not set* | String |  | Allay: `true` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `2`, Bogged: `5`, Drowned: `6` | 
| search_height | *not set* | Decimal number |  | Allay: `32` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Allay: `6`, Bogged: `1`, Fox: `0.5` | 
| track_target | false | Boolean true/false | If true, this mob will chase after the target as long as it's a valid target |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.pickup_items": {
  "priority": 2,
  "max_dist": 32,
  "search_height": 32,
  "goal_radius": 2.2,
  "speed_multiplier": 6,
  "pickup_based_on_chance": false,
  "can_pickup_any_item": false,
  "can_pickup_to_hand_or_equipment": false,
  "pickup_same_items_as_in_hand": true
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:behavior.pickup_items": {
  "priority": 5,
  "max_dist": 3,
  "goal_radius": 2,
  "speed_multiplier": 1,
  "pickup_based_on_chance": true,
  "can_pickup_any_item": true,
  "excluded_items": [
    {
      "tags": "q.all_tags('minecraft:is_spear')"
    }
  ]
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:behavior.pickup_items": {
  "priority": 6,
  "max_dist": 3,
  "goal_radius": 2,
  "speed_multiplier": 1,
  "pickup_based_on_chance": true,
  "can_pickup_any_item": true,
  "excluded_items": [
    "minecraft:glow_ink_sac",
    {
      "tags": "q.all_tags('minecraft:is_spear')"
    }
  ]
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:behavior.pickup_items": {
  "priority": 11,
  "max_dist": 3,
  "goal_radius": 2,
  "speed_multiplier": 0.5
}
```

#### [Parched](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parched.json)


```json
"minecraft:behavior.pickup_items": {
  "priority": 6,
  "max_dist": 3,
  "goal_radius": 2,
  "speed_multiplier": 1,
  "pickup_based_on_chance": true,
  "can_pickup_any_item": true,
  "excluded_items": [
    {
      "tags": "q.all_tags('minecraft:is_spear')"
    }
  ]
}
```
