---
author: mammerla
ms.author: mikeam
title: Recipe Documentation - Furnace Recipe
description: "A reference document detailing furnace recipes"
ms.service: minecraft-bedrock-edition
---

# Recipe Documentation - Furnace Recipe

Represents a recipe that is to be used with a furnace. `Input` items will burn and transform into items specified in `output`.

## Parameters

|Name| Type| Description |
|:-----------|:-----------|:-----------|
|input| item names| Items used as input for the furnace recipe. `data` is used to specify the data value of a block or item to an exact id, if the item has variations. `count` is the quantity of the item being input. |
|output| item names| Items used as output for the furnace recipe. |
|tags |String array|  Item that can create the furnace recipe, such as "furnace". |

## Furnace Recipe Example

```json
{
"format_version": "1.17",
"minecraft:recipe_furnace": {
    "description": {
        "identifier": "minecraft:furnace_beef"
        },
    "tags": ["furnace", "smoker", "campfire", "soul_campfire"],
    "input": {
        "item": "minecraft:beef",
        "data": 0,
        "count": 4
        },
    "output ": "minecraft:cooked_beef"
    }
}
```

## Vanilla Example

### Cobblestone

:::code language="json" source="../../../../Source/VanillaBehaviorPack/recipes/furnace_cobblestone.json":::
