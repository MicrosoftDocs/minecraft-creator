---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.restrict_open_door
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.restrict_open_door

`minecraft:behavior.restrict_open_door` allows an entity to stay indoors while the sun is down.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

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
