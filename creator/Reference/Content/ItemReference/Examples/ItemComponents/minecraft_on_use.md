---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:on_use
ms.prod: gaming
---

# Item Documentation - minecraft:on_use

`minecraft:on_use` Allows you to receive an event when the item is used.

>[!IMPORTANT]
> `minecraft:on_use` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|on_use|*not set*|String |Event trigger for when the item is used.|

## Example

```json
"minecraft:on_use":{
    "on_use": "minecraft:entity_transformed"
}
```
