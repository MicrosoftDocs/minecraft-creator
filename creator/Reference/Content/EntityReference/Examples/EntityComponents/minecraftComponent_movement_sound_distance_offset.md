---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:movement_sound_distance_offset
description: "A reference document detailing the 'movement_sound_distance_offset' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation -  minecraft:movement_sound_distance_offset

`minecraft:movement_sound_distance_offset` sets the offset used to determine the next step distance for playing a movement sound.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|value| 1.0| Decimal|  The higher the number, the less often the movement sound will be played. |


## Vanilla entities example

### warden

```json
"minecraft:movement_sound_distance_offset": {
    "value": 0.55
}
```

## Vanilla entities using `minecraft:mark_variant`

- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
