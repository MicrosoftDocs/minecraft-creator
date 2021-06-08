---
author: v-josjones
ms.author: v-josjones
title: minecraft:bribeable
ms.prod: gaming
---

# minecraft:bribeable

`minecraft:bribeable` allows an entity to establish a way to get into the `bribed` state..

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|bribe_cooldown| 2.0| Decimal| Time in seconds before the Entity can be bribed again. |
|bribe_items|*not set* | List|  The list of items that can be used to bribe the entity. |

## Example

```json
"minecraft:bribeable":{
    "bribe_cooldown": 2.0,
    "bribe_items": "stick",
}
```

## Vanilla entities examples

### dolphin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/dolphin.json" range="18-20":::

## Vanilla entities using `minecraft:bribeable`

- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
