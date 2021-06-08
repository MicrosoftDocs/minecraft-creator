---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.barter
ms.prod: gaming
---

# minecraft:behavior.barter

`minecraft:behavior.barter` allows an entity to drop an item in return after a player offers a trade by dropping a specific item near the entity.

> [!IMPORTANT]
> `minecraft:behavior.barter` requires the following in order to work properly;
> - `minecraft:barter` component.
> - `barter_table` loot table.

## Example

```json
"minecraft:behavior.barter":{
    "priority": 1
}
```

## Vanilla entities examples

### piglin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/piglin.json" range="499-497":::

## Vanilla entities using `minecraft:behavior.barter`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
