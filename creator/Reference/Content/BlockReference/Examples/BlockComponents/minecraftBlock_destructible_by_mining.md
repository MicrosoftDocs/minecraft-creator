---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:destructible_by_mining"
description: "Describes the minecraft:destructible_by_mining block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:destructible_by_mining

Describes the destructible by mining properties for this block. If set to true, the block will take the default number of seconds to destroy. If set to false, this block is indestructible by mining. If the component is omitted, the block will take the default number of seconds to destroy.

## Alternate Simple Representations

This item can also be represented as a `Boolean true/false`.


## Destructible By Mining Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| item_specific_speeds | *not set* | Array of [Item Specific Speeds](#item-specific-speeds-item-type) items | Optional array of objects to describe item specific block destroy speeds, each object contains an 'item' ItemDescriptor and a 'destroy_speed' float. This array currently requires UpcomingFeatures experiment to be enabled. | Samples: `"{ <br> "minecraft:destructible_by_mining": { <br> "seconds_to_destroy": 10, <br> "item_specific_speeds": [ <br> { <br> "item": { "tags": "q.any_tag('minecraft:is_pickaxe', 'minecraft:is_tool') " }, <br> "destroy_speed": 5.0 <br> } <br> ] <br> } <br>}"`, `"{ <br> "minecraft:destructible_by_mining": { <br> "seconds_to_destroy": 10, <br> "item_specific_speeds": [ <br> { <br> "item": "minecraft:iron_pickaxe", <br> "destroy_speed": 5.0 <br> }, <br> { <br> "item": "minecraft:diamond_pickaxe", <br> "destroy_speed": 2.0 <br> } <br> ] <br> } <br>}"`, Block White Sand: `[{"item":{"tags":"q.all_tags('minecraft:is_pickaxe', 'minecraft:wooden_tier')"},"destroy_speed":1.15},{"item":{"tags":"q.all_tags('minecraft:is_pickaxe', 'minecraft:stone_tier')"},"destroy_speed":0.6},{"item":{"tags":"q.all_tags('minecraft:is_pickaxe', 'minecraft:iron_tier')"},"destroy_speed":0.4},{"item":{"tags":"q.all_tags('minecraft:is_pickaxe', 'minecraft:golden_tier')"},"destroy_speed":0.2},{"item":{"tags":"q.all_tags('minecraft:is_pickaxe', 'minecraft:diamond_tier')"},"destroy_speed":0.3},{"item":{"tags":"q.all_tags('minecraft:is_pickaxe', 'minecraft:netherite_tier')"},"destroy_speed":0.25}]` | 
| seconds_to_destroy | 0 | Decimal number | Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times. | Block Fabricator: `0.4`, Block White Sand: `7.5`, Block Orange Ore: `1` | 

## Item Specific Speeds item type
Optional array of objects to describe item specific block destroy speeds, each object contains an 'item' ItemDescriptor and a 'destroy_speed' float. This array currently requires UpcomingFeatures experiment to be enabled.


#### Item Specific Speeds Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| destroy_speed | *not set* | Decimal number | Required. A destroy speed applied while using the defined 'item'. |  | 
| item | *not set* | Array of [Item](#item-item-type) items | Required. A filter for the item used while mining. |  | 
| item (Alternate 1) | *not set* | String | An item tag that is usable for the item. |  | 

## Item item type
Optional array of objects to describe item specific block destroy speeds, each object contains an 'item' ItemDescriptor and a 'destroy_speed' float. This array currently requires UpcomingFeatures experiment to be enabled.


#### Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| tags | *not set* | String |  |  | 

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

#### [Block Fabricator](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/fabricator.block.json)


```json
"minecraft:destructible_by_mining": {
  "seconds_to_destroy": 0.4
}
```

#### [Block White Sand](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/blocks/white_sand.block.json)


```json
"minecraft:destructible_by_mining": {
  "seconds_to_destroy": 7.5,
  "item_specific_speeds": [
    {
      "item": {
        "tags": "q.all_tags('minecraft:is_pickaxe', 'minecraft:wooden_tier')"
      },
      "destroy_speed": 1.15
    },
    {
      "item": {
        "tags": "q.all_tags('minecraft:is_pickaxe', 'minecraft:stone_tier')"
      },
      "destroy_speed": 0.6
    },
    {
      "item": {
        "tags": "q.all_tags('minecraft:is_pickaxe', 'minecraft:iron_tier')"
      },
      "destroy_speed": 0.4
    },
    {
      "item": {
        "tags": "q.all_tags('minecraft:is_pickaxe', 'minecraft:golden_tier')"
      },
      "destroy_speed": 0.2
    },
    {
      "item": {
        "tags": "q.all_tags('minecraft:is_pickaxe', 'minecraft:diamond_tier')"
      },
      "destroy_speed": 0.3
    },
    {
      "item": {
        "tags": "q.all_tags('minecraft:is_pickaxe', 'minecraft:netherite_tier')"
      },
      "destroy_speed": 0.25
    }
  ]
}
```

#### [Block Orange Ore](https://github.com/microsoft/minecraft-samples/tree/main/custom_features/basic_orange_ore/behavior_packs/basic_orange_ore/blocks/orange_ore.block.json)


```json
"minecraft:destructible_by_mining": {
  "seconds_to_destroy": 1
}
```

#### [Luckyblock](https://github.com/microsoft/minecraft-samples/tree/main/lucky_block/version_1/behavior_packs/mike_luck/blocks/luckyblock.json)


```json
"minecraft:destructible_by_mining": {
  "seconds_to_destroy": 5,
  "item_specific_speeds": []
}
```
