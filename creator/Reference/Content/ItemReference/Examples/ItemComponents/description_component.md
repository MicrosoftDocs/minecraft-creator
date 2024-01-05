---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - description
description: "A reference document detailing the 'description' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - description

`description` is a list of characters representing an item. The description MUST contain an identifier; other fields are optional.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|identifier|*not set* |String | The identifier for this item; must include a namespace. The 'Minecraft' namespace must not be used, unless overriding a Vanilla item.|
|menu_category |*not set*  | JSON object| The creative group name and category for this item.|

## menu_category

 The `menu_category` parameter details the creative group name and category for an item, and has three parameters of its own:

## menu_category Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|category |items |String |The creative category that this item belongs to. Options include "construction", "nature", "equipment", "items", and "none"|
|group |-- |String |The creative group that this item belongs to. Group name is limited to 256 characters. |
|is_hidden_in_commands |-- |Boolean |Determines whether or not this item can be used with commands. Commands can use items by default. |

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
