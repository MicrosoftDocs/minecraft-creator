---
author: JimSeaman42
ms.author: mikeam
title: Recipe Documentation -Shaped Recipe
description: "A reference document detailing shaped recipes"
ms.service: minecraft-bedrock-edition
---

# Recipe Documentation - Shaped Recipe

Represents a crafting recipe that is to be used with a crafting table. The key used in the pattern may be any single character except the 'space' character, which is reserved for empty slots in a recipe.

## Parameters

|Name |Type| Default| Description |
|:-----------|:-----------|------------|:-----------|
|assume_symmetry| Boolean| Determines if the recipe should assume symmetry or not.|
|key| array of key and item pairs| *not set*| Pattern key character mapped to item names. |
|pattern|String array|*not set*| Characters that represent a pattern to be defined by keys. |
| priority| Integer|*not set*| Sets the priority order of the recipe. Lower numbers represent a higher priority. |
|result| array of item names|*not set*| When input items match the pattern then these items are the result. |
|tags |String array| *not set* | Item that can create the shaped recipe, such as "crafting_table". |
|assume_symmetry| boolean| true| Used to automatically assume a symmetrical recipe should return the same result.|

### key and pattern

The `key` used in the pattern may be any single character except the 'space' character, which is reserved for empty slots in a recipe.

## Shaped Recipe Example

```json
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

## Shaped Recipes with assume_symmetry Property Set

`assume_symmetry` is an optional field.  If not set, it will default to `true`. By setting it to false, you can define mirrored versions of a recipe and have different results.

```json
{
"format_version": "1.19",
"minecraft:recipe_shaped": {
    "description": {
        "identifier": "minecraft:zig"
        },
    "tags": [ "crafting_table" ],
    "assume_symmetry": false,
    "pattern": [
        "##",
        " ##"
        ],
    "key": {
        "#": {
            "item": "minecraft:planks"
        }
    },
    "result": {
        "item": "minecraft:zig"
        }
    }
}
```

```json
{
"format_version": "1.20",
"minecraft:recipe_shaped": {
    "description": {
        "identifier": "minecraft:zag"
        },
    "tags": [ "crafting_table" ],
    "assume_symmetry": false,
    "pattern": [
        " ##",
        "##"
        ],
    "key": {
        "#": {
            "item": "minecraft:planks"
        }
    },
    "result": {
        "item": "minecraft:zag"
        }
    }
}
```

## Vanilla Example

### Iron Pickaxe

:::code language="json" source="../../../../Source/VanillaBehaviorPack/recipes/iron_pickaxe.json":::
