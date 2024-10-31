---
author: IconicNurdle
ms.author: mikeam
title: Item Documentation - minecraft:storage_item
description: "A reference document detailing the 'storage_item' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:storage_item

The `minecraft:storage_item` component enables an item to store data of the dynamic container associated with it. A dynamic container is a container for storing items that is linked to an item instead of a block or an entity. 

> [!IMPORTANT]
> While this component can be defined on its own, to be able to interact with the item's storage container the item must have a **`minecraft:bundle_interaction`** item component defined. 

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_stack_size | 1 | Integer | It is required that the item has a `minecraft:max_stack_size` item component defined with a value of one. |
| max_slots  | *not set* | Integer | Range: [1 to 64]. Defines the number of slots of the dynamic container; specifically, the number of unique items allowed in the storage item. |
| max_weight_limit |  | Integer | Range: [1 to 64] Defines the maximum allowed sum of the weight of the items in all slots of the dynamic container. Items that stack to 64 weigh 1 each, those that stack to 16 weigh 4 each, and unstackable items weigh 64. |
| allow_nested_storage_items | *not set* | Boolean | Allows other items with a `minecraft:storage_item` component to be put inside it. |
| weight_in_storage_item | *not set* | Integer | Range: [0 to 64] Defines the additional weight the item adds when inside another storage item. A value of 0 means that this item is not allowed inside another storage item. This works in the inverse way to the `allow_nested_storage_items` field, which refers to the items contained by this storage item, as opposed to this storage item in another's dynamic container. |
| banned_items | *not set* | String | [list of item names, or empty] The `banned_items` field defines the items that are not allowed in the item's dynamic container. |
| allowed_items | *not set* | String | [list of item names, or empty] The `allowed_items` field defines the items that are exclusively allowed in the item's dynamic container. If the list is empty all items are allowed in the item's dynamic container. |

### Example

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
