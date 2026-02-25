---
author: chipotle
ms.author: mikeam
title: Creating a Loot Table
description: "A tutorial detailing the process of creating a loot table"
ms.service: minecraft-bedrock-edition
ms.date: 02/20/2026
---

# Creating a Loot Table

If you're making mobs, ruins, or sunken treasure ships, you're going to need to make loot tables! Now that you've read through the [Introduction][lt], you're ready to take the step of creating your own. This tutorial will guide you through making progressively more complex tables, getting you closer to creating the Minecraft world of your dreams.

You should be familiar with these concepts before starting this tutorial:

- [Introduction to Behavior Packs](BehaviorPack.md)
- [Introduction to Loot and Trade Tables][lt]
- [Loot and Trade Table Functions](LootAndTradeTableFunctions.md)

[lt]: IntroductionToLootTables.md

## Basic loot tables

To begin, let's create something fairly simple: A loot table that returns a single diamond when it's called.

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:diamond"
        }
      ]
    }
  ]
}
```

We defined a single pool that rolls once and contains a single diamond on every roll. If you combined this with the [minecraft:loot](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_loot.md) component inside an entity's behavior file, the entity would drop that diamond on death. If the loot table above belonged to a new entity you'd created&mdash;say, an Evil Clown&mdash;then we'd put the table in **behavior\_pack/loot\_tables/entities/evil\_clown.json**, and refer to it from the entity's definition file at **behavior\_pack/entities/evil\_clown.json**:

```json
{
  "format_version": "1.21.90",
  "minecraft:entity": {
    "description": {
      "identifier": "my_mob:evil_clown",
      "spawn_category": "monster",
      "is_spawnable": true,
    },
    "components": {
      "minecraft:loot": {
        "table": "loot_tables/entities/evil_clown.json"
      }
      // other components
    }
  }
}
```

Now, let's get a little more complicated. What if you wanted the evil clown to drop one of tow different items? What if we wanted to return a diamond or a piece of coal? We can just add a second value to the `entries` object:

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:diamond"
        },
        {
          "type": "item",
          "name": "minecraft:coal"
        }
      ]
    }
  ]
}
```

Neat! But, right now a diamond is just as likely to drop as a piece of coal. We can change that by adding a `weight` to each entry. By default, the `weight` of an entry is `1`; if you don't specify any weights, all entries have an equal chance of being selected. Since the clown is, after all, evil, let's make coal four times as likely as a diamond.

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:diamond",
          "weight": 1
        },
        {
          "type": "item",
          "name": "minecraft:coal",
          "weight": 4
        }
      ]
    }
  ]
}
```

Great! Now, let's give the evil clowns another variation: some only have one loot item, while others have two or three. We can change the `rolls` entry to have a range rather than a single value; when the loot is dropped, Minecraft will roll from `min` to `max` times:

```json
{
  "pools": [
    {
      "rolls": { "min": 1, "max": 3 },
      "entries": [
        {
          "type": "item",
          "name": "minecraft:diamond",
          "weight": 1
        },
        {
          "type": "item",
          "name": "minecraft:coal",
          "weight": 4
        }
      ]
    }
  ]
}
```

In this example, the game will roll the entries one to three times, resulting in a minimum of one item and a maximum of three every time this loot table is called.

## More complex loot tables

### Functions and conditions

For this example, we're going to switch to show you one of the [actual Vanilla files](https://github.com/Mojang/bedrock-samples), the loot table for the cave spider:

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:string",
          "weight": 1,
          "functions": [
            {
              "function": "set_count",
              "count": {"min": 0, "max": 2}
            },
            {
              "function": "looting_enchant",
              "count": {"min": 0, "max": 1}
            }
          ]
        }
      ]
    },
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:spider_eye",
          "weight": 1,
          "functions": [
            {
              "function": "set_count",
              "count": {"min": 0, "max": 1}
            },
            {
              "function": "looting_enchant",
              "count": {"min": 0, "max": 1}
            }
          ]
        }
      ],
      "conditions": [
        {
          "condition": "killed_by_player"
        }
      ]
    }
  ]
}
```

This loot table only has two one-item pools, but the count of the items returned is driven by [functions](./LootAndTradeTableFunctions.md):

- The `string` uses `set_count` to drop `0` to `2` strings when the spider is killed.
- The `spider_eye` uses `set_count` to return either `0` or `1` spider eyes.
- Both of them use `looting_enchant` to randomly add another string or another spider eye if the spider was killed by an item with the looting enchantment.

In addition, there's a `condition` of `killed_by_player` placed on the spider eye: the cave spider must be killed by the player for an eye to be dropped as loot.

While `set_count` and `looting_enchant` are the most common functions to use, there are others available for interesting effects. For instance, if you've ever killed a chicken with a flaming sword, you might find you get a cooked chicken out of it. How does that happen? With the `furnace_smelt` function. That pool from the chicken's loot table looks like this:

```json
{
  "rolls": 1,
  "entries": [
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
        },
        {
          "function": "looting_enchant",
          "count": {"min": 0, "max": 1}
        }
      ]
    }
  ]
}
```

This also shows a condition not on the item, but on the item's _function._ The `furnace_smelt` function turns the chicken into a cooked chicken, but it's only called if the entity the chicken was killed with has the `on_fire` property.

### Referenced loot tables

Sometimes, your entities or containers are "subclasses" of one another: a village armorer, a village tanner, and a village cartographer are all villagers. Those entities/containers might share a common pool of loot, while adding a few extra bits of loot that are specific to armor, tannery, or mapmaking. To handle this case, entries in a pool can be of type `loot_table` rather than type `item`, and have a reference to another loot table. When that item comes up in a roll on that pool, the game will make another roll on the referenced loot table and return _its_ result.

The Vanilla loot table for a village tannery looks in part like this. (The [full table[(https://github.com/Mojang/bedrock-samples/blob/main/behavior_pack/loot_tables/chests/village/village_tannery.json) has more entries in the first pool, with functions and assigned weights.)

```json
{
  "pools": [
    {
      "rolls": {"min": 1, "max": 5},
      "entries": [
        {
          "type": "item",
          "name": "minecraft:leather_chestplate"
        },
        {
          "type": "item",
          "name": "minecraft:leather_boots"
        },
        {
          "type": "item",
          "name": "minecraft:leather_helmet"
        }
      ]
    },
    {
      "rolls": 1,
      "entries": [
        {
          "type": "loot_table",
          "name": "loot_tables/chests/village/village_bundle.json"
        }
      ]
    }
  ]
}
```

When the second pool is called, it returns a value from the **village_bundle.json** loot table, which is referred to by several other village chests. The [village bundle loot table](https://github.com/Mojang/bedrock-samples/blob/main/behavior_pack/loot_tables/chests/village/village_bundle.json) has a two in three chance of returning nothing (an item of type `empty` with a weight of `2`, and a one in three chance of returning a bundle.

> [!IMPORTANT]
>
> Don't make recursive loot tables! A loot table cannot refer to itself in any way. If a roll results in a recursive loot table, nothing will be returned.

### Loot overloads

We haven't explicitly talked about [Loot Overloads](./LootOverloads.md), as they're not part of creating loot tables in behavior packs. You should familiarize yourself with those commands, however, as they let you, among other tasks, give entities items from loot tables, or fill containers from them.

## Next steps

By now, you should be familiar with loot tables, conditions, functions, and overloads. Your next steps from here are creating your own tables for your own creations!
