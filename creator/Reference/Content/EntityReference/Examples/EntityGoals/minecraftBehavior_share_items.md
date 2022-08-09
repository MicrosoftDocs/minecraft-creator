---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.share_items
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.share_items

`minecraft:behavior.share_items` allows an entity to share items they have in their inventory with other specific entities that have been defined.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object| List of entities this mob will share items with.|
|goal_radius| 0.5| Decimal|  Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |
|max_dist| 0.0| Decimal|  Maximum distance in blocks this mob will look for entities to share items with. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|speed_multiplier| 1.0| Decimal|  Movement speed multiplier of the mob when using this AI Goal. |

### entity_types

`entity_types` is a JSON Object variable that can use the following parameters:

|Name |Default Value |Type |Description |
|:-----|:--------------|:-----|:------------|
|filters | |Minecraft Filter|Conditions that make this entry in the list valid. |
|max_dist |16 |Decimal |Maximum distance this mob can be away to be a valid choice. |
|must_see |false |Boolean |If true, the mob has to be visible to be a valid choice. |
|must_see_forget_duration |3.0 | Boolean |Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more. |
|reevaluate_description| false| Boolean| If true, the mob will stop being targeted if it stops meeting any conditions. |
|sprint_speed_multiplier |1.0 |Decimal |Multiplier for the running speed. A value of 1.0 means the speed is unchanged. |
|walk_speed_multiplier |1.0 |Decimal |Multiplier for the walking speed. A value of 1.0 means the speed is unchanged. |

## Example

```json
"minecraft:behavior.share_items":{
    "priority": 8,
    "speed_multiplier": 1.0,
    "max_dist": 2.0,
    "goal_radius": 3.0,
    "entity_types": [
        {
            "filters": { "test" :  "is_family", "subject" : "other", "value" :  "villager"}
        }
    ]
}
```

## Vanilla entities examples

### villager_v2

```json
"minecraft:behavior.share_items": {
        "priority": 9,
        "max_dist": 3,
        "goal_radius":  2.0,
        "speed_multiplier": 0.5,
        "entity_types": [
          {
            "filters": { "test" :  "is_family", "subject" : "other", "value" :  "villager"}
          }
        ]
      },
```

## Vanilla entities using `minecraft:behavior.share_items`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
