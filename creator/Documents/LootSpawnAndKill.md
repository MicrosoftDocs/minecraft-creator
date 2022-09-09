---
author: rileymanns
ms.author: v-jillheaden
title: Loot Spawn and Kill
ms.prod: gaming
description: "An overview covering loot table overloads: `/loot spawn` and `/kill`"
---

# Introduction to Two Loot Overloads: */loot spawn* and */kill*

After you understand how loot tables work and how to customize them to your liking, it's time to learn about `/loot spawn` and `/kill`.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - What the two loot overloads do and how to use them.
> - Syntax and examples.
 
### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Introduction to Loot Tables](IntroductionToLootTables.md)
- [Loot and Trade Table Functions](LootAndTradeTableFunctions.md)

## Loot spawn

The `/loot spawn` command allows creators to drop the loot of any entity that has a defined loot table into the world. This can be done with custom loot tables as well. The command follows the "standard" rules of loot tables, so they go through all the conditions and pools. For example, using `/loot spawn` on a cave spider will not drop spider eyes because the condition for spider eyes to drop is “killed by player.”  

### Syntax

```
/loot spawn <position: x y z> loot <loot_table: string> [<tool>:mainhand:offhand: string]
```

`spawn <position: x y z>` - Spawns an item into the world at the given position.

**spawn** - Mandatory keyword to identify overload.

**position** - Mandatory position at which the item will be spawned, specified in x, y, z coordinates.

**Output** - If successful, the command returns a message saying how many items were dropped. Command returns an error message if the position is out of the world or if the position is not loaded.

`loot <loot_table> [tool|mainhand|offhand]` - Pulls items from the specified loot table as if you used the specified tool to obtain them or no tool if none is specified.

**loot** - Mandatory keyword to identify overload.

**loot_table** - Mandatory path of the loot table to use.

**[tool|mainhand|offhand]** - Optional tool with which to simulate mining the given loot table. Default is an empty hand.

**Output** - Command returns an error message if the given loot table does not exist.

## Kill

`/kill` is a command that simulates the loot drop of the selected entity as you would kill it normally. This differs from `/loot spawn` in that some loot_tables specify a condition of "condition": "killed_by_player" for specific loot to be dropped.  

### Syntax

`kill <entity: target> [tool|mainhand|offhand]` - Pulls items from the specified entity’s loot table, as if you killed it with the specified tool, or no tool if none is specified.

**kill** - Mandatory keyword to identify overload.

**entity** - Mandatory target specifying the entity whose loot table will be used.

**[tool|mainhand|offhand]** - Optional tool with which to simulate killing the given entity. Default is an empty hand.

**Output** - Command returns an error message if no entity is found or if more than one entity is specified.

## What's Next?

Now that you know about *loot spawn* and *kill*, you might want to try the *damage* command.

> [!div class="nextstepaction"]
> [Introduction to Damage](CommandsDamageIntroduction.md)
