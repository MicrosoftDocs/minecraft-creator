---
author: mammerla
ms.author: mikeam
title: Recipe Documentation - Potion Brewing Mix
ms.prod: gaming
---

# Recipe Documentation - Potion Brewing Mix

Represents a Potion Brewing Mix.

## Parameters

|Name |Type |Description |
|:-----------|:-----------|:-----------|
|input| potion| Input potion used on the brewing stand. |
|output| potion| Output potion from mixing the input potion with the reagent on the brewing stand. |
|reagent| item| Item used to mix with input potion. |
|tags|String array | Item used to make a brewing mix. |

## Potion Brewing Mix Example

```JSON
{
"format_version": "1.18",
"minecraft:recipe_brewing_mix": {
"description": {
    "identifier": "minecraft:brew_awkward_blaze_powder"
    },
 
 "tags": [ "brewing_stand" ],
 
    "input": "minecraft:potion_type:awkward",
    "reagent": "minecraft:blaze_powder",
    "output": "minecraft:potion_type:strength",
 
    }
}
```

## Vanilla Example

### Slow-Falling Redstone potion

:::code language="json" source="../../../../Source/VanillaBehaviorPack/recipes/brew_slow_falling_redstone.json":::
