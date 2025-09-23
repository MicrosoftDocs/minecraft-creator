---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:use_modifiers"
description: "Describes the minecraft:use_modifiers item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:use_modifiers

Determines how long an item takes to use in combination with components such as Shooter, Throwable, or Food.


## Item Components Use Modifiers Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| emit_vibrations | *not set* | Boolean true/false | Whether vibrations are emitted when the item starts or stops being used. Default value: true. |  | 
| movement_modifier | *not set* | Decimal number | Multiplier applied to the player's movement speed while the item is in use. Value must be <= 1. | Apple: `0.35` | 
| use_duration | *not set* | Decimal number | Time, in seconds, that the item takes to use. Default value: 0. | Apple: `1.6` | 

## Samples

#### [Apple](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/apple.json)


```json
"minecraft:use_modifiers": {
  "use_duration": 1.6,
  "movement_modifier": 0.35
}
```
