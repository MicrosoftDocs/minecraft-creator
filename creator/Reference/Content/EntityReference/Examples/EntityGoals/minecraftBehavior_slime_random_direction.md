---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.slime_random_direction
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.slime_random_direction

`minecraft:behavior.slime_random_direction` allows the entity to move in random directions like a slime.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| add_random_time_range| 3| Integer| Additional time (in whole seconds), chosen randomly in the range of [0, "add_random_time_range"], to add to "min_change_direction_time". |
| min_change_direction_time| 2| Decimal| Constant minimum time (in seconds) to wait before choosing a new direction. |
| turn_range| 360| Integer| Maximum rotation angle range (in degrees) when randomly choosing a new direction. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.slime_random_direction": {
    "priority": 3,
    "add_random_time_range": 3,
    "turn_range": 360,
    "min_change_direction_time": 2.0
}
```

## Vanilla entities examples

### slime

```json
"minecraft:behavior.slime_random_direction": {
    "priority": 4,
    "add_random_time_range": 3,
    "turn_range": 360,
    "min_change_direction_time": 2.0
}
```

## Vanilla entities using `minecraft:behavior.slime_random_direction`

- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
