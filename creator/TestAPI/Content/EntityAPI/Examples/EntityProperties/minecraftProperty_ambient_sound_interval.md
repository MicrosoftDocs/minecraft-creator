---
author: v-josjones
ms.author: v-josjones
title: minecraft:ambient_sound_interval
ms.prod: gaming
---

# minecraft:ambient_sound_interval

`minecraft:ambient_sound_interval` will set the entity's delay between playing its ambient sound.

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|event_name| ambient| String|  Level sound event to be played as the ambient sound. |
|range| 16.000000|  Decimal| Maximum time in seconds to randomly add to the ambient sound delay time. |
|value| 8.000000| Decimal|  Minimum time in seconds before the entity plays its ambient sound again. |

## Example

```json
"minecraft:ambient_sound_interval":{
    "priority": 2,
    "parameterA":true,
    "parameterB":42,
}
```

## Vanilla entities examples

### witch

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/witch.json" range="45-49":::

## Vanilla entities using `minecraft:ambient_sound_interval`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
