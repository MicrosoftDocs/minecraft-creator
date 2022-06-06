---
author: mammerla
ms.author: v-bbortree
title: Block Documentation - minecraft:breathability
ms.prod: gaming
---

# Block Documentation - minecraft:breathability

`minecraft:breathability` is a component that sets the breathing type of a block that affects the breathing state of mobs when they have their breathing points inside this block. Available values: solid, air.

>[!IMPORTANT]
> `minecraft:breathability` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

## Enumerator

`minecraft:breathability` uses 2 enumerator states.

|Name |Description  |
|:----------|:----------|
|solid| Block is treated as a solid block|
|air| Block is treated as air|

## Example

```json
"minecraft:breathability": "solid"
```
