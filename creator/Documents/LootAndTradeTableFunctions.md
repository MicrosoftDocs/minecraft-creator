---
author: JimSeaman42
ms.author: mikeam
title: Loot and Trade Table Functions
description: "An article showcasing the available functions for Loot and Trade Tables"
ms.service: minecraft-bedrock-edition
ms.date: 02/27/2025
---

# Loot and Trade Table Functions

Both loot and trade tables share a similar same function set. While most work on both, some only work within a specific type. There are limitations to loot/trade tables in general: for instance, there isn't a way to add `can_place_on` or `can_destroy` onto an item through loot or trade tables. See below for the different functions available and an example on how they can be used.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - There is a variety of loot and trade table functions and they can modify a player's loot experience.

### Requirements

It's recommended that the following be completed before beginning this tutorial.

- [Introduction to Loot Tables](IntroductionToLootTables.md)

## Enchanting

These different enchanting functions allow you to set unique enchanting parameters.

### enchant_book_for_trading (trade table only)

This function enchants a book using the algorithm for enchanting items sold by villagers. It takes four parameters: `base_cost`, `base_random_cost`, `per_level_random_cost`, and `per_level_cost`.

```json
{
    "type": "item",
    "name": "minecraft:book",
    "quantity": 1,
    "functions": [
        {
            "function": "enchant_book_for_trading",
            "base_cost": 2,
            "base_random_cost": 5,
            "per_level_random_cost": 10,
            "per_level_cost": 3
        }
    ]
}
```

At this time, defining these parameters won't affect the enchantment received. Currently, the default values above are hard-coded. In the future, you will be able to adjust these values to help narrow down what enchantments and enchantment levels this function results in.

### enchant_random_gear

Enchants an item using the same algorithm used while enchanting equipment vanilla mobs spawn with. Takes a `chance` modifier to manipulate the algorithm. Note that a `chance` modifier of 1.0 doesn't mean a 100% chance that gear will become enchanted. Rather, the chance is modified based on the difficulty. 

On Peaceful and Easy difficulties, the chance will always be 0% no matter what. On Hard difficulty, a `chance` of 1.0 will be 100%, but the chance is roughly 2/3 that on Normal difficulty.

```json
{
    "type": "item",
    "name": "minecraft:chainmail_boots",
    "weight": 1,
    "functions": [
        {
            "function": "enchant_random_gear",
            "chance": 0.25
        }
    ]
}
```

Increasing `chance` to a number higher than 1.0 can help to bypass the decrease in chance with Normal difficulty. For example, setting `chance` to 2.0 will always enchant the item on both Normal and Hard difficulty.

### enchant_randomly

Generates a random enchantment that is compatible with the item. Supports the optional treasure `boolean` (true/false) to allow treasure enchantments to be toggled on and off. Treasure enchantments are enchantments that cannot be obtained through the enchanting table, including Frost Walker, Mending, Soul Speed, Curse of Binding, and Curse of Vanishing.

```json
{
    "type": "item",
    "name": "minecraft:leather_helmet",
    "weight": 1,
    "functions": [
        {
            "function": "enchant_randomly",
            "treasure": true
        }
    ]
}
```

### enchant_with_levels

Applies an enchantment as if it were enchanted through an enchanting table using a minimum and maximum XP level defined through the `levels` parameter. The `treasure` boolean (true/false) will allow treasure-only enchantments to be used. Treasure enchantments are enchantments that cannot be obtained through the enchanting table, including Frost Walker, Mending, Soul Speed, Curse of Binding, and Curse of Vanishing.

```json
{
    "type": "item",
    "name": "minecraft:diamond_sword",
    "weight": 1,
    "functions": [
        {
            "function": "enchant_with_levels",
            "treasure": true,
            "levels": {
                "min": 20,
                "max": 39
            }
        }
    ]
}
```

### set_potion

This function sets the potion type of compatible items with a potion ID.

```json
{
    "type": "item",
    "name": "minecraft:potion",
    "weight": 1,
    "functions": [
        {
            "function": "set_potion",
            "id": "strong_regeneration"
        }
    ]
}
```

### specific_enchants

This function allows you to set a list of specific enchantments on an item. It also allows you to apply enchantments to items that wouldn't normally be enchantable in-game.

```json
{
    "type": "item",
    "name": "minecraft:stick",
    "weight": 1,
    "functions": [
        {
          "function": "specific_enchants",
          "enchants": [
             "knockback",
             "fire_aspect"
          ]
       }
    ]
 }
```

You can also define the enchantments as objects to specifically define an enchantment level. Max enchantment levels are hard-coded and can't be overwritten.

```json
{
    "type": "item",
    "name": "minecraft:stick",
    "weight": 1,
    "functions": [
        {
          "function": "specific_enchants",
          "enchants": [
             {
                "id": "knockback",
                "level": 1
             },
             {
                "id": "unbreaking",
                "level": 3
             }
          ]
       }
    ]
}
```

## Modifying items

The following set of functions allow you to modify the results in different ways, such as setting how many of an item is returned, setting its data value, or even setting the name and lore of an item.

### looting_enchant (loot table only)

This function allows you to modify the count of how many items are returned when an entity is killed by an item with the looting enchantment. Due to that, it only works with loot tables, and only if that loot table is called by the death of an entity.

```json
{
    "type": "item",
    "name": "minecraft:stick",
    "weight": 1,
    "functions": [
        {
            "function": "looting_enchant",
            "count": {
                "min": 0,
                "max": 1
            }
        }
    ]
}
```

### random_aux_value

Similar to `random_block_state`, this allows you to pick a random auxiliary value for an item. The following example will result in a randomly-colored dye.

```json
{
    "type": "item",
    "name": "minecraft:dye",
    "weight": 1,
    "functions": [
        {
          "function": "random_aux_value",
          "values": {
            "min": 0,
            "max": 15
          }
        }
    ]
}
```

### random_block_state

This allows you to randomize the block state of the resulting item. This example is from the trade table for a shepherd to control what color wool they give.

```json
{
  "item": "minecraft:wool",
  "functions": [
    {
      "function": "random_block_state",
      "block_state": "color",
      "values": {
        "min": 0,
        "max": 15
      }
    }
  ]
}
```

### random_dye

This function affects the colors of the random leather items supplied by a leather worker.

Example:

```json
"gives": [
  {
    "item": "minecraft:leather_helmet",
    "quantity": 1,
    "functions": [
      {
        "function": "random_dye"
      }
    ]
  }
]
```

### set_actor_id

This function only works with a spawn egg and is used to set the entity ID of that spawn egg.

```json
{
    "type": "item",
    "name": "minecraft:stone",
    "weight": 1,
    "functions": [
        {
            "function": "set_actor_id",
            "id": "sample:cool_entity"
        }
    ]
}
```

You can also inherit the entity ID of the entity that's associated with that loot table (like making a rabbit drop a rabbit spawn egg) by omitting the `id`.

```json
{
    "type": "item",
    "name": "minecraft:spawn_egg",
    "weight": 1,
    "functions": [
        {
            "function": "set_actor_id"
        }
    ]
}
```

Be aware that if you use `set_actor_id` on a chest's loot table and omit the `id` value, it will generate the spawn egg of whatever opens the chest (the player). A player spawn egg will spawn a "player" that just stands around and throws up Molang errors (because it's trying to use the player's behavior file as well as the player's controllers). 

If you break a chest containing a loot table that uses an inherited ID from `set_actor_id`, it drops a default spawn egg that doesn't spawn anything.

### set_banner_details

This function only works on banners and currently only supports a banner `type` of `1`. 
A banner `type` of `1` results in an illager banner.

```json
{
    "type": "item",
    "name": "minecraft:banner",
    "weight": 1,
    "functions": [
        {
            "function": "set_banner_details",
            "type": 1
        }
    ]
}
```

### set_book_contents

This function allows you to set the contents of a book.

```json
{
    "type": "item",
    "name": "minecraft:written_book",
    "functions": [
        {
            "function": "set_book_contents",
            "author": "Steve",
            "title": "Creator Woes",
            "pages": [
                "Once upon a time there were some marketplace partners that had to edit items using NBT. And it made them sad.",
                "Then the Bedrock team added the ability to customize items from JSON and everyone rejoiced!"
            ]
        }
    ]
}
```

You can also use `rawtext` to localize the content of the book. When using `rawtext`, remember to always escape (`\`) special characters like `"` and `\`.

```json
{
    "type": "item",
    "name": "minecraft:written_book",
    "functions": [
        {
            "function": "set_book_contents",
            "author": "Steve",
            "title": "Creator Woes",
            "pages": [
                "{\"rawtext\":[ {\"translate\":\"custom.book.page.1\"}]}",
                "{\"rawtext\":[ {\"translate\":\"custom.book.page.2\"}]}"
            ]
        }
    ]
}
```

Be aware that you can only use `rawtext` on the book's contents (`pages`) at the timing of writing this — `rawtext` **does not** work for the `author` or `title` tags.

### set_count

Sets the quantity of items returned by setting the `count` value. It could either be an exact number like this example:

```json
{
    "type": "item",
    "name": "minecraft:stone",
    "weight": 1,
    "functions": [
        {
          "function": "set_count",
          "count": 5
        }
    ]
}
```

... or it can be within a min/max range:

```json
{
    "type": "item",
    "name": "minecraft:stone",
    "weight": 1,
    "functions": [
        {
          "function": "set_count",
          "count": {
            "min": 1,
            "max": 6
          }
        }
    ]
}
```

### set_damage

Sets the percentage of durability remaining for items that have durability by setting the `damage` value. 1.0 is 100% of durability remaining (undamaged) while 0.0 has no durability remaining.

You can either set it to an exact durability like in the following example where we set the item to have 50% durability remaining.

```json
{
    "type": "item",
    "name": "minecraft:iron_leggings",
    "weight": 1,
    "functions": [
      {
        "function": "set_damage",
        "damage": 0.5
      }
    ]
}
```

You can also define a min/max range the game will use to pick a value. 

This example sets the durability to somewhere between 30% and 90% remaining.

```json
{
    "type": "item",
    "name": "minecraft:iron_leggings",
    "weight": 1,
    "functions": [
      {
        "function": "set_damage",
        "damage": {
          "min": 0.3,
          "max": 0.9
        }
      }
    ]
}
```

### set_data

Sets the data value of a block or item to an exact ID. This is useful for things like returning a specific potion or an item of a specific color.

The following example will result in a particular variant of suspicious stew.

```json
  {
    "type": "item",
    "name": "minecraft:suspicious_stew",
    "weight": 1,
    "functions": [
      {
        "function": "set_data",
        "data": 3
      }
    ]
  }
```

### set_data_from_color_index

Inherits the data value of the resulting item from the associated entity's color index. An in-game example would be a pink sheep dropping pink wool when you kill it or shear it. If the associated entity doesn't have a color index set (or if it's used inside a chest's loot table), it will always result in a data value of 0.

```json
{
    "type": "item",
    "name": "minecraft:wool",
    "weight": 1,
    "functions": [
        {
            "function": "set_data_from_color_index"
        }
    ]
}
```

### set_lore

This function allows you to set the lore of an item. Each line within the lore object represents a single line of text. There's currently no support for `rawtext`.

```json
{
  "type": "item",
  "name": "minecraft:stick",
  "weight": 1,
  "functions": [
      {
          "function": "set_lore",
          "lore": [
              "Big Stick has been handed down",
              "for generations within the royal family",
              "until it went missing four score years ago..."
          ]
     }
  ]
}
```

### set_name

This function allows you to set the name of an item. There's currently no support for `rawtext`.

```json
{
    "type": "item",
    "name": "minecraft:stick",
    "weight": 1,
    "functions": [
        {
            "function": "set_name",
            "name": "Big Stick"
        }
    ]
 }
```

## Miscellaneous

The following functions don't seem to fit anywhere else.

### exploration_map

Transforms a normal map into a treasure map that marks the location of hidden treasure. The `destination` value defines what type of treasure map they receive.

```json
  {
      "type": "item",
      "name": "minecraft:map",
      "weight": 1,
      "functions": [
          {
              "function": "exploration_map",
              "destination": "buriedtreasure"
          }
      ]
  }
```

These are the current destinations:

|Destination|
|:---|
|buriedtreasure|
|endcity|
|fortress|
|mansion|
|mineshaft|
|monument|
|pillageroutpost|
|ruins|
|shipwreck|
|stronghold|
|temple|
|village|

### fill_container

This function allows you to define the loot table for a chest. When the item is generated and the player places it, it will be full of the contents defined inside the referenced loot table.

Loot tables for chests are generated at the time of opening or breaking. Consider it a Schrödinger's box. The content of the chest isn't decided until you look inside.

```json
  {
      "type": "item",
      "name": "minecraft:chest",
      "functions": [
          {
              "function": "fill_container",
              "loot_table": "loot_tables/chests/simple_dungeon.json"
          }
      ]
  }
```

It's advisable to always use `set_name` to give the chest a name when using `fill_container`. If you don't, the resulting chest won't look any different in the player's inventory than a normal empty chest would.

### furnace_smelt (loot table only)

The `"furnace_smelt"` function can be called on the loot dropping from an entity. What this means is, if an entity is killed with fire (like if a player is hunting chickens with a sword that has a fire aspect enchantment), the dropped loot will be the cooked version of the item - as if you cooked the chicken in a furnace. 

Logically, this function will not work in villager trades or with chests. 

This is the part of the chicken loot table code that shows how the game calls the furnace_smelt function on the loot being dropped. This would be triggered by the enchantment on the weapon used by the player to kill the chicken.

```json
{
  "type": "item",
  "name": "minecraft:chicken",
  "weight": 1,
  "functions": [
    {
      "function": "furnace_smelt",
      "conditions": [
        {
          "condition": "entity_properties",
          "entity": "this",
          "properties": {
          "on_fire": true
          }
        }
      ]
    }
  ]
}
```

### trader_material_type

This function affects the type of items a fisherman wants to trade for other items, such as a boat.

```json
"wants": [
  {
    "item": "minecraft:boat",
    "quantity": 1,
    "price_multiplier": 0.05,
    "functions": [
      {
        "function": "trader_material_type"
      }
     ]
  }

```

### Multiple functions

Multiple functions can be defined. Here's an example of combining two functions together. In this example, this entry will return between one and three Potions of Healing.

```json
{
    "type": "item",
    "name": "minecraft:potion",
    "weight": 1,
    "functions": [
        {
            "function": "set_count",
            "count": {
              "min": 1,
              "max": 3
            }
        },
        {
            "function": "set_data",
            "data": 21
        }
    ]
}
```

Multiple functions can even be multiple of the same function, but if there's a conflict between those functions, the last to be defined will win.

For example, using multiple `set_count` functions, like with the example below, will result in only the last of the duplicates being used, causing the item to have a count between 5 and 7 rather than between 1 and 3.

```json
{
    "type": "item",
    "name": "minecraft:potion",
    "weight": 1,
    "functions": [
        {
            "function": "set_count",
            "count": {
              "min": 1,
              "max": 3
            }
        },
        {
            "function": "set_count",
            "count": {
              "min": 5,
              "max": 7
            }
        }
    ]
}
```
