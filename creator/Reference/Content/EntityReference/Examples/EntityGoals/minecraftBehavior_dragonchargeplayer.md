---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.dragonchargeplayer
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.dragonchargeplayer

`minecraft:behavior.dragonchargeplayer` allows this entity to attack a player by charging at them. The player is chosen by the `minecraft:behavior.dragonscanning`. Can only be used by the Ender Dragon.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| active_speed| 1| Decimal| The speed this entity moves when this behavior has started or while it's active. |
| continue_charge_threshold_time| 0.5| Decimal| If the dragon is outside the "target_zone" for longer than "continue_charge_threshold_time" seconds, the charge is canceled. |
| flight_speed| 0.6| Decimal| The speed this entity moves while this behavior is not active. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| target_zone| [10, 150]| Range [a, b]| Minimum and maximum distance, from the target, this entity can use this behavior. |
| turn_speed| 0.7| Decimal| The speed at which this entity turns while using this behavior. |

## Example

```json
"minecraft:behavior.dragonchargeplayer": {
    "active_speed": 1,
    "continue_charge_threshold_time": 0.5,
    "flight_speed": 0.6,
    "target_zone": [10, 150],
    "turn_speed": 0.7
}
```

## Vanilla entities examples

### ender_dragon

```json
"minecraft:behavior.dragonchargeplayer": {
    "priority": 1
}
```

## Vanilla entities using `dragonchargeplayer`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
