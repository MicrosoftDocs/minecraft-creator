---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.move_towards_target
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.move_towards_target

`minecraft:behavior.move_towards_target` allows an entity to move towards a target.

> [!IMPORTANT]
> `minecraft:behavior.move_towards_target` requires a target in order to work properly. Target can be determined by using one of the following behaviors:
>
>- [minecraft:behavior.nearest_attackable_target](minecraftBehavior_nearest_attackable_target.md)
>- [minecraft:behavior.hurt_by_target](minecraftBehavior_hurt_by_target.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|within_radius| 0.0| Decimal| Defines the radius in blocks that the mob tries to be from the target. A value of 0 means it tries to occupy the same block as the target. |

## Example

```json
"minecraft:behavior.move_towards_target":{
    "priority": 1,
    "within_radius": 0.75,
    "speed_multiplier": 1.25
}
```

## Vanilla entities examples

### iron_golem

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/iron_golem.json" range="218-222":::

## Vanilla entities using `minecraft:behavior.move_towards_target`

- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
