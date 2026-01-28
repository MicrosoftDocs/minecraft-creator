---
author: mammerla
ms.author: mikeam
title: "Recipes Documentation - minecraft:recipe_brewing_mix"
description: "Describes the minecraft:recipe_brewing_mix recipe definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Recipes Documentation - minecraft:recipe_brewing_mix

A brewing recipe for Minecraft Bedrock Edition. Brewing recipes define how potions are created by combining a base potion with a reagent in a brewing stand.


## Brewing Mix Recipe Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version | The format version of this recipe file. |  | 
| minecraft:recipe_brewing_mix | *not set* | [Recipe Brewing Mix](#recipe-brewing-mix) item | The brewing mix recipe definition container. |  | 

## Recipe Brewing Mix

#### Recipe Brewing Mix Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item | The recipe description containing identifier. |  | 
| input | *not set* | String | The input potion type (e.g., 'minecraft:potion_type:awkward'). |  | 
| output | *not set* | String | The output potion type (e.g., 'minecraft:potion_type:strength'). |  | 
| reagent | *not set* | String | The reagent item that modifies the potion (e.g., 'minecraft:blaze_powder'). |  | 
| tags | *not set* | Array of strings | Tags that specify this is a brewing_stand recipe. |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The unique identifier for this recipe. |  | 

## Samples

#### [Strength](strength)


```json
{
  "format_version": "1.12",
  "minecraft:recipe_brewing_mix": {
    "description": {
      "identifier": "minecraft:brew_awkward_blaze_powder"
    },
    "tags": [
      "brewing_stand"
    ],
    "input": "minecraft:potion_type:awkward",
    "reagent": "minecraft:blaze_powder",
    "output": "minecraft:potion_type:strength"
  }
}
```
