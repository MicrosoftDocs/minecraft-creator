---
author: v-josjones
ms.author: v-josjones
title: minecraft:area_attack
ms.prod: gaming
---

# minecraft:area_attack

`minecraft:area_attack` is a component that does damage to entities that get within range.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cause |*not set* | String| what causes the attack to occur  |
|[entity_filter](../FilterList.md) |*not set*  |Minecraft Filter|Filter to see which entities can be affected by the attack   |
|damage_per_tick| 2| Integer|  How much damage per tick is applied to entities that enter the damage range. |
|damage_range| 0.2| Decimal| How close a hostile entity must be to have the damage applied. |

## Example

```json
"minecraft:area_attack":{
    "damage_range": 0.2,
    "damage_per_tick": 2,
    "cause": "contact",
    "entity_filter": {
         "test": "is_family", "subject": "other", "value": "monster"
    }
}
```

## Vanilla entities examples

### pufferfish

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pufferfish.json" range="80-90":::

## Vanilla entities using `minecraft:area_attack`

- [area_effect_cloud](../../../../Source/VanillaBehaviorPack_Snippets/entities/area_effect_cloud.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
