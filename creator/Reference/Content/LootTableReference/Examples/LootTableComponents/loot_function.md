---
author: mammerla
ms.author: mikeam
title: "Loot Tables Documentation - minecraft:loot_function"
description: "Describes the minecraft:loot_function loot table component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Loot Tables Documentation - minecraft:loot_function

Defines a function that modifies a loot table entry when selected.


## Loot Function Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| conditions | *not set* | Array of [Conditions](#loot-condition) items | Conditions that must be met for this function to apply. | 
| count (Count Range) | *not set* | [Count](#count) item | For 'set_count' and 'looting_enchant': the count value or range. | 
| count (as Integer number) | *not set* | Integer number |  | 
| damage | *not set* | [Damage](#damage) item | For 'set_damage': the damage percentage or range (0.0-1.0). | 
| data | *not set* | [Data](#data) item | For 'set_data': the data value or range to set. | 
| destination | *not set* | String | For 'exploration_map': the structure destination type. | 
| function | *not set* | String | The function type. | 
| id | *not set* | String | For 'set_actor_id': the entity identifier. | 
| levels | *not set* | [Levels](#levels) item | For 'enchant_with_levels': the enchantment level or range. | 
| treasure | *not set* | Boolean true/false | For 'enchant_randomly': whether to include treasure enchantments. | 

### function

The function type. Common values: 'set_count', 'set_data', 'set_damage', 'set_nbt', 'enchant_randomly', 'enchant_with_levels', 'looting_enchant', 'furnace_smelt', 'set_actor_id', 'set_book_contents', 'fill_container', 'exploration_map', 'set_banner_details', 'set_armor_trim'.


### Loot Condition
Defines a condition that must be met for a loot table entry or function to apply.


#### Loot Condition Properties

**JSON path:** `conditions`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| chance | *not set* | Decimal number | For 'random_chance' and 'random_chance_with_looting': the base probability (0.0-1.0). | 
| condition | *not set* | String | The condition type. | 
| default_chance | *not set* | Decimal number | For 'random_difficulty_chance': default probability if difficulty not matched. | 
| easy | *not set* | Decimal number | For 'random_difficulty_chance': probability on easy difficulty. | 
| entity | *not set* | String | For 'entity_properties': which entity to check ('this', 'attacker', or 'attacking_player'). | 
| hard | *not set* | Decimal number | For 'random_difficulty_chance': probability on hard difficulty. | 
| looting_multiplier | *not set* | Decimal number | For 'random_chance_with_looting': additional chance per looting level. | 
| match_tool | *not set* | [Match Tool](#match-tool) item | For 'match_tool': the tool item properties to match. | 
| normal | *not set* | Decimal number | For 'random_difficulty_chance': probability on normal difficulty. | 
| peaceful | *not set* | Decimal number | For 'random_difficulty_chance': probability on peaceful difficulty. | 
| properties | *not set* | [Properties](#properties) item | For 'entity_properties': the entity properties to match. | 
| value | *not set* | Integer number | For 'has_mark_variant' or 'has_variant': the variant value to match. | 

#### condition

The condition type. Common values: 'killed_by_player', 'killed_by_player_or_pets', 'random_chance', 'random_chance_with_looting', 'has_mark_variant', 'has_variant', 'entity_properties', 'match_tool', 'random_difficulty_chance'.


#### Match Tool

##### Tool Match Properties

**JSON path:** `conditions > match_tool`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| enchantments | *not set* | Array of [Enchantments](#enchantments) items |  | 
| item | *not set* | String |  | 

##### Enchantments

###### Tool Enchant Properties

**JSON path:** `conditions > match_tool > enchantments`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| enchantment | *not set* | String |  | 
| levels | *not set* | [Levels](#levels) item |  | 

###### Levels

###### Enchant Levels Properties

**JSON path:** `conditions > match_tool > enchantments > levels`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| min | *not set* | Integer number |  | 

#### Properties

##### Entity Props Properties

**JSON path:** `conditions > properties`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| on_fire | *not set* | Boolean true/false |  | 
| on_ground | *not set* | Boolean true/false |  | 

### Count

#### Count Range Properties

**JSON path:** `count`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | *not set* | Integer number |  | 
| min | *not set* | Integer number |  | 

### Damage

#### Damage Range Properties

**JSON path:** `damage`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | *not set* | Decimal number |  | 
| min | *not set* | Decimal number |  | 

### Data

Same structure as [Count](#count).
