---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.slime_keep_on_jumping
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.slime_keep_on_jumping

`minecraft:behavior.slime_keep_on_jumping` allows the entity to continuously jump around like a slime.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1| Decimal| Determines the multiplier this entity's speed is modified by when jumping around. |

## Example

```json
"minecraft:behavior.slime_keep_on_jumping":{
    "speed_multiplier": 1.0
}
```

## Vanilla entities examples

### slime

```json
"minecraft:behavior.slime_keep_on_jumping": {
    "priority": 5,
    "speed_multiplier": 1.0
}
```

## Vanilla entities using `minecraft:behavior.slime_keep_on_jumping`

- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
