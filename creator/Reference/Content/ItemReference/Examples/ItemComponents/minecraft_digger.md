---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:digger
ms.prod: gaming
---

# Item Documentation - minecraft:digger

`minecraft:digger` sets the item as a "Digger" item. Component put on items that dig.

>[!IMPORTANT]
> `minecraft:digger` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|destroy_speeds|*not set* |List | Destroy speed per block|
|on_dig |*not set*  |Trigger | Trigger for when you dig a block that isn't listed in destroy_speeds|
|use_efficiency |false  | Boolean| Toggles if the item will be used efficiently|

## Example

```json
"minecraft:digger":{
    "destroy_speeds": ["dirt", "grass"],
    "on_dig": "minecraft:destroy_block",
    "use_efficiency": false
}
```
