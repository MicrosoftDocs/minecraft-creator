---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:fuel
ms.prod: gaming
---

# Item Documentation - minecraft:fuel

`minecraft:fuel` allows this item to be used as fuel in a furnace to 'cook' other items.

>[!IMPORTANT]
> `minecraft:fuel` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|duration|*not set* |Float |How long in seconds will this fuel cook items for. Minimum value: 0.05. |

## Example

```json
"minecraft:fuel":{
    "duration": 3.0
}
```
