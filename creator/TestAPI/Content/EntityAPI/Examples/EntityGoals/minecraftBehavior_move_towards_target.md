---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.move_towards_target
ms.prod: gaming
---

# minecraft:behavior.move_towards_target

`minecraft:behavior.move_towards_target` allows an entity to move towards a target.

> [!IMPORTANT]
> `minecraft:behavior.move_towards_target` requires a target in order to work properly.
>
>- [minecraft:behavior.nearest_attackable_target](minecraftBehavior_nearest_attackable_target.md)
>- [minecraft:behavior.hurt_by_target](minecraftBehavior_hurt_by_target.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|within_radius| 0.0| Decimal| Defines the radius in blocks that the mob tries to be from the target. A value of 0 means it tries to occupy the same block as the target |

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

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/iron_golem.json" range="216-220":::

## Vanilla entities using `minecraft:behavior.move_towards_target`

- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)