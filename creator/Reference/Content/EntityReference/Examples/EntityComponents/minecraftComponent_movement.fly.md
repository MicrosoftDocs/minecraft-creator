---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:movement.fly
ms.prod: gaming
---

# Entity Documentation - minecraft:movement.fly

`minecraft:movement.fly` causes the mob to fly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| start_speed| 0.1| Decimal|Initial speed of the mob when it starts gliding. |
| speed_when_turning| 0.2| Decimal|Speed that the mob adjusts to when it has to turn quickly. |

## Example

```json
"minecraft:movement.fly":{
    "max_turn": 30.0
}
```

## Vanilla entities examples

### parrot

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/parrot.json" range="142-143":::

## Vanilla entities using `minecraft:movement.fly`

- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)