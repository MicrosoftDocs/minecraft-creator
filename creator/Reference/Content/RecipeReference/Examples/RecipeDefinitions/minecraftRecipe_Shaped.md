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
|key| array of key and item pairs| patten key character mapped to item names. |
|pattern|String array| characters that represent a pattern to be defined by keys. |
|priority| Integer| Item used as output for the furnace recipe. |
|result| array of item names| when input items match the pattern then these items are the result. |
|tags |String array| Item used as input for the furnace recipe. |

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
