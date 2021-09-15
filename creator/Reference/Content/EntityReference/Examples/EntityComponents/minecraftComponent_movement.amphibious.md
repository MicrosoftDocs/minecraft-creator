---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:movement.amphibious
ms.prod: gaming
---

# Entity Documentation - minecraft:movement.amphibious

`minecraft:movement.amphibious` allows the mob to swim in water and walk on land.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the mob can turn per tick. |

## Example

```json
"minecraft:movement.amphibious":{
    "max_turn": 30.0
}
```

## Vanilla entities examples

### turtle

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/turtle.json" range="171-173":::

## Vanilla entities using `minecraft:movement.amphibious`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)