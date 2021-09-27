---
author: v-josjones
ms.author: v-josjones
title: Recipe Documentation -Shaped Recipe
ms.prod: gaming
---

# Recipe Documentation - Shaped Recipe

Represents a crafting recipe that is to be used with a crafting table.

## Parameters

|Name |Type| Description |
|:-----------|:-----------|:-----------|
|key| array of key and item pairs| Patten key character mapped to item names. |
|pattern|String array| Characters that represent a pattern to be defined by keys. |
|priority| Integer| Sets the priority order of the recipe. Lower numbers represent a higher priority. |
|result| array of item names| When input items match the pattern then these items are the result. |
|tags |String array| Item that can create the shaped recipe, such as "crafting_table". |

### key and pattern

The `key` used in the pattern may be any single character except the 'space' character, which is reserved for empty slots in a recipe.

## Shaped Recipe Example

```JSON
{
"format_version": "1.17",
"minecraft:recipe_shaped": {
    "description": {
        "identifier": "minecraft:acacia_boat"
        },
    "tags": [ "crafting_table" ],
    "pattern": [
        "#P#",
        "###"
        ],
    "key": {
        "P": {
            "item": "minecraft:wooden_shovel"
        },
        "#": {
            "item": "minecraft:planks",
            "data": 4
        }
    },
    "result": {
        "item": "minecraft:boat",
        "data": 4
        }
    }
}
```

## Vanilla Example

### Iron Pickaxe

:::code language="json" source="../../../../Source/VanillaBehaviorPack/recipes/iron_pickaxe.json":::
