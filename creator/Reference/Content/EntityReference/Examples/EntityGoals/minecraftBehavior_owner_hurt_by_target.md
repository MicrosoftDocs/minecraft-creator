---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.owner_hurt_by_target
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.owner_hurt_by_target

`minecraft:behavior.owner_hurt_by_target` allows an entity to react when the owner is hit by a target.

>[!IMPORTANT]
> `minecraft:behavior.owner_hurt_by_target` requires a player to be set as the owner via taming or console command in order to work properly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object| List of entity types that this mob can target if they hurt their owner.|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| filters| *not set*|Minecraft Filter|  Conditions that make this entry in the list valid |
| max_dist| 16| Decimal| Maximum distance this mob can be away to be a valid choice |
| must_see| false| Boolean| If true, the mob has to be visible to be a valid choice |
| must_see_forget_duration| 3.0| Boolean| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| reevaluate_description| false| Boolean| If true, the mob will stop being targeted if it stops meeting any conditions. |
| sprint_speed_multiplier| 1.0| Decimal| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| walk_speed_multiplier| 1.0| Decimal| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |

## Example

```json
"minecraft:behavior.owner_hurt_by_target":{
    "priority": 2,
    "entity_types": {
            "filters":{
              "test": "is_family", "subject": "other", "value": "player"
            },
            "max_dist":32
          }
}
```

## Vanilla entities examples

### wolf

```json
"minecraft:behavior.owner_hurt_by_target": {
          "priority": 1
        },
```

## Vanilla entities using `minecraft:behavior.owner_hurt_by_target`

- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
