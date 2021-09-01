---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:item_controllable
ms.prod: gaming
---

# Entity Documentation -  minecraft:item_controllable

`minecraft:item_controllable` allows an entity to be controlled by an item when riding this entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|control_items|*not set* | List| List of items that can be used to control this entity. |

## Example

```json
"minecraft:item_controllable":{
    "control_item:":"iron_sword"
}
```

## Vanilla entities examples

### pig

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pig.json" range="117-119":::

## Vanilla entities using `minecraft:item_controllable`

- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
