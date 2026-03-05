---
author: mammerla
ms.author: mikeam
title: "Recipes Documentation - minecraft:recipe_shaped"
description: "Describes the minecraft:recipe_shaped recipe definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Recipes Documentation - minecraft:recipe_shaped

A shaped crafting recipe for Minecraft Bedrock Edition. Shaped recipes require ingredients to be placed in a specific pattern on the crafting grid.

> [!Note]
> The 'data' field for items is deprecated in versions 1.20.0 and later. Use flattened item identifiers instead.


## Shaped Recipe Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | Version | The format version of this recipe file. Common versions include '1.12' and '1.20.10'. | 
| minecraft:recipe_shaped | *not set* | [Recipe Shaped](#recipe-shaped) item | The shaped recipe definition container. | 

### Recipe Shaped

#### Recipe Shaped Properties

**JSON path:** `minecraft:recipe_shaped`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| assume_symmetry | *not set* | Boolean true/false | If true, the recipe pattern can be mirrored horizontally. | 
| description | *not set* | [Description](#description) item | The recipe description containing identifier. | 
| group | *not set* | String | An optional group identifier for recipe book organization. | 
| key | *not set* | Key/item pairs of [Key](#key) items | Maps pattern characters to item definitions. | 
| pattern | *not set* | Array of strings | The crafting pattern as an array of strings. Each string represents a row, and each character maps to a key. Use space for empty slots. | 
| priority | *not set* | Integer number | Recipe priority for conflict resolution. Lower values have higher priority. | 
| result | *not set* | [Result](#result) item | The crafting result. | 
| result (as Array of objects) | *not set* | Array of objects | An array of crafting results. | 
| tags | *not set* | Array of strings | Tags that specify which crafting stations can use this recipe (e.g., 'crafting_table', 'stonecutter'). | 
| unlock | *not set* | Array of [Unlock](#unlock) items | Conditions that must be met to unlock this recipe in the recipe book. | 

#### Description

##### Description Properties

**JSON path:** `minecraft:recipe_shaped > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | The unique identifier for this recipe (e.g., 'minecraft:anvil'). | 

#### Key

##### Key Properties

**JSON path:** `minecraft:recipe_shaped > key`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| [A-Za-z#] | *not set* | [](#) item | An item definition for a pattern character. | 

##### 

###### Item Properties

**JSON path:** `minecraft:recipe_shaped > key > [A-Za-z#]`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| item | *not set* | String | The item identifier. | 
| tag | *not set* | String | An item tag that matches multiple items (e.g., 'minecraft:planks'). | 
| data | *not set* | Integer number | Deprecated - no longer in use. The item data/aux value for items with variants. This property no longer works after format versions of at least 1.20.0. | 

#### Result

##### Result Properties

**JSON path:** `minecraft:recipe_shaped > result`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| count | *not set* | Integer number | The number of items produced. | 
| item | *not set* | String | The result item identifier. | 
| data | *not set* | Integer number | Deprecated - no longer in use. The result item data/aux value. This property no longer works after format versions of at least 1.20.0. | 

#### Unlock

##### Unlock Properties

**JSON path:** `minecraft:recipe_shaped > unlock`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| context | *not set* | String | The context in which the recipe is unlocked (e.g., 'AlwaysUnlocked', 'PlayerInWater', 'PlayerHasManyItems', 'None'). | 
| item | *not set* | String | The item that must be obtained to unlock this recipe. | 

## Samples

#### Anvil


```json
{
  "format_version": "1.12",
  "minecraft:recipe_shaped": {
    "description": {
      "identifier": "minecraft:anvil"
    },
    "tags": [
      "crafting_table"
    ],
    "pattern": [
      "III",
      " i ",
      "iii"
    ],
    "key": {
      "I": {
        "item": "minecraft:iron_block"
      },
      "i": {
        "item": "minecraft:iron_ingot"
      }
    },
    "result": {
      "item": "minecraft:anvil"
    }
  }
}
```
