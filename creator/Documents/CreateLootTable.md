---
author: JimSeaman42
ms.author: mikeam
title: Creating a Loot Table
description: "A tutorial detailing the process of creating a loot table"
ms.service: minecraft-bedrock-edition
---

# Creating a Loot Table

Loot tables are excellent tools, and creating your own is a big step on your journey as a creator! Following along with the instructions and examples here will help you to learn the process of creating a loot table and get you one step closer to creating the Minecraft world of your dreams.

### Requirements

It's recommended that the following be completed before beginning this tutorial.

- [Introduction to Loot Tables](IntroductionToLootTables.md)
- [Loot and Trade Table Functions](LootAndTradeTableFunctions.md)
- [Loot Overloads](LootOverloads.md)
- [Introduction to Behavior Packs](BehaviorPack.md)

## Basic Loot Table

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

As you can see, we defined a single pool that rolls one time and contains a single diamond on every roll. If you combined this with the [minecraft:loot](../Reference/Content/EntityReference/Examples/EntityProperties/minecraftProperty_loot.md) component inside an entity's behavior file, the entity would drop that diamond on death.

Now, let's get a little more complicated... what if you wanted to choose from two items? What if we wanted to return a diamond or a piece of coal?

That would be achieved by adding a second value to the `entries` object.

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

What you'll notice here is a diamond is just as likely to drop as a piece of coal. All `entries` have a `weight` assigned to them. If you don't specify the weight it will default to `1` giving all `entries` an equal chance of being rolled. In order to adjust that, we'll need to define the `weight` value ourselves.

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
                    "weight": 7
                }
            ]
        }
    ]
}
```

The best way to understand how `weight` affects the roll is to imagine the example doesn't have two entries — it has eight: Seven chances for coal and one chance for diamond. This means it's seven times more likely for the roll to result in coal instead of a diamond.

Additionally, you can randomize the number of times a set of `entries` are rolled. The `rolls` key can be set with a `min` and `max` value that the game will choose within randomly.

```json
{
    "pools": [
        {
            "rolls": {
                "min": 1,
                "max": 3
            },
            "entries": [
                {
                    "type": "item",
                    "name": "minecraft:diamond",
                    "weight": 1
                },
                {
                    "type": "item",
                    "name": "minecraft:coal",
                    "weight": 7
                }
            ]
        }
    ]
}
```

In this example, the game will roll the entries one to three times, resulting in a minimum of one item and a maximum of three every time this loot table is called.

Here's another example using a loot table as one of the entries. This will cause the game to call the other loot table and return whatever that results in.

```json
{
    "pools": [
        {
            "rolls": {
                "min": 1,
                "max": 3
            },
            "entries": [
                {
                    "type": "item",
                    "name": "minecraft:diamond",
                    "weight": 1
                },
                {
                    "type": "item",
                    "name": "minecraft:coal",
                    "weight": 7
                },
                {
                    "type": "loot_table",
                    "name": "loot_tables/custom/some_loot_table",
                    "weight": 1
                }
            ]
        }
    ]
}
```

Be aware that loot tables cannot refer to itself in any way. If a roll results in a recursive loot table, nothing will be returned.

And there you have it! At this point you should be familiar with loot tables, conditions, functions, and overloads. Add to that the examples of loot tables found here, and you now possess all the tools necessary to begin creating your own loot and trade tables for you custom experience!
