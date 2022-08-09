---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.swim_wander
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.swim_wander

`minecraft:behavior.swim_wander` allows the entity to wander around while swimming, when not path-finding.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| interval| 0.00833| Decimal| Percent chance to start wandering, when not path-finding. 1 = 100% |
| look_ahead| 5| Decimal| Distance to look ahead for obstacle avoidance, while wandering. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1| Decimal| This multiplier modifies the entity's speed when wandering. |
| wander_time| 5| Decimal| Amount of time (in seconds) to wander after wandering behavior was successfully started. |

## Example

```json
"minecraft:behavior.swim_wander": {
    "priority": 4,
    "interval": 0.00833,
    "look_ahead": 5.0,
    "speed_multiplier": 1.0,
    "wander_time": 5.0
}
```

## Vanilla entities examples

### fish

```json
"minecraft:behavior.swim_wander": {
    "priority": 4,
    "interval": 0.1,
    "look_ahead": 2.0,
    "speed_multiplier": 1.0,
    "wander_time": 5.0
}
```

## Vanilla entities using `minecraft:behavior.swim_wander`

- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
