---
author: mammerla
ms.author: mikeam
title: Item Documentation - minecraft:block_placer
description: "A reference document detailing the 'block_placer' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:block_placer 

`minecraft:block_placer` sets the item as a planter item component for blocks. Items with this component will place a block when used.

[EXPERIMENTAL] This component can also be used instead of the `minecraft:icon` component to render the block this item will place as the icon (Requires the "Upcoming Creator Features" toggle). 

## Parameters 

|Name |Default Value  |Type  |Description  | 
|:----------|:----------|:----------|:----------| 
|block|*not set* |JSON Object | Defines the block that will be placed.| 
|use_on |*not set*  | Array| List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed. See [Custom Item Use Priority](../ItemUsePriority.md) for more information on use behavior.| 
|replace_block_item |false | Boolean | [EXPERIMENTAL] If true, the item will be registered as the item for this block. This item will be returned by default when the block is broken/picked. Note: the identifier for this item must match the block's identifier for this field to be valid. (Requires the "Upcoming Creator Features" toggle).| 


## Example 

```json 
"minecraft:block_placer":{ 
  "block": "seeds", 
  "use_on" : ["dirt", "grass"], 
  "replace_block_item": true 
} 
```
