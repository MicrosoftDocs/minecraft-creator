---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.roll
ms.prod: gaming
---

# minecraft:behavior.roll

`minecraft:behavior.roll` allows an entity roll forward.

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|probability| 1.0| Decimal| The probability that the mob will use the goal. |

## Example

```json
"minecraft:behavior.roll":{
    "priority": 7,
    "probability": 0.6
}
```

## Vanilla entities examples

### panda

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/panda.json" range="197-200":::

## Vanilla entities using `minecraft:behavior.roll`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
