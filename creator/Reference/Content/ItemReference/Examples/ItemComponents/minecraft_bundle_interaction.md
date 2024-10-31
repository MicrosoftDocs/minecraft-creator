---
author: IconicNurdle
ms.author: mikeam
title: Item Documentation - minecraft:bundle_interaction
description: "A reference document detailing the 'bundle_interaction' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:bundle_interaction

`minecraft:bundle_interaction` enables the bundle-specific interaction scheme and tooltip for an item.

> [!IMPORTANT]
> To use this component, the item must have a **`minecraft:storage_item`** item component defined. 

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| num_viewable_slots | *not set* | Integer | This value can be from 1 to 64. The tooltip will grow as items are added until `num_viewable_slots` has been surpassed. Then, all items will shift down and hidden items are represented by an icon showing the number of hidden items: +XX.|

## Defining Front/Back Icon Textures

In **/textures/textures_list.json**, the following code needs to be added for an item named **"my_custom_bundle"**:

```json
[
  "<resource pack>/textures/items/my_custom_bundle.png"
  "<resource pack>/textures/items/my_custom_bundle_open_front.png"
  "<resource pack>/textures/items/my_custom_bundle_open_back.png"
]
```

The respective icon textures would need to be added:
 - my_custom_bundle.png
 - my_custom_bundle_open_front.png
 - my_custom_bundle_open_back.png

Note that it's important that the filenames are the item name, plus **"_open_front"** and **"_open_back"** respectively.

### Example

The bundle item is defined as follows:

```json
{
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
        "banned_items": [ "minecraft:shulker_box" ]
      },
      "minecraft:bundle_interaction": {
        "num_viewable_slots": 8
      }
    }
  }
}
```

And the following icon textures are defined in textures/textures_list.json

```json
[
  "textures/items/bundle.png",
  "textures/items/bundle_open.png",
  "textures/items/bundle_open_back.png",
  "textures/items/bundle_open_front.png"
]
```
