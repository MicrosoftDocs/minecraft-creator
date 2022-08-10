---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.slime_float
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.slime_float

`minecraft:behavior.slime_float` allows entities to float in water or lava. Can only be used by `slime` and `magma_cube`.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| jump_chance_percentage| 0.8| Decimal| Percent chance a slime or magma cube has to jump while in water / lava. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1.2| Decimal| Determines the multiplier the entity's speed is modified by when moving through water / lava. |

## Example

```json
"minecraft:behavior.slime_float":{
    "jump_chance_percentage": 0.8,
    "speed_multiplier": 1.2
}
```

## Vanilla entities examples

### slime

```json
"minecraft:behavior.slime_float": {
    "priority": 1,
    "jump_chance_percentage": 0.8,
    "speed_multiplier": 1.2
}
```

## Vanilla entities using `minecraft:behavior.slime_float`

- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
