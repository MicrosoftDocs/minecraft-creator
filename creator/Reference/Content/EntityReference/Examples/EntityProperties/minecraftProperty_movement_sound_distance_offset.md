---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:movement_sound_distance_offset
ms.prod: gaming
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