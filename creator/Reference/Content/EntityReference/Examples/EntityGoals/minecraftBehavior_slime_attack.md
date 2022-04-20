---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.slime_attack
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.slime_attack

`minecraft:behavior.slime_attack` allows an entity to make a melee attack similar to the `slime` and `magma_cube`.

> [!IMPORTANT]
> `minecraft:behavior.slime_attack` requires a target in order to work properly. Target can be determined by using one of the following behaviors:
>
>- [minecraft:behavior.nearest_attackable_target](minecraftBehavior_nearest_attackable_target.md)
>- [minecraft:behavior.hurt_by_target](minecraftBehavior_hurt_by_target.md)

> [!IMPORTANT]
> `minecraft:behavior.slime_attack` requires an attack attribute in order to work properly.
>
> `minecraft:attack`

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| set_persistent| false| Boolean| Allows the actor to be set to persist upon targeting a player |
| speed_multiplier| 1| Decimal| During attack behavior, this multiplier modifies the entity's speed when moving toward the target. |
| x_max_rotation| 10| Decimal| Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |
| y_max_rotation| 10| Decimal| Maximum rotation (in degrees), on the Y-axis, this entity can rotate while trying to look at the target. |

## Example

```json
"minecraft:behavior.slime_attack":{
    "priority": 2,
    "stalk_speed": 0.8,
    "max_stalk_dist": 12.0,
    "leap_height": 0.7,
    "leap_dist": 0.65,
    "pounce_max_dist": 5.0,
    "interest_time": 4.0,
    "stuck_time": 2.0,
    "strike_dist": 2.0
}
```

## Vanilla entities examples

### slime

```json
"minecraft:behavior.slime_attack": {
    "priority": 3
}
```

## Vanilla entities using `minecraft:behavior.slime_attack`

- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
