---
author: mammerla
ms.author: mikeam
title: "Loot Tables Documentation - minecraft:loot_condition"
description: "Describes the minecraft:loot_condition loot table component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Loot Tables Documentation - minecraft:loot_condition

Defines a condition that must be met for a loot table entry or function to apply.


## Loot Condition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance | *not set* | Decimal number | For 'random_chance' and 'random_chance_with_looting': the base probability (0.0-1.0). |  | 
| condition | *not set* | String | The condition type. Common values: 'killed_by_player', 'killed_by_player_or_pets', 'random_chance', 'random_chance_with_looting', 'has_mark_variant', 'has_variant', 'entity_properties', 'match_tool', 'random_difficulty_chance'. |  | 
| default_chance | *not set* | Decimal number | For 'random_difficulty_chance': default probability if difficulty not matched. |  | 
| easy | *not set* | Decimal number | For 'random_difficulty_chance': probability on easy difficulty. |  | 
| entity | *not set* | String | For 'entity_properties': which entity to check ('this', 'attacker', or 'attacking_player'). |  | 
| hard | *not set* | Decimal number | For 'random_difficulty_chance': probability on hard difficulty. |  | 
| looting_multiplier | *not set* | Decimal number | For 'random_chance_with_looting': additional chance per looting level. |  | 
| match_tool | *not set* | [Match Tool](#match-tool) item | For 'match_tool': the tool item properties to match. |  | 
| normal | *not set* | Decimal number | For 'random_difficulty_chance': probability on normal difficulty. |  | 
| peaceful | *not set* | Decimal number | For 'random_difficulty_chance': probability on peaceful difficulty. |  | 
| properties | *not set* | [Properties](#properties) item | For 'entity_properties': the entity properties to match. |  | 
| value | *not set* | Integer number | For 'has_mark_variant' or 'has_variant': the variant value to match. |  | 

## Match Tool

#### Tool Match Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| enchantments | *not set* | Array of [Enchantments](#enchantments) items |  |  | 
| item | *not set* | String |  |  | 

## Enchantments

#### Tool Enchant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| enchantment | *not set* | String |  |  | 
| levels | *not set* | [Levels](#levels) item |  |  | 

## Levels

#### Enchant Levels Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| min | *not set* | Integer number |  |  | 

## Properties

#### Entity Props Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| on_fire | *not set* | Boolean true/false |  |  | 
| on_ground | *not set* | Boolean true/false |  |  | 