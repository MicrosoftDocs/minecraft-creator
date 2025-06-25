---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Loot Tables Documentation - Miscellaneous
description: "A reference document detailing miscellaneous table functions"
ms.service: minecraft-bedrock-edition
ms.date: 06/18/2025
---

# Loot Tables Documentation - Miscellaneous

There are a number of functions that work like loot tables, but don't fit cleanly in the other sections.

## Miscellaneous

These functions might come in handy when you're creating your world.

- ### exploration_map

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

    #### These are the currently supported destinations:

    - buriedtreasure

    - endcity

    - fortress

    - mansion

    - mineshaft

    - monument

    - pillageroutpost

    - ruins

    - shipwreck

    - stronghold

    - temple

    - village

- ### fill_container

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

- ### furnace_smelt (loot table only)

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

- ### trader_material_type

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

- ### Multiple functions

    Multiple functions can be defined simultaneously. Here's an example of two functions combined together.

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

    In this example, this entry will return between one and three Potions of Healing. Multiple functions can even be multiple of the same function, but if there's a conflict between those functions, the last to be defined will win.

    For example, using multiple `set_count` functions, like with the example below, will result in only the last of the duplicates being used.

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

    The item will have a count between 5 and 7 rather than between 1 and 3.
