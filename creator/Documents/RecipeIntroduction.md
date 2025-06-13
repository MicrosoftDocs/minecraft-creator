---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Introduction to Recipes
description: "A reference document discussing the basics of recipes for creators"
ms.service: minecraft-bedrock-edition
ms.date: 06/12/2025
---

# Recipe Introduction

Recipes in Minecraft are very similar to recipes in real life. You gather a variety of components, prepare them in a specific and unique way, and in the end you create something new and wonderful. The main difference is that in Minecraft, recipes aren't limited to food &mdash; you use them to build furniture, complex resources, and more!

In this article, we'll look at the basic components of a recipe and go over the different recipe types to help you get started.

## Recipe Types

### Shaped vs. Shapeless Recipes

Players use [Shaped Recipes](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_Shaped.md) at a crafting table, and must place recipe components in a *dedicated pattern* to generate the output assigned to them. As a creator, you can use [resource](./ResourcePack.md) and [behavior packs](./BehaviorPack.md) to tweak pattern assignments and output parameters to make them perfect for your world.

> [!Tip]
> Shaped recipes use `key`, `pattern`, `priority`, `result`, and `tags` parameters.

[Shapeless recipes](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_Shapeless.md) are any recipes that don't require a dedicated pattern to generate the output assigned to them. As a creator, you can also leverage resource and behavior packs to edit and create new shapeless recipes, but the parameters used differ slightly.

> [!Tip]
> Shapeless recipes use `ingredients`, `priority`, `result`, and `tags` parameters.


### Furnace Recipes

These are recipes that require a furnace to generate the output assigned to them. When players place the correct item(s) into the furnace (the ones you define as an `input` in the table's JSON), they transform into the corresponding `output` assigned in the table. Check out the [furnace reference documentation](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_Furnace.md) for examples and a more detailed explanation of furnace recipe tables. 

> [!Tip]
> Furnace recipes use the `input`, `output`, and `tags` parameters.


### Potion Brewing Recipes

Potions require players to use both a potion brewing mix and a potion brewing container, which is created at a potion brewing station. As a creator, you can use  [resource](./ResourcePack.md) and [behavior packs](./BehaviorPack.md) to tweak the parameters for these potions, stations, and containers. Check out our [potion brewing mix reference documentation](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_PotionBrewingMix.md) for examples and a more detailed explanation of potion brewing tables. 

> [!Tip]
> Potion brewing mixes use the `input`, `output`, `reagent`, and `tags` parameters.

### Smithing Transform Recipes

Players use Smithing Transform recipes at a smithing table to retain an item's properties while transforming it into another item.  Check out our [reference documentation](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_SmithingTransform.md) for examples and a more detailed explanation of smithing transform recipes.


### Smithing Trim Recipes

Players use Smithing Trim recipes at a smithing table to add a color trim to an item while retaining the item's properties. Check out our [smithing trim reference documentation](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/minecraftRecipe_SmithingTrim.md) for examples and a more detailed explanation of smithing trim recipes.

## Recipe Parameters

Recipe parameters are the building blocks that make up the recipe. To continue the analogy from earlier &mdash; these are our ingredients! While all recipes have parameters, not all recipes share the SAME parameters.

| Name | Description | Type(s) |
|--------------|-----------|------------|
|Input | Defines the items used to create a recipe|Furnace; Potion|
|Output| Defines the item a certain recipe creates| Furnace; Potion|
|Tags | Define items that can be used to create a recipe. For example, 'crafting_table' for a shaped recipe, or 'stonecutter' for a shapeless recipe.|All |
|Key |Pattern key character mapped to item names |Shaped |
|Pattern |Characters that represent a pattern to be defined by keys |Shaped |
|Priority |Sets the priority level of a recipe. Lower numbers represent a higher priority. |Shaped; Shapeless |
|Result |When input items match the pattern, these items are the result |Shaped; Shapeless; Smithing Transform |
|Ingredients |Define the items required to complete a recipe (regardless of their orientation in the table)|Shapeless |
|Reagent |Defines the items combined with a potion in a brewing container recipe| Potion |
|Addition |Defines the items used to perform the transformation |Smithing Transform |
|Base |Defines the item that will be transformed |Smithing Transform |

## Recipe Tags

Recipe tags let you group simlilar elements together. For example, you can combine different types of wood stairs to construct a recipe that can adapt to a variety of parameters. See [this article](./../Reference/Content/RecipeReference/Examples/RecipeDefinitions/TagsRecipeInput.md) for more information on recipe tags.

## Recipe Unlocking

As of v1.20.10, players can "unlock" recipes ranging from very basic starters (like a wooden pickaxe) to some of the most sophisticated items Minecraft has to offer (like diamond ore or enchanted golden apples)! As part of the item and recipe design process, you can define the requirements for unlocking an item with the `unlock` element in your recipe JSON.

> [!Tip]
> You can choose an unlock strategy for a recipe based on either the discovery of an item or a specific in-world context.


### Recipe Examples

- An `item` specifies the item to unlock. Optionally you can add a `data` tag to filter down to a specific type of item.

  Acacia Planks:

  ```json
    "unlock": [
      {
        "item": "minecraft:wood",
        "data": 4
      }
    ]
  ```

- A `context` can be one of the following three values:

  * `AlwaysUnlocked`: Always unlocks the item when the specified context is met

  * `PlayerInWater`: Unlocks the item the first time the player enters the water

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