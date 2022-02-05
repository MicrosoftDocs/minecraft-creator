---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - minecraft:part_visibility
ms.prod: gaming
---

# Block Documentation - minecraft:part_visibility

`minecraft:part_visibility` maps bone names in a geometry file to a condition that turns their rendering on/off. The condition should be a Molang query that uses block properties to determine true/falseSupported queries include 'has_block_property', 'block_property', and other queries that can evaluate without knowledge of the block's in-game positional or player affected data.

>[!IMPORTANT]
> `minecraft:part_visibility` requires the Upcoming Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Upcoming Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Default Parameter

|Default Value|Type |
|:----|:----|
|*not set*| JSON Object|
