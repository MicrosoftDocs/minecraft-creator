---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.nearest_prioritized_attackable_target
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.nearest_prioritized_attackable_target

`minecraft:behavior.nearest_prioritized_attackable_target` allows an entity to target and prioritize the nearest valid target.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|attack_interval| 0| Integer| Time in seconds before selecting a target |
|entity_types | *not set* |JSON Object | List of entity types that this mob considers valid targets. See [entity_types' definition page](../Definitions/NestedTables/entity_types.md).|
|must_reach| false| Boolean| If true, only entities that this mob can path to can be selected as targets |
|must_see| false| Boolean| If true, only entities in this mob's viewing range can be selected as targets. |
|must_see_forget_duration| 3.0| Decimal| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more. |
|persist_time| 0.0f| Decimal| Time in seconds for a valid target to stay targeted when it becomes and invalid target. |
|priority| 0| Integer| Specifies the priority in which filtered enemy types should be attacked. Lower number means higher priority. |
|reevaluate_description| false| Boolean| If true, the mob will stop being targeted if it stops meeting any conditions. |
|reselect_targets| false| Boolean| If true, the target will change to the current closest entity whenever a different entity is closer. |
|scan_interval| 10| Integer| How many ticks to wait between scanning for a target. |
|set_persistent| false| Boolean| Allows the actor to be set to persist upon targeting a player |
|target_search_height| -1.0| Decimal| Height in blocks to search for a target mob. -1.0 means the height does not matter. |
|within_radius| 0.0| Decimal| Distance in blocks that the target can be within to launch an attack. |

## Example

```json
"minecraft:behavior.nearest_prioritized_attackable_target":{
    "priority": 2,
    "attack_interval": 2,
    "reselect_targets": true,
    "target_search_height": 5,
    "entity_types":{
        "filters":{ "test" :  "is_family", "subject" : "other", "value" :  "salmon"}}
}
```

## Vanilla entities examples

### piglin_brute

```json
"minecraft:behavior.nearest_prioritized_attackable_target": {
          "priority": 3,
          "within_radius": 12.0,
          "persist_time": 2.0,
          "must_see": true,
          "entity_types": [
            {
              "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "player"
              },
              "max_dist": 12,
              "priority":  0
            },
            {
              "filters": {
                "test": "is_family",
                "subject": "other",
                "value": "wither"
              },
              "max_dist": 12,
              "priority": 1
            }
          ]
        }
```

## Vanilla entities using `minecraft:behavior.nearest_prioritized_attackable_target`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
