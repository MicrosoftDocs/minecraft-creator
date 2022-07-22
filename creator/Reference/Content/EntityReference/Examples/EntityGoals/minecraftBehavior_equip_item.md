---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.equip_item
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.equip_item

`minecraft:behavior.equip_item` causes an entity to equip an item.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Vanilla entities examples

### zombie

```json
"minecraft:behavior.equip_item": {
    "priority": 3
}
```

## Vanilla entities using `equip_item`

- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [wither_skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
