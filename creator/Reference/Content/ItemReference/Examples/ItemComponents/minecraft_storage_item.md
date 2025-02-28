---
author: mammerla
ms.author: mikeam
title: "Items Documentation - storage_item"
description: "Describes the storage_item Items"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - storage_item

Enables an item to store data of the dynamic container associated with it. A dynamic container is a container for storing items that is linked to an item instead of a block or an entity.


## Storage Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_nested_storage_items | *not set* | Boolean true/false | Determines whether another Storage Item is allowed inside of this item. Default is true. | Black Bundle: `true` | 
| allowed_items | *not set* | Array of objects | List of items that are exclusively allowed in this Storage Item. If empty all items are allowed. |  | 
| banned_items | *not set* | Array of objects | List of items that are not allowed in this Storage Item. | Black Bundle: `["minecraft:shulker_box","minecraft:undyed_shulker_box"]` | 
| max_slots | *not set* | Integer number | The maximum allowed weight of the sum of all contained items. Maximum is 64. Default is 64. | Black Bundle: `64` | 
| max_weight_limit | *not set* | Decimal number |  | Black Bundle: `64` | 
| weight_in_storage_item | *not set* | Decimal number |  | Black Bundle: `4` | 

## Samples

#### [Black Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/black_bundle.json)


```json
{
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

#### [Blue Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/blue_bundle.json)


```json
{
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

#### [Brown Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/brown_bundle.json)


```json
{
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

#### [Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/bundle.json)


```json
{
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

#### [Cyan Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/cyan_bundle.json)


```json
{
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

#### [Gray Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/gray_bundle.json)


```json
{
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

#### [Green Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/green_bundle.json)


```json
{
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

#### [Light Blue Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/light_blue_bundle.json)


```json
{
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

#### [Light Gray Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/light_gray_bundle.json)


```json
{
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

#### [Lime Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/lime_bundle.json)


```json
{
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

#### [Magenta Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/magenta_bundle.json)


```json
{
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

#### [Orange Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/orange_bundle.json)


```json
{
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
