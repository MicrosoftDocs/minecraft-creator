---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:game_event_movement_tracking
ms.prod: gaming
---

# Entity Documentation - minecraft:game_event_movement_tracking

`minecraft:game_event_movement_tracking` allows an entity to emit `entityMove`, `swim` and `flap` game events, depending on the block the entity is moving through. It is added by default to every mob. Add it again to override its behavior.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| emit_flap| false| Boolean| If true, the `flap` game event will be emitted when the entity moves through air. |
| emit_move| true| Boolean| If true, the `entityMove` game event will be emitted when the entity moves on ground or through a solid. |
| emit_swim| true| Boolean| If true, the `swim` game event will be emitted when the entity moves through a liquid. |

## Example

```json
"minecraft:game_event_movement_tracking":{
    "emit_flap": false,
    "emit_move": true,
    "emit_swim": true
}
```
