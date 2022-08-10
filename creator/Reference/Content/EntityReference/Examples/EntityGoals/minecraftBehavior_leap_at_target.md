---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.leap_at_target
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.leap_at_target

`minecraft:behavior.leap_at_target` allows an entity to jump towards a target.

> [!IMPORTANT]
> `minecraft:behavior.leap_at_target` requires a target in order to work properly. Target can be determined by using one of the following behaviors:
>
>- [minecraft:behavior.nearest_attackable_target](minecraftBehavior_nearest_attackable_target.md)
>- [minecraft:behavior.hurt_by_target](minecraftBehavior_hurt_by_target.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|must_be_on_ground| true| Boolean|  If true, the mob will only jump at its target if its on the ground. Setting it to false will allow it to jump even if its already in the air |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|set_persistent| false| Boolean|  Allows the actor to be set to persist upon targeting a player |
|target_dist| 0.3| Decimal| Distance in blocks the mob jumps when leaping at its target.|
|yd| 0.0| Decimal| Height in blocks the mob jumps when leaping at its target. |

## Example

```json
"minecraft:behavior.leap_at_target":{
    "priority": 2,
    "must_be_on_ground": true,
    "set_persistent": false,
    "yd": 1.0
}
```

## Vanilla entities examples

### spider

```json
"minecraft:behavior.leap_at_target": {
          "priority": 4,
          "yd": 0.4,
          "must_be_on_ground": false
        },

```

## Vanilla entities using `minecraft:behavior.leap_at_target`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
