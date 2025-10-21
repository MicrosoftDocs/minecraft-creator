---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Loot and Trade Table Functions
description: "An article showcasing the available functions for Loot and Trade Tables"
ms.service: minecraft-bedrock-edition
ms.date: 06/24/2025
---

# Loot and Trade Table Functions

Both loot and trade tables share a similar same function set. While most work on both, some only work within a specific type. There are limitations to loot and trade tables in general: for instance, there isn't a way to add `can_place_on` or `can_destroy` onto an item through loot or trade tables. See below for the different functions available and an example on how they can be used.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - There are a variety of loot and trade table functions and they can modify a player's loot experience.

## Requirements

It's recommended that the following be completed before beginning this tutorial.

- [Introduction to Loot Tables](IntroductionToLootTables.md)

## Enchanting

These different enchanting functions let you set unique enchanting parameters. Check out our [reference documentation](./../Reference/Content/LootTableReference/Examples/loottabledefinitions/enchantingtables.md) for examples and a more detailed explanation of enchanting tables.

### enchant_book_for_trading (trade table only)

This function enchants a book using the algorithm for enchanting items sold by villagers. It takes four parameters: `base_cost`, `base_random_cost`, `per_level_random_cost`, and `per_level_cost`.

### enchant_random_gear

Enchants an item using the same algorithm used while enchanting equipment vanilla mobs spawn with. Takes a `chance` modifier to manipulate the algorithm.

### enchant_randomly

Generates a random enchantment that is compatible with the item. Supports the optional `treasure` boolean (true/false) to allow treasure enchantments to be toggled on and off.

### enchant_with_levels

Applies an enchantment as if it were enchanted through an enchanting table using a minimum and maximum XP level defined through the `levels` parameter.  Supports the optional `treasure` boolean (true/false) to allow treasure enchantments to be toggled on and off.

### set_potion

This function sets the potion type of compatible items with a potion ID.

### specific_enchants

This function lets you set a list of specific enchantments on an item. It also lets you apply enchantments to items that wouldn't normally be enchantable in-game.

You can also define the enchantments as objects to specifically define an enchantment level.

> [!Note]
> Max enchantment levels are hard-coded and can't be overwritten.

## Modifying items

The following set of functions allow you to modify the results in different ways, such as setting how many of an item is returned, setting its data value, or even setting the name and lore of an item.

Check out our [reference documentation](./../Reference/Content/LootTableReference/Examples/loottabledefinitions/itemmodtables.md) for examples and a more detailed explanation of how to modify items in Minecraft: Bedrock Edition.

### looting_enchant (loot table only)

This function allows you to modify the count of how many items are returned when an entity is killed by an item with the looting enchantment.
> [!Note]
> The `looting_enchant` function only works with loot tables that are called by the death of an entity.

### random_aux_value

Similar to `random_block_state`, this function lets you pick a random auxiliary value for an item.

### random_block_state

Lets you randomize the block state of the resulting item.

### random_dye

This function affects the colors of the random leather items supplied by a leather worker.

### set_actor_id

This function only works with a spawn egg and is used to set the entity ID of that spawn egg. You can also inherit the entity ID of the entity that's associated with that loot table (like making a rabbit drop a rabbit spawn egg) by omitting the `id`.

### set_banner_details

Determines banner type, banner color, and banner pattern. Banner type can be defined by string ("default" or "illager_captain"), or by integer (0 or 1, respectively). Only default banners can have custom patterns. Pattern count cannot exceed a maximum of 6 and this function only works on banners.

```json
{
    "type": "item",
    "name": "minecraft:banner",
    "functions": [
            {
                "function": "set_banner_details",
                "type": 0,
                "base_color": "silver",
                "patterns": [
                {
                    "color": "black",
                    "pattern": "gradient"
                },
                {
                    "color": "red",
                    "pattern": "circle"
                },
                {
                    "color": "green",
                    "pattern": "flower"
                }
            ]
        }
    ]
}
```

### set_book_contents

This function allows you to set the contents of a book.

> [!Note]
> Be aware that you can only use `rawtext` on the book's contents (`pages`) at the timing of writing this — `rawtext` **does not** work for the `author` or `title` tags.

### set_count

Sets the quantity of items returned by setting the `count` value. It could either be an exact number or a min/max range.

### set_damage

Sets the percentage of durability remaining for items that have durability by setting the `damage` value. 1.0 is 100% of durability remaining (undamaged) while 0.0 has no durability remaining.

### set_data

Sets the data value of a block or item to an exact ID. This is useful for things like returning a specific potion or an item of a specific color.

### set_data_from_color_index

Inherits the data value of the resulting item from the associated entity's color index. An in-game example would be a pink sheep dropping pink wool when you kill it or shear it. If the associated entity doesn't have a color index set (or if it's used inside a chest's loot table), it always yields a data value of 0.

### set_lore

This function lets you set the lore of an item. Each line within the lore object represents a single line of text. There's currently no support for `rawtext`.

### set_name

This function lets you set the name of an item. There's currently no support for `rawtext`.

### explosion_decay

If a loot drop is triggered by an explosion, this applies a flat chance (equal to 1/explosion radius) for each dropped item to be destroyed. Items that drop in stacks are processed individually.

```json
{
    "type": "item",
    "name": "minecraft:dirt",
    "functions": [
        {
            "function": "explosion_decay"
        }
    ]
}
```

### set_stew_effect

Determines the effect applied when consuming a dropped suspicious stew. Randomly selects one effect from the provided array.

```json
{
    "type": "item",
    "name": "minecraft:suspicious_stew",
    "functions": [
        {
            "function": "minecraft:set_stew_effect",
            "effects": [
                {
                    "id": 0
                },
                {
                    "id": 3
                },
                {
                    "id": 7
                }
            ]
        }
    ]
}
```

### set_ominous_bottle_amplifier

Sets the amplifier value of the Bad Omen effect on a dropped ominous bottle. Value is chosen randomly from the provided range.

```json
{
    "type": "item",
    "name": "minecraft:ominous_bottle",
    "functions": [
        {
            "function": "set_ominous_bottle_amplifier",
            "amplifier": {
                "min": 0,
                "max": 3
            }
        }
    ]
}
```

### set_armor_trim

Determines the material and pattern of an armor trim to apply to a dropped item. Only valid for items that can have trim applied to them.

```json
{
    "type": "item",
    "name": "minecraft:diamond_chestplate",
    "functions": [
        {
            "function": "set_armor_trim",
            "material": "netherite",
            "pattern": "wayfinder"
        }
    ]
}
```

## Miscellaneous

The following functions don't seem to fit anywhere else, but will likely come in handy while you're creating your world. Check out our [reference documentation](./../Reference/Content/LootTableReference/Examples/loottabledefinitions/miscellaneoustables.md) for examples and a more detailed explanation of how to use these miscellaneous functions in Minecraft: Bedrock Edition.

### exploration_map

Transforms a normal map into a treasure map that marks the location of hidden treasure. The `destination` value defines what type of treasure map they receive.

These are the currently supported destinations:

- `buriedtreasure`

- `endcity`

- `fortress`

- `mansion`

- `mineshaft`

- `monument`

- `pillageroutpost`

- `ruins`

- `shipwreck`

- `stronghold`

- `temple`

- `village`

### fill_container

This function lets you define the loot table for a chest. When the item is generated and the player places it, it will be full of the contents defined inside the referenced loot table. Loot tables for chests are generated at the time of opening or breaking. Consider it a Schrödinger's box. The content of the chest isn't decided until you look inside.

### furnace_smelt (loot table only)

The `"furnace_smelt"` function can be called on the loot dropping from an entity. If an entity is killed with fire (like if a player is hunting chickens with a sword that has a fire aspect enchantment), the dropped loot will be the cooked version of the item - as if you cooked the chicken in a furnace.

> [!Note]
> This function will not work in villager trades or with chests.

### trader_material_type

This function affects the type of items a fisherman will trade for their wares.

### Multiple functions

You can define multiple functions simultaneously, and these multiples can even be multiple of the same function. If there's a conflict between functions, the last to be defined will be the one expressed.
