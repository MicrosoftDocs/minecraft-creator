---
author: v-josjones
ms.author: v-josjones
title: Recipe Documentation - Potion Brewing Container Recipe
ms.prod: gaming
---

# Recipe Documentation - Potion Brewing Container Recipe

Represents a Potion Brewing Container Recipe.

## Parameters

|Name |Type |Description |
|:-----------|:-----------|:-----------|
|input| potion| Input potion used in the brewing container recipe. |
|output| potion| Output potion from the brewing container recipe. |
|reagent| item| Item used in the brewing container recipe with the input potion. |
|tags|String array | Item used in a Brewing Container Recipe. |

## Potion Brewing Container Recipe Example

```JSON
{
"format_version": "1.17",
    "minecraft:recipe_brewing_container": {
    "description": {
        "identifier": "minecraft:brew_potion_sulphur"
    },
    "tags": [ "brewing_stand" ],
    "input": "minecraft:potion",
    "reagent": "minecraft:gunpowder",
    "output": "minecraft:splash_potion",
    }
}
```

## Vanilla Example

### Slow-Falling Redstone potion

:::code language="json" source="../../../../Source/VanillaBehaviorPack_Snippets/recipes/brew_slow_falling_redstone.json":::
