---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.celebrate_survive
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.celebrate_survive

`minecraft:behavior.celebrate_survive` allows this entity to celebrate_survive surviving a raid by shooting fireworks.

## Parameters

| Name| Default Value | Type | Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| celebration_sound| | String | The sound event to trigger during the celebration. |
| duration| 30.000000 | Decimal | The duration in seconds that the celebration lasts for. |
| jump_interval| [1, 3.5] | Range [a, b]| Minimum and maximum time between jumping (positive, in seconds). |
| on_celebration_end_event| | Trigger | The event to trigger when the goal's duration expires. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| sound_interval| [2, 7] | Range [a, b] | Minimum and maximum time between sound events (positive, in seconds). |

## Example

```json
 "minecraft:celebrate_survive": {
    "minecraft:behavior.celebrate_survive": {
        "priority": 5,
        "celebration_sound": "celebrate_survive",
        "sound_interval": {
            "range_min": 2.0,
            "range_max": 7.0
        },
        "jump_interval": {
            "range_min": 1.0,
            "range_max": 3.5
        },
        "duration": 30.0,
        "on_celebration_end_event": {
            "event": "minecraft:stop_celebrating",
            "target": "self"
        }
    }
```

## Vanilla entities examples

### villager

```json
"minecraft:behavior.celebrate_survive": {
    "priority": 5,
    "celebration_sound": "celebrate_survive",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 7.0
    },
    "jump_interval": {
        "range_min": 1.0,
        "range_max": 3.5
    },
    "duration": 30.0,
    "on_celebration_end_event": {
        "event": "minecraft:stop_celebrating",
        "target": "self"
    }
}
```

## Vanilla entities using `celebrate_survive`

- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
