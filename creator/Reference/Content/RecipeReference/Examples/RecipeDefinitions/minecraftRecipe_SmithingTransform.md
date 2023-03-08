---
author: mammerla
ms.author: v-jimseaman
title: Recipe Documentation - Smithing Transform Recipe
ms.prod: gaming
---

# Recipe Documentation - Smithing Transform Recipe

Represents a smithing transform recipe for the Smithing Table. These recipes transform one item into another while retaining properties.

## Parameters

|Name |Type |Description |
|:-----------|:-----------|:-----------|
|addition| item name or item tag|  The item needed to perform the transform operation. In case of stackable items, only one item is consumed. The only accepted value is "minecraft:netherite_ingot" |
|base| item name or item tag| The item to transform. base item properties will be copied to "result." The only accepted values are armor and tools.|
|result| item name| The item to transform into. |
|tags|String array |The crafting station compatible with the recipe. The only accepted value is "smithing_table" |

## Smithing Transform Recipe Example

```JSON
{
"format_version": "1.17",
    "minecraft:recipe_smithing_transform": {
        "description": {
            "identifier": "minecraft:smithing_netherite_boots"
        },
     "tags": ["smithing_table"],
     "base": "minecraft:diamond_boots",
        "addition": "minecraft:netherite_ingot",
        "result": "minecraft:netherite_boots"
    }
}
```