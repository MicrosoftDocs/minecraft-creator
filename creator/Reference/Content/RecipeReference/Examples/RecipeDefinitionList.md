---
author: JimSeaman42
ms.author: mikeam
title: Recipe Documentation - Recipe Definition List
description: "A reference document detailing the different types of recipes that can be used by creators"
ms.service: minecraft-bedrock-edition
---

# Recipe Documentation - Recipe Definition List

Recipes are setup in JSON files under the `behavior_packs/'name of pack'/recipes` directory. Recipe JSON files have different structures dependent on their type.

## List of Recipes

|Type of Recipe |Description |
|:--------|:-------|
|[Furnace](RecipeDefinitions/minecraftRecipe_Furnace.md) |Represents a recipe for use with a Furnace. 'Input' items will burn and transform into items specified in 'output.'|
|[Shaped](RecipeDefinitions/minecraftRecipe_Shaped.md) |Represents a recipe that requires a dedicated pattern when using a Crafting Table. |
|[Shapeless](RecipeDefinitions/minecraftRecipe_Shapeless.md) |Represents a recipe that does not require a dedicated pattern.|
|[Potion Brewing](RecipeDefinitions/minecraftRecipe_PotionBrewing.md) |Represents a recipe that for use with a Potion Brewing station.|
|[Potion Brewing Mix](RecipeDefinitions/minecraftRecipe_PotionBrewingMix.md) |Represents a Potion Brewing Mix.|
|[Smithing Transform](RecipeDefinitions/minecraftRecipe_SmithingTransform.md) |Represents a smithing transform recipe for the Smithing Table.|
|[Smithing Trim](RecipeDefinitions/minecraftRecipe_SmithingTrim.md) |Represents a smithing trim recipe for the Smithing Table.|
