---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.skeleton_horse_trap
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.skeleton_horse_trap

`minecraft:behavior.skeleton_horse_trap` allows an entity to function as a Skeleton horse trap and be triggered like them, spawning a lightning bolt, additional skeleton horses and skeleton horse riders when a player gets nearby.

> [!NOTE]
> This behavior can only be used by the `horse`, `mule`, `donkey` and `skeleton horses` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|duration| 1.0| Decimal| Amount of time in seconds the trap exists. After this amount of time is elapsed, the trap is removed from the world if it hasn't been activated. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|within_radius| 0.0| Decimal| Distance in blocks that the player has to be within to trigger the horse trap. |

## Example

```json
"minecraft:behavior.skeleton_horse_trap":{
    "priority": 2,
    "duration": 1.0,
    "within_radius": 12.0,
}
```

## Vanilla entities examples

### skeleton_horse

```json
"minecraft:skeleton_trap": {
        "minecraft:behavior.skeleton_horse_trap": {
          "within_radius": 10.0,
          "duration": 900.0,
          "priority": 2
        }
      },

```

## Vanilla entities using `minecraft:behavior.skeleton_horse_trap`

- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
