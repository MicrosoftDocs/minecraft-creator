---
author: mammerla
ms.author: mikeam
title: Item Documentation - minecraft:rarity
description: "A reference document detailing the 'rarity' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:rarity

`minecraft:rarity` enables the specifying of the base rarity of an item. The rarity of the item will determine which color it uses for its name, unless the item has a "minecraft:hover_text_color" component specified, in which case that hover text color will take priority and be used instead of the rarity color.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| value| *not set* | String | Sets the base rarity of the item. Valid values are "common", "uncommon", "rare", and "epic". The rarity of an item automatically increases when enchanted, either to rare when the base rarity is common or uncommon, or epic when the base rarity is rare. |


## Example

```json
{ 
"format_version": "1.21.30", 
  "minecraft:item": { 
    "description": { 
      "identifier": "demo:custom_chestplate", 
      "menu_category": { 
        "category": "equipment", 
        "group": "itemGroup.name.chestplate" 
      }
    },
    "components": { 
      "minecraft:rarity": "rare"
    }
  } 
}
```
