---
author: neonerz
ms.author: v-JDHeaden
title: Introduction to Loot Tables
ms.prod: gaming
description: "An overview covering what Loot Tables are and how they are used in Minecraft: Bedrock Edition"
---

# Introduction to Loot Tables

Loot tables are JSON formatted files used to define how items are generated in-game. They can be used to generate the contents of chests, define what items an entity drops upon death, or even what items an entity is equipped with. In some instances, it’s even used in gameplay mechanics such as milking a mooshroom or fishing.

:::image type="content" source="Media/IntroToLootTables/Loot-and-Trading-Tables.jpg" alt-text="Image showing Alex opening a chest to show loot.":::

Loot table files live in the root directory of a behavior pack and they generally consist of three main sections known as a “pool.”

- **Rolls**
    - How many times this pool will be rolled to select an entry. This could be either an integer which will make it a set amount of rolls or a min/max range the number of rolls can be chosen from.
- **Conditions** (optional) [more info](#conditions)
    - These are the conditions that must be met for this pool to be rolled.
- **Entries**
    - This is a list of objects the game will select from in this roll. It can be an `item`, a `loot_table`, or `empty` if you want a chance of nothing happening this roll.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - How to use JSON to define a loot table.
> - How to apply functions to entries to modify the selected item.
> - How to use conditions to further restrict when a pool or entry is selected.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Introduction to Behavior Packs](BehaviorPack.md)

## Basic usage

First, let’s create a loot table that returns a single diamond when it’s called.

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

As you can see, we defined a single pool that rolls only once and contains a single diamond on every roll. If you were to combine this with the [minecraft:loot](../Reference/Content/EntityReference/Examples/EntityProperties/minecraftProperty_loot.md) component inside an entity's behavior file, it would drop that diamond on death.

Now, what if you wanted to choose from two items? What if we wanted to return a diamond or a piece of coal? That would be achieved by adding a second value to the `entries` object.

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

What you’ll notice here is now a diamond is just as likely to drop as a piece of coal. All `entries` have a `weight` assigned to them. If you don’t specify one, it will default to `1` giving all `entries` an equal chance of being rolled. In order to adjust that, we’ll need to define the `weight` value ourselves.

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

The best way to understand how `weight` affects the roll is to imagine the above example doesn’t have two entries — it has eight: Seven chances for coal and one chance for diamond. That means it’s seven times more likely for the roll to result in a piece of coal instead of a diamond.

Even though the `quality` modifier from Java Edition (which adjusts the `weight` based on the player's Luck attribute) exists in Bedrock Edition’s vanilla files, Bedrock Edition doesn’t currently support the Luck attribute, which removes any usefulness from this feature.

You can also randomize the amount of times a set of `entries` are rolled. The `rolls` key can be set with a `min` and `max` value that the game will choose randomly from.

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

The above will cause the game to roll the entries one to three times. This results in a minimum of one item and a maximum of three every time this loot table is called.

Here’s another example using a loot table as one of the entries. This will cause the game to call the other loot table and return whatever that results in.

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

## Functions and modifying items

Functions are optional operations that can be added to an entry that modifies an item. It could allow you to define how many of an item is returned, modify that item’s attributes, or any number of other operations. In this article, we’ll cover some of the more common uses of functions, but you could get an in-depth explanation of all available functions in the [Loot and Trade Table Functions tutorial](LootAndTradeTableFunctions.md).

### random_dye

This function affects the colors of the random leather items supplied by a leather worker.

Example:

```json
"gives": [
           {
            "item": "minecraft:leather_helmet",
            "quantity": 1,
            "functions": [
                {
                    "function": "random_dye"
                }
              ]
            }
]

```

### set_count

This allows you to set a minimum and maximum quantity of items returned with this entry:

```json
                {
                    "type": "item",
                    "name": "minecraft:diamond",
                    "weight": 1,
                    "functions": [
                        {
                          "function": "set_count",
                          "count": {
                            "min": 1,
                            "max": 6
                          }
                        }
                    ]
                }
```

The above example will return one to six diamonds whenever that entry is rolled.

### set_data

This sets the data value of an item. It’s useful for things like returning a specific potion or specific color of dye. It also allows you to return different block values, like a specific color of wool or certain log type.

```json
                {
                    "type": "item",
                    "name": "minecraft:potion",
                    "weight": 1,
                    "functions": [
                      {
                        "function": "set_data",
                        "data": 21
                      }
                    ]
                }
```

The above example will return a Potion of Healing.

```json
                {
                    "type": "item",
                    "name": "minecraft:wool",
                    "weight": 1,
                    "functions": [
                      {
                        "function": "set_data",
                        "data": 1
                      }
                    ]
                }
```

This example would return an orange wool.

### specific_enchants

This function allows you to set a list of specific enchantments on an item. This allows you to apply enchantments to items that wouldn't normally be enchantable in game.

```json
                {
                    "type": "item",
                    "name": "minecraft:stick",
                    "weight": 1,
                    "functions": [
                        {
                          "function": "specific_enchants",
                          "enchants": [
                             "knockback",
                             "fire_aspect"
                          ]
                        }
                    ]
                }
```

You can define the enchantments as objects to also define an enchantment level. Max enchantment levels are hard coded and can't be overwritten.

```json
                {
                    "type": "item",
                    "name": "minecraft:stick",
                    "weight": 1,
                    "functions": [
                        {
                          "function": "specific_enchants",
                          "enchants": [
                             {
                                "id": "knockback",
                                "level": 1
                             },
                             {
                                "id": "unbreaking",
                                "level": 3
                             }
                          ]
                        }
                    ]
                }
```

### trader_material_type

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

### Multiple functions

Multiple functions can be defined. Here’s an example of combining two functions together. In this example, this entry will return between one and three Potions of Healing.

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

Multiple functions can even be multiple of the same function, but if there’s a conflict between those functions, the last to be defined will win.

For example, using multiple `set_count` functions, like with the example below, will result in only the last of the duplicates being used, causing the item to have a count between 5 and 7 rather than between 1 and 3.

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

## Conditions

Conditions are a list of requirements that must be met before either a pool can be used or an individual entry can be selected. All conditions are stored within the conditions list. Each condition runs one at a time. If any one condition in the list fails, the remainder in the same list will be ignored.

### entity_properties

`entity_properties` applies the given properties to the returned loot.

Example:

```json

"conditions": [
                {
                    "condition": "entity_properties",
                    "entity": "this",
                    "properties": {
                        "on_fire": true
                     }
                }
               ]

```

### has_mark_variant

`has_mark_variant` specifies that there are different variations for the loot.

Example:

```json
 "conditions": [
        {
          "condition": "has_mark_variant",
          "value": 0
        }
      ]

```

### killed_by_player_or_pets

The `killed_by_player_or_pets`condition can supply another way to customize a loot drop, depending on how the entity was killed. 

Example:

```json
 "conditions": [
        {
         "condition": "killed_by_player_or_pets"
         },

```

### random_chance

`random_chance` is a condition that applies a given value to the chances that loot will drop.

Example:

```json
"conditions": [
    {
        "condition": "random_chance",
        "chance": 0.2
    }
]

```


### random_chance_with_looting

The `random_chance_with_looting` condition is similar to the `random_chance` condition, but it also supplies a multiplier value.

Example:

```json
"conditions": [
    {
        "condition": "killed_by_player"
    },
    {
        "condition": "random_chance_with_looting",
        "chance": 0.11,
        "looting_multiplier": 0.02
    }
],

```

### random_difficulty_chance

`random_difficulty_chance` is a condition that can control loot drops according to a given difficulty level.

Example:

```json

"conditions": [
    {
        "condition": "random_difficulty_chance",
        "default_chance": 0.5,
        "peaceful": 0,
        "hard": 0.6
    }
],

```

### random_regional_difficulty_chance

The `random_regional_difficulty_chance` condition controls loot probability according to the region.

Example:

```json
"conditions": [
        {
          "condition": "random_regional_difficulty_chance",
          "max_chance": 0.15
        }
      ]

```

### match_tool

`match_tool` is a condition that checks whether the tool (or weapon or whatever item the player is using) used to make the loot drop matches the set of modifier conditions provided.
The predicates used are: count, durability, enchantments, and item.

>- **count:** amount of the item
>    * range_max: the maximum value
>    * range_min: the minimum value
>- **durability:** the durability of the item
>    * range_max: the maximum value
>    * range_min: the minimum value
>- **enchantments:** list of enchantments
>    * enchantment: an enchantment ID
>    * levels: the level of the enchantment
>    * range_max: the maximum value
>    * range_min: the minimum value
>- **item:** an item iID  

Example:

```json

"conditions": [  
            {  
              "condition": "match_tool",  
              "enchantments": [  
                {  
                  "enchantment": "sharpness",  
                  "levels": {  
                    "range_max": 6  
                  }  
                }  
              ],  
              "item": "minecraft:diamond_sword",  
              "count": 1,  
              "durability": {  
                "range_min": 1  
              }  
            }  
          ]  
```

### Pool conditions

Applying a condition to a pool allows you execute the entire pool based on the conditions defined.

The below example will only trigger if the entity calling it was killed by a skeleton resulting in either a diamond or piece of coal.

```json
{
    "pools": [
        {
            "conditions": [
                {
                    "condition": "killed_by_entity",
                    "entity_type": "minecraft:skeleton"
                }
            ],
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
                    "weight": 1
                }
            ]
        }
    ]
}
```

### Entry conditions

You can also apply conditions to specific `entries` within the roll. The following example will only return diamond 50% of the time if the entity that called it was killed by the player. All other times it’s called, it will return coal.

```json
{
    "pools": [
        {
            "rolls": 1,
            "entries": [
                {
                    "type": "item",
                    "name": "minecraft:diamond",
                    "weight": 1,
                    "conditions": [
                        {
                            "condition": "killed_by_player"
                        }
                    ]
                },
                {
                    "type": "item",
                    "name": "minecraft:coal",
                    "weight": 1
                }
            ]
        }
    ]
}
```

Exploring the different [functions](#functions-and-modifying-items) and [conditions](#conditions) available can allow you to really customize your player’s experience. You can name items and give them lore, drop resource crates full of supplies, and even create written books for instructions or information.

## What's Next?

There are plenty of other functions that can modify the selected item. The next tutorial will go over them.

> [!div class="nextstepaction"]
> [Loot and Trade Table Functions](LootandTradeTableFunctions.md)
