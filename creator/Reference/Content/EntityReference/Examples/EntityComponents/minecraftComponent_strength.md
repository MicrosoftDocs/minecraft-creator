---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:strength
ms.prod: gaming
---

# Entity Documentation - minecraft:strength

`minecraft:strength` defines the entity's ability to carry items.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max| 5| Integer| The maximum strength of this entity |
|value| 1| Integer|  The initial value of the strength |

## Example

```json
"minecraft:strength":{
    "max": 9000,
    "value": 1
}
```

## Vanilla entities examples

### llama

```json
"minecraft:strength": {
    "value": 1,
    "max": 5
}
```

## Vanilla entities using `minecraft:strength`

- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
