---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.follow_caravan
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.follow_caravan

`minecraft:behavior.follow_caravan` allows an entity to be lead with a `Lead` item. Leading the entity actually signals up to ten nearby entities that have been set in the `entity_types` variable to follow each other, forming a caravan.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object| List of entity types that this mob can follow in a caravan.|
|entity_count| 1| Integer| Number of entities that can be in the caravan. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|filters|*not set*| Minecraft Filter| Conditions that make this entry in the list valid |
|max_dist| 16| Decimal| Maximum distance this mob can be away to be a valid choice |
|must_see| false| Boolean| If true, the mob has to be visible to be a valid choice |
|must_see_forget_duration| 3.0| Decimal| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
|reevaluate_description| false| Boolean| If true, the mob will stop being targeted if it stops meeting any conditions. |
|sprint_speed_multiplier| 1.0| Decimal| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
|walk_speed_multiplier| 1.0| Decimal| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.follow_caravan":{
    "priority": 2,
    "entity_count": 7,
    "speed_multiplier": 0.75,
    "entity_types":{
        "filters":{ "test" :  "is_family", "subject" : "other", "value" :  "wolf"}}
}
```

## Vanilla entities examples

### llama

```json
"minecraft:behavior.follow_caravan": {
        "priority": 3,
        "speed_multiplier": 2.1,
        "entity_count": 10,
        "entity_types": {
          "filters": { "test" :  "is_family", "subject" : "other", "value" :  "llama"}
        }
```

## Vanilla entities using `minecraft:behavior.follow_caravan`

- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
