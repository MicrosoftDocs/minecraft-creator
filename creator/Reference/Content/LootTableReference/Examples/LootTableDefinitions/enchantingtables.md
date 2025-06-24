---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Loot Tables Documentation - Enchanting Tables
description: "A reference document detailing enchanting table functions"
ms.service: minecraft-bedrock-edition
ms.date: 06/18/2025
---

# Loot Tables Documentation - Enchanting Tables

These different enchanting functions let you set unique enchanting parameters for items in your world.

## Enchantment Functions

Use these functions to apply enchantment rules to your world so they work exactly the way you want them to:

- ### enchant_book_for_trading (trade table only)

    This function enchants a book using the algorithm for enchanting items sold by villagers.

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
    The total cost of an enchantment is calculated with this equation:
    
    `base_cost` + (`base_random_cost`  + enchantmentLevel * `per_level_random_cost`) + enchantmentLevel * `per_level_cost`

- ### enchant_random_gear

    Enchants an item using the same algorithm used while enchanting equipment vanilla mobs spawn with. Takes a `chance` modifier to manipulate the algorithm.
    
    > [!Note]
    > A `chance` modifier of 1.0 doesn't mean a 100% chance that gear will become enchanted. Rather, the chance is modified based on the difficulty. 

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

- ### enchant_randomly

    Generates a random enchantment that is compatible with the item. Supports the optional `treasure` boolean (true/false) to allow treasure enchantments to be toggled on and off. Treasure enchantments are enchantments that cannot be obtained through the enchanting table, including Frost Walker, Mending, Soul Speed, Curse of Binding, and Curse of Vanishing.

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

- ### enchant_with_levels

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

- ### set_potion

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

- ### specific_enchants

    This function lets you set a list of specific enchantments on an item. It also lets you apply enchantments to items that wouldn't normally be enchantable in-game.

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

    You can also define the enchantments as objects to specifically define an enchantment level.

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
    > [!Note]
    > Max enchantment levels are hard-coded and can't be overwritten.