---
author: mammerla
ms.author: mikeam
title: Recipe Documentation - Shapeless Recipe
description: "A reference document detailing shapeless recipes"
ms.service: minecraft-bedrock-edition
---

# Recipe Documentation - Shapeless Recipe

Represents a shapeless crafting recipe.

> [!NOTE]
> Unlike a [Shaped Recipe](minecraftRecipe_Shaped.md), `pattern` and `key` are not used when defining a Shapeless Recipe.

## Parameters

|Name |Type |Description |
|:-----------|:-----------|:-----------|
|ingredients| RecipeItem Array |  Items used as input (without a shape) for the recipe. |
|priority| Integer| Sets the priority order of the recipe. Lower numbers represent a higher priority.|
|result| Array of item names| These items are the result. |
|tags|String array |(*optional*) Item that can create the shapeless recipe such as "stonecutter". |

### RecipeIngredient
A ingredient for a shapeless crafting recipe.

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| item| *not set*| string| The item `typeId` to be used ex, "minecraft:string" |
| data| 0| number| The data aux id to be used |
| count| 1| number| The count of this item. |

## Shapeless Recipe Example

```json
{
"format_version": "1.17",
    "minecraft:recipe_shapeless": {
        "description": {
            "identifier": "minecraft:firecharge_coal_sulphur"
        },
     "priority": 0,
     "ingredients": [
        {
        "item": "minecraft:fireball",
        "data": 0,
        "count": 4
        }
     ],
    "result": {
        "item": "minecraft:blaze_powder",
        "data": 4
        }
    }
}
```

## Vanilla Example

### Blaze Powder

:::code language="json" source="../../../../Source/VanillaBehaviorPack/recipes/blaze_powder.json":::

### Stonecutter Andesite Wall (with optional tag parameter)

:::code language="json" source="../../../../Source/VanillaBehaviorPack/recipes/stonecutter_andesite_wall.json":::
