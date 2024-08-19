---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.slime_attack
description: "A reference document detailing the 'behavior.slime_attack' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.slime_attack

`minecraft:behavior.slime_attack` enables mobs with `minecraft:movement.jump` to path towards their target like a `slime` or `magma_cube` does to attack.

> [!IMPORTANT]
> In order to attack, the entity must have a `runtime_identifier` set to `minecraft:slime` and a variant component with a value greater than 1. Otherwise it will still path towards a target but it will not cause damage.

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
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| set_persistent| false| Boolean| Allows the entity to be set to persist upon targeting a player |
| speed_multiplier| 1| Decimal| During attack behavior, this multiplier modifies the entity's speed when moving toward the target. |
| x_max_rotation| 10| Decimal| Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |
| y_max_rotation| 10| Decimal| Maximum rotation (in degrees), on the Y-axis, this entity can rotate while trying to look at the target. |

## Example

```json
"minecraft:behavior.slime_attack":{
    "priority": 2,
    "set_persistent": true,
    "speed_multiplier": 3.0,
    "x_max_rotation": 15.0,
    "y_max_rotation": 15.0
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
