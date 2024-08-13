---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.play_dead
description: "A reference document detailing the 'behavior.play_dead' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.play_dead

`minecraft:behavior.play_dead` compels an entity to play dead when attacked by other entities. The entity will not be targeted when playing dead.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| apply_regeneration| true| Boolean| Determines whether the entity will receive the regeneration effect while playing dead. |
| damage_sources| all| Array| List of Entity Damage Sources that will cause the entity to play dead. |
| duration| 1.000000| Decimal| The amount of time the entity will play dead (in seconds). |
| filters| | Minecraft Filter| The list of other triggers required for the entity to activate play dead |
| force_below_health| 0| Integer| The amount of health at which damage will cause the entity to play dead. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| random_damage_range| [0, 0]| Range [a, b]| The range of damage that may cause the goal to start depending on randomness. Damage taken below the min will never cause the goal to start. Damage taken above the max will always cause the goal to start. |
| random_start_chance| 1.000000| Decimal| The likelihood of this goal starting upon taking damage. |

## Example

```json
"minecraft:behavior.play_dead":{
    "play_dead": true,
    "duration": 10,
    "random_start_chance": ,
    "force_below_heath": 5,
    "random_damage_range": [2, 5],
    "damage_sources": "entity_attack",
    "apply_regeneration_": true
}
```

## Vanilla Mob examples

### axolotl

```json
"minecraft:behavior.play_dead": {
    "priority": 0,
    "duration": 10,
    "force_below_health": 8,
    "random_start_chance": 0.33,
    "random_damage_range": [ 0, 2 ],
    "damage_sources": [
        "contact",
        "entity_attack",
        "entity_explosion",
        "magic",
        "projectile",
        "thorns",
        "wither"
    ],
    "apply_regeneration": true,
    "filters": { "test": "in_water", "operator": "==", "value": true }
}
```

## Vanilla Mobs using `minecraft:behavior.play_dead`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
