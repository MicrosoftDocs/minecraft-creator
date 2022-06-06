---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:block_placer
ms.prod: gaming
---

# Item Documentation - minecraft:block_placer

`minecraft:block_placer` sets the item as a Planter item component for blocks. Planter items are items that can be planted into another block.

>[!IMPORTANT]
> `minecraft:block_placer` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

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
