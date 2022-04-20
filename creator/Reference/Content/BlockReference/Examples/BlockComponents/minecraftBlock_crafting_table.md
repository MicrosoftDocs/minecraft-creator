---
author: docsbryce
ms.author: v-bbortree
title: Block Documentation - minecraft:crafting_table
ms.prod: gaming
---

# Block Documentation - minecraft:crafting_table

`minecraft:crafting_table` is a component that describes the component of a custom crafting table. This component supports only "recipe_shaped" and "recipe_shapeless" typed recipes and not others like "recipe_furnace" or "recipe_brewing_mix". If there are two recipes for one item, the recipe book will pick the first that was parsed. If two input recipes are the same, crafting may assert and the resulting item may vary.

>[!IMPORTANT]
> `minecraft:crafting_table` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Crafting Tags

Defines the tags recipes should define to be crafted on this table. Limited to 64 tags.

## Custom Description

Defines the language file key that maps what text will be displayed in the UI of this table. If not specified, the name of the block will be used.
