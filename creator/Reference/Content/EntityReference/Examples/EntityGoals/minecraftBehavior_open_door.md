---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.open_door
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.open_door

`minecraft:behavior.open_door` allows an entity to interact and open a door.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|close_door_after| true| Boolean| If true, the mob will close the door after opening it and going through it. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.open_door":{
    "priority": 2,
    "close_door_after":true,
}
```

## Vanilla entities examples

### wandering_trader

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wandering_trader.json" range="241-244":::

## Vanilla entities using `minecraft:behavior.open_door`

- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
