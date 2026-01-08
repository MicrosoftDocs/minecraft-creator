---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:game_event_movement_tracking"
description: "Describes the minecraft:game_event_movement_tracking entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:game_event_movement_tracking

Allows an entity to emit `entityMove`, `swim` and `flap` game events, depending on the block the entity is moving through. It is added by default to every mob. Add it again to override its behavior.


## Game Event Movement Tracking Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| emit_flap | false | Boolean true/false | If true, the `flap` game event will be emitted when the entity moves through air. | Allay: `true` | 
| emit_move | true | Boolean true/false | If true, the `entityMove` game event will be emitted when the entity moves on ground or through a solid. |  | 
| emit_swim | true | Boolean true/false | If true, the `swim` game event will be emitted when the entity moves through a liquid. |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:game_event_movement_tracking": {
  "emit_flap": true
}
```

#### [Vex](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/vex.json)


```json
"minecraft:game_event_movement_tracking": {
  "emit_move": false,
  "emit_swim": false
}
```
