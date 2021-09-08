---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:shooter(entity)
ms.prod: gaming
---

# Entity Documentation - minecraft:shooter (Entity)

`minecraft:shooter` defines the entity's ranged attack behavior.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| aux_val| -1| Integer| ID of the Potion effect to be applied on hit |
| def| *not set*| String| Actor definition to use as projectile for the ranged attack. The actor definition must have the projectile component to be able to be shot as a projectile |

## Example

```json
"minecraft:shooter":{
    "aux_val": -1,
    "def": "minecraft:small_fireball",
}
```

## Vanilla entities examples

### ghast

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ghast.json" range="48-50":::

## Vanilla entities using `minecraft:shooter`

- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/entities/ghast.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)