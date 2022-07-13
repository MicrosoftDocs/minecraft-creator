---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:movement.hover
ms.prod: gaming
---

# Entity Documentation - minecraft:movement.hover

`minecraft:movement.hover` causes the mob to hover.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the mob can turn per tick. |

## Example

```json
"minecraft:movement.hover":{
    "max_turn": 30.0
}
```

## Vanilla entities examples

### bee

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/bee.json" range="478":::

## Vanilla entities using `minecraft:movement.hover`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)