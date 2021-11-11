---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:knockback_resistance
ms.prod: gaming
---

# Item Documentation - minecraft:knockback_resistance

`minecraft:knockback_resistance` sets the knockback resistance item component. Determines the amount of  knockback resistance that the item has.

>[!IMPORTANT]
> `minecraft:knockback_resistance` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|protection|*not set*|Float |Amount of knockback resistance provided with the total maximum protection being 1.0|

## Example

```json
"minecraft:knockback_resistance":{
    "protection": 0.5
}
```
