---
author: mammerla
ms.author: v-jillheaden
title: Loot Replace Block
ms.prod: gaming
description: "Introduction to the Loot Overload: `/loot replace block` command"
---

# Introduction to the Loot Overload */loot replace block*

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - What the loot overload does and how to use it.
> - Syntax and examples.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Introduction to Loot Tables](IntroductionToLootTables.md)
- [Loot and Trade Table Functions](LootAndTradeTableFunctions.md)
- [Loot Spawn and Kill](LootSpawnAndKill.md)

## Loot replace block

The `/loot replace block` overload of the loot command allows users to directly target containers and populate slots with items from a specified loot source. This source could be a loot table that already exists in Minecraft, a custom loot table, or a loot table associated with an entity.

### Syntax

`/loot replace block <position: x y z> slot.container <slotId: int> [<count: int>] <source: loot|kill> <source parameter> [<tool>|mainhand|offhand]`

## Parameters

- **replace block** - Mandatory keyword to identify overload.

- **position** - Mandatory position specifying which container block will receive items.

- **slot.container** - Mandatory slot type for container blocks.

- **slotId** - Mandatory slot number in which to place the first item.

- **count** - Optional number of consecutive slots to be filled. If count is 0, then no items are dropped. If count is not specified, then as many slots as possible are filled.

- **source** - `loot` (path to a loot table) or `kill` (loot that drops from a killed entity)

## More about the Source Parameter variations

### loot

`loot` is used to specify that the source is a defined loot table (or even a custom loot table) that can be found at a given path. The path to the loot table must be surrounded by quotes.

`/loot replace block <position: x y z> slot.container <slotId: int> [<count: int>] <source: loot|kill> <source parameter> [<tool>|mainhand|offhand]`

The `loot_table` parameter is mandatory and it must be the path of the loot table to use, surrounded by quotation marks.

Examples:

- In this example, slot 0 of the target container is filled with 1 item. The path specifies that the items will be pulled from the “chests/abandoned_mineshaft” loot table.

`/loot replace block 0 0 0 slot.container 0 1 loot “chests/abandoned_mineshaft”`

- In this example, slots 2 through 5 of the target container will be filled. You can think of it like, "starting with slot 2, fill 4 slots with loot." So, the affected slots are 2 3 4 5.

`/loot replace block 0 0 0 slot.container 2 4 loot “chests/abandoned_mineshaft”`

- This variation, without a count specified, will fill the container starting from slot 2, until either the entire contents of the given loot table have been dropped or there are no more slots available to fill.

`/loot replace block 0 0 0 slot.container 2 loot “chests/abandoned_mineshaft”`

### kill

> [!NOTE]
> The kill variation of the `/loot replace block` command is different from the `/kill` command.  In the context of the `/loot` command, using the kill variation means that the dropped loot will end up in the target container's specified slot. You can read more about the `/kill` command in the [LootSpawn and Kill](LootSpawnAndKill.md) document.

Using the `kill` variation specifies that the user wants to simulate killing a specific entity in the world and use the loot table attached to it as the source for the loot to be dropped.

The target entity must be present within the world or the command will return an error saying that no matching targets were found.

`/loot replace block <position: x y z> slot.container <slotId: int> [<count: int>] kill <entity: target> [<tool>|mainhand|offhand]`

Examples:

- `/loot replace block 0 0 0 slot.container 0 1 kill @e[type=blaze]`

This will fill the target container slots 0 through 1 with items that would be dropped if the blaze were to be killed by a player.
The count parameter works the same for the kill source variation as it does for the loot source variation.

### Output

If successful, the `loot replace block` command returns a message saying how many items were replaced and over how many slots.

The command returns errors if:

- The target block is not a container, or if the target block is either air or an Ender Chest

- The items were unable to be distributed (invalid `slotId`)

- The `count` specified is a negative number

- The combined `slotId` and `count` exceed the container size

## What's Next?

Now that you know about *loot replace block*, you might want to try some other *loot* overloads.

> [!div class="nextstepaction"]
> [Loot Replace Entity](LootReplaceEntity.md)
> [Loot Spawn and Kill](LootSpawnAndKill.md)
