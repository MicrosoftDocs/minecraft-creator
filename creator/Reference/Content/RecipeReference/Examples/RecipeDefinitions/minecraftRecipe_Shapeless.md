---
author: v-josjones
ms.author: v-josjones
title: Recipe Documentation - Shapeless Recipe
ms.prod: gaming
---

# Recipe Documentation - Shapeless Recipe

Represents a shapeless crafting recipe.

> [!NOTE]
> Unlike a [Shaped Recipe](minecraftRecipe_Shaped.md), `pattern` and `key` are not used when defining a Shapeless Recipe.

## Parameters

|Name |Type |Description |
|:-----------|:-----------|:-----------|
|ingredients| Array of item names|  Items used as input (without a shape) for the recipe. |
|priority| Integer| Sets the priority order of the recipe. Lower numbers represent a higher priority.|
|result| Array of item names| These items are the result. |
|tags|String array |(*optional*) Item that can create the shapeless recipe such as "stonecutter". |

## Shapeless Recipe Example

```JSON
{
"format_version": "1.17",
    "minecraft:recipe_shapeless": {
        "description": {
            "identifier": "minecraft:firecharge_coal_sulphur"
        },
     "priority": 0,
     "ingredients": {
        "item": "minecraft:fireball",
        "data": 0,
        "count": 4
     },
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
