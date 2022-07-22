---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.mount_pathing
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.mount_pathing

`minecraft:behavior.mount_pathing` allows an entity to move around on its own while mounted. `minecraft:behavior.mount_pathing` also will allow an entity to target another entity for an attack.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |
|target_dist| 0.0| Decimal| The distance at which this mob wants to be away from its target. |
|track_target| false| Boolean| If true, this mob will chase after the target as long as it's a valid target. |

## Example

```json
"minecraft:behavior.mount_pathing":{
    "priority": 2,
    "speed_multiplier": 1.5,
    "target_dist": 0.5,
    "track_target": false
}
```

## Vanilla entities examples

### husk

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/husk.json" range="96-101":::

## Vanilla entities using `minecraft:behavior.mount_pathing`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)
- [zombie pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
