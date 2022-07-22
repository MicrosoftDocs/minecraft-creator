---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.find_mount
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.find_mount

`minecraft:behavior.find_mount` allows an entity to find another entity to mount.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|avoid_water| false| Boolean|  If true, the mob will not go into water blocks when going towards a mount. |
|mount_distance| -1.0| Decimal|  This is the distance the mob needs to be, in blocks, from the desired mount to mount it. If the value is below 0, the mob will use its default attack distance. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|start_delay| 0| Integer|  Time the mob will wait before starting to move towards the mount. |
|target_needed| false| Boolean|  If true, the mob will only look for a mount if it has a target. |
|within_radius| 0.0| Decimal| Distance in blocks within which the mob will look for a mount. |

## Example

```json
"minecraft:behavior.find_mount":{
    "priority": 2,
    "within_radius": 16,
    "avoid_water": true,
    "start_delay": 100,
    "target_needed": false,
    "mount_distance": 2.0
}
```

## Vanilla entities examples

### husk

```json
"minecraft:behavior.find_mount": {
          "priority": 1,
          "within_radius": 16
        }
```

## Vanilla entities using `minecraft:behavior.find_mount`

- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
