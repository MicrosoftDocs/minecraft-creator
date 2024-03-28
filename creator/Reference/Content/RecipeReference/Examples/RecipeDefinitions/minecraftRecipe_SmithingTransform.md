---
author: JimSeaman42
ms.author: mikeam
title: Recipe Documentation - Smithing Transform Recipe
description: "A reference document detailing smithing transform recipes"
ms.service: minecraft-bedrock-edition
---

# Recipe Documentation - Smithing Transform Recipe

Represents a smithing transform recipe for the Smithing Table. These recipes transform one item into another while retaining properties.

## Parameters

|Name |Type |Description |
|:-----------|:-----------|:-----------|
|addition| item name|  The material needed to perform the transform operation. In case of stackable items, only one item is consumed. The only accepted item is "minecraft:netherite_ingot." Items must have the "minecraft:transform_materials" tag to be accepted into the respective UI slot. |
|base| item name| The item to transform. base item properties will be copied to "result." The only accepted items are armor and tools. Items must have the "minecraft:transformable_items" tag to be accepted into the respective UI slot.|
|result| item name| The item to transform into. |
|tags|String array |The crafting station compatible with the recipe. The only accepted value is "smithing_table" |
|template| item name| The template needed to perform the transform operation. In case of stackable items, only 1 item is consumed. Items must have the "minecraft:transform_templates" tag to be accepted into the respective UI slot. |

## Smithing Transform Recipe Example

```json
{
"format_version": "1.17",
    "minecraft:recipe_smithing_transform": {
        "description": {
            "identifier": "minecraft:smithing_netherite_boots"
        },
     "tags": ["smithing_table"],
     "template": "minecraft:netherite_upgrade_smithing_template",
     "base": "minecraft:diamond_boots",
        "addition": "minecraft:netherite_ingot",
        "result": "minecraft:netherite_boots"
    }
}
```
