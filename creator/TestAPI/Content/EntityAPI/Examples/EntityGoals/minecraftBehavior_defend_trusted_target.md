---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.defend_trusted_target
ms.prod: gaming
---

# minecraft:behavior.defend_trusted_target

`minecraft:behavior.defend_trusted_target` allows an entity to react with an event when a trusted target is attacked.

>[!IMPORTANT]
> `minecraft:behavior.defend_trusted_target` requires a mob to be set to a trusted relationship in order for the behavior to work properly.
>
>The `"minecraft:trust"` component will set the entity state to trusted.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|aggro_sound|*not set* | String| Sound to occasionally play while defending. |
|attack_interval| 0| Integer| Time in seconds between attacks |
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object| List of entity types that this mob considers valid targets|
|must_see| false| Boolean| If true, only entities in this mob's viewing range can be selected as targets |
|must_see_forget_duration| 3.0| Decimal| Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |
|within_radius| 0.0| Decimal| Distance in blocks that the target can be within to launch an attack|

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

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/fox.json" range="73-83":::

## Vanilla entities using `minecraft:behavior.defend_trusted_target`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)

