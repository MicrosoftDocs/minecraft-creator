---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:player.experience
ms.prod: gaming
---

# Entity Documentation - minecraft:player.experience

`minecraft:player.experience` defines how much experience each player action should take.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
|max| 5| Integer| The maximum player experience of this entity. |
|value| 1| Integer|  The initial value of the player experience. |

## Example

```json
"minecraft:player.experience": {
        "value": 0,
        "max": 1
      }
```

## Vanilla entities examples

### player

```json
"minecraft:player.experience": {
        "value": 0,
        "max": 1
      }
```

## Vanilla entities using `minecraft:exhaustion_values`

- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)
