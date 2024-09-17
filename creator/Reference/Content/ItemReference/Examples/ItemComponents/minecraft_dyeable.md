---
author: iconicNurdle
ms.author: mikeam
title: Item Documentation - minecraft:dyeable
description: "A reference document detailing the 'dyeable' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:dyeable

`minecraft:dyeable` enables custom items to be dyed in cauldrons. To use the dyeable component, the format version on the item and the attachable needs to have a `format_version` of **1.21.30** or greater.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| default_color| *not set* | String | Color to use by default. If you do not want a default color you can leave the "default_color" off and the texture will be the same as if you did not have the component until it is dyed. |
| dyed | *not set* | String | Texture for the dyed item. |


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
      "minecraft:max_stack_size": 1, 
      "minecraft:icon": {
        "textures": {
          "default": "custom_chestplate_icon",
          "dyed": "custom_chestplate_icon_gray"
        }
      },
      "minecraft:wearable": {
        "protection": 10, 
        "slot": "slot.armor.chest" 
      }, 
      "minecraft:durability": { 
        "damage_chance": { 
          "min": 10, 
          "max": 50 
      }, 
        "max_durability": 1560 
      }, 
      "minecraft:repairable": { 
        "repair_items": [ 
          { 
            "items": ["pink_dye"], 
            "repair_amount": 390 
          } 
        ] 
      }, 
      "minecraft:tags": { 
        "tags": [ 
          "minecraft:is_armor", 
          "minecraft:trimmable_armors" 
        ] 
      },
      "minecraft:dyeable": {
        "default_color":  "#175882"
      }
    } 
  } 
}
```
