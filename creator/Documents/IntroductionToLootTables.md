---
author: JimSeaman42
ms.author: mikeam
title: Introduction to Loot Tables
description: "An overview covering Loot Tables are and how they are used in Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---

# Introduction to Loot Tables

Loot tables are JSON formatted files used to define how items are generated in-game during situations such as generating the contents of chests, defining what items an entity drops upon death, or what items an entity is equipped with. They are even used in gameplay mechanics such as milking a mooshroom or fishing.

:::image type="content" source="Media/IntroToLootTables/Loot-and-Trading-Tables.jpg" alt-text="Image showing Alex opening a chest to show loot.":::

Loot table files live in the root directory of a behavior pack and generally consist of three main sections collectively known as a "pool."

- **Rolls**
  - Rolls dictate how many times the pool will be rolled to select an entry. This could be either an integer which will result in a set amount of rolls or a min/max range from which the number of rolls can be chosen.
- **Conditions** (optional) [more info](LootTableConditions.md)
  - These are optional requirements that must be met for the pool to be rolled.
- **Entries**
  - This is a list of objects the game will select from in this roll. It can be an `item`, a `loot_table`, or `empty` if you want a chance of nothing happening this roll.

There are five categories of loot tables in Vanilla Minecraft: Blocks, chests, entities, equipment, and gameplay.

## What's Next?

This is just the base level when it comes to loot tables, and you have a long way to go before you're ready to begin using these tools in your world. We suggest taking a look at loot table functions next, followed by conditions, then loot overloads. Once you've gotten comfortable with all of the intricacies of those topics, jump into the tutorial and create your own loot table!

> [!div class="nextstepaction"]
> [Loot and Trade Table Functions](LootandTradeTableFunctions.md)
> [Loot Table Conditions](LootTableConditions.md)
> [Loot Table Overloads](LootOverloads.md)
> [Creating a Loot Table](CreateLootTable.md)