---
author: mammerla
ms.author: v-jimseaman
title: Introduction to Recipes
ms.prod: gaming
---

# Recipe Introduction

If you clicked on this article looking for Redstone-crusted strip steak or creeper crepes, you're going to be disappointed. However, your instincts are not totally off!

Recipes in Minecraft are very similar to recipes in real life: Assemble a variety of components, process them in a specific way, and create something new and wonderful (if you're lucky)!

The main difference in Minecraft is that recipes are not limited to food - furniture, resources, and more are created with recipes.

In this article, we will look at the basic components that comprise all recipes, as well as examples of each recipe type.

## Recipe Parameters

Recipe parameters are the building blocks that make up the recipe. While all recipes have parameters, not all recipes share the SAME parameters.

| Name | Type  | Description |
|--------------|-----------|------------|
|Input |Furnace; Potion| Items used to create the recipe|
|Output| Furnace; Potion| Items resulting from the recipe|
|Tags |Furnace; Potion; Shaped; Shapeless; Smithing Transform |Items that can be used to create the recipe. For example, 'crafting_table' for a shaped recipe, or 'stonecutter' for a shapeless recipe.|
|Key |Shaped |Pattern key character mapped to item names |
|Pattern |Shaped |Characters that represent a pattern to be defined by keys |
|Priority |Shaped; Shapeless |Sets the priority level of the recipe. Lower numbers represent a higher priority. |
|Result |Shaped; Shapeless; Smithing Transform |When input items match the pattern, these items are the result |
|Ingredients |Shapeless |Items used as input (without a shape) for the recipe |
|Reagent |Potion |Items used in the brewing container recipe with the potion |
|Addition |Smithing Transform |Items used to perform the transform |
|Base |Smithing Transform |Item to be transformed |

## Recipe Examples

### Furnace Recipe

These are recipes that (surprise!) require a furnace. `Input` items will burn and transform into the item(s) specified in `Output`. Furnace recipes use the **input**, **output**, and **tags** parameters.

### Shaped Recipe

Shaped recipes are created with a crafting table and require a dedicated pattern (that's why they're 'shaped'). Shaped recipes use the **key**, **pattern**, **priority**, **result**, and **tags** parameters.

### Shapeless Recipe

Shapeless recipes are recipes that do not require a dedicated pattern. Shapeless recipes use the **ingredients**, **priority**, **result**, and **tags** parameters.

### Potion Brewing Container Recipe

Potion brewing container recipes are recipes used with a potion brewing station to create containers for potions. Potion brewing container recipes use the **input**, **output**, **reagent**, and **tags** parameters.

### Potion Brewing Mix

Potion brewing mixes are recipes used to create potions to fill the containers mentioned above. Potion brewing mixes use the **input**, **output**, **reagent**, and **tags** parameters.

### Smithing Transform Recipe

Smithing Transform recipes are used with a smithing table to transform one item into another while retaining properties.
