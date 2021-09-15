---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:preferred_path
ms.prod: gaming
---

# Entity Documentation - minecraft:preferred_path

`minecraft:preferred_path` specifies costing information for mobs that prefer to walk on preferred paths.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| default_block_cost| 0| Decimal| Cost for non-preferred blocks |
| jump_cost| 0| Integer| Added cost for jumping up a node |
| max_fall_blocks| 3| Integer| Distance mob can fall without taking damage |
| preferred_path_blocks| *not set*| List| A list of blocks with their associated cost |

## Example

```json
"minecraft:preferred_path":{
    "default_block_cost": 2.0,
    "jump_cost": 0,
    "max_fall_blocks": 3,
    "preferred_path_blocks": []
}
```

## Vanilla entities examples

### village_v2

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager_v2.json" range="1152-1234":::

## Vanilla entities using `minecraft:preferred_path`

- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)