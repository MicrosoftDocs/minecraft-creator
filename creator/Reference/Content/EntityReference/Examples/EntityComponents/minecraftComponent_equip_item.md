---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:equip_item
description: "A reference document detailing the 'equip_item' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:equip_item

`minecraft:equip_item` compels the entity to equip desired equipment.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| excluded_items| *not set*| List| The list of items that the entity should not equip. |

## Example

```json
"minecraft:equip_item":{
}
```

## Vanilla entities examples

### skeleton

```json
"minecraft:equip_item": {
      },
```

## Vanilla entities using `minecraft:equip_item`

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
