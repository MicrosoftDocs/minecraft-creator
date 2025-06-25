---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Loot Tables Documentation - Modifying Items
description: "A reference document detailing item modification tables"
ms.service: minecraft-bedrock-edition
ms.date: 06/18/2025
---

# Loot Tables Documentation - Modifying Items

There are loot/trade table functions you can use to set unique parameters for how tables handle items in your world.

## Item Mod Functions

The following functions let you modify loot table results in different ways, like how many of an item is returned, setting its data value, or even setting the name and lore of an item.

- ### looting_enchant (loot table only)

    This function lets you modify the count of how many items are returned when an entity is killed by an item with the looting enchantment.
    
    > [!Note]
    > The `looting_enchant` function only works with loot tables that are called by the death of an entity.

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

- ### random_aux_value

    Similar to `random_block_state`, this function lets you pick a random auxiliary value for an item. The following example will result in a randomly-colored dye.

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

- ### random_block_state

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

- ### random_dye

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

- ### set_actor_id

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

- ### set_banner_details

    This function only works on banners and currently only supports a banner `type` of `1`. A banner `type` of `1` results in a villager banner.

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

- ### set_book_contents

    This function sets the contents of a book.

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

    > [!Note]
    > Be aware that you can only use `rawtext` on the book's contents (`pages`) at the timing of writing this — `rawtext` **does not** work for the `author` or `title` tags.

- ### set_count

    This function sets the quantity of items returned by setting the `count` value. It could either be an exact number like this example:

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

- ### set_damage

    This function sets the percentage of durability remaining for items that have durability by setting the `damage` value. 1.0 is 100% of durability remaining (undamaged) while 0.0 has no durability remaining.

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

- ### set_data

    This function sets the data value of a block or item to an exact ID. This is useful for things like returning a specific potion or an item of a specific color.

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

- ### set_data_from_color_index

    This function inherits the data value of the resulting item from the associated entity's color index, like when a pink sheep drops pink wool when you kill or shear it. If the associated entity doesn't have a color index set (or if it's used inside a chest's loot table), it will always yield a data value of 0.

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

- ### set_lore

    This function defines the lore of an item. Each line within the lore object represents a single line of text. There's currently no support for `rawtext`.

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

- ### set_name

    This function sets the name of an item. There's currently no support for `rawtext`.

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
