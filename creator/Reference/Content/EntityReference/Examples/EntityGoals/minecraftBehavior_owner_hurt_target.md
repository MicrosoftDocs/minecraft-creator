---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.owner_hurt_target
description: "A reference document detailing the 'behavior.owner_hurt_target' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.owner_hurt_target

`minecraft:behavior.owner_hurt_target` compels an entity to react when the owner hits a target.

>[!IMPORTANT]
> `minecraft:behavior.owner_hurt_target` requires a player to be set as the owner via taming or console command in order to work properly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object| List of entity types that this mob can target if they hurt their owner.|
|cooldown | 0.0 | Decimal |The amount of time in seconds that the mob has to wait before selecting a target of the same type again. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| filters| *not set*|Minecraft Filter|  Conditions that make this entry in the list valid |
| max_dist| 16| Decimal| Maximum distance this mob can be away to be a valid choice |
| must_see| false| Boolean| If true, the mob has to be visible to be a valid choice |
| must_see_forget_duration| 3.0| Decimal| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
| reevaluate_description| false| Boolean| If true, the mob will stop being targeted if it stops meeting any conditions. |
| sprint_speed_multiplier| 1.0| Decimal| Multiplier for the running speed. A value of 1.0 means the speed is unchanged |
| walk_speed_multiplier| 1.0| Decimal| Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |

## Example

```json
"minecraft:behavior.owner_hurt_target":{
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
"minecraft:behavior.owner_hurt_target": {
          "priority": 2
        }
```

## Vanilla entities using `minecraft:behavior.owner_hurt_target`

- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
