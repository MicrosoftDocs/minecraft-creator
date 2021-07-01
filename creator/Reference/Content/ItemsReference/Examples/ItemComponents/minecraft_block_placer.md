---
author: v-josjones
ms.author: v-josjones
title: minecraft:block_placer
ms.prod: gaming
---

# minecraft:block_placer

`minecraft:block_placer` sets the item as a Planter item component. planter items are items that can be planted into another block.

> [!NOTE]
> When making Horse block_placer, you are restricted to leather, iron, gold, or diamond.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|block|*not set* |Integer | Set the placement block name for the planter item.|
|texture_type |*not set*  | String | Texture Type to apply for the block_placer.|

## Example

```json
"minecraft:block_placer":{
    "protection": 5,
    "texture_type" : "diamond"
}
```
