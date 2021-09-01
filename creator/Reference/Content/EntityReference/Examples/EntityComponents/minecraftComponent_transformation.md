---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:transformation
ms.prod: gaming
---

# Entity Documentation - minecraft:transformation

`minecraft:transformation` defines an entity's transformation from the current definition into another.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| add| *not set*| JSON Object| List of components to add to the entity after the transformation|
| begin_transform_sound| *not set*| String| Sound to play when the transformation starts |
| drop_equipment| False| Boolean| Cause the entity to drop all equipment upon transformation |
| drop_inventory| False| Boolean| Cause the entity to drop all items in inventory upon transformation |
| into| *not set*| | String| Entity Definition that this entity will transform into. |
| keep_level| False| Boolean| If this entity has trades and has leveled up, it should maintain that level after transformation. |
| keep_owner| False| Boolean| If this entity is owned by another entity, it should remain owned after transformation. |
| preserve_equipment| False| Boolean| Cause the entity to keep equipment after going through transformation |
| transformation_sound| *not set*| String| Sound to play when the entity is done transforming |
| delay| *not set*| JSON Object| Defines the properties of the delay for the transformation|

### add

`add` is a JSON Object defined by ten parameters. Each item has the following properties:

| Name| Default Value| Type| Description|
|:-----------|:-----------|:-----------|:-----------|
| component_groups| *not set*| List| Names of component groups to add |

### delay

`delay` is a JSON Object defined by six parameters. Each item has the following properties:

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| block_assist_chance| 0.0| Decimal| Chance that the entity will look for nearby blocks that can speed up the transformation. Value must be between 0.0 and 1.0 |
| block_chance| 0| Decimal| Chance that, once a block is found, will help speed up the transformation |
| block_max| 0| Integer| Maximum number of blocks the entity will look for to aid in the transformation. If not defined or set to 0, it will be set to the block radius |
| block_radius| 0| Integer| Distance in Blocks that the entity will search for blocks that can help the transformation |
| block_types| *not set*| List| List of blocks that can help the transformation of this entity |
| value| 0| Decimal| Time in seconds before the entity transforms |

## Example

```json
"minecraft:transformation": {
    "into": "minecraft:drowned<minecraft:as_adult>",
    "transformation_sound": "convert_to_drowned",
    "drop_equipment": false,
    "drop_inventory": false,
    "keep_level": false,
    "delay": {
        "block_assist_chance": 0.0,
        "block_radius": 0,
        "block_max": 0,
        "value": 10
    }
}
```

## Vanilla entities examples

### husk

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/husk.json" range="41-48":::

### piglin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/piglin.json" range="49-55":::

## Vanilla entities using `minecraft:transformation`

- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
