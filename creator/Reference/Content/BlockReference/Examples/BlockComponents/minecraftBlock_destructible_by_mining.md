---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:destructible_by_mining"
description: "Describes the minecraft:destructible_by_mining block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:destructible_by_mining

Describes the destructible by mining properties for this block. If set to true, the block will take the default number of seconds to destroy. If set to false, this block is indestructible by mining. If the component is omitted, the block will take the default number of seconds to destroy.

> [!Note]
> This item requires a format version of at least 1.21.50.

## Alternate Simple Representations

This item can also be represented as a `Boolean true/false`.


## Destructible By Mining Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| item_specific_speeds | *not set* | Array of [Item Specific Speeds](#item-specific-speeds) items | Optional array of objects to describe item specific block destroy speeds, each object contains an 'item' ItemDescriptor and a 'destroy_speed' float. | Samples: `"{ "minecraft:destructible_by_mining": { "seconds_to_destroy": 10, "item_specific_speeds": [ {  "item": { "tags": "q.any_tag('minecraft:is_pickaxe', 'minecraft:is_tool') " },  "destroy_speed": 5.0 } ] } }"`, `"{ "minecraft:destructible_by_mining": { "seconds_to_destroy": 10, "item_specific_speeds": [ {  "item": "minecraft:iron_pickaxe",  "destroy_speed": 5.0 }, {  "item": "minecraft:diamond_pickaxe",  "destroy_speed": 2.0 } ] } }"` | 
| seconds_to_destroy | 0 | Decimal number | Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times. |  | 

### item_specific_speeds

Optional array of objects to describe item specific block destroy speeds, each object contains an 'item' ItemDescriptor and a 'destroy_speed' float. This array currently requires UpcomingFeatures experiment to be enabled.


### Item Specific Speeds
Optional array of objects to describe item specific block destroy speeds, each object contains an 'item' ItemDescriptor and a 'destroy_speed' float. This array currently requires UpcomingFeatures experiment to be enabled.


#### Item Specific Speeds Properties

**JSON path:** `item_specific_speeds`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| destroy_speed | *not set* | Decimal number | Required. A destroy speed applied while using the defined 'item'. | 
| item | *not set* | Array of [Item](#item) items | Required. A filter for the item used while mining. | 
| item (as String) | *not set* | String | An item tag that is usable for the item. | 

#### Item
Optional array of objects to describe item specific block destroy speeds, each object contains an 'item' ItemDescriptor and a 'destroy_speed' float. This array currently requires UpcomingFeatures experiment to be enabled.


##### Item Properties

**JSON path:** `item_specific_speeds > item`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| tags | *not set* | Array of numbers |  | 

## Samples

At JSON Object (Item Tags): 

```json
"minecraft:destructible_by_mining": {
  "seconds_to_destroy": 10,
  "item_specific_speeds": [
    {
      "item": {
        "tags": "q.any_tag('minecraft:is_pickaxe', 'my_pack:custom_tool') "
      },
      "destroy_speed": 5
    }
  ]
}
```

At JSON Object (Item Ids): 

```json
"minecraft:destructible_by_mining": {
  "seconds_to_destroy": 10,
  "item_specific_speeds": [
    {
      "item": "minecraft:iron_pickaxe",
      "destroy_speed": 5
    },
    {
      "item": "minecraft:diamond_pickaxe",
      "destroy_speed": 2
    }
  ]
}
```
