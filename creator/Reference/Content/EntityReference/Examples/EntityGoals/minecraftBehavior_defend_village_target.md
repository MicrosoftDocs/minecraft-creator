---
author: docsbryce
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.defend_village_target
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.defend_village_target

`minecraft:behavior.defend_village_target` allows the entity to stay in a village and defend the village from aggressors. If a player is in bad standing with the village, this goal will cause the entity to attack the player regardless of filter conditions.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| attack_chance| 0.05| Decimal| The percentage chance that the entity has to attack aggressors of its village, where 1.0 = 100%. |
| entity_types | {} | JSON Object | Entity filter to determine which targets the behavior affects. |
| must_reach | true | Boolean | The entity must be able to reach attacker. |
| priority | 1 | Decimal| The percentage chance that the entity has to attack aggressors of its village, where 1.0 = 100%. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.defend_village_target": {
    "mount_speed_multiplier": 1.45,
    "fractional_rotation": 0.5,
    "fractional_rotation_limit": 5.0
}
```

## Vanilla entities examples

### iron golem

```json
"minecraft:behavior.defend_village_target": {
    "priority": 1,
    "must_reach": true,
    "attack_chance": 0.05,
    "entity_types": {
        "filters": {
            "any_of": [
                { "test": "is_family", "subject": "other", "value": "mob" },
                { "test": "is_family", "subject": "other", "value": "player" }
            ] 
        }   
    }
}
```

## Vanilla entities using `defend_village_target`

- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
