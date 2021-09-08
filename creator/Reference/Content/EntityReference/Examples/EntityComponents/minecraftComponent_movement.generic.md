---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:movement.generic
ms.prod: gaming
---

# Entity Documentation - minecraft:movement.generic

`minecraft:movement.generic` allows a mob to fly, swim, climb, etc.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the mob can turn per tick. |

## Example

```json
"minecraft:movement.generic":{
    "max_turn": 30.0
}
```

## Vanilla entities examples

### drowned

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/drowned.json" range="136-137":::

## Vanilla entities using `minecraft:movement.generic`

- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)