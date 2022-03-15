---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:durability
ms.prod: gaming
---

# Item Documentation - minecraft:durability

`minecraft:durability` sets how much damage the item can take before breaking.

>[!IMPORTANT]
> `minecraft:durability` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|damage_chance|*not set* |Float | Damage chance is the percentage chance of this item losing durability. Default is set to 100. Defined as an int range with min and max value. |
|max_durability|*not set* |Integer | Max durability is the amount of damage that this item can take before breaking.|

## Example

```json
"minecraft:durability":{
    "damage_chance": 0.015, //15%
    "max_durability": 36
}
```
