---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - description
ms.prod: gaming
description: "A reference document detailing the 'description' item component"
---

# Item Documentation - description

`description` is a list of characters representing an item. The description MUST contain an identifier; other fields are optional.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|identifier|*not set* |String | The identifier for this item; must include a namespace. The 'Minecraft' namespace must not be used, unless overriding a Vanilla item.|
|menu_category |*not set*  | JSON object| The creative group name and category for this item.|

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
