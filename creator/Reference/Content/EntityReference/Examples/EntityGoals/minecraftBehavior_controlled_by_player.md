---
author: docsbryce
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.controlled_by_player
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.controlled_by_player

`minecraft:behavior.controlled_by_player` allows the entity to be controlled by the player using an item in the item_controllable property. On every tick, the entity will attempt to rotate towards where the player is facing with the control item whilst simultaneously moving forward.

> [!NOTE]
> This requires both an item_controllable quality, the minecraft:movement property and the minecraft:rideable property.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| fractional_rotation| 0.5| Decimal| The entity will attempt to rotate to face where the player is facing each tick. The entity will target this percentage of their difference in their current facing angles each tick (from 0.0 to 1.0 where 1.0 = 100%). This is limited by FractionalRotationLimit. A value of 0.0 will result in the entity no longer turning to where the player is facing. |
| fractional_rotation_limit| 5.0| Decimal| Limits the total degrees the entity can rotate to face where the player is facing on each tick. |
| mount_speed_multiplier| 1.0| Decimal| Speed multiplier of mount when controlled by player. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.controlled_by_player": {
    "mount_speed_multiplier": 1.45,
    "fractional_rotation": 0.5,
    "fractional_rotation_limit": 5.0
}
```

## Vanilla entities examples

### strider

```json
"minecraft:behavior.controlled_by_player": {
    "priority": 0,
    "mount_speed_multiplier": 1.45
}
```

## Vanilla entities using `controlled_by_player`

- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
