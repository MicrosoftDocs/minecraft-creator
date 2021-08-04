---
author: v-josjones
ms.author: v-josjones
title: minecraft:digger
ms.prod: gaming
---

# minecraft:digger

`minecraft:digger` sets the item as a "Digger" item. Component put on items that dig.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|destroy_speeds|*not set* |List | Destroy speed per block|
|on_dig |*not set*  | String| Trigger for when you dig a block that isn't listed in destroy_speeds|
|use_efficiency |false  | Boolean| Toggles if the item will be used efficiently|

## Example

```json
"minecraft:digger":{
    "destroy_speeds": ["dirt", "grass"],
    "on_dig": "minecraft:destroy_block",
    "use_efficiency": false
}
```
