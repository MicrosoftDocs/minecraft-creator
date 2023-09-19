---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - Item Definition Properties
description: "A reference document detailing item definition properties"
ms.service: minecraft-bedrock-edition
---

# Item Definition Properties

Properties are part of the Item Definition, which helps the system determine how to parse and initialize this item.

## Item Description Properties

### format_version

Specifies the version of the game this entity was made in. If the specified version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it.

### minecraft:item

Item definition, which includes the "description" and "components" sections.

### List of Properties

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| menu_category| "items" | | The Creative Category that includes the specified item. |
| group| | String| The Creative Group that that includes the specified item. The group name is limited to 256 characters. |
| is_hidden_in_commands| | Boolean| Determines whether or not this item can be used  with commands. Commands can use items by default |

### Example

```json
{  
  "format_version": "1.20.20",  
  "minecraft:item": {  
    "description": {  
      "identifier": "minecraft:blaze_rod",  
      "menu_category": {  
        "group": "itemGroup.name.blaze",  
        "category": "equipment", 
        "is_hidden_in_commands": true 
      }  
    },  
    "components": {  
      "minecraft:fuel": {  
        "duration": 120.0  
      },  
      "minecraft:max_stack_size": 64,  
      "minecraft:icon": {  
        "texture": "blaze_rod"  
      },  
      "minecraft:hand_equipped": true,  
      "minecraft:display_name": {  
        "value": "Blaze Rod"  
      }  
    }
  }
}
```
