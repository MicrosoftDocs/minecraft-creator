---
author: mammerla
ms.author: mikeam
title: "Recipes Documentation - minecraft:recipe_shapeless"
description: "Describes the minecraft:recipe_shapeless recipe definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Recipes Documentation - minecraft:recipe_shapeless

A shapeless crafting recipe for Minecraft Bedrock Edition. Shapeless recipes allow ingredients to be placed in any order and position on the crafting grid, unlike shaped recipes that require specific patterns.


## Shapeless Recipe Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version | The format version of this recipe file. |  | 
| minecraft:recipe_shapeless | *not set* | [Recipe Shapeless](#recipe-shapeless) item | The shapeless recipe definition container. |  | 

## Recipe Shapeless

#### Recipe Shapeless Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item | The recipe description containing identifier. |  | 
| group | *not set* | String | An optional group identifier for recipe book organization. |  | 
| ingredients | *not set* | Array of [Ingredients](#ingredients) items | The list of ingredients required for the recipe. |  | 
| priority | *not set* | Integer number | Recipe priority for conflict resolution. |  | 
| result | *not set* | [Result](#result) item | The crafting result. |  | 
| result (Alternate 1) | *not set* | Array of objects | An array of crafting results. |  | 
| tags | *not set* | Array of strings | Tags that specify which crafting stations can use this recipe. |  | 
| unlock | *not set* | Array of [Unlock](#unlock) items | Conditions that must be met to unlock this recipe in the recipe book. |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The unique identifier for this recipe. |  | 

## Ingredients

#### Ingredients Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| count | *not set* | Integer number | The number of this ingredient required. |  | 
| item | *not set* | String | The item identifier. |  | 
| tag | *not set* | String | An item tag that matches multiple items. |  | 
| data | *not set* | Integer number | Deprecated - no longer in use. The item data/aux value for items with variants. This property no longer works after format versions of at least 1.20.0. |  | 

## Result

#### Result Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| count | *not set* | Integer number | The number of items produced. |  | 
| item | *not set* | String | The result item identifier. |  | 
| data | *not set* | Integer number | Deprecated - no longer in use. The result item data/aux value. This property no longer works after format versions of at least 1.20.0. |  | 

## Unlock

#### Unlock Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| context | *not set* | String | The context in which the recipe is unlocked (e.g., 'AlwaysUnlocked', 'PlayerInWater', 'PlayerHasManyItems', 'None'). |  | 
| item | *not set* | String | The item that must be obtained to unlock this recipe. |  | 

## Samples

#### [Andesite](andesite)


```json
{
  "format_version": "1.12",
  "minecraft:recipe_shapeless": {
    "description": {
      "identifier": "minecraft:andesite"
    },
    "tags": [
      "crafting_table"
    ],
    "ingredients": [
      {
        "item": "minecraft:stone",
        "data": 3
      },
      {
        "item": "minecraft:cobblestone"
      }
    ],
    "result": {
      "item": "minecraft:stone",
      "data": 5,
      "count": 2
    }
  }
}
```
