---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:bundle_interaction"
description: "Describes the minecraft:bundle_interaction item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:bundle_interaction

Enables the bundle-specific interaction scheme and tooltip for an item.

> [!Note]
> To use this component, the item must have a minecraft:storage_item item component defined.

> [!Note]
> In `/textures/textures_list.json`, the following code needs to be added for an item named `my_custom_bundle`: [ '<resource pack>/textures/items/my_custom_bundle.png', '<resource pack>/textures/items/my_custom_bundle_open_front.png','<resource pack>/textures/items/my_custom_bundle_open_back.png']. The respective icon textures would need to be added: my_custom_bundle.png, my_custom_bundle_open_front.png, my_custom_bundle_open_back.png. Note that it's important that the filenames are the item name, plus `_open_front` and `_open_back` respectively.


## Bundle Interaction Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_viewable_slots | *not set* | Integer number | The maximum number of slots in the bundle viewable by the plater. Can be from 1 to 64. Default is 12. | Black Bundle: `12` | 

## Samples


```json
"minecraft:bundle_interaction": {
  "format_version": "1.21.30",
  "minecraft:item": {
    "description": {
      "identifier": "minecraft:bundle"
    },
    "components": {
      "minecraft:icon": {
        "textures": {
          "default": "bundle"
        }
      },
      "minecraft:max_stack_size": 1,
      "minecraft:storage_item": {
        "max_slots": 64,
        "max_weight_limit": 64,
        "weight_in_storage_item": 4,
        "allow_nested_storage_items": true,
        "banned_items": [
          "minecraft:shulker_box"
        ]
      },
      "minecraft:bundle_interaction": {
        "num_viewable_slots": 8
      }
    }
  }
}
```

#### [Black Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/black_bundle.json)


```json
"minecraft:bundle_interaction": {
  "num_viewable_slots": 12
}
```
