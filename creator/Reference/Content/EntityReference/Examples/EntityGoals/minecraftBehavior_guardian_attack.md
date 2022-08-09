---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.guardian_attack
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.guardian_attack

`minecraft:behavior.guardian_attack` allows this entity to use a laser beam attack. Can only be used by Guardians and Elder Guardians.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| elder_extra_magic_damage| 2| Integer| Amount of additional damage dealt from an elder guardian's magic attack. |
| hard_mode_extra_magic_damage| 2| Integer| In hard difficulty, amount of additional damage dealt from a guardian's magic attack. |
| magic_damage| 1| Integer| Amount of damage dealt from a guardian's magic attack. Magic attack damage is added to the guardian's base attack damage. |
| min_distance| 3| Decimal| Guardian attack behavior stops if the target is closer than this distance (doesn't apply to elders). |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| sound_delay_time| 0.5| Decimal| Time (in seconds) to wait after starting an attack before playing the guardian attack sound. |
| x_max_rotation| 90| Decimal| Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |
| y_max_head_rotation| 90| Decimal| Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |

## Example

```json
"minecraft:behavior.guardian_attack": {
    "elder_extra_magic_damage": 2,
    "hard_mode_extra_magic_damage": 2,
    "magic_damage": 3,
    "min_distance": 8,
    "sound_delay_time": 0.75,
    "x_max_rotation": 90,
    "y_max_head_rotation": 90
}
```

## Vanilla entities examples

### guardian

```json
"minecraft:behavior.guardian_attack": {
    "priority": 4
}
```

## Vanilla entities using `guardian_attack`

- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
