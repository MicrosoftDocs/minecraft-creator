---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:attack_cooldown
ms.prod: gaming
---

# Entity Documentation - minecraft:attack_cooldown

`minecraft:attack_cooldown` adds a cooldown to an entity. The intention of this cooldown is to be used to prevent the entity from attempting to acquire new attack targets.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|attack_cooldown_complete_event|*not set* | JSON Object |  Event to be run when the cooldown is complete. |
| attack_cooldown_time| [0.0, 1.0]| Range [a, b]| Amount of time in seconds for the cooldown. Can be specified as a number or a pair of numbers (min and max). |

## Example

```json
"minecraft:attack_cooldown":{
    "attack_cooldown_complete_event": {
        "event": "attack_cooldown_complete_event",
        "target": "self"
    },
    "attack_cooldown_time": [0.1, 1.0]
}
```

## Vanilla entities examples

### hoglin

```json
"attack_cooldown": {
    "minecraft:attack_cooldown": {
        "attack_cooldown_time": [ 10.0, 15.0 ],
        "attack_cooldown_complete_event": {
            "event": "attack_cooldown_complete_event",
            "target": "self"
        }
    }
}
```

## Vanilla entities using `minecraft:attack_cooldown`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
