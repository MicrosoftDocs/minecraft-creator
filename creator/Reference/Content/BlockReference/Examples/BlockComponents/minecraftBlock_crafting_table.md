---
author: mammerla
ms.author: v-bbortree
title: Block Documentation - minecraft:crafting_table
ms.prod: gaming
---

# Block Documentation - minecraft:crafting_table

`minecraft:crafting_table` is a component that makes your block into a custom crafting table which enables the crafting table UI and the ability to craft recipes. This component supports only `recipe_shaped` and `recipe_shapeless` typed recipes and not others like `recipe_furnace` or `recipe_brewing_mix`. If there are two recipes for one item, the recipe book will pick the first that was parsed. If two input recipes are the same, crafting may assert and the resulting item may vary.

>[!IMPORTANT]
> `minecraft:crafting_table` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

## Crafting Tags

Defines the tags recipes to be crafted on this table. Limited to 64 tags. Each tag is limited to 64 characters.

## Table Name

Specifies the language file key that maps to what text will be displayed in the UI of this table. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this field is omitted, the name displayed will default to the name specified in the `display_name` component. If this block has no `display_name` component, the name displayed will default to the name of the block.