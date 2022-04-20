---
author: JDHeaden
ms.author: v-jillheaden
title: Item Documentation - minecraft:item_storage
ms.prod: gaming
---

# Item Documentation - minecraft:item_storage

`minecraft:item_storage` is used for storing items within an item's user data.

>[!IMPORTANT]
> `minecraft:item_storage` requires the Holiday Creator Features to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|capacity| 64| Integer| The maximum capacity of the item. |

## Example

```json
"minecraft:item_storage":{
    "capacity": 64
}
```
