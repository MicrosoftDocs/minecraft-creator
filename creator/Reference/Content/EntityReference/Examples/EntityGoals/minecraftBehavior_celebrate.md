---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.celebrate
ms.prod: gaming
---

# minecraft:behavior.celebrate

`minecraft:behavior.celebrate` allows an entity to jump up and down while playing a sound.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|celebration_sound|*not set* | String|  The sound to occasionally play. |
|duration| 1.0|  Decimal| The duration of the celebration (in seconds). |
| jump_interval| [0,0]| Range [a, b]| The range of time in seconds to randomly wait before jumping again. |
|on_celebration_end_event|*not set* | Trigger|  The event to trigger when the goal's duration expires. |
|sound_interval| [0,0]| Range [a, b]|  The range of time in seconds to randomly wait before playing the sound again. |

## Example

```json
"minecraft:behavior.celebrate":{
    "priority": 5,
    "celebration_sound": "celebrate",
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

### witch

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/witch.json" range="12-28":::

## Vanilla entities using `minecraft:behavior.celebrate`

- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
