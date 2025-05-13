---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:storage_item"
description: "Describes the minecraft:storage_item item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:storage_item

Enables an item to store data of the dynamic container associated with it. A dynamic container is a container for storing items that is linked to an item instead of a block or an entity.

> [!Note]
> While this component can be defined on its own, to be able to interact with the item's storage container the item must have a `minecraft:bundle_interaction` item component defined.

> [!Note]
> This item requires a format version of at least 1.21.40.


## Storage Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_nested_storage_items | *not set* | Boolean true/false | Determines whether another Storage Item is allowed inside of this item. Default is true. | Black Bundle: `true` | 
| allowed_items | *not set* | String | List of items that are exclusively allowed in this Storage Item. If empty all items are allowed. |  | 
| allowed_items (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| banned_items | *not set* | String | List of items that are not allowed in this Storage Item. | Black Bundle: `["minecraft:shulker_box","minecraft:undyed_shulker_box"]` | 
| banned_items (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| max_slots | *not set* | Integer number | The maximum allowed weight of the sum of all contained items. Maximum is 64. Default is 64. Value must be <= 64. | Black Bundle: `64` | 
| max_weight_limit | *not set* | Decimal number |  | Black Bundle: `64` | 
| weight_in_storage_item | *not set* | Decimal number |  | Black Bundle: `4` | 

## Samples

#### [Black Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/black_bundle.json)


```json
"minecraft:storage_item": {
  "max_slots": 64,
  "max_weight_limit": 64,
  "weight_in_storage_item": 4,
  "allow_nested_storage_items": true,
  "banned_items": [
    "minecraft:shulker_box",
    "minecraft:undyed_shulker_box"
  ]
}
```
