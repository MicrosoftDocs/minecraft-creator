---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.defend_trusted_target
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.defend_trusted_target

`minecraft:behavior.defend_trusted_target` allows an entity to react with an event when a trusted target is attacked.

>[!IMPORTANT]
> `minecraft:behavior.defend_trusted_target` requires a mob to be set to a trusted relationship in order for the behavior to work properly.
>
>The `"minecraft:trust"` component will set the entity state to trusted.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object| List of entity types that this mob considers valid targets.|
|aggro_sound|*not set* | String| Sound to occasionally play while defending. |
|attack_interval| 0| Integer| Time in seconds between attacks |
|must_see| false| Boolean| If true, only entities in this mob's viewing range can be selected as targets. |
|must_see_forget_duration| 3.0| Decimal| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more. |
|reevaluate_description| false| Boolean| If true, the mob will stop being targeted if it stops meeting any conditions. |
|on_defend_start | *not set* | Array | Event that can occur with Target when defense event begins. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|sound_chance| 0.05| Decimal | Probability that a sound will play. |
|within_radius| 0.0| Decimal| Distance in blocks that the target can be within to launch an attack.|

## Example

```json
"minecraft:behavior.defend_trusted_target":{
    "priority": 0,
    "within_radius": 25,
    "must_see": false,
    "aggro_sound": "mad",
    "sound_chance": 0.05,
    "on_defend_start": {
        "event":"minecraft:attack",
        "target": "self"
        }
}
```

## Vanilla entities examples

### fox

```json
"minecraft:behavior.defend_trusted_target": {
          "priority": 0,
          "within_radius": 25,
          "must_see": false,
          "aggro_sound": "mad",
          "sound_chance": 0.05,
          "on_defend_start": {
            "event": "minecraft:fox_configure_defending",
            "target": "self"
          }
}

```

## Vanilla entities using `minecraft:behavior.defend_trusted_target`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
