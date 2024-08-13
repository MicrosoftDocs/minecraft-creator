---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.vex_copy_owner_target
description: "A reference document detailing the 'behavior.vex_copy_owner_target' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.vex_copy_owner_target

`minecraft:behavior.vex_copy_owner_target` compels an entity of the`vex` family to target the same entity as its owner.

> [!CAUTION]
> `minecraft:behavior.vex_copy_owner_target` is no longer used for the `vex` entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object| List of entities this mob can copy the owner from.|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

### entity_types

`entity_types` is a JSON Object variable that can use the following parameters:

|Name |Default Value |Type |Description |
|:-----|:--------------|:-----|:------------|
|cooldown | 0.0 | Decimal |The amount of time in seconds that the mob has to wait before selecting a target of the same type again. |
|filters | |Minecraft Filter|Conditions that make this entry in the list valid. |
|max_dist |16 |Decimal |Maximum distance this mob can be away to be a valid choice. |
|must_see |false |Boolean |If true, the mob has to be visible to be a valid choice. |
|must_see_forget_duration |3.0 | Decimal |Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more. |
|reevaluate_description| false| Boolean| If true, the mob will stop being targeted if it stops meeting any conditions. |
|sprint_speed_multiplier |1.0 |Decimal |Multiplier for the running speed. A value of 1.0 means the speed is unchanged. |
|walk_speed_multiplier |1.0 |Decimal |Multiplier for the walking speed. A value of 1.0 means the speed is unchanged. |

## Example

```json
"minecraft:behavior.vex_copy_owner_target":{
    "priority": 2
}
```

## Vanilla entities examples

No entities currently use `minecraft:behavior.vex_copy_owner_target`

## Vanilla entities using `minecraft:behavior.vex_copy_owner_target`

No entities currently use `minecraft:behavior.vex_copy_owner_target`
