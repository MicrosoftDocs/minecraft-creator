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
|ingredients| array of item names|  items used as input (without a shape) for the recipe. |
|priority| Integer| Item used as output for the furnace recipe. |
|result| array of item names| these items are the result. |

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
