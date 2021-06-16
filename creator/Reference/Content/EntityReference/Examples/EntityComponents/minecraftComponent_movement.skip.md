---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:movement.skip
ms.prod: gaming
---

# minecraft:movement.skip

`minecraft:movement.skip` causes the mob to hop as it moves.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the mob can turn per tick. |

## Example

```json
"minecraft:movement.skip":{
    "max_turn": 30.0,
}
```

## Vanilla entities examples

### rabbit

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/rabbit.json" range="127-128":::

## Vanilla entities using `minecraft:movement.skip`

- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)