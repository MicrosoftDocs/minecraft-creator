---
author: v-josjones
ms.author: v-josjones
title: minecraft:block_placer
ms.prod: gaming
---

# minecraft:block_placer

`minecraft:block_placer` sets the item as a Planter item component for blocks. Planter items are items that can be planted into another block.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|block|*not set* |String | Set the placement block name for the planter item.|
|use_on |*not set*  | List| List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.|

## Example

```json
"minecraft:block_placer":{
    "block": "seeds",
    "use_on" : ["dirt",
                "grass"]
}
```
