---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation -minecraft:ambient_sound_interval
description: "A reference document detailing the 'ambient_sound_interval' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation -  minecraft:ambient_sound_interval

`minecraft:ambient_sound_interval` will set the entity's delay between playing its ambient sound.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|event_name| ambient| String|  Level sound event to be played as the ambient sound. |
|event_names| none | Array|  List of dynamic level sound events, with conditions for choosing among them. Evaluated in order, first one wins. If none evaluate to true, 'event_name' will take precedence. |
|range| 16.000000|  Decimal| Maximum time in seconds to randomly add to the ambient sound delay time. |
|value| 8.000000| Decimal|  Minimum time in seconds before the entity plays its ambient sound again. |

## Example

```json
"minecraft:ambient_sound_interval":{
    "priority": 2,
    "event_name": "ambient",
    "range": 16.0,
    "value": 8.0
}
```

## Vanilla entities examples

### witch

```json
"minecraft:ambient_sound_interval": {
          "value": 2.0,
          "range": 4.0,
          "event_name": "ambient.in.raid"
        }
```

## Vanilla entities using `minecraft:ambient_sound_interval`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
