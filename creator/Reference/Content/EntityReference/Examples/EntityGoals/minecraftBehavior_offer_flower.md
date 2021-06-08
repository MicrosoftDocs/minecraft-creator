---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.offer_flower
ms.prod: gaming
---

# minecraft:behavior.offer_flower

`minecraft:behavior.offer_flower` allows an entity to offer a flower to another entity.

>[!IMPORTANT]
> `minecraft:behavior.offer_flower` requires a flower item to be held by the entity.
> This behavior can only be used by the `villager` entity types.

## Example

```json
"minecraft:behavior.offer_flower":{
    "priority": 4,
}
```

## Vanilla entities examples

### iron_golem

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/iron_golem.json" range="232-234":::

## Vanilla entities using `minecraft:behavior.offer_flower`

- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
