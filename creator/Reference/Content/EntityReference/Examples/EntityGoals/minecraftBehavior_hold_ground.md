---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.hold_ground
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.hold_ground

`minecraft:behavior.hold_ground` allows an entity to stop in their current location, turn to face a mob they are targeting and react with an event.

> [!IMPORTANT]
> `minecraft:behavior.hold_ground` requires a target in order to work properly. Target can be determined by using one of the following behaviors:
>
>- [minecraft:behavior.nearest_attackable_target](minecraftBehavior_nearest_attackable_target.md)
>- [minecraft:behavior.hurt_by_target](minecraftBehavior_hurt_by_target.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|broadcast| false| Boolean| Whether to broadcast out the mob's target to other mobs of the same type. |
|broadcast_range| 0.0| Decimal| Range in blocks for how far to broadcast. |
|min_radius| 10.0| Decimal| Minimum distance the target must be for the mob to run this goal. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|within_radius_event|*not set* | JSON Object|  Event to run when target is within the radius. This event is broadcasted if broadcast is true. |

## Example

```json
"minecraft:behavior.hold_ground":{
    "priority": 1,
    "broadcast": true,
    "broadcast_range": 10,
    "min_radius": 25,
    "within_radius_event": {
        "event":"minecraft:ranged_mode",
        "target":"self"
    }
}
```

## Vanilla entities examples

### pillager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pillager.json" range="190-199":::

## Vanilla entities using `minecraft:behavior.hold_ground`

- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
