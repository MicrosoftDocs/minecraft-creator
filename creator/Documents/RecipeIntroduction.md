---
author: JimSeaman42
ms.author: mikeam
title: Introduction to Recipes
description: "A reference document discussing the basics of recipes for creators"
ms.service: minecraft-bedrock-edition
---

# Recipe Introduction

Recipes in Minecraft are very similar to recipes in real life: Assemble a variety of components, process them in a specific way, and create something new and wonderful. The main difference in Minecraft is that recipes are not limited to food - furniture, resources, and more are created with recipes.

In this article, we will look at the basic components that comprise all recipes, as well as examples of each recipe type.

## Recipe Parameters

Recipe parameters are the building blocks that make up the recipe... to continue our analogy, these are our ingredients. While all recipes have parameters, not all recipes share the SAME parameters.

| Name | Type  | Description |
|--------------|-----------|------------|
|Input |Furnace; Potion| Items used to create a recipe|
|Output| Furnace; Potion| Items resulting from a recipe|
|Tags |Furnace; Potion; Shaped; Shapeless; Smithing Transform |Items that can be used to create a recipe. For example, 'crafting_table' for a shaped recipe, or 'stonecutter' for a shapeless recipe.|
|Key |Shaped |Pattern key character mapped to item names |
|Pattern |Shaped |Characters that represent a pattern to be defined by keys |
|Priority |Shaped; Shapeless |Sets the priority level of a recipe. Lower numbers represent a higher priority. |
|Result |Shaped; Shapeless; Smithing Transform |When input items match the pattern, these items are the result |
|Ingredients |Shapeless |Items used as input (without a shape) for a recipe |
|Reagent |Potion |Items used in the brewing container recipe with a potion |
|Addition |Smithing Transform |Items used to perform the transformation |
|Base |Smithing Transform |Item to be transformed |

## Recipe Tags

Recipe tags allow you to group together similar elements, for example different types of wood stairs, so that you can construct one recipe that can adapt to a variety of parameters. See [this article](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/TagsRecipeInput.md) for more information on recipe tags.

## Recipe Unlocking

As of version 1.20.10, players can "unlock" recipes ranging from very basic starters (e.g., a wooden pickaxe) through the most sophisticated items. As part of the item and recipe design process, you can control how an item gets unlocked via the 'unlock' element in your recipe JSON.

You can choose an unlock strategy for a recipe based on either an item or a context.

An `item` specifies the item to unlock. Optionally you can add a `data` tag to filter down to a specific type of item.

Acacia Planks:

```json
  "unlock": [
    {
      "item": "minecraft:wood",
      "data": 4
    }
  ]
```

A `context` can be one of three values:

* `AlwaysUnlocked`: Always unlock this item
* `PlayerInWater`: Player enters the water
* `PlayerHasManyItems`: Player has more than 10 items in their inventory

Crafting table:

```json
  "unlock": {
    "context": "AlwaysUnlocked"
  }
```

Chest:

```json
  "unlock": {
    "context": "PlayerHasManyItems"
  }
```

## Recipe Examples

### Furnace Recipe

These are recipes that require a furnace. `Input` items will burn and transform into the item(s) specified in `Output`. Furnace recipes use the **input**, **output**, and **tags** parameters.

* [Furnace reference documentation](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_Furnace.md)

### Shaped Recipe

Shaped recipes are created with a crafting table and require a dedicated pattern, which is why they're 'shaped' recipes. Shaped recipes use the **key**, **pattern**, **priority**, **result**, and **tags** parameters.

* [Shaped recipe reference documentation](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_Shaped.md)

### Shapeless Recipe

Shapeless recipes are recipes that do not require a dedicated pattern. Shapeless recipes use the **ingredients**, **priority**, **result**, and **tags** parameters.

* [Shapeless recipe reference documentation](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_Shapeless.md)

### Potion Brewing Container Recipe

Potion brewing container recipes are recipes used with a potion brewing station to create containers for potions. Potion brewing container recipes use the **input**, **output**, **reagent**, and **tags** parameters.

* [Potion brewing mix reference documentation](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_PotionBrewingMix.md)

### Potion Brewing Mix

Potion brewing mixes are recipes used to create potions to fill the containers mentioned above. Potion brewing mixes use the **input**, **output**, **reagent**, and **tags** parameters.

* [Potion brewing reference documentation](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_PotionBrewingMix.md)

### Smithing Transform Recipe

Smithing Transform recipes are used with a smithing table to transform one item into another while retaining properties.

* [Smithing transform reference documentation](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_SmithingTransform.md)

### Smithing Trim Recipe

Smithing trim recipes are used with a smithing table to add a color trim to an item while retaining properties.

* [Smithing trim reference documentation](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_SmithingTrim.md)
