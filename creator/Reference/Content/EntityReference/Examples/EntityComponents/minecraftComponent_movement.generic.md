---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:movement.generic
ms.prod: gaming
---

# Entity Documentation - minecraft:movement.generic

`minecraft:movement.generic` allows an entity to fly, swim, climb, etc.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the entity can turn per tick. |

## Example

```json
"minecraft:movement.generic":{
    "max_turn": 30.0
}
```

## Vanilla entities examples

### drowned

```json
"minecraft:movement.generic": {
      }
```

## Vanilla entities using `minecraft:movement.generic`

- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)