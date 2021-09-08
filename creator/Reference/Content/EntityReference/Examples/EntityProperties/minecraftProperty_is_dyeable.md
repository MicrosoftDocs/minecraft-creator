---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:is_dyeable
ms.prod: gaming
---

# Entity Documentation -  minecraft:is_dyeable

`minecraft:is_dyeable` allows the entity to be interacted with dyes to change its color.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|interact_text|*not set* | String|  The text that will display when interacting with this entity with a dye when playing with Touch-screen controls. |

## Example

```json
"minecraft:is_dyeable":{
    "interact_text": "action.interact.dye"
}
```

## Vanilla entities examples

### sheep

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/sheep.json" range="82-84":::

## Vanilla entities using `minecraft:is_dyeable`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
