---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.offer_flower
ms.prod: gaming
---

# minecraft:behavior.offer_flower

`minecraft:behavior.offer_flower` allows an entity to navigate around a village by creating a path to patrol.

## Example

```json
"minecraft:behavior.offer_flower":{
    "priority": 1,
}
```

## Vanilla entities examples

### iron_golem

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/iron_golem.json" range="230-232":::

## Vanilla entities using `minecraft:behavior.offer_flower`

- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)