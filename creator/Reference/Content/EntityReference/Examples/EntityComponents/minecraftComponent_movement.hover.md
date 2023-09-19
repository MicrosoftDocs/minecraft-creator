---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:movement.hover
description: "A reference document detailing the 'movement.hover' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:movement.hover

`minecraft:movement.hover` causes the entity to hover.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the entity can turn per tick. |

## Example

```json
"minecraft:movement.hover":{
    "max_turn": 30.0
}
```

## Vanilla entities examples

### bee

```json
"minecraft:movement.hover": {
}
```

## Vanilla entities using `minecraft:movement.hover`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
