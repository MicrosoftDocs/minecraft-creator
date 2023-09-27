---
author: mammerla
ms.author: mikeam
title: Item Documentation - minecraft:block_placer
description: "A reference document detailing the 'block_placer' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:block_placer

`minecraft:block_placer` sets the item as a Planter item component for blocks. Planter items are items that can be planted into another block.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|block|*not set* |String | Set the placement block name for the planter item.|
|use_on |*not set*  | List| List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed. See [Custom Item Use Priority](../ItemUsePriority.md) for more information on use behavior.|

## Example

```json
"minecraft:block_placer":{
    "block": "seeds",
    "use_on" : ["dirt",
                "grass"]
}
```
