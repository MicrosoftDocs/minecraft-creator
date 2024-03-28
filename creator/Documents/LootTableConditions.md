---
author: JimSeaman42
ms.author: mikeam
title: Loot and Trade Table Conditions
description: "A guide to the sse of loot table conditions"
ms.service: minecraft-bedrock-edition
---

# Loot Table Conditions

Conditions are a list of requirements that must be met before a pool can be used or an individual entry can be selected. All conditions are stored within the conditions list, and each condition runs one at a time. If any one condition in the list fails, the remaining conditions in said list will be ignored.

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

### has_variant

`has_variant` specifies that there are different variations for the loot.

Example:

```json
 "conditions": [
        {
          "condition": "has_variant",
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
The predicates used are: count, durability, enchantments, and item.

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

You can also apply conditions to specific `entries` within the roll. The following example will only return diamond 50% of the time if the entity that called it was killed by the player. All other times it's called, it will return coal.

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

Exploring the different [functions](LootAndTradeTableFunctions.md) available can allow creators to really customize the player experience. Name items and give them lore, drop resource crates full of supplies, and even create written books for instructions or information. The possibilities truly are staggering!
