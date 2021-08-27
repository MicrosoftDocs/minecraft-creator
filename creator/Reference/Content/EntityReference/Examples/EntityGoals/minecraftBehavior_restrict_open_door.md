---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.restrict_open_door
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.restrict_open_door

`minecraft:behavior.restrict_open_door` allows an entity to stay indoors while the sun is down.

## Example

```json
"minecraft:behavior.restrict_open_door":{
    "priority": 2,
}
```

## Vanilla entities examples

### wandering_trader

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wandering_trader.json" range="238-240":::

## Vanilla entities using `minecraft:behavior.restrict_open_door`

- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
