---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:variant
ms.prod: gaming
---

# Entity Documentation -  minecraft:variant

`minecraft:variant` is used to differentiate the component group of a variant of an entity from others, such as `ocelot`, `villager` and `horse`.

> [!NOTE]
> This behavior is a requirement for setting up multiple types of variants for an entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|value| 0| Integer|  The ID of the variant. By convention, 0 is the ID of the base entity. |

## Example

```json
"minecraft:variant":{
    "value": 0
}
```

## Vanilla entities examples

### fox

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/fox.json" range="141-143":::

## Vanilla entities using `minecraft:variant`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
