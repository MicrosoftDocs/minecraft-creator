---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - Item Definition Properties
ms.prod: gaming
---

# Item Definition Properties

The properties are part of the Item Definition. This helps the system determine how to parse and initialize this item.


## Item Description Properties

### format_version

Specifies the version of the game this entity was made in. If the version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it.

### List of Properties

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| String| category| | The category for this item. Categories are used to control high level properties of how the item is integrated into the bedrock engine, such as whether it can be used in slash commands. |
| String| identifier| | The identifier for this item. The name must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla item. |
| Boolean| is_experimental| false| If this item is experimental, it will only be registered if the world is marked as experimental. |

### Example

```json
{
  "format_version": "1.16.1",
  "minecraft:item": {
    "description": {
      "identifier": "minecraft:blaze_rod"
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
