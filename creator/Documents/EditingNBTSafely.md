---
author: mammerla
ms.author: v-jillheaden
title: Editing NBT Safely
ms.prod: gaming
description: An article covering how to utilize NBT to edit data strings for entities, items and blocks
---

# Editing NBT Safely

This article introduces you to Named Binary Tag (NBT) editing -- the use of tools to edit data strings stored in entities, items, and some blocks -- and how to avoid editing it in such a way that's likely to break in the future.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - What NBT data is and how it is used.
> - Why NBT data might need to be edited.
> - Best practices for editing NBT data.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Commonly Used Tools](CommonlyUsedTools.md)

For years, it's been a common practice for Minecraft map makers to use [external tools](CommonlyUsedTools.md) to edit "NBT," the data stored within entities, items, and some blocks that stores information such as names, damage values, or age. NBT is essentially a list of tags and corresponding values. For example, a zombie pigman would contain, among many others, an `ID` tag with a value of `zombie_pigman`. Using tools such as **MCEdit** or **MCCToolChest** to edit NBT can have powerful results and save creators a great deal of time. For instance, you might use a tool to edit the name of a mob by simply changing the value of its `CustomName` tag rather than having to use a name tag and anvil in-game.

However, there are cases where NBT editing has led to problems when Minecraft updates in a way that changes how a particular tag is written or read by the game. Most features in Minecraft are built to be *played*, not edited with external tools. Those tools *simulate* playing the game. You could change a chest's content in game, and a tool such as **MCCToolChest** writes data to the NBT as if you had done just that. However, problems often arise when map makers use tools to edit NBT in a way that couldn't theoretically be accomplished in-game.

> [!IMPORTANT]
> The golden rule is this: **If you change things in a way that the game could never have written itself, you're at risk.** If the game can't tell the difference between whether an NBT value was saved by the game itself or if it was hand-edited, you're generally safe.

Editing the NBT of a written book to change its text is fine; editing the NBT to exceed a book's in-game character limit isn't. Changing a cat's `CatType` to `5` makes it a calico; Changing it to `5000` is probably a bad idea.

Minecraft's developers can only expect their code to be edited in the ways they programmed it to be edited. You may find that editing an NBT tag in a certain way allows you to do something cool, but there's no guarantee that how that tag is handled won't be changed in the future since it wasn't intended to be edited that way in the first place.

For example, map creators used to make custom villager trades by editing several of a villager's NBT tags. One such change was often setting the `TradeTier` tag to a negative number so the villager would never unlock new trades like they do in survival Minecraft. Since Minecraft's developers never intended trades to work like that, they fundamentally changed the way the `TradeTier` tag works in the "Village and Pillage" update, breaking many custom villagers in maps. Today, custom trades are typically handled using [loot table functions](LootAndTradeTableFunctions.md), a feature developed specifically for such a purpose.

Exceptions to this rule are usually due to years of creators editing NBT in a certain way in which Minecraft's developers had to build in support for them. For example, there's no way to write an item's `lore` tag in-game, but it's generally considered safe to do so in an editor.

This advice may extend to more than just NBT editing -- behaviors, commands, scripts, and other features of the game may all produce interesting results when you use them in a way they weren't intended. Minecraft is a living game and features are constantly being changed. While its developers clearly make every effort not to break your content, they can only be expected to know about the features they intentionally programmed. When creators rely on these unexpected "tricks," and content breaks because of it, a burden is placed on the creator, their players, and the Microsoft developers who have to try to find ways around it. When in doubt, always test your content on new updates to check for content-breaking changes.
