---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:digger
description: "A reference document detailing the 'digger' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:digger

`minecraft:digger` sets the item as a "Digger" item, and allows a creator to define how quickly the item can dig specific blocks.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|destroy_speeds|*not set* |Array | A list of blocks to dig, with correlating speeds of digging.|
|on_dig |*not set*  |JSON Object | **(For versions below 1.20.20)** Trigger for when digging a block that isn't listed in destroy_speeds.|
|use_efficiency |false  | Boolean| Determines whether the item is impacted by the `efficiency` enchantment.|

## Example

```json
"minecraft:digger":{
    "destroy_speeds": ["dirt", "grass"],
    "on_dig": "minecraft:destroy_block",
    "use_efficiency": false
}
```
