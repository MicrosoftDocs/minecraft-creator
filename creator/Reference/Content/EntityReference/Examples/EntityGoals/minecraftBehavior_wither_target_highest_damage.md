---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.wither_target_highest_damage
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.wither_target_highest_damage

`minecraft:behavior.wither_target_highest_damage` allows an entity to focus its attacks on whichever hostile mob has dealt the most damage to it.

> [!NOTE]
> This behavior can only be used by the `wither` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[entity_types](../Definitions/NestedTables/entity_types.md) | |JSON Object |List of entity types the wither takes into account to find who dealt the most damage to it (Please see entity_types' definition page).|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| filters|*not set* |Minecraft Filter|  Conditions that make this entry in the list valid |
| max_dist| 16| Decimal| Maximum distance this mob can be away to be a valid choice |
| must_see| false| Boolean| If true, the mob has to be visible to be a valid choice |
| must_see_forget_duration| 3.0| Decimal|  Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| reevaluate_description| false| Boolean| If true, the mob will stop being targeted if it stops meeting any conditions. |
| sprint_speed_multiplier| 1.0| Decimal| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| walk_speed_multiplier| 1.0| Decimal| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |

## Example

```json
"minecraft:behavior.wither_target_highest_damage":{
    "priority": 3,
}
```

## Vanilla entities examples

### wither

```json
"minecraft:behavior.wither_target_highest_damage": {
        "priority": 1
      },
```

## Vanilla entities using `minecraft:behavior.wither_target_highest_damage`

- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
