---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.roll
ms.prod: gaming
---

# minecraft:behavior.roll

`minecraft:behavior.roll` allows an entity to roll and potentially started other entities. While sneezing, the entity may drop an item.

> [!NOTE]
> `minecraft:behavior.roll` requires a `player` to be tagged as the entity's owner, via taming or console command.

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|probability| [1.0]| Decimal| The probability that the mob will use the goal. |

## Example

```json
"minecraft:behavior.roll":{
    "priority": 7,
}
```

## Vanilla entities examples

### panda

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/panda.json" range="217-258":::

## Vanilla entities using `minecraft:behavior.roll`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
