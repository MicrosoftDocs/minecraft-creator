---
author: v-josjones
ms.author: v-josjones
title: minecraft:strength
ms.prod: gaming
---

# minecraft:strength

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

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/llama.json" range="99-102":::

## Vanilla entities using `minecraft:strength`

- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
