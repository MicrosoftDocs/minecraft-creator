---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.swim_with_entity
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.swim_with_entity

`minecraft:behavior.swim_with_entity` allows the entity follow another entity. Both entities must be swimming and in water.

## Parameters

|Name| Default Value| Type| Description|
|:-----------:|:-----------:|:-----------:|:-----------:|
|catch_up_multiplier| 2.5| Decimal| The multiplier this entity's speed is modified by when matching another entity's direction.|
|catch_up_threshold| 12| Decimal| Distance, from the entity being followed, at which this entity will speed up to reach that entity.|
|chance_to_stop| 0.0333| Decimal| Percent chance to stop following the current entity, if they're riding another entity or they're not swimming. 1.0 = 100%.|
| entity_types| | JSON Object| Filters which types of entities are valid to follow.|
|match_direction_threshold| 2| Decimal| Distance, from the entity being followed, at which this entity will try to match that entity's direction.|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|search_range| 20| Decimal| Radius around this entity to search for another entity to follow.|
|speed_multiplier| 1.5| Decimal| The multiplier this entity's speed is modified by when trying to catch up to the entity being followed.|
|state_check_interval| 0.5| Decimal| Time (in seconds) between checks to determine if this entity should catch up to the entity being followed or match the direction of the entity being followed.|
|stop_distance| 5| Decimal| Distance, from the entity being followed, at which this entity will stop following that entity.|
success_rate| 0.1| Decimal| Percent chance to start following another entity, if not already doing so. 1.0 = 100%.|


## Example

```json
"minecraft:behavior.swim_with_entity": {
    "priority": 4,
    "success_rate": 0.1,
    "chance_to_stop": 0.0333,
    "catch_up_threshold": 12.0,
    "match_direction_threshold": 2.0,
    "catch_up_multiplier": 2.5,
    "speed_multiplier": 1.5,
    "search_range": 20.0,
    "state_check_interval": 0.5,
    "stop_distance": 5.0,
    "entity_types": [
        {
        "filters": { "test": "is_family", "subject": "other", "value": "player" }
        }
    ]
}
```

## Vanilla entities examples

### dolphin

```json
"minecraft:behavior.swim_with_entity": {
    "priority": 4,
    "success_rate": 0.1,
    "chance_to_stop": 0.0333,
    "state_check_interval": 0.5,
    "catch_up_threshold": 12.0,
    "match_direction_threshold": 2.0,
    "catch_up_multiplier": 2.5,
    "speed_multiplier": 1.5,
    "search_range": 20.0,
    "stop_distance": 5.0,
    "entity_types": [
        {
        "filters": { "test": "is_family", "subject": "other", "value": "player" }
        }
    ]
}
```

## Vanilla entities using `minecraft:behavior.swim_with_entity`

- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
