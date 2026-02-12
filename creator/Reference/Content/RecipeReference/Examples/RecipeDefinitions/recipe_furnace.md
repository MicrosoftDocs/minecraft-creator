---
author: mammerla
ms.author: mikeam
title: "Recipes Documentation - minecraft:recipe_furnace"
description: "Describes the minecraft:recipe_furnace recipe definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Recipes Documentation - minecraft:recipe_furnace

A smelting/cooking recipe for Minecraft Bedrock Edition. Furnace recipes define input items that can be smelted in furnaces, smokers, blast furnaces, or campfires.


## Furnace Recipe Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version | The format version of this recipe file. |  | 
| minecraft:recipe_furnace | *not set* | [Recipe Furnace](#recipe-furnace) item | The furnace recipe definition container. |  | 

## Recipe Furnace

#### Recipe Furnace Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item | The recipe description containing identifier. |  | 
| input | *not set* | String | The input item. Can be a simple identifier or include data value (e.g., 'minecraft:wood:4'). |  | 
| output | *not set* | String | The output item identifier. |  | 
| tags | *not set* | Array of strings | Tags that specify which smelting stations can use this recipe (e.g., 'furnace', 'smoker', 'blast_furnace', 'campfire'). |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The unique identifier for this recipe. |  | 

## Samples

#### [Beef](beef)


```json
{
  "format_version": "1.12",
  "minecraft:recipe_furnace": {
    "description": {
      "identifier": "minecraft:furnace_beef"
    },
    "tags": [
      "furnace",
      "smoker",
      "campfire"
    ],
    "input": "minecraft:beef",
    "output": "minecraft:cooked_beef"
  }
}
```
