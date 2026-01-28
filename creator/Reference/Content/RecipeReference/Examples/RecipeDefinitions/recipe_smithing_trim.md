---
author: mammerla
ms.author: mikeam
title: "Recipes Documentation - minecraft:recipe_smithing_trim"
description: "Describes the minecraft:recipe_smithing_trim recipe definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Recipes Documentation - minecraft:recipe_smithing_trim

A smithing table armor trim recipe for Minecraft Bedrock Edition. Smithing trim recipes define how armor items are decorated with trim patterns using trim templates and materials.

> [!Note]
> This item requires a format version of at least 1.20.0.


## Smithing Trim Recipe Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version | The format version of this recipe file. |  | 
| minecraft:recipe_smithing_trim | *not set* | [Recipe Smithing Trim](#recipe-smithing-trim) item | The smithing trim recipe definition container. |  | 

## Recipe Smithing Trim

#### Recipe Smithing Trim Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| addition | *not set* | [Addition](#addition) item | The trim material or tag to apply. |  | 
| addition (Alternate 1) | *not set* | String | A simple string item identifier. |  | 
| base | *not set* | [Base](#base) item | The base armor item or tag to be trimmed. |  | 
| base (Alternate 1) | *not set* | String | A simple string item identifier. |  | 
| description | *not set* | [Description](#description) item | The recipe description containing identifier. |  | 
| tags | *not set* | Array of strings | Tags that specify this is a smithing_table recipe. |  | 
| template | *not set* | [Template](#template) item | The trim template item or tag. |  | 
| template (Alternate 1) | *not set* | String | A simple string item identifier. |  | 

## Addition

#### Addition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| item | *not set* | String | A specific item identifier for the addition. |  | 
| tag | *not set* | String | An item tag for the addition (e.g., 'minecraft:trim_materials'). |  | 

## Base

#### Base Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| item | *not set* | String | A specific item identifier for the base. |  | 
| tag | *not set* | String | An item tag for the base (e.g., 'minecraft:trimmable_armors'). |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The unique identifier for this recipe. |  | 

## Template

#### Template Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| item | *not set* | String | A specific item identifier for the template. |  | 
| tag | *not set* | String | An item tag for the template (e.g., 'minecraft:trim_templates'). |  | 

## Samples

#### [Armor Trim](armor_trim)


```json
{
  "format_version": "1.12",
  "minecraft:recipe_smithing_trim": {
    "description": {
      "identifier": "minecraft:smithing_armor_trim"
    },
    "tags": [
      "smithing_table"
    ],
    "template": {
      "tag": "minecraft:trim_templates"
    },
    "base": {
      "tag": "minecraft:trimmable_armors"
    },
    "addition": {
      "tag": "minecraft:trim_materials"
    }
  }
}
```
