---
author: JimSeaman42
ms.author: mikeam
title: Recipe Documentation - Smithing Trim Recipe
description: "A reference document detailing smithing trim recipes"
ms.service: minecraft-bedrock-edition
---

# Recipe Documentation - Smithing Trim Recipe

Represents a smithing trim recipe for the Smithing Table. This recipe applies a colored trim pattern to an item while preserving its other properties.

## Parameters

|Name |Type |Description |
|:-----------|:-----------|:-----------|
|addition| item name or item tag| The material needed to perform the trim operation. It defines the color in which the pattern will be applied to the item. In case of stackable items, only 1 item is consumed. Items must have the "minecraft:trim_materials" tag to be accepted into the respective UI slot.|
|base| item name or item tag| The item to trim. Its properties will be preserved. The only accepted items are armors. Items must have the "minecraft:trimmable_armors" tag to be accepted into the respective UI slot.|
|tags|String array |The crafting station compatible with the recipe. The only accepted value is "smithing_table" |
|template| item name or item tag| The template needed to perform the trim operation. It defines the pattern which will be applied to the item. In case of stackable items, only 1 item is consumed. Items must have the "minecraft:trim_templates" tag to be accepted into the respective UI slot.|

## Smithing Trim Recipe Example

```json
{
 "format_version": "1.17",
 "minecraft:recipe_smithing_trim": {
  "description": {
    "identifier": "minecraft:smithing_diamond_boots_jungle_quartz_trim"
   },
  
  "tags": [ "smithing_table" ],
  
   "template": "minecraft:jungle_temple_smithing_template",
   "base": "minecraft:diamond_boots",
   "addition": "minecraft:quartz",
 }
}
```
