---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:shareables"
description: "Describes the minecraft:shareables entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:shareables

Defines a list of items the mob wants to share or pick up. Items can be configured with optional parameters to control pickup, sharing, and inventory behavior.


## Shareables Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| all_items | false | Boolean true/false | A bucket for all other items in the game. Note this category is always least priority items. | Fox: `true` | 
| all_items_max_amount | -1 | Integer number | Maximum number of this item the mob will hold. | Fox: `1` | 
| all_items_surplus_amount | -1 | Integer number | Number of this item considered extra that the entity wants to share. |  | 
| all_items_want_amount | -1 | Integer number | Number of this item this entity wants to share. |  | 
| items | *not set* | Array of [Items](#items) items | List of items or item tags that the entity wants to share. | Bogged: `[{"item":"minecraft:netherite_sword","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_sword","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_sword","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_sword","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_sword","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:stone_sword","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:wooden_sword","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:bow","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_helmet","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_helmet","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_helmet","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_helmet","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_helmet","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_helmet","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_helmet","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:turtle_helmet","priority":7,"surplus_amount":1,"want_amount":1},{"item":"minecraft:skull:0","priority":8,"surplus_amount":1,"want_amount":1},{"item":"minecraft:skull:1","priority":8,"surplus_amount":1,"want_amount":1},{"item":"minecraft:carved_pumpkin","priority":8,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_chestplate","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_chestplate","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_chestplate","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_chestplate","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_chestplate","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_chestplate","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_chestplate","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_leggings","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_leggings","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_leggings","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_leggings","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_leggings","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_leggings","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_leggings","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_boots","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_boots","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_boots","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_boots","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_boots","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_boots","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_boots","priority":6,"surplus_amount":1,"want_amount":1}]`, Drowned: `[{"item":"minecraft:trident","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:nautilus_shell","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_sword","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_sword","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_sword","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_sword","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_sword","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:stone_sword","priority":7,"surplus_amount":1,"want_amount":1},{"item":"minecraft:wooden_sword","priority":8,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_helmet","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_helmet","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_helmet","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_helmet","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_helmet","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_helmet","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_helmet","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:turtle_helmet","priority":7,"surplus_amount":1,"want_amount":1},{"item":"minecraft:skull:0","priority":8,"surplus_amount":1,"want_amount":1},{"item":"minecraft:skull:1","priority":8,"surplus_amount":1,"want_amount":1},{"item":"minecraft:carved_pumpkin","priority":8,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_chestplate","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_chestplate","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_chestplate","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_chestplate","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_chestplate","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_chestplate","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_chestplate","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_leggings","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_leggings","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_leggings","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_leggings","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_leggings","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_leggings","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_leggings","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_boots","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_boots","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_boots","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_boots","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_boots","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_boots","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_boots","priority":6,"surplus_amount":1,"want_amount":1}]` | 
| singular_pickup | false | Boolean true/false | Boolean value that controls if the mob is able to pick up more of the same item if it is already holding that item |  | 

### items

List of items or item tags that the entity wants to share. Items in-game will match to this list from top to bottom, meaning that the first occurance of a match, be it name or tag, will shadow those coming after.


### Items
List of items or item tags that the entity wants to share. Items in-game will match to this list from top to bottom, meaning that the first occurance of a match, be it name or tag, will shadow those coming after.


#### Items Properties

**JSON path:** `items`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| admire | false | Boolean true/false | Mob will admire the item after picking up by looking at it. For this to happen the mob needs to have an Admire component and an Admire goal. | 
| barter | false | Boolean true/false | Mob will barter for the item after picking it up. For this to work the mob needs to have a Barter component and a Barter goal. | 
| consume_item | false | Boolean true/false | Determines whether the mob will consume the item or not. | 
| craft_into | *not set* | String | Defines the item this entity wants to craft with the item defined by "item". Should be an item name. | 
| item | *not set* | String | The name of the item. Aux value can be specified, for instance 'minecraft:skull:1'. Alternatively, a tag can be specified to match all items with that tag. | 
| max_amount | -1 | Integer number | Maximum number of this item the mob will hold. | 
| pickup_limit | -1 | Integer number | Maximum number items the mob will pick up during a single goal tick. | 
| pickup_only | false | Boolean true/false | Determines whether the mob can only pickup the item and not drop it. | 
| priority | 0 | Integer number | Prioritizes which items the entity prefers. 0 is the highest priority. | 
| stored_in_inventory | false | Boolean true/false | Determines whether the mob will try to put the item in its inventory if it has the inventory component and if it can't be equipped. | 
| surplus_amount | -1 | Integer number | Number of this item considered extra that the entity wants to share. | 
| want_amount | -1 | Integer number | Number of this item this entity wants to share. | 

## Samples

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:shareables": {
  "items": [
    {
      "item": "minecraft:netherite_sword",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_sword",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_sword",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_sword",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_sword",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:stone_sword",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:wooden_sword",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:bow",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_helmet",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_helmet",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_helmet",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_helmet",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_helmet",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_helmet",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_helmet",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:turtle_helmet",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:0",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:1",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:carved_pumpkin",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_chestplate",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_chestplate",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_chestplate",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_chestplate",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_chestplate",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_chestplate",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_leggings",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_leggings",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_leggings",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_leggings",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_leggings",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_leggings",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_leggings",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_boots",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_boots",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_boots",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_boots",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_boots",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_boots",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_boots",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    }
  ],
  "singular_pickup": true
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:shareables": {
  "items": [
    {
      "item": "minecraft:trident",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:nautilus_shell",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_sword",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_sword",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_sword",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_sword",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_sword",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:stone_sword",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:wooden_sword",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_helmet",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_helmet",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_helmet",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_helmet",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_helmet",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_helmet",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_helmet",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:turtle_helmet",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:0",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:1",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:carved_pumpkin",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_chestplate",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_chestplate",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_chestplate",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_chestplate",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_chestplate",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_chestplate",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_leggings",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_leggings",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_leggings",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_leggings",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_leggings",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_leggings",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_leggings",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_boots",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_boots",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_boots",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_boots",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_boots",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_boots",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_boots",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    }
  ],
  "singular_pickup": true
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

#### [Skeleton](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/skeleton.json)


```json
"minecraft:shareables": {
  "items": [
    {
      "item": "minecraft:netherite_sword",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_sword",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_sword",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_sword",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_sword",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:stone_sword",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:wooden_sword",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:bow",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_helmet",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_helmet",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_helmet",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_helmet",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_helmet",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_helmet",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_helmet",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:turtle_helmet",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:0",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:1",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:carved_pumpkin",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_chestplate",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_chestplate",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_chestplate",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_chestplate",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_chestplate",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_chestplate",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_leggings",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_leggings",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_leggings",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_leggings",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_leggings",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_leggings",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_leggings",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_boots",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_boots",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_boots",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_boots",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_boots",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_boots",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_boots",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    }
  ],
  "singular_pickup": true
}
```
