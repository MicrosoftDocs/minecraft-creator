---
author: mammerla
ms.author: mikeam
title: "Recipes Documentation - minecraft:recipe_smithing_transform"
description: "Describes the minecraft:recipe_smithing_transform recipe definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Recipes Documentation - minecraft:recipe_smithing_transform

A smithing table transformation recipe for Minecraft Bedrock Edition. Smithing transform recipes define how items are upgraded using a smithing template, base item, and addition material.

> [!Note]
> This item requires a format version of at least 1.20.0.


## Smithing Transform Recipe Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version | The format version of this recipe file. |  | 
| minecraft:recipe_smithing_transform | *not set* | [Recipe Smithing Transform](#recipe-smithing-transform) item | The smithing transform recipe definition container. |  | 

## Recipe Smithing Transform

#### Recipe Smithing Transform Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| addition | *not set* | String | The addition material (e.g., 'minecraft:netherite_ingot'). |  | 
| base | *not set* | String | The base item to be transformed (e.g., 'minecraft:diamond_axe'). |  | 
| description | *not set* | [Description](#description) item | The recipe description containing identifier. |  | 
| result | *not set* | String | The resulting transformed item. |  | 
| tags | *not set* | Array of strings | Tags that specify this is a smithing_table recipe. |  | 
| template | *not set* | String | The smithing template item (e.g., 'minecraft:netherite_upgrade_smithing_template'). |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The unique identifier for this recipe. |  | 

## Samples

#### [Netherite](netherite)


```json
{
  "format_version": "1.12",
  "minecraft:recipe_smithing_transform": {
    "description": {
      "identifier": "minecraft:smithing_netherite_axe"
    },
    "tags": [
      "smithing_table"
    ],
    "template": "minecraft:netherite_upgrade_smithing_template",
    "base": "minecraft:diamond_axe",
    "addition": "minecraft:netherite_ingot",
    "result": "minecraft:netherite_axe"
  }
}
```
