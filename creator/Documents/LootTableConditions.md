---
author: iconicNurdle
ms.author: mikeam
title: Loot and Trade Table Conditions
description: "A guide to the use of loot table conditions"
ms.service: minecraft-bedrock-edition
ms-date: 04/29/2025
---

# Loot Table Conditions

Conditions are a list of requirements that must be met before a pool can be used or an individual entry can be selected. All conditions are stored within the `conditions` list, and each condition runs one at a time. If any one condition in the list fails, the remaining conditions in the list will be ignored.

### has_mark_variant

`has_mark_variant` specifies that there are different variations for the loot.

An example of this are the marked variants for which suspicious stew you might get from a mooshroom.

Example:

```json
{
  "conditions": [
    {
      "condition": "has_mark_variant",
      "value": 7
    }
  ],
  "rolls": 1,
  "entries": [
    {
      "type": "item",
      "name": "minecraft:suspicious_stew",
      "weight": 1,
      "functions": [
        {
          "function": "set_data",
          "data": 7
        }
      ]
    }
  ]
}
```

### has_variant

`has_variant` specifies that there are different variations for the loot.

An example of this is when a frog kills a magma cube and drops either a verdant, ochre, or pearlescent froglight. 

Example:

```json
{
  "rolls": 1,
  "entries": [
    {
      "type": "item",
      "name": "minecraft:pearlescent_froglight",
       "weight": 1
     }
   ],
   "conditions": [
     {
       "condition": "has_variant",
       "value": 2
     },
     {
       "condition": "entity_killed",
       "entity_type": "minecraft:magma_cube"
     }
   ]
}
```

### killed_by_player_or_pets

The `killed_by_player_or_pets`condition can supply another way to customize a loot drop, depending on how the entity was killed. For example, if you make your pet wolf takes down a drowned zombie for you, then that entity's loot table takes that into consideration.

Example:

```json
 "conditions": [
    {
      "condition": "killed_by_player_or_pets"
    },
 ]
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

The `random_chance_with_looting` condition is similar to the `random_chance` condition, but also includes a multiplier value.

The **looting** enchantment results in more dropped items from entities, like getting two or more raw chickens when you kill one chicken.

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
]
```

### random_difficulty_chance

`random_difficulty_chance` is a condition that can control loot drops depending on the difficulty level.

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

`random_regional_difficulty_chance` determines loot probability according to the region.

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

`match_tool` checks whether the tool (or weapon/item the player is using) used to make the loot drop matches the modifier conditions provided.

The predicates used are: count, durability, enchantments, and item. `match_tool` also supports matching by item tag (including custom tags), which can be achieved using any combination of: `minecraft:match_tool_filter_any`, `minecraft:match_tool_filter_all`, and `minecraft:match_tool_filter_none`.

>- **count:** amount of the item
>   - range_max: the maximum value
>   - range_min: the minimum value
>- **durability:** the durability of the item
>   - range_max: the maximum value
>   - range_min: the minimum value
>- **enchantments:** list of enchantments
>   - enchantment: an enchantment ID
>   - levels: the level of the enchantment
>   - range_max: the maximum value
>   - range_min: the minimum value
>- **item:** an item ID  
>- **minecraft:match_tool_filter_any\:** list of item tags
>- **minecraft:match_tool_filter_all\:** list of item tags
>- **minecraft:match_tool_filter_none\:** list of item tags

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

Example 2 (Item tags):
```json
"conditions": [  
            {
              "condition": "match_tool",
              "minecraft:match_tool_filter_any": [
                "minecraft:iron_tier",
                "minecraft:golden_tier",
                "minecraft:diamond_tier"
              ],
              "minecraft:match_tool_filter_all": [
                "minecraft:is_tool"
              ],
              "minecraft:match_tool_filter_none": [
                "minecraft:is_shovel"
              ]
            }
          ]
```

This will match any tool that is iron, golden or diamond tier, except for shovels.

### Pool conditions

Applying a condition to a pool allows you execute the entire pool based on the conditions defined.

The below example will only trigger if the entity calling it was killed by a skeleton resulting in either a diamond or piece of coal.

```json
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
```

### Entry conditions

You can also apply conditions to specific `entries` within the roll. The following example will only return a diamond 50% of the time if the entity that called it was killed by the player. All other times it's called, it will return coal.

```json
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
```

Exploring the different [loot and trade table functions](LootAndTradeTableFunctions.md) can allow creators to further customize the player experience. 

From naming items and giving them lore to dropping resource crates full of supplies, or even creating written books for instructions or information, the possibilities truly are staggering!
