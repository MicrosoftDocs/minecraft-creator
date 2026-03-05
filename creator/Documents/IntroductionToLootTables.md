---
author: chipotle
ms.author: mikeam
title: Introduction to Loot and Trade Tables
description: "An overview of Loot and Trade Tables in Minecraft: Bedrock Edition."
ms.service: minecraft-bedrock-edition
ms.date: 02/04/2026
---

# Introduction to Loot and Trade Tables

When you do something fun and get rewarded with loot in Minecraft, or trade with a villager, then behind the scenes there was&mdash;yes&mdash;a JSON file or two: specifically, a **loot table** or a **trade table**. The mechanisms of the two aren't identical, but they overlap.

## Loot tables

:::image type="content" source="Media/IntroToLootTables/Loot-and-Trading-Tables.jpg" alt-text="Image showing Steve opening a chest to find glowing loot.":::

The five categories of loot tables in Vanilla Minecraft are blocks, chests, entities, equipment, and gameplay (such as fishing, milking a mooshroom, or watching your sniffer find seeds).

Loot table files live in a directory (cleverly named `loot_tables`) at the root level of a behavior pack. If you have more than one type of loot table in your behavior pack, you can put each type in its own subfolder, but that's not required.

:::image type="content" source="Media/IntroToLootTables/loot-behavior-pack-structure.png" alt-text="Image of the structure of a behavior pack showing that the example block loot file can go into a blocks subfolder or directly in the loot_tables folder.":::

Think of a numbered list of items. Each list lets you, the player, roll a set of dice one or more times to get a number, and that number corresponds to an item in the list. As an example, here is the loot table for gifts a pet cat can bring you in the morning:

| Die Roll | Loot Result      |
|:--------:|------------------|
| 1        | Rabbit Hide      |
| 2        | Rabbit Foot      |
| 3        | Chicken          |
| 4        | Feather          |
| 5        | Rotten Flesh     |
| 6        | String           |
| 7        | Phantom Membrane |

And here's the corresponding JSON file for that table:

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "item",
          "name": "minecraft:rabbit_hide",
          "weight": 10
        },
        {
          "type": "item",
          "name": "minecraft:rabbit_foot",
          "weight": 10
        },
        {
          "type": "item",
          "name": "minecraft:chicken",
          "weight": 10
        },
        {
          "type": "item",
          "name": "minecraft:feather",
          "weight": 10
        },
        {
          "type": "item",
          "name": "minecraft:rotten_flesh",
          "weight": 10
        },
        {
          "type": "item",
          "name": "minecraft:string",
          "weight": 10
        },
        {
          "type": "item",
          "name": "minecraft:phantom_membrane",
          "weight": 2
        }
      ]
    }
  ]
}
```

The top-level `pools` key contains one or more loot tables. As a creator, you might want to have different pools so you can drop different loot to your players if they satisfy different [loot table conditions](../Documents/LootTableConditions.md). Each pool has these properties:

- `rolls`: how many times the pool will be rolled to select an entry. This can be a single integer (how many times to roll), or a range like `{"min": 1, "max": 3}`, which randomly selects 1 to 3 rolls.
- `entries`: the actual list of objects the game selects from.
  - `type` can be `item`, but can also be `loot_table` to select from another loot table or `empty` to give a chance of no loot on a roll.
  - `name` is the name of the item or the loot table.
  - `weight` is a relative chance for how often this result will come up. An entry with a weight of `2` is twice as likely to come up as an entry with a weight of `1`, but one-fifth as likely to come up with a weight of `10`. (As you can see, getting a phantom membrane is rarer than getting a bit of string or a chicken. Imagine a cat bringing down a phantom! Now you know why they avoid cats.)
  - `functions` are optional operations that can modify an entry's result in different ways, such as setting an item's lore or putting content into a book. See [Loot and Trade Table Functions](./LootAndTradeTableFunctions.md) for more information.
- `conditions` are optional requirements that must be met for the pool to be rolled. See [Loot Table Conditions](./LootTableConditions.md) for more information about conditions.

## Trade tables

Like a loot table, a trade table is, at its heart, a list of items&mdash;but it's a list of item _pairs,_ what a villager wants and what they'll give you in exchange. For instance, a butcher might have this trade table:

| Wants    | Gives           |
|----------|-----------------|
| Porkchop | Emerald         |
| Chicken  | Emerald         |
| Emerald  | Cooked Porkchop |
| Emerald  | Cooked Chicken  |

In practice, trade tables are considerably more complicated than loot tables. They can specify individual trades or trade groups (similar to loot table pools), tiers (sets of trade or trade groups unlocked based on the trader's&mdash;not the player's&mdash;experience levels, how many times a trade can be made before the trader has to resupply, and much more.

Trade tables can be stored in any subfolder in a behavior pack, but the convention is to use a **trading** directory at the behavior pack's top level. For an in-depth dive into trade tables, read [Creating a Trade Table](./CreateTradeTable.md).

## What's next?

We suggest taking a look at loot and trade table functions next, which are mostly shared between the two. Then, jump into one of the tutorials and create your own loot or trade table!

- [Loot and Trade Table Functions](LootandTradeTableFunctions.md)
- [Loot Table Conditions](LootTableConditions.md)
- [Loot Table Overloads](LootOverloads.md)
- [Creating a Loot Table](CreateLootTable.md)
- [Creating a Trade Table](CreateTradeTable.md)
