---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.dragonflaming
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.dragonflaming

`minecraft:behavior.dragonflaming` allows this entity to use a flame-breath attack. Can only be used by the Ender Dragon.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| cooldown_time| 10| Decimal| Time (in seconds), after roar, to breath flame. |
| flame_time| 0.5| Decimal| Time (in seconds), after roar, to breath flame. |
| ground_flame_count| 4| Integer| Number of ground flame-breath attacks to use before flight-takeoff. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| roar_time| 2| Decimal| Time (in seconds) to roar, before breathing flame. |

## Example

```json
"minecraft:behavior.dragonflaming": {
    "cooldown_time": 10,
    "flame_time": 0.5,
    "ground_flame_count": 4,
    "roar_time": 2
}
```

## Vanilla entities examples

### ender_dragon

```json
"minecraft:behavior.dragonflaming": {
    "priority": 1
}
```

## Vanilla entities using `dragonflaming`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
