---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:shareables"
description: "Describes the minecraft:shareables entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:shareables

Defines a list of items the mob wants to share. Each item must have the following parameters:


## Shareables Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| all_items | false | Boolean true/false | A bucket for all other items in the game. Note this category is always least priority items. | Fox: `true` | 
| all_items_max_amount | -1 | Integer number | Maximum number of this item the mob will hold. | Fox: `1` | 
| all_items_surplus_amount | -1 | Integer number | Number of this item considered extra that the entity wants to share. |  | 
| all_items_want_amount | -1 | Integer number | Number of this item this entity wants to share. |  | 
| items | *not set* | Array of [Items](#items) items | List of items or item tags that the entity wants to share. Items in-game will match to this list from top to bottom, meaning that the first occurance of a match, be it name or tag, will shadow those coming after. | Bogged: `[{"item":"minecraft:netherite_sword","want_amount":1,"surplus_amount":1,"priority":0},{"item":"minecraft:diamond_sword","want_amount":1,"surplus_amount":1,"priority":1},{"item":"minecraft:iron_sword","want_amount":1,"surplus_amount":1,"priority":2},{"item":"minecraft:golden_sword","want_amount":1,"surplus_amount":1,"priority":3},{"item":"minecraft:copper_sword","want_amount":1,"surplus_amount":1,"priority":4},{"item":"minecraft:stone_sword","want_amount":1,"surplus_amount":1,"priority":5},{"item":"minecraft:wooden_sword","want_amount":1,"surplus_amount":1,"priority":6},{"item":"minecraft:bow","want_amount":1,"surplus_amount":1,"priority":6},{"item":"minecraft:netherite_helmet","want_amount":1,"surplus_amount":1,"priority":0},{"item":"minecraft:diamond_helmet","want_amount":1,"surplus_amount":1,"priority":1},{"item":"minecraft:iron_helmet","want_amount":1,"surplus_amount":1,"priority":2},{"item":"minecraft:chainmail_helmet","want_amount":1,"surplus_amount":1,"priority":3},{"item":"minecraft:golden_helmet","want_amount":1,"surplus_amount":1,"priority":4},{"item":"minecraft:copper_helmet","want_amount":1,"surplus_amount":1,"priority":5},{"item":"minecraft:leather_helmet","want_amount":1,"surplus_amount":1,"priority":6},{"item":"minecraft:turtle_helmet","want_amount":1,"surplus_amount":1,"priority":7},{"item":"minecraft:skull:0","want_amount":1,"surplus_amount":1,"priority":8},{"item":"minecraft:skull:1","want_amount":1,"surplus_amount":1,"priority":8},{"item":"minecraft:carved_pumpkin","want_amount":1,"surplus_amount":1,"priority":8},{"item":"minecraft:netherite_chestplate","want_amount":1,"surplus_amount":1,"priority":0},{"item":"minecraft:diamond_chestplate","want_amount":1,"surplus_amount":1,"priority":1},{"item":"minecraft:iron_chestplate","want_amount":1,"surplus_amount":1,"priority":2},{"item":"minecraft:chainmail_chestplate","want_amount":1,"surplus_amount":1,"priority":3},{"item":"minecraft:golden_chestplate","want_amount":1,"surplus_amount":1,"priority":4},{"item":"minecraft:copper_chestplate","want_amount":1,"surplus_amount":1,"priority":5},{"item":"minecraft:leather_chestplate","want_amount":1,"surplus_amount":1,"priority":6},{"item":"minecraft:netherite_leggings","want_amount":1,"surplus_amount":1,"priority":0},{"item":"minecraft:diamond_leggings","want_amount":1,"surplus_amount":1,"priority":1},{"item":"minecraft:iron_leggings","want_amount":1,"surplus_amount":1,"priority":2},{"item":"minecraft:chainmail_leggings","want_amount":1,"surplus_amount":1,"priority":3},{"item":"minecraft:golden_leggings","want_amount":1,"surplus_amount":1,"priority":4},{"item":"minecraft:copper_leggings","want_amount":1,"surplus_amount":1,"priority":5},{"item":"minecraft:leather_leggings","want_amount":1,"surplus_amount":1,"priority":6},{"item":"minecraft:netherite_boots","want_amount":1,"surplus_amount":1,"priority":0},{"item":"minecraft:diamond_boots","want_amount":1,"surplus_amount":1,"priority":1},{"item":"minecraft:iron_boots","want_amount":1,"surplus_amount":1,"priority":2},{"item":"minecraft:chainmail_boots","want_amount":1,"surplus_amount":1,"priority":3},{"item":"minecraft:golden_boots","want_amount":1,"surplus_amount":1,"priority":4},{"item":"minecraft:copper_boots","want_amount":1,"surplus_amount":1,"priority":5},{"item":"minecraft:leather_boots","want_amount":1,"surplus_amount":1,"priority":6}]` | 
| singular_pickup | false | Boolean true/false | Boolean value that controls if the mob is able to pick up more of the same item if it is already holding that item |  | 

## Items
List of items or item tags that the entity wants to share. Items in-game will match to this list from top to bottom, meaning that the first occurance of a match, be it name or tag, will shadow those coming after.


#### Items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| admire | false | Boolean true/false | Mob will admire the item after picking up by looking at it. For this to happen the mob needs to have an Admire component and an Admire goal. |  | 
| barter | false | Boolean true/false | Mob will barter for the item after picking it up. For this to work the mob needs to have a Barter component and a Barter goal. |  | 
| consume_item | false | Boolean true/false | Determines whether the mob will consume the item or not. |  | 
| craft_into | *not set* | String | Defines the item this entity wants to craft with the item defined by "item". Should be an item name. |  | 
| item | *not set* | String | The name of the item. Aux value can be specified, for instance 'minecraft:skull:1'. Alternatively, a tag can be specified to match all items with that tag. |  | 
| max_amount | -1 | Integer number | Maximum number of this item the mob will hold. |  | 
| pickup_limit | -1 | Integer number | Maximum number items the mob will pick up during a single goal tick. |  | 
| pickup_only | false | Boolean true/false | Determines whether the mob can only pickup the item and not drop it. |  | 
| priority | 0 | Integer number | Prioritizes which items the entity prefers. 0 is the highest priority. |  | 
| stored_in_inventory | false | Boolean true/false | Determines whether the mob will try to put the item in its inventory if it has the inventory component and if it can't be equipped. |  | 
| surplus_amount | -1 | Integer number | Number of this item considered extra that the entity wants to share. |  | 
| want_amount | -1 | Integer number | Number of this item this entity wants to share. |  | 

## Samples

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:shareables": {
  "singular_pickup": true,
  "items": [
    {
      "item": "minecraft:netherite_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:golden_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:copper_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:stone_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:wooden_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:bow",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:turtle_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:skull:0",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:skull:1",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:carved_pumpkin",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:netherite_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    }
  ]
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:shareables": {
  "singular_pickup": true,
  "items": [
    {
      "item": "minecraft:trident",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:nautilus_shell",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:netherite_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:diamond_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:iron_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:golden_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:copper_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:stone_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:wooden_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:netherite_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:turtle_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:skull:0",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:skull:1",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:carved_pumpkin",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:netherite_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    }
  ]
}
```

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:shareables": {
  "items": [
    {
      "item": "minecraft:banner:15",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    }
  ]
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:shareables": {
  "singular_pickup": true,
  "all_items": true,
  "all_items_max_amount": 1,
  "items": [
    {
      "item": "minecraft:is_food",
      "priority": 0,
      "max_amount": 1
    },
    {
      "item": "minecraft:glow_berries",
      "priority": 0,
      "max_amount": 1
    },
    {
      "item": "minecraft:bundle",
      "priority": 1,
      "max_amount": 1
    }
  ]
}
```

#### [Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/husk.json)


```json
"minecraft:shareables": {
  "singular_pickup": true,
  "items": [
    {
      "item": "minecraft:netherite_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:golden_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:copper_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:stone_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:wooden_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_spear",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_spear",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_spear",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:golden_spear",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:copper_spear",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:stone_spear",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:wooden_spear",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:turtle_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:skull:0",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:skull:1",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:carved_pumpkin",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:netherite_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    }
  ]
}
```

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:shareables": {
  "singular_pickup": true,
  "items": [
    {
      "item": "minecraft:golden_sword",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_spear",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_axe",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_hoe",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_pickaxe",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_shovel",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_helmet",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_chestplate",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_leggings",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_boots",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_apple",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:appleEnchanted",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_carrot",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:gold_block",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:gold_nugget",
      "priority": 2,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:raw_gold",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:gold_ore",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:nether_gold_ore",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:deepslate_gold_ore",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:raw_gold_block",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:gilded_blackstone",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:horsearmorgold",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:golden_nautilus_armor",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:crossbow",
      "priority": 2
    },
    {
      "item": "minecraft:porkchop",
      "consume_item": true,
      "priority": 3,
      "max_amount": 64
    },
    {
      "item": "minecraft:cooked_porkchop",
      "consume_item": true,
      "priority": 3,
      "max_amount": 64
    },
    {
      "item": "minecraft:netherite_helmet",
      "priority": 3
    },
    {
      "item": "minecraft:diamond_helmet",
      "priority": 4
    },
    {
      "item": "minecraft:iron_helmet",
      "priority": 5
    },
    {
      "item": "minecraft:chainmail_helmet",
      "priority": 6
    },
    {
      "item": "minecraft:copper_helmet",
      "priority": 7
    },
    {
      "item": "minecraft:leather_helmet",
      "priority": 8
    },
    {
      "item": "minecraft:skull:0",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 9
    },
    {
      "item": "minecraft:skull:1",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 9
    },
    {
      "item": "minecraft:skull:2",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 9
    },
    {
      "item": "minecraft:skull:3",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 9
    },
    {
      "item": "minecraft:skull:4",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 9
    },
    {
      "item": "minecraft:skull:5",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 9
    },
    {
      "item": "minecraft:carved_pumpkin",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 9
    },
    {
      "item": "minecraft:turtle_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 9
    },
    {
      "item": "minecraft:netherite_chestplate",
      "priority": 3
    },
    {
      "item": "minecraft:diamond_chestplate",
      "priority": 4
    },
    {
      "item": "minecraft:iron_chestplate",
      "priority": 5
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "priority": 6
    },
    {
      "item": "minecraft:copper_chestplate",
      "priority": 7
    },
    {
      "item": "minecraft:leather_chestplate",
      "priority": 8
    },
    {
      "item": "minecraft:elytra",
      "priority": 8
    },
    {
      "item": "minecraft:netherite_leggings",
      "priority": 3
    },
    {
      "item": "minecraft:diamond_leggings",
      "priority": 4
    },
    {
      "item": "minecraft:iron_leggings",
      "priority": 5
    },
    {
      "item": "minecraft:chainmail_leggings",
      "priority": 6
    },
    {
      "item": "minecraft:copper_leggings",
      "priority": 7
    },
    {
      "item": "minecraft:leather_leggings",
      "priority": 8
    },
    {
      "item": "minecraft:netherite_boots",
      "priority": 3
    },
    {
      "item": "minecraft:diamond_boots",
      "priority": 4
    },
    {
      "item": "minecraft:iron_boots",
      "priority": 5
    },
    {
      "item": "minecraft:chainmail_boots",
      "priority": 6
    },
    {
      "item": "minecraft:bell",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:clock",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:speckled_melon",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:light_weighted_pressure_plate",
      "priority": 2,
      "admire": true,
      "pickup_limit": 1,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:copper_boots",
      "priority": 7
    },
    {
      "item": "minecraft:leather_boots",
      "priority": 8
    },
    {
      "item": "minecraft:netherite_sword",
      "priority": 3
    },
    {
      "item": "minecraft:diamond_sword",
      "priority": 4
    },
    {
      "item": "minecraft:iron_sword",
      "priority": 5
    },
    {
      "item": "minecraft:copper_sword",
      "priority": 6
    },
    {
      "item": "minecraft:stone_sword",
      "priority": 7
    },
    {
      "item": "minecraft:wooden_sword",
      "priority": 8
    },
    {
      "item": "minecraft:netherite_spear",
      "priority": 3
    },
    {
      "item": "minecraft:diamond_spear",
      "priority": 4
    },
    {
      "item": "minecraft:iron_spear",
      "priority": 5
    },
    {
      "item": "minecraft:copper_spear",
      "priority": 6
    },
    {
      "item": "minecraft:stone_spear",
      "priority": 7
    },
    {
      "item": "minecraft:wooden_spear",
      "priority": 8
    },
    {
      "item": "minecraft:shield",
      "priority": 9
    },
    {
      "item": "minecraft:gold_ingot",
      "priority": 1,
      "pickup_limit": 1,
      "admire": true,
      "barter": true
    }
  ]
}
```

#### [Skeleton](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/skeleton.json)


```json
"minecraft:shareables": {
  "singular_pickup": true,
  "items": [
    {
      "item": "minecraft:netherite_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:golden_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:copper_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:stone_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:wooden_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:bow",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:netherite_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:turtle_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:skull:0",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:skull:1",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:carved_pumpkin",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:netherite_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    }
  ]
}
```

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)

At /minecraft:entity/component_groups/behavior_peasant/minecraft:shareables/: 

```json
"minecraft:shareables": {
  "items": [
    {
      "item": "minecraft:bread",
      "want_amount": 3,
      "surplus_amount": 6,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:carrot",
      "want_amount": 60,
      "surplus_amount": 4,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:potato",
      "want_amount": 60,
      "surplus_amount": 24,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:beetroot",
      "want_amount": 60,
      "surplus_amount": 24,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:wheat_seeds",
      "want_amount": 64,
      "surplus_amount": 64,
      "stored_in_inventory": true,
      "pickup_only": true
    },
    {
      "item": "minecraft:beetroot_seeds",
      "want_amount": 64,
      "surplus_amount": 64,
      "stored_in_inventory": true,
      "pickup_only": true
    },
    {
      "item": "minecraft:wheat",
      "want_amount": 45,
      "surplus_amount": 18,
      "craft_into": "minecraft:bread",
      "stored_in_inventory": true
    }
  ]
}
```

At /minecraft:entity/component_groups/behavior_non_peasant/minecraft:shareables/: 

```json
"minecraft:shareables": {
  "items": [
    {
      "item": "minecraft:bread",
      "want_amount": 3,
      "surplus_amount": 6,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:carrot",
      "want_amount": 12,
      "surplus_amount": 24,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:potato",
      "want_amount": 12,
      "surplus_amount": 24,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:beetroot",
      "want_amount": 12,
      "surplus_amount": 24,
      "stored_in_inventory": true
    }
  ]
}
```

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/work_schedule_farmer/minecraft:shareables/: 

```json
"minecraft:shareables": {
  "items": [
    {
      "item": "minecraft:bread",
      "want_amount": 3,
      "surplus_amount": 6,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:carrot",
      "want_amount": 60,
      "surplus_amount": 24,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:potato",
      "want_amount": 60,
      "surplus_amount": 24,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:beetroot",
      "want_amount": 60,
      "surplus_amount": 24,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:wheat_seeds",
      "want_amount": 64,
      "surplus_amount": 64,
      "stored_in_inventory": true,
      "pickup_only": true
    },
    {
      "item": "minecraft:beetroot_seeds",
      "want_amount": 64,
      "surplus_amount": 64,
      "stored_in_inventory": true,
      "pickup_only": true
    },
    {
      "item": "minecraft:torchflower_seeds",
      "want_amount": 64,
      "surplus_amount": 64,
      "stored_in_inventory": true,
      "pickup_only": true
    },
    {
      "item": "minecraft:pitcher_pod",
      "want_amount": 64,
      "surplus_amount": 64,
      "stored_in_inventory": true,
      "pickup_only": true
    },
    {
      "item": "minecraft:bone_meal",
      "want_amount": 64,
      "surplus_amount": 64,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:wheat",
      "want_amount": 45,
      "surplus_amount": 18,
      "craft_into": "minecraft:bread",
      "stored_in_inventory": true
    }
  ]
}
```

At /minecraft:entity/component_groups/behavior_peasant/minecraft:shareables/: 

```json
"minecraft:shareables": {
  "items": [
    {
      "item": "minecraft:bread",
      "want_amount": 3,
      "surplus_amount": 6,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:carrot",
      "want_amount": 60,
      "surplus_amount": 24,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:potato",
      "want_amount": 60,
      "surplus_amount": 24,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:beetroot",
      "want_amount": 60,
      "surplus_amount": 24,
      "stored_in_inventory": true
    },
    {
      "item": "minecraft:wheat_seeds",
      "want_amount": 64,
      "surplus_amount": 64,
      "stored_in_inventory": true,
      "pickup_only": true
    },
    {
      "item": "minecraft:beetroot_seeds",
      "want_amount": 64,
      "surplus_amount": 64,
      "stored_in_inventory": true,
      "pickup_only": true
    },
    {
      "item": "minecraft:wheat",
      "want_amount": 45,
      "surplus_amount": 18,
      "craft_into": "minecraft:bread",
      "stored_in_inventory": true
    }
  ]
}
```

#### [Wither Skeleton](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither_skeleton.json)


```json
"minecraft:shareables": {
  "singular_pickup": true,
  "items": [
    {
      "item": "minecraft:netherite_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:golden_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:copper_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:stone_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:wooden_sword",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:wooden_shovel",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:stone_shovel",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:copper_shovel",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:golden_shovel",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:iron_shovel",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:diamond_shovel",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:netherite_shovel",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:wooden_pickaxe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:stone_pickaxe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:copper_pickaxe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:golden_pickaxe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:iron_pickaxe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:diamond_pickaxe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:netherite_pickaxe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:wooden_axe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:stone_axe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:copper_axe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:golden_axe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:iron_axe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:diamond_axe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:netherite_axe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:wooden_hoe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:stone_hoe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:copper_hoe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:golden_hoe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:iron_hoe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:diamond_hoe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:netherite_hoe",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:netherite_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:turtle_helmet",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 7
    },
    {
      "item": "minecraft:skull:0",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:skull:1",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:carved_pumpkin",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 8
    },
    {
      "item": "minecraft:netherite_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_chestplate",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_leggings",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    },
    {
      "item": "minecraft:netherite_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 0
    },
    {
      "item": "minecraft:diamond_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 1
    },
    {
      "item": "minecraft:iron_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 2
    },
    {
      "item": "minecraft:chainmail_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 3
    },
    {
      "item": "minecraft:golden_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 4
    },
    {
      "item": "minecraft:copper_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 5
    },
    {
      "item": "minecraft:leather_boots",
      "want_amount": 1,
      "surplus_amount": 1,
      "priority": 6
    }
  ]
}
```
