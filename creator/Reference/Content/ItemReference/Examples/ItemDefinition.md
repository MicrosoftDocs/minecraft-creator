---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - Item Definition
description: "A reference document detailing the JSON file structure of a custom item"
ms.service: minecraft-bedrock-edition
---

# Item Definition

Custom items are defined using specific JSON properties which help the system determine how to parse and initialize the item.

An item's JSON file must contain a `format_version` and use `minecraft:item` to define how the item works.

## format_version

Specifies the version of the game this item was made in. If the specified version is lower than the current version, any changes made to the item in the vanilla version will be applied to it.

## minecraft:item

Item definition, which includes the `description` and `components` properties.
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| description| *not set* | JSON Object | Contains basic information about the item. |
| components| *not set* | JSON Object| Contains a list of the components used by this item. |

### description
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|identifier|*not set* |String | Sets the unique identifier for this item using the format `namespace:identifier`. The `minecraft` namespace must not be used unless overriding a Vanilla item.|
|menu_category |*not set*  | JSON object| Defines how this item is categorized in-game.|

### components
Available components can be found in the [Item Component List](./ItemComponentList.md).



## Example

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
