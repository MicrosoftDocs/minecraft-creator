---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.swoop_attack
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.swoop_attack

`minecraft:behavior.swoop_attack` allows an entity to attack using swoop attack behavior. Ideal for use with flying mobs. The behavior ends if the entity has a horizontal collision or gets hit.

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| damage_reach| 0.2| Decimal| Added to the base size of the entity, to determine the target's maximum allowable distance, when trying to deal attack damage. |
| delay_range| [10, 20]| Range [a, b]| Minimum and maximum cooldown time-range (in seconds) between each attempted swoop attack. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1| Decimal| During swoop attack behavior, this determines the multiplier the entity's speed is modified by when moving toward the target. |

## Example

```json
"minecraft:behavior.swoop_attack": {
    "priority": 2,
    "damage_reach": 0.2,
    "speed_multiplier": 1.0,
    "delay_range": [ 10, 20 ]
}
```

## Vanilla entities examples

### dolphin

```json
"minecraft:behavior.swoop_attack": {
    "priority": 2,
    "damage_reach": 0.2,
    "speed_multiplier": 1.0,
    "delay_range": [ 10.0, 20.0 ]
}
```

## Vanilla entities using `minecraft:behavior.swoop_attack`

- [phantom](../../../../Source/VanillaBehaviorPack_Snippets/entities/phantom.md)
