---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:mark_variant
ms.prod: gaming
---

# Entity Documentation -  minecraft:mark_variant

`minecraft:mark_variant` sets the variant for the entity to be used.

> [!IMPORTANT]
> `minecraft:mark_variant` requires the entity to be set up to use variants with the `minecraft:variant` property component.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|value| 0| Integer|  The ID of the variant. By convention, 0 is the ID of the base entity. |

## Example

```json
"minecraft:mark_variant":{
    "value": 1
}
```

## Vanilla entities examples

### villager_v2

> [!NOTE]
> In the villager_v2 example, the `desert_villager` has been assigned the `value` of `1`.

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager_v2.json" range="1365-1369":::

## Vanilla entities using `minecraft:mark_variant`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
