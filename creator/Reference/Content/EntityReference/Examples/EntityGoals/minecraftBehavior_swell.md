---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.swell
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.swell

`minecraft:behavior.swell` allows an entity to grow in size when approached, and scale down back to normal after a certain distance.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|stop_distance| 2.0| Decimal| This mob stops swelling when a target has moved away at least this many blocks. |
| start_distance| 10.0|Decimal| This mob starts swelling when a target is at least this many blocks away. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.swell":{
    "priority": 3,
    "start_distance": 15.0,
    "stop_distance": 5.0
}
```

## Vanilla entities examples

### creeper

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/creeper.json" range="164-168":::

## Vanilla entities using `minecraft:behavior.swell`

- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
