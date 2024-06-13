---
author: JimSeaman42
ms.author: mikeam
title: Loot Overloads
description: "An overview covering loot overloads"
ms.service: minecraft-bedrock-edition
---

# Loot Overloads

Now that you understand how loot tables work and how to customize them, it's time to learn about loot overloads. Loot overloads are commands that may be used to access items from loot tables in a variety of ways. The loot overloads include:

- `/kill` simulates the loot drop of an entity if it were killed normally.
- `/loot replace block` allows users to populate target containers with items from a specified loot source.
- `/loot replace entity` allows user to populate target entities with items from a specified loot source.
- `/loot spawn` drops the loot of any entity that has a defined loot table in the world.

 
### Requirements

It's recommended that the following be completed before beginning this tutorial.

- [Introduction to Loot Tables](IntroductionToLootTables.md)
- [Loot and Trade Table Functions](LootAndTradeTableFunctions.md)

Let's take a look at the overloads in more detail, beginning with the `/kill` command.

## Kill

`/kill` is a command that simulates the loot drop of a selected entity as if it were killed normally. This differs from `/loot spawn` in that some loot tables specify a condition of `"condition": "killed_by_player"` for specific loot to be dropped.  

### Syntax

`kill <entity: target> [tool|mainhand|offhand]` - Pulls items from the specified entity's loot table, as if it were killed it with the specified tool, or no tool if none is specified.

**kill** - Keyword to identify overload.

**entity** - Target specifying the entity whose loot table will be used.

**[tool|mainhand|offhand]** - (Optional) Tool with which to simulate killing a given entity. Default is an empty hand.

**Output** - Command returns an error message if no entity is found or if more than one entity is specified.

## Loot replace block

The `/loot replace block` overload allows users to directly target containers and populate slots with items from a specified loot source. This source could be a currently existing loot table in Minecraft, a custom loot table, or a loot table associated with an entity.

### Syntax

`/loot replace block <position: x y z> slot.container <slotId: int> [<count: int>] <source: loot|kill> <source parameter> [<tool>|mainhand|offhand]`

## Loot Replace Block Parameters

- **replace block** - Keyword to identify overload.

- **position** - Position specifying which container block will receive items.

- **slot.container** - Slot type for container blocks.

- **slotId** - Slot number in which to place the first item.

- **count** - (Optional) Number of consecutive slots to be filled. If the count is 0, no items are dropped. If a count is not specified, as many slots as possible are filled.

- **source** - `loot` (path to a loot table) or `kill` (loot that drops from a killed entity)

### Output

If successful, the `loot replace block` command returns a message saying how many items were replaced and over how many slots.

The command returns errors if:

- The target block is not a container, or if the target block is either air or an Ender Chest

- The items were unable to be distributed (invalid `slotId`)

- The `count` specified is a negative number

- The combined `slotId` and `count` exceed the container size

## Loot replace entity

The `/loot replace entity` overload allows users to directly target entities and populate slots with items from a specified loot source. This source could be a currently existing loot table in Minecraft, a custom loot table, or a loot table associated with an entity.

### Syntax

`/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> [<count: int>] <source: loot|kill> <source parameter> [<tool>|mainhand|offhand]`

## Loot Replace Entity Parameters

- **replace entity** - Keyword to identify overload.

- **entity** - Selector specifying which entity(s) will receive the items.

- **slotType** - `EntityEquipmentSlot` to place the first item in. Different slot types have different valid slot numbers.

- **slotId** - Slot number in which to place the first item. Different slot types have different slot numbers. If there is only a single slot, the `slotId` does not matter. Single slots include: mainhand, offhand, player armor slots (head, chest, legs, feet), saddle, and armor (used by the horse and llama entities).

- **count** - (Optional) Number of consecutive slots to be filled. If the count is 0, no items are dropped. If a count is not specified, as many slots as possible are filled.

- **source** - `loot` (path to a loot table) or `kill` (loot that drops from a killed entity)

### Output

If successful, the `loot replace entity` command returns a message saying how many items were replaced and over how many slots.

The command returns errors if:

- No matching entities are found

- The items were unable to be distributed (invalid `slotType`/`slotId` combination, or an entity does not have that `slotType`)

- The count specified is a negative number

- The combined `slotId` and count exceed the container size


## Loot spawn

The `/loot spawn` command allows creators to drop the loot of any entity that has a defined loot table into the world. This can be done with custom loot tables as well. The command follows the "standard" rules of loot tables, so they go through all conditions and pools. For example, using `/loot spawn` on a cave spider will not drop spider eyes, because the condition for spider eyes to drop is "killed by player."  

### Syntax

```
/loot spawn <position: x y z> loot <loot_table: string> [<tool>:mainhand:offhand: string]
```

`spawn <position: x y z>` - Spawns an item into the world at the given position.

**spawn** - Keyword to identify overload.

**position** - Position at which the item will be spawned, specified in x, y, z coordinates.

**Output** - If successful, the command returns a message saying how many items were dropped. The command returns an error message if the position is out of the world or if the position is not loaded.

`loot <loot_table> [tool|mainhand|offhand]` - Pulls items from the specified loot table as if you used the specified tool to obtain them or no tool if none is specified.

**loot** - Keyword to identify overload.

**loot_table** - Path of the loot table to use.

**[tool|mainhand|offhand]** - (Optional) Tool to simulate mining the given loot table. Default is an empty hand.

**Output** - Command returns an error message if the given loot table does not exist.

## Source Parameter Variations

Certain loot overloads, such as `loot replace block` and `loot replace entity` have the option to use the `loot` and `kill` source parameter variations. The following details how these variations operate in the loot overloads.

### loot

`loot` is used to specify that the source is a defined loot table (or even a custom loot table) that can be found at a given path. The path to the loot table must be surrounded by quotes.

`/loot replace block <position: x y z> slot.container <slotId: int> [<count: int>] <source: loot|kill> <source parameter> [<tool>|mainhand|offhand]`

The `loot_table` parameter is mandatory and it must be the path of the loot table to use, surrounded by quotation marks.

Examples:

- In this example, slot 0 of the target container is filled with 1 item. The path specifies that the items will be pulled from the "chests/abandoned_mineshaft" loot table.

`/loot replace block 0 0 0 slot.container 0 1 loot "chests/abandoned_mineshaft"`

- In this example, slots 2 through 5 of the target container will be filled. You can think of it like, "starting with slot 2, fill 4 slots with loot." So, the affected slots are 2 3 4 5.

`/loot replace block 0 0 0 slot.container 2 4 loot "chests/abandoned_mineshaft"`

- This variation, without a count specified, will fill the container starting from slot 2, until either the entire contents of the given loot table have been dropped or there are no more slots to fill.

`/loot replace block 0 0 0 slot.container 2 loot "chests/abandoned_mineshaft"`

### kill

> [!NOTE]
> The kill variation of a loot overload command is different from the `/kill` command.  In the context of the `/loot` command, using the kill variation means that the dropped loot will end up in the target container's specified slot.

Using the `kill` variation specifies that the user wants to simulate killing a specific entity in the world and use the loot table attached to it as the source for the loot to be dropped.

The target entity must be present within the world or the command will return an error saying that no matching targets were found.

`/loot replace block <position: x y z> slot.container <slotId: int> [<count: int>] kill <entity: target> [<tool>|mainhand|offhand]`

Examples:

- `/loot replace block 0 0 0 slot.container 0 1 kill @e[type=blaze]`

This will fill the target container slots 0 through 1 with items that would be dropped if the blaze was killed by a player.
The count parameter works the same for the kill source variation as it does for the loot source variation.
