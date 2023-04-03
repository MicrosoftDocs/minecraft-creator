---
author: mammerla
ms.author: v-jimseaman
title: Entity Documentation - minecraft:movement.fly
ms.prod: gaming
---

# Entity Documentation - minecraft:movement.fly

`minecraft:movement.fly` compels the mob to fly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| start_speed| 0.1| Decimal|Initial speed of the entity when it starts gliding. |
| speed_when_turning| 0.2| Decimal|Speed that the entity adjusts to when it has to turn quickly. |

## Example

```json
"minecraft:movement.fly":{
    "max_turn": 30.0
}
```

## Vanilla entities examples

### parrot

```json
"minecraft:movement.fly": {
      }
```

## Vanilla entities using `minecraft:movement.fly`

- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)