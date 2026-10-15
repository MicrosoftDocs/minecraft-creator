---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:use_modifiers"
description: "Describes the minecraft:use_modifiers item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:use_modifiers

Determines how long an item takes to use in combination with components such as Shooter, Throwable, or Food.

> [!Note]
> Renamed from `chargeable` in 1.20.50 and available without an experimental toggle.

> [!Note]
> This item requires a format version of at least 1.20.50.


## Item Use Modifiers Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| emit_vibrations | true | Boolean true/false | Whether vibrations are emitted when the item starts or stops being used. |  | 
| movement_modifier | *not set* | Decimal number | Multiplier applied to the player's movement speed while the item is in use. Value must be <= 1. | Apple: `0.35` | 
| start_sound | *not set* | String | Sound played when the item starts being used. Accepts the name of any sound event defined in `sound_definitions.json`, including the built-in vanilla sound events. |  | 
| start_using | always | [Start Using](#start-using-choices) choices | When the player begins using the item. | Apple: `"always"` | 
| use_duration | 0 | Decimal number | Time, in seconds, that the item takes to use. | Apple: `1.6` | 

### start_using

When the player begins using the item. Use `always` to start as soon as the use action is triggered (default), or `on_attack` to start using only when an attack input is received while the item is selected. This item requires a format version of at least 1.26.30.


### Start Using choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| always | Always | |
| if_first | If first | |

## Samples

#### [Apple](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/apple.json)


```json
"minecraft:use_modifiers": {
  "start_using": "always",
  "use_duration": 1.6,
  "movement_modifier": 0.35
}
```
