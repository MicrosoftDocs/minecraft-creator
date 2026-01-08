---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.swim_with_entity"
description: "Describes the minecraft:behavior.swim_with_entity ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.swim_with_entity

Allows the entity follow another entity. Both entities must be swimming [ie, in water].


## Swim With Entity Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| catch_up_multiplier | 2.5 | Decimal number | The multiplier this entity's speed is modified by when matching another entity's direction. | Dolphin: `2.5` | 
| catch_up_threshold | 12 | Decimal number | Distance, from the entity being followed, at which this entity will speed up to reach that entity. | Dolphin: `12` | 
| chance_to_stop | 0.0333 | Decimal number | Percent chance to stop following the current entity, if they're riding another entity or they're not swimming. 1.0 = 100% | Dolphin: `0.0333` | 
| entity_types | *not set* | Minecraft filter | Filters which types of entities are valid to follow. | Dolphin: `[{"filters":{"test":"is_family","subject":"other","value":"player"}}]` | 
| match_direction_threshold | 2 | Decimal number | Distance, from the entity being followed, at which this entity will try to match that entity's direction | Dolphin: `2` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Dolphin: `4` | 
| search_range | 20 | Decimal number | Radius around this entity to search for another entity to follow. | Dolphin: `20` | 
| speed_multiplier | 1.5 | Decimal number | The multiplier this entity's speed is modified by when trying to catch up to the entity being followed. | Dolphin: `1.5` | 
| state_check_interval | 0.5 | Decimal number | Time (in seconds) between checks to determine if this entity should catch up to the entity being followed or match the direction of the entity being followed. | Dolphin: `0.5` | 
| stop_distance | 5 | Decimal number | Distance, from the entity being followed, at which this entity will stop following that entity. | Dolphin: `5` | 
| success_rate | 0.1 | Decimal number | Percent chance to start following another entity, if not already doing so. 1.0 = 100% | Dolphin: `0.1` | 

## Samples

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:behavior.swim_with_entity": {
  "priority": 4,
  "success_rate": 0.1,
  "chance_to_stop": 0.0333,
  "state_check_interval": 0.5,
  "catch_up_threshold": 12,
  "match_direction_threshold": 2,
  "catch_up_multiplier": 2.5,
  "speed_multiplier": 1.5,
  "search_range": 20,
  "stop_distance": 5,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      }
    }
  ]
}
```
