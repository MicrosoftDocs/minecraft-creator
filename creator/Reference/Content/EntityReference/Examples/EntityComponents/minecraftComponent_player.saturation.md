---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:player.saturation
ms.prod: gaming
---

# Entity Documentation - minecraft:player.saturation

`minecraft:player.saturation` defines the player's need for food.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
|max| *not set*| Integer| The maximum player saturation value. |
|value| *not set*| Integer|  The initial value of player saturation. |

## Example

```json
"minecraft:player.saturation": {
        "value": 5,
         "max": 20
      }
```

## Vanilla entities examples

### player

```json
"minecraft:player.saturation": {
        "value": 5,
         "max": 20
      }
```

## Vanilla entities using `minecraft:exhaustion_values`

- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)
