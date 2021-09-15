---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:equipment
ms.prod: gaming
---

# Entity Documentation -  minecraft:equipment

`minecraft:equipment` sets the equipment table to use for the entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|slot_drop_chance|*not set* | List|  A list of slots with the chance to drop an equipped item from that slot. |
|table|*not set* | String|  The file path to the equipment table, relative to the behavior pack's root. |

## Example

```json
"minecraft:equipment":{
    "table": "loot_tables/entities/piglin_brute_gear.json"
}
```

## Vanilla entities examples

### pillager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pillager.json" range="103-111":::

## Vanilla entities using `minecraft:equipment`

- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [wither skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [zombie pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
