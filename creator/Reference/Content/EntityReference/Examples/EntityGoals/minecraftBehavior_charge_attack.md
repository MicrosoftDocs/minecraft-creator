---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.charge_attack
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.charge_attack

`minecraft:behavior.charge_attack` allows this entity to damage a target by using a running attack.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| max_distance| 3| Decimal| A charge attack cannot start if the entity is farther than this distance to the target. |
| min_distance| 2| Decimal| A charge attack cannot start if the entity is closer than this distance to the target. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1| Decimal| Modifies the entity's speed when charging toward the target. |
| success_rate| 0.1428| Decimal| Percent chance this entity will start a charge attack, if not already attacking (1.0 = 100%) |

## Example

```json
"minecraft:behavior.charge_attack": {
    "max_distance": 3,
    "min_distance": 2,
    "speed_multiplier": 1,
    "success_rate": 0.25

}
```

## Vanilla entities examples

### vex

```json
"minecraft:behavior.charge_attack": {
    "priority": 4
}
```

## Vanilla entities using `charge_attack`

- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
