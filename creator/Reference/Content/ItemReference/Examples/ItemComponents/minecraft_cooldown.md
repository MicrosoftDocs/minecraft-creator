---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:cooldown
ms.prod: gaming
---

# Item Documentation - minecraft:cooldown

`minecraft:cooldown` sets the item's "Cool down" time. After you use an item it becomes unusable for the duration specified by the 'duration' setting in this component.

>[!IMPORTANT]
> `minecraft:cooldown` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|category|*not set* |String | The type of cool down for this item.|
|duration |*not set*  |Float | The duration of time (in seconds) this item will spend cooling down before becoming usable again.|

## Example

```json
"minecraft:cooldown":{
    "category" : "attack",
    "duration" : 0.2
}
```
