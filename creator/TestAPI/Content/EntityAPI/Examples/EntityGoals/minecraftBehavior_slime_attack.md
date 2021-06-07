---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.slime_attack
ms.prod: gaming
---

# minecraft:behavior.slime_attack

`minecraft:behavior.slime_attack` allows an entity to make a melee attack similar to the `slime` and `magma_cube`.

> [!IMPORTANT]
> `minecraft:behavior.slime_attack` requires a target in order to work properly.
>
>- [minecraft:behavior.nearest_attackable_target](minecraftBehavior_nearest_attackable_target.md)
>- [minecraft:behavior.hurt_by_target](minecraftBehavior_hurt_by_target.md)

> [!IMPORTANT]
> `minecraft:behavior.slime_attack` requires an attack attribute in order to work properly.
>
> `minecraft:attack`

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| Boolean| set_persistent| false| Allows the actor to be set to persist upon targeting a player |

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
    "strike_dist": 2.0,
}
```

## Vanilla entities examples

### slime

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/slime.json" range="126-128":::

## Vanilla entities using `minecraft:behavior.slime_attack`

- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
